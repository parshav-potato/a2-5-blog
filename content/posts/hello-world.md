---
title: "Hello World"
date: "2026-05-10"
summary: "First post. Why I built this blog, and what I plan to write about."
tags: ["meta", "blogging"]
epigraph: "The tools we use shape the thoughts we think."
coverImage: "/images/posts/hello-world/hero.svg"
---

This is the first post on my blog. I built it because I wanted a place to think out loud — somewhere between a notebook and a conversation.

## Why a blog in 2026?

Everyone has a take on whether blogs still matter. I don't care about that debate. I want a place to:

- Work through ideas by writing them down
- Document things I've learned (mostly for future me)
- Share code and approaches that might save someone else time

## The stack

This blog is intentionally simple:

```typescript
// the entire "backend" is reading markdown files from disk
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts() {
  const dir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf-8");
      const { data } = matter(raw);
      return { slug: f.replace(".md", ""), ...data };
    });
}
```

No database. No CMS. No API routes. Just markdown files in a git repo, statically rendered at build time and deployed to Vercel.

## What's next

I'll write about whatever I'm working on. Probably a mix of:

- Systems design and architecture
- CLI tools and developer experience
- The occasional hot take

![A screenshot of the blog running locally](/images/posts/hello-world/screenshot.svg)

That's it. Short and honest. See you in the next one.
