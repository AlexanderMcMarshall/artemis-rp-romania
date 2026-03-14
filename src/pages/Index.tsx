import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users, Gamepad2, ShoppingBag, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Gamepad2,
    title: "Roleplay Imersiv",
    desc: "Povești unice, economie reală, și acțiune non-stop într-un univers GTA V complet personalizat.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Avansat",
    desc: "Sistem strict de protecție. Cheater-ii sunt eliminați permanent, fără excepții.",
  },
  {
    icon: Users,
    title: "Comunitate Activă",
    desc: "Sute de jucători activi zilnic, staff dedicat și evenimente săptămânale.",
  },
  {
    icon: BookOpen,
    title: "Regulament Clar",
    desc: "Reguli detaliate și transparente pentru o experiență corectă pentru toți.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Artemis Romania City"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient-gold leading-tight">
              Artemis Romania
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
              Cel mai imersiv server de GTA V Roleplay din România. Scrie-ți povestea în orașul tău.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-gold-strong animate-pulse-glow"
              >
                Conectează-te la Server
                <ArrowRight size={16} />
              </a>
              <Link
                to="/regulament"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
              >
                <BookOpen size={16} />
                Citește Regulamentul
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          >
            De ce <span className="text-gradient-gold">Artemis</span>?
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/40 hover:glow-gold"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-gradient-card p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pregătit să intri în joc?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Creează-ți cont, citește regulamentul și alătură-te comunității Artemis Romania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:glow-gold-strong transition-all"
              >
                Creează Cont
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-all"
              >
                <ShoppingBag size={16} />
                Vizitează Magazinul
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
