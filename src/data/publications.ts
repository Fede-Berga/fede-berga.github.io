export const orcid = '0009-0006-8503-1202';

// Shown even before they are added to ORCID. `venue` replaces the full
// proceedings title that Crossref returns.
export const dois: { doi: string; venue?: string }[] = [
	{ doi: '10.5220/0015229900004088', venue: 'ICSOFT 2026' },
	{ doi: '10.3233/AISE250009', venue: 'Ambient Intelligence and Smart Environments' },
];

// ORCID works without a DOI are not picked up, so they are listed here.
export const withoutDoi: { title: string; authors: string[]; venue: string; year: number }[] = [
	{
		title: 'Smart Health Workflows: Integrating FHIR Standard with BPMN Process Models',
		authors: ['F. Bergamini', 'G. D. Gallo', 'D. Micucci'],
		venue: 'I-Cities 2025, Gaeta',
		year: 2025,
	},
];
