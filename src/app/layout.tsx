import type { Metadata } from "next";
import Link from "next/link";
import { jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "A2/5",
    template: "%s — A2/5",
  },
  description: "A personal blog about code, tools, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen flex flex-col">
        <header className="py-6">
          <div className="max-w-2xl mx-auto px-5 flex items-center justify-between">
            <Link href="/" className="logo-link">
              A2/5
            </Link>
            <nav className="flex gap-5 text-sm">
              <Link href="/">blog</Link>
              <Link href="/culprits">culprits</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-2xl mx-auto px-5 py-8 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
