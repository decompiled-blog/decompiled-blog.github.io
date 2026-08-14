import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pattern = '**/[^_]*.{md,mdx}';

const postSchema = z.object({ 
  title: z.string(),
  description: z.string().optional(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
  readingTime: z.number().optional(),
  draft: z.boolean().optional().default(false),
});

export const collections = {
  source: defineCollection({ 
    loader: glob({ pattern, base: "./src/content/source" }),
    schema: postSchema 
  }),

  notes:defineCollection({ 
    loader: glob({ pattern, base: "./src/content/notes" }),
    schema: postSchema 
  }),
}