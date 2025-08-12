import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Blocks, ShieldCheck, KeyRound } from "lucide-react";

const services = [
  {
    icon: Blocks,
    title: "DApps & Protocols",
    desc: "Custom decentralized applications and tokenomics tailored to your ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Audits",
    desc: "Threat modeling, formal verification guidance, and on-chain/off-chain audits.",
  },
  {
    icon: KeyRound,
    title: "Applied Cryptography",
    desc: "Zero-knowledge, MPC, and novel primitives engineered for production.",
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="services">
      <div className="container mx-auto">
        <h2 id="services" className="text-3xl md:text-4xl font-display mb-10">What we build</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="glass hover-scale">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                  <Icon className="text-primary" />
                </div>
                <CardTitle className="mt-4 font-display">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;