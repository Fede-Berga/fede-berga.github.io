import { dois, orcid, withoutDoi } from '../data/publications';

export interface Publication {
	id: string;
	title: string;
	authors: string[];
	venue: string;
	year: number;
	doi?: string;
}

interface ExternalId {
	'external-id-type': string;
	'external-id-value': string;
	'external-id-relationship': string;
}

interface OrcidWorks {
	group: { 'external-ids': { 'external-id': ExternalId[] }; 'work-summary': { type: string }[] }[];
}

interface CrossrefWork {
	title: string[];
	author?: { given?: string; family?: string; name?: string }[];
	'container-title': string[];
	issued: { 'date-parts': number[][] };
}

const headers = {
	Accept: 'application/json',
	'User-Agent': 'fede-berga.github.io (https://fede-berga.github.io)',
};

// Rate limits (429) and server errors are retried with backoff before failing the build.
async function getJson<T>(url: string, attempts = 4): Promise<T> {
	for (let attempt = 1; ; attempt++) {
		const res = await fetch(url, { headers, signal: AbortSignal.timeout(20_000) });
		if (res.ok) return (await res.json()) as T;
		const retryable = res.status === 429 || res.status >= 500;
		if (!retryable || attempt === attempts) {
			throw new Error(`GET ${url} failed: ${res.status} ${res.statusText}`);
		}
		const retryAfter = Number(res.headers.get('Retry-After'));
		const delay = retryAfter > 0 ? retryAfter * 1000 : 1000 * 2 ** attempt;
		await new Promise((resolve) => setTimeout(resolve, delay));
	}
}

function cleanDoi(doi: string): string {
	return doi.trim().replace(/^(https?:\/\/(dx\.)?doi\.org\/|doi:)/i, '');
}

// The site lists peer-reviewed work only: preprints, datasets and software are skipped.
const publicationTypes = new Set(['journal-article', 'conference-paper', 'book-chapter', 'book']);

async function orcidDois(): Promise<string[]> {
	const works = await getJson<OrcidWorks>(`https://pub.orcid.org/v3.0/${orcid}/works`);
	return works.group
		.filter((group) => publicationTypes.has(group['work-summary'][0]?.type ?? ''))
		.flatMap((group) =>
			group['external-ids']['external-id']
				.filter((id) => id['external-id-type'] === 'doi' && id['external-id-relationship'] === 'self')
				.map((id) => cleanDoi(id['external-id-value'])),
		);
}

function formatAuthor({ given, family, name }: NonNullable<CrossrefWork['author']>[number]): string {
	if (!family) {
		if (!name) throw new Error('Crossref author has neither family name nor name');
		return name;
	}
	const initials = (given ?? '')
		.split(/\s+/)
		.filter(Boolean)
		.map((part) => `${part[0]}.`);
	return [...initials, family].join(' ');
}

async function fromCrossref(doi: string, venue?: string): Promise<Publication> {
	const { message } = await getJson<{ message: CrossrefWork }>(`https://api.crossref.org/works/${encodeURI(doi)}`);
	const title = message.title[0];
	const year = message.issued['date-parts'][0]?.[0];
	const resolvedVenue = venue ?? message['container-title'][0];
	if (!title || !year || !resolvedVenue) throw new Error(`Crossref record for ${doi} has no title, year or venue`);
	return {
		id: doi,
		title: title.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
		authors: (message.author ?? []).map(formatAuthor),
		venue: resolvedVenue,
		year,
		doi,
	};
}

export async function loadPublications(): Promise<Publication[]> {
	// DOIs are case-insensitive: dedupe on the lowercase form, keep the listed spelling.
	const works = new Map(dois.map((work) => [cleanDoi(work.doi).toLowerCase(), { ...work, doi: cleanDoi(work.doi) }]));
	for (const doi of await orcidDois()) {
		if (!works.has(doi.toLowerCase())) works.set(doi.toLowerCase(), { doi });
	}
	// One request at a time keeps within Crossref's public rate limit.
	const withDoi: Publication[] = [];
	for (const { doi, venue } of works.values()) withDoi.push(await fromCrossref(doi, venue));
	const local = withoutDoi.map((work) => ({
		id: work.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
		...work,
	}));
	return [...withDoi, ...local];
}
