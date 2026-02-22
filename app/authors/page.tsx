import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronRight, User } from "lucide-react";
import Image from "next/image";

interface Author {
  id: string;
  name: string;
  bio: string;
  specialty: string;
  avatar?: string;
}

interface AuthorCategory {
  category: string;
  authors: Author[];
}

const authorCategories: AuthorCategory[] = [
  {
    category: "Fables & Moral Tales",
    authors: [
      {
        id: "aesop",
        name: "Aesop",
        specialty: "Ancient Greek Fables",
        bio: "An ancient Greek storyteller credited with a number of fables now collectively known as Aesop's Fables. His tales often feature animals and deliver moral lessons.",
      },
      {
        id: "la-fontaine",
        name: "Jean de La Fontaine",
        specialty: "Classic Fables",
        bio: "A French fabulist and one of the most widely read French poets of the 17th century, known for his adaptations of Aesop's fables.",
      },
    ],
  },
  {
    category: "Oral Legends & Folktales",
    authors: [
      {
        id: "anansi-keeper",
        name: "West African Griot",
        specialty: "Anansi Tales",
        bio: "Specializing in the preservation of Akan oral traditions, focusing on the spider trickster-god Anansi.",
      },
      {
        id: "ubuntu-sage",
        name: "Southern African Oralist",
        specialty: "Bantu Legends",
        bio: "Dedicated to archiving the profound moral philosophies of Bantu-speaking peoples through historical legends.",
      },
    ],
  },
  {
    category: "Mythology & Epic Poems",
    authors: [
      {
        id: "nile-scribe",
        name: "Egyptian Mythologist",
        specialty: "Ancient Nile Myths",
        bio: "Expert in the interpretation of ancient Egyptian hieroglyphic myths and cosmogonies.",
      },
    ],
  },
];

export default function AuthorsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background font-serif">
      <Navigation />

      <main className="w-full pb-30 max-w-6xl mt-14 px-4 md:px-8 py-10 border-x border-dashed border-gray-300 dark:border-[#faf7f0]/20 min-h-screen">
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Storytellers
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl font-sans">
            Meet the voices behind the legends. Our storytellers are dedicated
            to preserving and reinterpreting the vast oral and written heritage
            of humanity.
          </p>
        </div>

        <div className="space-y-16">
          {authorCategories.map((cat, idx) => (
            <section key={idx} className="space-y-8">
              <div className="border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 pb-2">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#683d21] font-sans font-bold">
                  {cat.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cat.authors.map((author) => (
                  <div
                    key={author.id}
                    className="p-6 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-muted/10 hover:bg-muted/20 transition-colors group relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-background flex-shrink-0">
                        {author.avatar ? (
                          <Image
                            src={author.avatar}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xl font-bold text-[#683d21] font-sans">
                            {author.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-[#683d21] transition-colors">
                            {author.name}
                          </h3>
                          <p className="text-[10px] uppercase tracking-widest text-[#683d21] font-sans font-bold">
                            {author.specialty}
                          </p>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3 italic">
                          "{author.bio}"
                        </p>

                        <Link
                          href={`/authors/${author.id}`}
                          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold pt-2 "
                        >
                          <h3>View Stories</h3> <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
