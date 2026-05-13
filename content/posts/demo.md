---
title: "A2/5 Posting Guide"
date: "2026-05-13"
summary: "Everything you can do in a post — headings, code, images, lists, quotes, and more."
tags: ["demo", "guide"]
epigraph: "The best way to learn the format is to see it all in one place."
coverImage: "/images/posts/demo/hero.svg"
---

This post demonstrates every feature available when writing for A2/5. Use it as a reference.

## Text formatting

Regular paragraphs just flow naturally. You can make text **bold** or *italic* or even ***both***. Inline `code` renders in monospace with a subtle highlight.

## Links

Link to things like [this example](https://example.com). They show up in the accent color.

## Lists

Unordered:

- First item
- Second item
- Third item with some longer text that might wrap onto a second line depending on screen width

Ordered:

1. Step one
2. Step two
3. Step three

## Blockquotes

> Someone said something worth remembering, so you put it in a blockquote. It gets a left border and muted styling.

## Images

Inline images work with standard markdown syntax:

![A demo placeholder image](/images/posts/demo/inline.svg)

Hero/cover images are set via the `coverImage` field in frontmatter and appear at the top of the post.

## Code blocks

Code blocks get automatic syntax highlighting. Specify the language after the opening backticks.

TypeScript:

```typescript
interface Post {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

function getLatestPost(posts: Post[]): Post {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];
}
```

Python:

```python
from pathlib import Path
import frontmatter

def load_posts(directory: str) -> list[dict]:
    posts = []
    for path in Path(directory).glob("*.md"):
        post = frontmatter.load(path)
        posts.append({"slug": path.stem, **post.metadata})
    return sorted(posts, key=lambda p: p["date"], reverse=True)
```

Bash:

```bash
# publish a new post
echo "---
title: My New Post
date: $(date +%Y-%m-%d)
summary: A quick thought.
tags: [misc]
---

Write your post here." > content/posts/my-new-post.md

git add -A && git commit -m "new post" && git push
```

JSON:

```json
{
  "name": "a2-5-blog",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}
```

## Horizontal rules

Use three dashes to create a divider:

---

They separate sections cleanly.

## Combining everything

You can nest **bold text** inside a list:

- **Point one** — with some explanation
- **Point two** — with `inline code` mixed in
- **Point three** — and a [link](https://example.com) for good measure

> Even blockquotes can contain **bold**, *italic*, and `code`.

That's everything. Copy this post's source to see the raw markdown, or just start writing your own.
