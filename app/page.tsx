import { HeroSection } from "./components/HeroSection";
import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <ThemeToggle />
      <HeroSection />
    </main>
  );
}
