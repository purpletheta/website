// Import helpers from Astro to define content collections and validate fields
import { defineCollection, z } from 'astro:content';
// Import the glob loader so Astro can automatically scan folders for .md files
import { glob } from 'astro/loaders';

// ==========================================================================
// 1. BLOG COLLECTION (Unchanged)
// ==========================================================================
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

// ==========================================================================
// 2. BOOKS COLLECTION (Includes Categories, Gallery, Buy Links & Book Specs)
// ==========================================================================
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),                        // Book title
    description: z.string(),                  // Short summary shown on cards & SEO

    // Main section on the /books/ page (e.g., "Math Education", "Story Books", "Facts Books", "Coloring Books")
    category: z.string().default('Math Education'),

    // Small tag above the title (e.g., "Class 8 Mathematics", "Ages 7–11 · Illustrated Story")
    label: z.string(),

    // Path to the main cover image inside public/images/books/<book-folder>/
    cover: z.string().optional(),

    // List of interior page images for the Amazon-style thumbnail viewer
    gallery: z.array(z.string()).default([]),

    // Optional Purchase / Read Links (Only buttons with links filled in will appear)
    amazonUrl: z.string().optional(),
    googlePlayUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    websiteLabel: z.string().default('Read on PurpleTheta'),

    // Compact "At a Glance" book details (shown just below the book intro)
    readingAge: z.string().optional(),        // e.g., "7 - 11 years"
    pages: z.union([z.string(), z.number()]).optional(), // e.g., "42" or "42 pages"
    format: z.string().optional(),            // e.g., "Ebook & Paperback"
    language: z.string().optional(),          // e.g., "English"
    dimensions: z.string().optional(),        // e.g., "6 x 9 inches"
    publishDate: z.string().optional(),       // e.g., "October 2026"

    order: z.number().default(1),             // Controls display order within a category (1, 2, 3...)
    draft: z.boolean().default(false),        // Set to true to hide an unfinished book
  }),
});

export const collections = { blog, books };
