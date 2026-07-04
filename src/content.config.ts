import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    topic: z.enum(['cs', 'linguistics', 'personal-projects', 'other']),
    description: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    liveUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    status: z.enum(['active', 'shipped', 'archived']).default('shipped'),
  }),
});

export const collections = { essays, projects };
