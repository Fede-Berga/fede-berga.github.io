import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { loadPublications } from './lib/publications';

const publications = defineCollection({
	loader: loadPublications,
	schema: z.object({
		title: z.string(),
		authors: z.array(z.string()),
		venue: z.string(),
		year: z.number().int(),
		doi: z.string().optional(),
	}),
});

export const collections = { publications };
