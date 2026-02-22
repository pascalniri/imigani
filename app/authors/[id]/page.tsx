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
  readingTime: number;
  category: string;
}

interface Author {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  background: string[];
  avatar?: string;
  stories: Story[];
}

// Mock data fetcher - in a real app this would be an API call
const getAuthor = (id: string): Author | undefined => {
  const authors: Record<string, Author> = {
    aesop: {
      id: "aesop",
      name: "Aesop Kakuchewe",
      specialty: "Ancient Greek Fables",
      bio: "An ancient Greek storyteller credited with a number of fables now collectively known as Aesop's Fables.",
      background: [
        "Aesop was a storyteller who lived in ancient Greece between 620 and 564 BCE. Traditionally, he is said to have been a slave who by his cleverness won his freedom and became an advisor to kings and city-states.",
        "His fables, which often feature animal characters who speak and act with human emotions and faults, have been passed down through the centuries as tools for teaching moral lessons and universal truths.",
        "The stories attributed to him have influenced literature across the globe, from the works of La Fontaine to modern children's books, proving that the wisdom of his simple tales remains as relevant today as it was in antiquity.",
      ],
      stories: [
        {
          id: "1",
          title: "The Tortoise and the Hare",
          excerpt:
            "A classic tale of wisdom over arrogance, where a slow and steady tortoise outpaces a boastful hare.",
          image: "/story-1.jpg",
          readingTime: 5,
          category: "Fable",
        },
        {
          id: "2",
          title: "The Lion and the Mouse",
          excerpt:
            "A powerful lion learns that even the smallest creature can be a mighty friend in times of need.",
          image: "/story-1.jpg", // Reusing image for mock
          readingTime: 3,
          category: "Fable",
        },
      ],
    },
    "anansi-keeper": {
      id: "anansi-keeper",
      name: "West African Griot",
      specialty: "Anansi Tales",
      bio: "Specializing in the preservation of Akan oral traditions, focusing on the spider trickster-god Anansi.",
      background: [
        "The Griot is a traditional West African historian, storyteller, praise singer, poet, and musician. They are the repositories of oral tradition and hereditary historians for their communities.",
        "Our featured Griot comes from a long lineage of storytellers in modern-day Ghana, specializing in the Anansi spider tales which originated with the Akan people.",
        "These stories traveled with the diaspora across the Atlantic, becoming a symbol of resistance and survival throughout the Caribbean and the Americas.",
      ],
      stories: [
        {
          id: "3",
          title: "Anansi and the Pot of Wisdom",
          excerpt:
            "Anansi tries to hoard all the world's wisdom in a clay pot, only to realize it's meant to be shared.",
          image: "/hero-bg.jpg",
          readingTime: 7,
          category: "Oral Legend",
        },
      ],
    },
  };

  return authors[id];
};

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const author = getAuthor(id);

  if (!author) {
    return (
      <div className="flex flex-col items-center min-h-screen w-full bg-background font-serif">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Author Not Found</h1>
            <Link
              href="/authors"
              className="text-[#683d21] hover:underline font-sans uppercase text-xs tracking-widest font-bold"
            >
              Back to Storytellers
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
        {/* Back Link */}
        <Link
          href="/authors"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-[#683d21] transition-colors mb-12"
        >
          <ChevronLeft size={14} /> <h3>Back to Storytellers</h3>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Profile Header Side */}
          <div className="md:col-span-4 space-y-8">
            <div className="relative aspect-square w-full max-w-[300px] mx-auto md:mx-0 rounded-full overflow-hidden border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-muted/10 p-2">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                {author.avatar ? (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-[#683d21] font-sans bg-muted/20">
                    {author.name.charAt(0)}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight">
                {author.name}
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] text-[#683d21] font-sans font-bold">
                {author.specialty}
              </p>
            </div>

            <div className="pt-8 border-t border-dashed border-gray-300 dark:border-[#faf7f0]/20">
              <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                Quick Bio
              </h3>
              <p className="text-sm italic text-muted-foreground leading-relaxed font-sans">
                "{author.bio}"
              </p>
            </div>
          </div>

          {/* Background and Works Side */}
          <div className="md:col-span-8 space-y-16">
            <section className="space-y-6">
              <div className="border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 pb-2">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#683d21] font-sans font-bold">
                  Background
                </h2>
              </div>
              <div className="space-y-6 text-base leading-relaxed text-justify">
                {author.background.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 pb-2">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#683d21] font-sans font-bold">
                  Works & Stories
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {author.stories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/story/${story.id}`}
                    className="group"
                  >
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded border border-dashed border-gray-300 dark:border-[#faf7f0]/20">
                        <Image
                          src={story.image}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 px-2 py-1 bg-background text-[8px] uppercase tracking-widest font-bold font-sans border border-dashed border-gray-300 dark:border-[#faf7f0]/20">
                          {story.category}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-bold group-hover:text-[#683d21] transition-colors leading-tight">
                          {story.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 font-sans italic">
                          {story.excerpt}
                        </p>
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#683d21] font-sans font-bold pt-2">
                          <Clock size={10} />
                          <span>{story.readingTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
