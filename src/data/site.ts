export const links = [
	{ label: 'GitHub', href: 'https://github.com/Fede-Berga' },
	{ label: 'ORCID', href: 'https://orcid.org/0009-0006-8503-1202' },
	{ label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=I-QEsHAAAAAJ' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-bergamini-21b17a24b/' },
];

export interface Commit {
	hash: string;
	role: string;
	place: string;
	when: string;
	// On the side lane: a branch that forks from the commit below it and merges into the one above.
	side?: boolean;
}

// The career as `git log --graph --oneline`, newest first. Hashes are decorative.
export const log: Commit[] = [
	{ hash: 'e0f4d2a', role: 'PhD student', place: 'University of Luxembourg', when: 'Apr 2026–now' },
	{ hash: '9a7c6b1', role: 'Research fellow', place: 'Milano-Bicocca', when: 'Oct 2024–Feb 2026', side: true },
	{ hash: '5e9d3f8', role: 'Computer science teacher', place: 'High school, Monza', when: 'Sep 2024–Apr 2026' },
	{ hash: 'c41b0a7', role: 'Embedded software engineer', place: 'Alten, Milan', when: '2024' },
	{ hash: '8d04e71', role: 'MSc Computer Science', place: 'Milano-Bicocca', when: 'Oct 2021–Feb 2024' },
	{ hash: '3f1a9c2', role: 'BSc Computer Science', place: 'Milano-Bicocca', when: 'Oct 2018–Jul 2021' },
];

export const projects = [
	{
		name: 'sip',
		language: 'Java',
		href: 'https://github.com/Fede-Berga/sip',
		summary: 'Turns security events into severity-rated findings.',
	},
	{
		name: 'ktor-crud-rbac-demo',
		language: 'Kotlin',
		href: 'https://github.com/Fede-Berga/ktor-crud-rbac-demo',
		summary: 'REST API with JWT, role-based access control and Redis.',
	},
	{
		name: 'udp-tokio-stack',
		language: 'Rust',
		href: 'https://github.com/Fede-Berga/udp-tokio-stack',
		summary: 'Async UDP unicast, broadcast and multicast on Tokio.',
	},
	{
		name: 'eco',
		language: 'JavaScript',
		href: 'https://github.com/Fede-Berga/eco',
		summary: 'Echolocation game: find a dark cave’s exit by ear.',
		demo: 'https://fede-berga.github.io/eco/',
	},
	{
		name: 'satellite_routing',
		language: 'Python',
		href: 'https://github.com/Fede-Berga/satellite_routing',
		summary: 'MSc thesis: source routing in LEO satellite networks.',
	},
	{
		name: 'mise',
		language: 'Python',
		href: 'https://github.com/Fede-Berga/mise',
		summary: 'Multi-tenant restaurant platform on FastAPI microservices.',
	},
];

export const theses = [
	'From the FHIR therapeutic plan to execution on Android: a communication channel based on Camunda',
	'KOFFE: a Kotlin library for OAuth 2.0 authentication on Android applications',
];

export const classMaterial = [
	{ name: 'networking-lab', href: 'https://github.com/Fede-Berga/networking-lab' },
	{ name: 'php-guestbook', href: 'https://github.com/Fede-Berga/php-guestbook' },
];
