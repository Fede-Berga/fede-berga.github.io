export const links = [
	{ label: 'GitHub', href: 'https://github.com/Fede-Berga' },
	{ label: 'ORCID', href: 'https://orcid.org/0009-0006-8503-1202' },
];

export const projects = [
	{
		name: 'sip',
		href: 'https://github.com/Fede-Berga/sip',
		summary: 'Correlates security events into severity-rated findings.',
		stack: ['Java 25', 'Spring Boot', 'Hexagonal architecture'],
	},
	{
		name: 'ktor-crud-rbac-demo',
		href: 'https://github.com/Fede-Berga/ktor-crud-rbac-demo',
		summary: 'REST API with JWT, role-based access control, Redis caching and rate limiting.',
		stack: ['Kotlin', 'Ktor', 'Prometheus', 'Grafana'],
	},
	{
		name: 'udp-tokio-stack',
		href: 'https://github.com/Fede-Berga/udp-tokio-stack',
		summary: 'Async UDP unicast, broadcast and multicast with a typed wire format.',
		stack: ['Rust', 'Tokio'],
	},
	{
		name: 'eco',
		href: 'https://github.com/Fede-Berga/eco',
		summary: 'Echolocation browser game: cellular-automata caves, raycast sound pings, a predator that hunts by ear.',
		stack: ['Vanilla JS'],
		demo: 'https://fede-berga.github.io/eco/',
	},
	{
		name: 'satellite_routing',
		href: 'https://github.com/Fede-Berga/satellite_routing',
		summary: 'MSc thesis code: simulation of SDN source routing for load balancing in an Iridium-like LEO constellation.',
		stack: ['Python', 'SimPy'],
	},
	{
		name: 'mise',
		href: 'https://github.com/Fede-Berga/mise',
		summary: 'Multi-tenant restaurant operations platform.',
		stack: ['FastAPI microservices', 'Next.js', 'Keycloak', 'NATS JetStream'],
	},
];

export const experience = [
	{
		when: '2026 –',
		role: 'PhD student, University of Luxembourg',
		current: true,
		detail:
			'SnT, Software Verification and Validation group. Project MORTAL: metamorphic security testing assisted by large language models.',
	},
	{
		when: 'Before',
		role: 'Research fellow, University of Milano-Bicocca',
		detail: 'ANTHEM, digital health: FHIR-based backends for remote patient monitoring.',
	},
	{
		when: '2024',
		role: 'Embedded software engineer',
		detail: 'Aerospace and defence.',
	},
	{
		when: 'Before',
		role: 'Computer science teacher',
		detail: 'Technical high school, Italy.',
	},
	{
		when: 'Education',
		role: 'BSc and MSc in Computer Science, University of Milano-Bicocca',
		detail: 'Both 110/110 cum laude.',
	},
];

export const teaching = [
	{ name: 'networking-lab', href: 'https://github.com/Fede-Berga/networking-lab' },
	{ name: 'php-guestbook', href: 'https://github.com/Fede-Berga/php-guestbook' },
];
