import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Tell Astro where to look for local markdown files
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    banner: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
