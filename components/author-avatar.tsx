"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface AuthorAvatarProps {
  name: string;
  avatarUrl?: string;
  bio: string;
}

export default function AuthorAvatar({
  name,
  avatarUrl,
  bio,
}: AuthorAvatarProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-muted/30">
          {avatarUrl ? (
            <Image src={avatarUrl} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-[#683d21] font-sans">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <span className="text-[10px] uppercase tracking-widest font-sans font-bold group-hover:text-[#683d21] transition-colors">
          {name}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-full pt-3 z-50 w-64 pointer-events-auto"
          >
            <div className="p-4 bg-background/40 backdrop-blur-sm border border-dashed border-gray-300 dark:border-[#faf7f0]/20 shadow-xl">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#683d21] font-sans font-bold">
                  About the Author
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground text-left">
                  {bio}
                </p>
                <button className="uppercase cursor-pointer flex items-center gap-2 p-1 bg-background/50 font-medium p-2">View Profile <ChevronRight size={12} /></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
