import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Story {
  id: string;
  title: string;
  author: string;
  image: string;
}

const relatedStories: Story[] = [
  {
    id: "2",
    title: "The Lion and the Mouse",
    author: "Aesop Kawekuche",
    image: "/story-1.jpg",
  },
  {
    id: "3",
    title: "Anansi and the Pot of Wisdom",
    author: "West African Legend",
    image: "/hero-bg.jpg",
  },
  {
    id: "4",
    title: "The Moon and the Sun",
    author: "Folk Legend",
    image: "/story-1.jpg",
  },
];

export default function RelatedStories() {
  return (
    <aside className="w-full space-y-8 md:sticky top-20">
      <div>
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 pb-2">
          Related Stories
        </h3>
        <div className="space-y-6">
          {relatedStories.map((story) => (
            <Link
              key={story.id}
              href={`/story/${story.id}`}
              className="group flex gap-4 items-start"
            >
              <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-sm font-bold leading-tight group-hover:text-[#683d21] transition-colors line-clamp-2">
                  {story.title}
                </h4>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 font-sans">
                  {story.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-6 bg-muted/20 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 ">
        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-sans">
          Support Imigani
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground font-sans">
          Help us preserve African oral traditions by supporting our community
          storytellers.
        </p>
        <button className="flex items-center gap-2 mt-4 text-[10px] uppercase tracking-widest font-bold text-[#683d21] cursor-pointer transition-all">
          <h3>Learn More</h3> <ChevronRight size={12} />
        </button>
      </div>
    </aside>
  );
}
