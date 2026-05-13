import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { HeroImage, PostBody } from "@/lib/components";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <header className="mb-10">
        <h1 className="mb-2">{post.title}</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <time className="text-sm text-[var(--color-muted)]">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.tags.length > 0 && (
            <>
              <span className="text-[var(--color-border)]">·</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[var(--color-accent)]"
                >
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>
      </header>

      {post.coverImage && (
        <HeroImage src={post.coverImage} alt={post.title} />
      )}

      <PostBody contentHtml={post.contentHtml} />
    </article>
  );
}
