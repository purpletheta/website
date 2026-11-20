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

// 2. New Books Collection
const books = defineCollection({
  // Scan './src/content/books' for every Markdown (.md) book file
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  
  // Define the exact fields allowed at the top (frontmatter) of each book's .md file
  schema: z.object({
    title: z.string(),                        // Required: Book title (e.g., "Zero Space")
    subtitle: z.string().optional(),          // Optional: Tagline or subtitle
    description: z.string(),                  // Required: Short summary for cards & SEO
    coverImage: z.string(),                   // Required: Path in public/ (e.g., "/images/zero_space_cover.jpg")
    coverAlt: z.string().optional(),          // Optional: Accessibility description of the cover
    status: z.string().default('Available'),  // Optional: e.g., "Available", "Coming Soon", "Sample Free"
    ageGroup: z.string().optional(),          // Optional: e.g., "Ages 10+", "Class 8–10", "All Ages"
    pages: z.number().optional(),             // Optional: Number of pages
    buyUrl: z.string().optional(),            // Optional: Amazon / store purchase link
    sampleUrl: z.string().optional(),         // Optional: Link to a free sample PDF if you have one
    order: z.number().default(1),             // Optional: Controls display order on the Books page (1 shows first)
    draft: z.boolean().default(false),        // Optional: Set to true to hide an unfinished book from the live site
  }),
});

// Export both collections so Astro recognizes getCollection('blog') and getCollection('books')
export const collections = { blog, books };
