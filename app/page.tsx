import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import HeroPage from "@/components/hero-page";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Navigation />
      <HeroPage />
      <Footer />
    </div>
  );
}
