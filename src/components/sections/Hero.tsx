import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SPLINE_SCENE_URL = "https://my.spline.design/particles-grsad9AoJrzt4a76VJM4b7cv/"; // Provided Spline public URL

const Hero = () => {
  const useIframe = typeof window !== "undefined" && !customElements.get("spline-viewer");
  return (
    <header className="relative overflow-hidden">
      <div className="container mx-auto py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6" data-parallax-y="-10" data-reveal>
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Luxury Web3 Studio</p>
            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-display leading-tight")}>
              HASHHAWKS —
              <span className="block text-gradient-primary">Blockchain & Cryptography</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
              We craft premium DApps and security-first blockchain systems, powered by elite cryptography engineering.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="lg" aria-label="Start a Project CTA">Start a Project</Button>
              <Button variant="premium" size="lg" aria-label="View Our Work">Our Work</Button>
            </div>
          </div>
          <div className="relative rounded-xl border glass shadow-glow p-2" data-parallax-y="8" data-reveal>
            {/* Spline viewer integration with graceful fallback */}
            <div className="aspect-[16/10] w-full rounded-lg overflow-hidden">
              {SPLINE_SCENE_URL ? (
                useIframe ? (
                  <iframe
                    title="HASHHAWKS 3D"
                    src={SPLINE_SCENE_URL}
                    className="w-full h-full block"
                    allow="autoplay; fullscreen"
                  />
                ) : (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore - web component
                  <spline-viewer url={SPLINE_SCENE_URL} style={{ width: '100%', height: '100%', display: 'block' }}></spline-viewer>
                )
              ) : (
                <div className="w-full h-full grid place-items-center">
                  <div className="text-center p-6">
                    <div className="text-gradient-primary text-3xl font-display mb-2">Interactive 3D</div>
                    <p className="text-sm text-muted-foreground">Add your Spline scene URL to unlock a stunning 3D hero.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;