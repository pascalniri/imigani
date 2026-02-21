import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-dashed border-gray-300 dark:border-[#faf7f0]/20 py-8 w-full fixed bottom-0">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Imigani · Preserving African heritage through storytelling</p>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/library" className="hover:text-foreground transition-colors">Archive</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;