import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Navigation />
      <main className="min-h-screen border-x border-dashed border-gray-300 dark:border-[#faf7f0]/20 mt-14">
        <div className=" p-5 md:px-60 md:pb-40 ">
          <h1 className="text-xl md:text-2xl font-bold mb-6">
            About Imigani
          </h1>
          <div className="section-divider mb-8 mx-0" />

          <div className="space-y-5 text-sm leading-relaxed text-foreground text-justify">
            <p >
              <strong>Imigani</strong> is a digital archive dedicated to
              preserving and celebrating the rich storytelling traditions of
              Africa. From ancient folktales that carry the wisdom of our
              ancestors, to contemporary poetry that captures the heartbeat of a
              continent every story here is a thread in the vast tapestry of
              African heritage.
            </p>

            <h2 className="text-lg font-semibold pt-4">
              Our Mission
            </h2>
            <p >
              In African tradition, storytelling is more than entertainment it
              is education, history, philosophy, and healing, all woven into the
              rhythm of the human voice. A story told by firelight carries the
              weight of generations.
            </p>
            <p >
              As the world moves faster, these stories risk being forgotten.
              Fireside Tales exists to ensure that the voices of our ancestors
              continue to speak, inspire, and guide — now and for generations to
              come.
            </p>

            <h2 className="text-lg font-semibold pt-4">
              What We Do
            </h2>
            <section className="list-disc list-inside space-y-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <strong className="text-foreground">Preservation</strong> :
                <p>Safeguarding oral traditions passed down for generations</p>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">Accessibility</strong> :
                <p>Full transcripts and multiple reading modes for every story</p>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">Connection</strong> :
                <p>Bridging elders' wisdom with the digital generation</p>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">Community</strong> :
                <p>Building a global community united by storytelling</p>
              </div>
            </section>

            <h2 className="text-lg font-semibold pt-4">
              Seasonal Collections
            </h2>
            <p>
              Stories are organized into <em>Seasons</em>, each with a unique
              theme exploring different facets of African heritage. Each season
              contains carefully curated tales and poems designed to be read,
              shared, and remembered.
            </p>

            <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground italic">
              "A story is not entertainment. A story is medicine. You must know
              which one to take for which ailment."
            </blockquote>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
