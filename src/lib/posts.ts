import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  epigraph?: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export function getPostList(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      coverImage: data.coverImage,
      epigraph: data.epigraph,
      readingTime: readingTime(content),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode, {
      theme: "nord",
      keepBackground: false,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary,
    tags: data.tags || [],
    coverImage: data.coverImage,
    epigraph: data.epigraph,
    readingTime: readingTime(content),
    contentHtml: result.toString(),
  };
}
