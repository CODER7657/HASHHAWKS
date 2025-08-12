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

const Team = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="team">
      <div className="container mx-auto">
        <h2 id="team" className="text-3xl md:text-4xl font-display mb-10">Leadership</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <Card key={m.name} className="glass hover-scale">
              <CardHeader className="p-0">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-5">
                <CardTitle className="font-display text-xl">{m.name}</CardTitle>
                <p className="text-muted-foreground mt-1">{m.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;