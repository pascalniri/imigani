"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Clock, User, BookOpen, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SearchResult {
  id: string;
  type: "story" | "author";
  title: string;
  subtitle?: string;
  url: string;
  image?: string;
}

const mockData: SearchResult[] = [
  {
    id: "aesop",
    type: "author",
    title: "Aesop Kakuchewe",
    subtitle: "Ancient Greek Fables",
    url: "/authors/aesop",
  },
  {
    id: "1",
    type: "story",
    title: "The Tortoise and the Hare",
    subtitle: "Aesop Kakuchewe",
    url: "/story/1",
    image: "/story-1.jpg",
  },
  {
    id: "anansi-keeper",
    type: "author",
    title: "West African Griot",
    subtitle: "Anansi Tales",
    url: "/authors/anansi-keeper",
  },
  {
    id: "4",
    type: "story",
    title: "The Spider and the Wisdom Pod",
    subtitle: "West African Griot",
    url: "/story/4",
    image: "/hero-bg.jpg",
  },
  {
    id: "ubuntu-sage",
    type: "author",
    title: "Southern African Oralist",
    subtitle: "Bantu Legends",
    url: "/authors/ubuntu-sage",
  },
  {
    id: "5",
    type: "story",
    title: "Echoes of the Savannah",
    subtitle: "Modern Oralist",
    url: "/story/5",
    image: "/featured-story.jpg",
  },
];

export default function GlobalSearch({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = mockData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(lowerQuery)),
    );
    setResults(filtered);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col pt-[10vh] px-4 md:px-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl mx-auto bg-background border border-dashed border-gray-300 dark:border-[#faf7f0]/20 shadow-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <Search className="w-5 h-5 text-[#683d21]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search stories, authors, or legends..."
                className="flex-1 bg-transparent border-none focus:outline-none text-xl md:text-2xl font-serif placeholder:text-muted-foreground/50"
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted/30 rounded-full transition-colors"
                aria-label="Close search"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {results.length > 0 ? (
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-bold border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 pb-2">
                    Search Results ({results.length})
                  </p>
                  <div className="space-y-2">
                    {results.map((result) => (
                      <Link
                        key={`${result.type}-${result.id}`}
                        href={result.url}
                        onClick={onClose}
                        className="group flex items-center gap-4 p-4 hover:bg-muted/10 border border-transparent hover:border-dashed hover:border-gray-300 dark:hover:border-[#faf7f0]/20 transition-all rounded-sm"
                      >
                        <div className="relative w-12 h-12 flex-shrink-0 bg-muted/20 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 rounded overflow-hidden">
                          {result.image ? (
                            <Image
                              src={result.image}
                              alt={result.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#683d21]">
                              {result.type === "author" ? (
                                <User size={20} />
                              ) : (
                                <BookOpen size={20} />
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <h3 className="font-bold text-base group-hover:text-[#683d21] transition-colors truncate font-serif">
                            {result.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-sans truncate uppercase tracking-widest text-[10px]">
                            {result.subtitle}
                          </p>
                        </div>
                        <ChevronRight
                          size={16}
                          className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : query.trim() ? (
                <div className="text-center py-12 space-y-2">
                  <p className="text-muted-foreground font-sans uppercase tracking-[0.2em] text-[10px]">
                    No results found for
                  </p>
                  <p className="text-xl font-serif">"{query}"</p>
                </div>
              ) : (
                <div className="space-y-8 py-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-bold border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 pb-2 mb-4">
                      Popular Collections
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Folktales", "Poetry", "Mythology", "Legends"].map(
                        (cat) => (
                          <Link
                            key={cat}
                            href={`/category/${cat.toLowerCase()}`}
                            onClick={onClose}
                            className="p-3 text-sm font-sans uppercase tracking-widest text-center border border-dashed border-gray-300 dark:border-[#faf7f0]/20 hover:bg-muted/10 hover:text-[#683d21] transition-all"
                          >
                            {cat}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans font-bold">
                      Quick Tips
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-2 font-sans italic">
                      <li>• Search for specific authors like "Aesop"</li>
                      <li>• Explore categories by typing "Mythology"</li>
                      <li>• Press [Esc] to close this window</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
