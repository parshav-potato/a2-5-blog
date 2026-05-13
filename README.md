# A2/5

Accidental conversations with residents, semi-residents, and the occasional guest of A2/5.

A markdown-powered blog built with Next.js. Posts live as `.md` files in the repo — publish by committing.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** — Nord color palette
- **Shiki** — syntax highlighting (nord theme)
- **JetBrains Mono** — code font via `next/font`
- Statically generated at build time (SSG)
- Zero-config **Vercel** deployment

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing a post

### 1. Create a markdown file

Add a new `.md` file in `content/posts/`:

```
content/posts/my-new-post.md
```

The filename becomes the URL slug: `/blog/my-new-post`.

### 2. Add frontmatter

Every post starts with YAML frontmatter between `---` fences:

```yaml
---
title: "My New Post"
date: "2026-05-13"
summary: "A one-line description shown on the homepage."
tags: ["topic", "another-topic"]
coverImage: "/images/posts/my-new-post/hero.jpg"
epigraph: "An optional opening quote."
---
```

**Required fields:**

| Field | Description |
|-------|-------------|
| `title` | Post title, shown as the heading and in the browser tab |
| `date` | Publication date in `YYYY-MM-DD` format. Posts are sorted newest-first |
| `summary` | One-liner shown on the homepage post list |

**Optional fields:**

| Field | Description |
|-------|-------------|
| `tags` | Array of tag strings, shown on the post page |
| `coverImage` | Path to a hero image displayed at the top of the post |
| `epigraph` | A short quote shown before the post body |

### 3. Write the body

Everything below the second `---` is standard Markdown:

```markdown
## Section heading

Regular paragraph text with **bold**, *italic*, and `inline code`.

- List items use dashes
- They render with – markers

> Blockquotes work like this.

Code blocks get syntax-highlighted automatically:

​```typescript
function greet(name: string) {
  console.log(`Hello, ${name}`);
}
​```

Inline images:

![Alt text](/images/posts/my-new-post/screenshot.png)
```

### 4. Add images (optional)

Store images in `public/images/posts/<slug>/`:

```
public/images/posts/my-new-post/
  hero.jpg        ← referenced by coverImage in frontmatter
  screenshot.png  ← referenced by ![alt](/images/posts/my-new-post/screenshot.png)
```

Images are optimized by `next/image` automatically.

### 5. Publish

```bash
git add content/posts/my-new-post.md public/images/posts/my-new-post/
git commit -m "new post: my new post"
git push
```

Vercel rebuilds automatically on push. Your post is live.

## Supported Markdown features

- **Headings** — `## h2` through `#### h4`
- **Bold / italic** — `**bold**` / `*italic*`
- **Links** — `[text](url)`
- **Images** — `![alt](src)`
- **Unordered lists** — `- item`
- **Ordered lists** — `1. item`
- **Blockquotes** — `> quote`
- **Horizontal rules** — `---`
- **Inline code** — `` `code` ``
- **Code blocks** — fenced with triple backticks + language tag
- **Syntax highlighting** — automatic for all major languages (TypeScript, JavaScript, Python, Rust, Go, Bash, etc.)

## Project structure

```
content/
  posts/              ← blog posts as .md files
public/
  images/posts/       ← post images, organized by slug
src/
  app/
    page.tsx           ← homepage (post list)
    layout.tsx         ← site layout (nav, footer)
    globals.css        ← Nord theme styles
    blog/[slug]/
      page.tsx         ← individual post page
    about/
      page.tsx         ← about page
  lib/
    posts.ts           ← reads + parses markdown files
    fonts.ts           ← font configuration
    components.tsx     ← image components
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Deploy — no configuration needed

Every `git push` triggers a rebuild.
