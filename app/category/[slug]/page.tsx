import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Clock } from "lucide-react";
import Image from "next/image";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readingTime: number;
  category: string;
}

interface CategoryData {
  slug: string;
  name: string;
  description: string;
  stories: Story[];
}

const getCategoryData = (slug: string): CategoryData | undefined => {
  const data: Record<string, CategoryData> = {
    folktales: {
      slug: "folktales",
      name: "Folktales",
      description:
        "Timeless oral traditions and stories passed down through generations, carrying the wisdom and culture of various African communities.",
      stories: [
        {
          id: "1",
          title: "The Tortoise and the Hare",
          excerpt:
            "A classic tale of wisdom over arrogance, where a slow and steady tortoise outpaces a boastful hare.",
          image: "/story-1.jpg",
          author: "Aesop Kakuchewe",
          readingTime: 5,
          category: "Folktales",
        },
        {
          id: "4",
          title: "The Spider and the Wisdom Pod",
          excerpt:
            "Anansi tries to collect all the world's wisdom in one place, only to learn a valuable lesson about sharing.",
          image: "/hero-bg.jpg",
          author: "West African Griot",
          readingTime: 8,
          category: "Folktales",
        },
      ],
    },
    poetry: {
      slug: "poetry",
      name: "Poetry",
      description:
        "Rhythmic expressions of the soul, capturing the emotions, struggles, and triumphs of the African experience in verse.",
      stories: [
        {
          id: "5",
          title: "Echoes of the Savannah",
          excerpt:
            "A lyrical journey through the changing landscapes and enduring spirits of the vast African plains.",
          image: "/featured-story.jpg",
          author: "Modern Oralist",
          readingTime: 4,
          category: "Poetry",
        },
      ],
    },
    mythology: {
      slug: "mythology",
      name: "Mythology",
      description:
        "Sacred tales of gods, spirits, and the origins of the world, exploring the spiritual dimensions of our heritage.",
      stories: [
        {
          id: "6",
          title: "The Breath of the Nile",
          excerpt:
            "An ancient Egyptian legend about the life-giving waters and the gods who watch over the river's flow.",
          image: "/story-1.jpg",
          author: "Egyptian Mythologist",
          readingTime: 12,
          category: "Mythology",
        },
      ],
    },
    legends: {
      slug: "legends",
      name: "Legends",
      description:
        "Epic stories of heroes, queens, and great migrations that shaped the history of the continent.",
      stories: [
        {
          id: "7",
          title: "The Lion Queen of Sene-Gambia",
          excerpt:
            "The heroic journey of a legendary leader who united fragmented tribes against a common threat.",
          image: "/hero-bg.jpg",
          author: "Southern African Oralist",
          readingTime: 15,
          category: "Legends",
        },
      ],
    },
  };

  return data[slug.toLowerCase()];
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryData(slug);

  if (!category) {
    return (
      <div className="flex flex-col items-center min-h-screen w-full bg-background font-serif">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Category Not Found</h1>
            <Link
              href="/"
              className="text-[#683d21] hover:underline font-sans uppercase text-xs tracking-widest font-bold"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background font-serif">
      <Navigation />

      <main className="w-full pb-30 max-w-6xl mt-14 px-4 md:px-8 py-10 border-x border-dashed border-gray-300 dark:border-[#faf7f0]/20 min-h-screen">
        <header className="mb-12 space-y-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-[#683d21] transition-colors mb-8"
          >
            <ChevronLeft size={14} /> <h3>Back to Library</h3>
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {category.name}
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl font-sans leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="pt-4 border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20" />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.stories.map((story) => (
            <Link
              key={story.id}
              href={`/story/${story.id}`}
              className="group flex flex-col h-full"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-muted/20">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 py-4 space-y-3 flex flex-col">
                <div className="space-y-2 flex-1">
                  <h2 className="text-xl font-bold group-hover:text-[#683d21] transition-colors leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-xs text-muted-foreground line-clamp-3 font-sans italic italic">
                    "{story.excerpt}"
                  </p>
                </div>

                <div className="pt-4 mt-auto space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-sans font-bold">
                    <span className="text-[#683d21]">{story.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground font-sans">
                    <Clock size={10} className="text-[#683d21]" />
                    <span>{story.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
