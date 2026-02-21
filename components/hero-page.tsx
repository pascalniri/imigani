import Image from "next/image";

export default function HeroPage() {
    return (
        <section className="border-x border-dashed border-gray-300 dark:border-[#faf7f0]/20 w-full mt-14">
          <div className="relative overflow-hidden">
            <Image src="/hero-bg.jpg" width={1920} height={1080} alt="Hero Background" aria-hidden="true" className="w-full h-48 md:h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">African Folktales & Poetry</p>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-tight">
                Stories whispered <span className="text-[#683d21]">by the fire</span>
              </h1>
            </div>
          </div>
        </section>
    );
}