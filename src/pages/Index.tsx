import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import { Button } from "@/components/ui/button";
import ParallaxInit from "@/components/ParallaxInit";
import SplineBackground from "@/components/SplineBackground";

const Index = () => {
  return (
    <main className="relative">
      <SplineBackground />
      <div className="relative z-10">
        <nav className="sticky top-0 z-40 border-b backdrop-blur bg-background/60">
          <div className="container mx-auto flex items-center justify-between py-4">
            <a href="/" className="font-display text-xl tracking-wide" aria-label="HASHHAWKS Home">HASHHAWKS</a>
            <div className="flex items-center gap-4">
              <a href="#services" className="story-link">Services</a>
              <a href="#team" className="story-link">Team</a>
              <Button variant="premium" size="sm">Start a Project</Button>
            </div>
          </div>
        </nav>
        <ParallaxInit />
        <Hero />
        <Services />
        <Team />
        <footer className="border-t mt-10">
          <div className="container mx-auto py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} HASHHAWKS. All rights reserved.</p>
            <p>We build with precision: DApps • Blockchain • Cryptography</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;
