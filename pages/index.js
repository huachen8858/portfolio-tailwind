import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectSection from "@/components/project-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
