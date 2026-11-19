# PurpleTheta website starter

A clean, content-first website built with Astro and deployed on GitHub Pages. This starter is designed so new blog articles can be added by creating Markdown files. Math pages, video listings and book listings are currently edited in their simple Astro page files (instructions below).

## First-time setup / publishing
1. Create a GitHub repository named `purpletheta-site` (or another name you prefer).
2. Upload the contents of this folder to the repository's `main` branch. Keep the `.github` folder.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. After the first workflow finishes, configure your custom domain `purpletheta.com` under Pages if needed. The `CNAME` file is already included.
5. At your domain provider, configure the DNS records recommended by GitHub Pages. Use GitHub's official custom-domain guide; DNS details depend on your registrar.
6. Before launch, replace the text logo with your logo, update contact details, review the privacy page, and add real video/book links.

## Local preview (optional)
If you are comfortable running commands, install Node.js LTS. From this folder run:

```sh
npm install
npm run dev
```
Open the local address shown in the terminal. To test the production build:

```sh
npm run build
npm run preview
```

## Add a blog article — no page design work
1. Create a new `.md` file in `src/content/blog/`, e.g. `my-new-article.md`.
2. Copy this frontmatter and write your article underneath:

```yaml
---
title: "Your article title"
description: "A short, useful summary for search results and previews."
category: "Science"
pubDate: 2026-11-19
---

Write your article here. Use Markdown headings, lists, links, images and bold text.
```
3. Commit and push to GitHub. The site rebuilds and deploys automatically. **Do not set `draft: true`** on articles you want published.

Supported categories can be any text (e.g. Mathematics, Science, Technology, Interesting Facts, Education); categories are displayed on the article.

## Add a Math chapter
Class 8 chapter list is currently in `src/pages/math/class-8/index.astro`. To add another chapter, duplicate one chapter object in the `chapters` array and change its `title`, `slug`, and `description`. Create a chapter page folder at `src/pages/math/class-8/chapters/your-slug/index.astro` by copying one of the chapter templates. Class 9 and Class 10 landing pages are ready to be filled.

## Add or update a YouTube video
Edit `src/pages/videos/index.astro`. Copy one object in the `videos` array, then update title, category, description and link/thumbnail when available. Video links are not yet populated in this starter.

## Add a book
Edit `src/pages/books/index.astro`. Add a book object with title, description and label. To publish purchase buttons, replace the placeholder label in the book card with your Google Play Books or Amazon URL. No cart or payment processing is included.

## Add logo / images
Replace the temporary text brand in `src/layouts/BaseLayout.astro` with your logo image (place the file in `public/images/`). You can add article images to `public/images/` and reference them from Markdown with `/images/your-image.jpg`.

## SEO already included
- Page title and meta description per page
- Canonical URL
- Open Graph basics
- Twitter card metadata
- Sitemap integration (`sitemap-index.xml` generated during build)
- `robots.txt`
- Semantic heading structure and responsive layout

This is a starter, not a guarantee of rankings. Add Search Console and submit the sitemap after the domain is live.

