import Image from "next/image";

interface PostBodyProps {
  contentHtml: string;
}

export function PostBody({ contentHtml }: PostBodyProps) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}

interface PostImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function PostImage({ src, alt, caption }: PostImageProps) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="w-full h-auto"
        priority={false}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-neutral-500 font-mono">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="my-8 -mx-5 sm:mx-0">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className="w-full h-auto border border-[var(--color-border)]"
        priority
      />
    </div>
  );
}
