import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import member1 from "@/assets/team/member1.jpg";
import member2 from "@/assets/team/member2.jpg";
import member3 from "@/assets/team/member3.jpg";
import member4 from "@/assets/team/member4.jpg";

const members = [
  { name: "Amina Rao", role: "Head of Cryptography", img: member1 },
  { name: "Luca Moretti", role: "Lead Blockchain Architect", img: member2 },
  { name: "Sophia Nakamura", role: "DApp Product Lead", img: member3 },
  { name: "Ethan Walker", role: "Security Engineer", img: member4 },
];

function TeamCard({ img, name, role }: { img: string; name: string; role: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [spin, setSpin] = useState(0);
  const lastX = useRef<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5; // -0.5 to 0.5
    const py = (y / rect.height) - 0.5;
    const rotX = (-py * 12).toFixed(2);
    const rotY = (px * 12).toFixed(2);
    el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    // Drag to spin 360
    if (dragging) {
      if (lastX.current != null) {
        const delta = e.clientX - lastX.current;
        const next = (spin + delta * 0.8) % 360;
        setSpin(next < 0 ? next + 360 : next);
        if (imgRef.current) {
          imgRef.current.style.transform = `rotateY(${next}deg)`;
        }
      }
      lastX.current = e.clientX;
    }
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    setDragging(false);
    lastX.current = null;
  };

  const onDown = (e: React.MouseEvent) => {
    setDragging(true);
    lastX.current = e.clientX;
  };

  const onUp = () => {
    setDragging(false);
    lastX.current = null;
  };

  return (
    <Card
      ref={cardRef}
      className="glass hover-scale will-change-transform"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      data-reveal
      data-parallax-y="4"
    >
      <CardHeader className="p-0">
        <div ref={imgRef} className="w-full h-56 rounded-t-lg [transform-style:preserve-3d] transition-transform duration-200">
          <img
            src={img}
            alt={`${name} — ${role}`}
            loading="lazy"
            className="w-full h-56 object-cover rounded-t-lg [backface-visibility:hidden]"
          />
        </div>
      </CardHeader>
      <CardContent className="p-5">
        <CardTitle className="font-display text-xl">{name}</CardTitle>
        <p className="text-muted-foreground mt-1">{role}</p>
        <p className="text-xs text-muted-foreground mt-3">Tip: click & drag horizontally for 360° roam</p>
      </CardContent>
    </Card>
  );
}

const Team = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="team">
      <div className="container mx-auto">
        <h2 id="team" className="text-3xl md:text-4xl font-display mb-10" data-reveal>Leadership</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <TeamCard key={m.name} img={m.img} name={m.name} role={m.role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;