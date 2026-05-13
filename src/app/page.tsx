import Link from "next/link";
import { getPostList } from "@/lib/posts";

export default function Home() {
  const posts = getPostList();

  return (
    <div>
      <section className="mb-12">
        <h1>A2/5</h1>
        <p className="text-[var(--color-muted)]">
          Accidental conversations with residents, semi-residents, and the occasional guest of A2/5 about what they&apos;ve been tinkering with in the world of software, data science, literature, cinema, and much more.
        </p>
      </section>

      <section>
        <ul className="list-none !p-0 space-y-5">
          {posts.map((post) => (
            <li key={post.slug} className="pb-5 border-b border-[var(--color-border)] last:border-0">
              <Link href={`/blog/${post.slug}`} className="group !no-underline">
                <span className="text-[var(--color-heading)] font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </span>
                <span className="text-[var(--color-muted)] text-sm ml-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <p className="text-[var(--color-muted)] text-sm !mb-0 mt-1">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
