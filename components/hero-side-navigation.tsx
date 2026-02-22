import Link from "next/link";

export default function HeroSideNavigation() {
  const categories = [
    { id: 1, name: "Folktales", slug: "folktales" },
    { id: 2, name: "Poetry", slug: "poetry" },
    { id: 3, name: "Mythology", slug: "mythology" },
    { id: 4, name: "Legends", slug: "legends" },
  ];
  return (
    <nav className="hidden w-64 border-r border-dashed border-gray-300 dark:border-[#faf7f0]/20 md:flex flex-col bg-background">
      <section className="p-4">
        <h1 className="font-medium uppercase">Seasons</h1>
        <p className="p-1 cursor-pointer hover:text-[#683d21] dark:hover:text-[#683D21] transition-colors">
          Season 1: Voices of the Ancestors
        </p>
        <p className="p-1 cursor-pointer hover:text-[#683d21] dark:hover:text-[#683D21] transition-colors">
          Season 2: Voices of the Ancestors
        </p>
      </section>

      <section className="p-4 w-full">
        <h1 className="font-medium uppercase">Categories</h1>
        {categories.map((category) => (
          <div key={category.id} className="space-y-2 mt-2">
            <Link
              href={`/category/${category.slug}`}
              className="block py-2 px-4 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 cursor-pointer hover:text-[#683d21] dark:hover:text-[#683D21] transition-colors w-full text-start text-sm"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </section>
    </nav>
  );
}
