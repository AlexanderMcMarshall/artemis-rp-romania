import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Crown, Star, Zap, Check, Coins } from "lucide-react";

interface ShopPackage {
  name: string;
  price: string;
  coins: number;
  icon: React.ElementType;
  benefits: string[];
  featured?: boolean;
}

const packages: ShopPackage[] = [
  {
    name: "Starter Pack",
    price: "$5",
    coins: 100,
    icon: Zap,
    benefits: ["100 Artemis Coins", "Badge exclusiv Discord", "Acces la canalul VIP"],
  },
  {
    name: "Artemis Premium",
    price: "$15",
    coins: 400,
    icon: Star,
    benefits: ["400 Artemis Coins", "Vehicul unic in-game", "Skin personalizat", "Prioritate la coadă"],
    featured: true,
  },
  {
    name: "Olympian Pack",
    price: "$30",
    coins: 1000,
    icon: Crown,
    benefits: ["1000 Artemis Coins", "Tot din Premium", "Proprietate exclusivă", "Rol special Discord", "Suport prioritar"],
  },
];

const coinItems = [
  { name: "Vehicul Sport", coins: 200, desc: "Un vehicul rapid pentru orașul tău" },
  { name: "Proprietate Mică", coins: 350, desc: "O casă modestă lângă plajă" },
  { name: "Arme Kit", coins: 150, desc: "Set complet de arme pentru protecție" },
  { name: "Skin Custom", coins: 100, desc: "Personalizează-ți caracterul" },
  { name: "Business License", coins: 500, desc: "Deschide-ți propriul business" },
  { name: "VIP 30 Zile", coins: 250, desc: "Acces VIP pentru 30 de zile" },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <div className="pt-28 container mx-auto px-4 pb-24">
        <div className="py-8 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tight text-foreground mb-4">
            Magazin & Donații
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Susține serverul și primești beneficii exclusive. Artemis Coins pot fi folosiți pentru achiziții in-game.
          </p>
        </div>

        {/* Donation Packages */}
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground mb-6">
          Pachete Donații
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mb-16">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 transition-all ${
                pkg.featured
                  ? "border-primary/40 bg-gradient-card glow-red"
                  : "border-border bg-gradient-card hover:border-primary/30 hover:glow-red"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <pkg.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground">{pkg.name}</h3>
                  <p className="text-xs text-muted-foreground">{pkg.coins} Artemis Coins</p>
                </div>
              </div>

              <div className="text-3xl font-bold text-foreground mb-6 font-display">{pkg.price}</div>

              <ul className="space-y-2 mb-6">
                {pkg.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-success shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-xl py-2.5 text-sm font-semibold transition-all ${
                pkg.featured
                  ? "bg-primary text-primary-foreground hover:glow-blue-strong"
                  : "border border-border text-foreground hover:bg-secondary hover:border-primary/30"
              }`}>
                Donează {pkg.price}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Coin Shop */}
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground mb-6 flex items-center gap-2">
          <Coins className="text-accent" /> Magazin Artemis Coins
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coinItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-gradient-card p-5 flex items-center justify-between gap-4 transition-all hover:border-primary/20"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <button className="shrink-0 rounded-xl bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/20 transition-colors">
                {item.coins} <Coins size={12} className="inline ml-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
