import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxInit = () => {
  useEffect(() => {
    // Parallax on elements with data-parallax-y
    const yEls = gsap.utils.toArray<HTMLElement>("[data-parallax-y]");
    yEls.forEach((el) => {
      const amount = parseFloat(el.dataset.parallaxY || "-20");
      gsap.to(el, {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    // Fade+lift reveal
    const revealEls = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    revealEls.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return null;
};

export default ParallaxInit;
