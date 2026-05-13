import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About this blog and its author.",
};

export default function AboutPage() {
  return (
    <div className="prose">
      <h1>About</h1>

      <p>
        I&apos;m a developer who builds things for the terminal and the web.
        This blog is where I think out loud about code, tooling, and design.
      </p>

      <h2>This blog</h2>
      <p>
        No CMS. No database. Posts are Markdown files in a git repo, statically
        rendered at build time, and deployed to Vercel on push. The entire
        &quot;backend&quot; is <code>fs.readFileSync</code>.
      </p>

      <h2>Elsewhere</h2>
      <ul>
        <li>
          <a href="https://github.com">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com">Twitter / X</a>
        </li>
      </ul>

      <hr />

      <p className="text-[var(--color-muted)] text-sm">
        If you want to reach me, email works best. Replace this with your
        actual contact info.
      </p>
    </div>
  );
}
