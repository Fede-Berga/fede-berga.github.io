export const links = [
	{ label: 'GitHub', href: 'https://github.com/Fede-Berga' },
	{ label: 'ORCID', href: 'https://orcid.org/0009-0006-8503-1202' },
	{ label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=I-QEsHAAAAAJ' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/federico-bergamini-21b17a24b/' },
];

export interface Stop {
	when: string;
	role: string;
	place: string;
}

// Stations from Milano to Luxembourg. An array of stops is an interchange:
// roles that ran at the same time.
export const route: (Stop | Stop[])[] = [
	{ when: '2018–2021', role: 'BSc Computer Science', place: 'Milano-Bicocca' },
	{ when: '2021–2024', role: 'MSc Computer Science', place: 'Milano-Bicocca' },
	{ when: '2024', role: 'Embedded software engineer', place: 'Alten, Milan' },
	[
		{ when: 'Sep 2024–Apr 2026', role: 'Computer science teacher', place: 'High school, Monza' },
		{ when: 'Oct 2024–Feb 2026', role: 'Research fellow', place: 'Milano-Bicocca' },
	],
	{ when: 'Apr 2026–now', role: 'PhD student', place: 'University of Luxembourg' },
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
