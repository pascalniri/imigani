import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  const featuredStory = {
    id: "1",
    title: "The Tortoise and the Hare",
    excerpt:
      "A classic tale of a slow and steady tortoise who races against a fast and arrogant hare.",
    author: "Aesop",
    readingTime: 5,
    category: "Fable",
    coverImage: "/story-1.jpg",
  };
  return (
    <section>
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
          Featured
        </p>
        <Link href={`/story/${featuredStory.id}`} className="group">
          <div className="flex flex-col md:flex-row gap-5 p-4 border border-dashed rounded border-gray-300 dark:border-[#faf7f0]/20 hover:bg-muted/30 transition-colors">
            <Image
              src={featuredStory.coverImage}
              alt={`Cover for ${featuredStory.title}`}
              className="w-full md:w-40 h-40 object-cover rounded"
              width={100}
              height={100}
            />
            <div>
              <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {featuredStory.title}
              </h3>
              <p className="text-sm mb-3 leading-relaxed">
                {featuredStory.excerpt}
              </p>
              <p className="text-xs">
                {featuredStory.author} · {featuredStory.readingTime} min read ·{" "}
                {featuredStory.category}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
