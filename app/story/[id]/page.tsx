import Image from "next/image";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import AudioPlayer from "@/components/audio-player";
import SocialShare from "@/components/social-share";
import RelatedStories from "@/components/related-stories";
import AuthorAvatar from "@/components/author-avatar";
import { Clock, User, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function StoryPage() {
  // In a real app, you would fetch this based on the ID
  const story = {
    id: "1",
    title: "The Tortoise and the Hare",
    subtitle: "A classic tale of wisdom over arrogance",
    author: "Aesop",
    authorBio:
      "Aesop was an ancient Greek storyteller credited with a number of fables now collectively known as Aesop's Fables. His tales often feature animals and deliver moral lessons.",
    readingTime: 5,
    category: "Fable",
    coverImage: "/story-1.jpg",
    audioSrc:
      "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3", // Demo audio
    content: [
      "Once upon a time, there was a Hare who was always boasting about how fast he could run. He was so proud of his speed that he would often tease the other animals, especially the slow-moving Tortoise.",
      "One day, the Tortoise, tired of the Hare's constant bragging, challenged him to a race. The Hare laughed loudly, thinking it was a joke. 'A race? Between you and me? You'll still be at the starting line when I've already crossed the finish!' he exclaimed.",
      "But the Tortoise was serious, and soon the race was set. The other animals gathered to watch the unlikely competition. The signal was given, and the Hare zipped out of sight in an instant, leaving the Tortoise behind in a cloud of dust.",
      "The Hare ran for a while, and then stopped to look back. He couldn't even see the Tortoise. 'This is too easy,' he thought. 'I have plenty of time to take a nap and still win the race.' So, he curled up under a shady tree and fell fast asleep.",
      "Meanwhile, the Tortoise kept going, slow and steady. He didn't stop to rest, and he didn't look back. He just kept placing one foot in front of the other, moving closer and closer to the finish line.",
      "When the Hare finally woke up, the sun was low in the sky. He jumped up and raced toward the finish line as fast as he could. But it was too late. As he approached, he saw the Tortoise just crossing the line, cheered on by all the other animals.",
      "The Hare was humbled and never teased the Tortoise again. And from that day on, the animals always remembered that slow and steady wins the race.",
    ],
  };

  const storyUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-background font-serif">
      <Navigation />

      <main className="w-full pb-30 max-w-6xl px-4 md:px-8 py-10 border-x border-dashed border-gray-300 dark:border-[#faf7f0]/20 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
          {/* Main Content Column */}
          <div className="flex flex-col items-start w-full md:col-span-8 py-10">
            {/* Header Section */}
            <div className="mb-8 w-full">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#683d21] mb-3 font-sans font-bold">
                {story.category}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                {story.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[10px] text-muted-foreground tracking-widest font-sans border-t border-dashed border-gray-300 dark:border-[#faf7f0]/20 pt-4">
                <AuthorAvatar name={story.author} bio={story.authorBio} />
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[#683d21]" />
                  <span>{story.readingTime} min read</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full mb-8 overflow-hidden rounded border border-dashed border-gray-300 dark:border-[#faf7f0]/20">
              <Image
                src={story.coverImage}
                alt={story.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Audio Player */}
            <div className="mb-10 w-full">
              <AudioPlayer src={story.audioSrc} />
            </div>

            {/* Story Content */}
            <article className="prose dark:prose-invert max-w-none border-t border-dashed border-gray-300 dark:border-[#faf7f0]/20 pt-10">
              {story.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-justify leading-relaxed mb-6 selection:bg-[#683d21]/20"
                >
                  {paragraph}
                </p>
              ))}
            </article>

            {/* Social Sharing */}
            <SocialShare url={storyUrl} title={story.title} />

            {/* Back navigation */}
            <div className="mt-12">
              <Link
                href="/"
                className="text-[10px] flex items-center gap-2 uppercase tracking-[0.3em] text-muted-foreground hover:text-[#683d21] transition-colors"
              >
                <ChevronLeft size={14} /> <h3>Back to library</h3>
              </Link>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 py-20 border-t md:border-t-0 md:border-l border-dashed border-gray-300 dark:border-[#faf7f0]/20 pt-10 md:pt-0 md:pl-10">
            <RelatedStories />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
