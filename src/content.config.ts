// Import utilities from `astro:content`
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  postsCollection,
};
