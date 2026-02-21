import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Navigation />
      <Footer />
    </div>
  );
}
