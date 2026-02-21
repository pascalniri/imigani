"use client";

import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Archive" },
  { to: "/about", label: "About" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = usePathname();
  return (
    <nav className="border-b border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-background fixed top-0 z-50 h-14 w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 md:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide font-semibold text-foreground"
          aria-label="Imigani - Home"
        >
          <h1>Imigani.</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm tracking-wide transition-colors ${
                location === link.to
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <h2 className="text-xs font-medium">{link.label}</h2>
            </Link>
          ))}
          <Search className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
        </div>

        <button
          className="md:hidden p-1 text-foreground cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={14} /> : <Menu size={14} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t backdrop-blur-sm bg-background/50 border-dashed border-gray-300 dark:border-[#faf7f0]/20 px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`block text-sm ${location === link.to ? "text-foreground font-medium" : "text-muted-foreground"}`}
              onClick={() => setOpen(false)}
            >
              <h2 className="text-xs font-medium">{link.label}</h2>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
