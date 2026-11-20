// Import helpers from Astro to define content collections and validate fields (z = Zod)
import { defineCollection, z } from 'astro:content';
// Import the glob loader so Astro can automatically scan folders for .md files
import { glob } from 'astro/loaders';

// 1. Existing Blog Collection (untouched)
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('General'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 2. Updated Books Collection matching your exact book structure
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),                        // Book title
    description: z.string(),                  // Short description shown on cards & SEO
    label: z.string(),                        // Category badge (e.g., "Class 8 Mathematics")
    cover: z.string().optional(),             // Optional: If blank, shows the clean text placeholder cover!
    amazonUrl: z.string().optional(),         // Optional: Direct Amazon link
    googlePlayUrl: z.string().optional(),     // Optional: Direct Google Play Books link
    order: z.number().default(1),             // Controls which book appears first (1, 2, 3...)
    draft: z.boolean().default(false),        // Set to true to hide an unfinished book
  }),
});

// Export both collections so Astro recognizes getCollection('blog') and getCollection('books')
export const collections = { blog, books };
