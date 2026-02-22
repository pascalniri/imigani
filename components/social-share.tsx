"use client";

import { Twitter, Facebook, Linkedin, Share2 } from "lucide-react";

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const shareLinks = [
    {
      name: "X",
      icon: <Twitter size={16} />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={16} />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 py-8 border-y border-dashed border-gray-300 dark:border-[#faf7f0]/20 mt-12">
      <div className="flex items-center gap-2 text-muted-foreground uppercase tracking-widest text-[10px]">
        <Share2 size={12} />
        <h3>Share this story</h3>
      </div>
      <div className="flex gap-4">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 hover:text-[#683d21] dark:hover:text-[#683D21] transition-colors rounded"
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
