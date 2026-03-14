import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, BookOpen, Users, Gamepad2, ShoppingBag, ArrowRight, ChevronRight } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Artemis Romania City"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl md:text-8xl font-bold uppercase tracking-tight text-foreground leading-none mb-6">
                Artemis<br />Roleplay
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-10 font-body leading-relaxed">
                Serverul ARTEMIS, este un server de gaming românesc creat pentru a oferi conținut de calitate și o experiență de joc unică. Cu o comunitate activă, misiuni interactive și activități diverse.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-red-strong animate-pulse-glow"
                >
                  Începe Joaca
                  <ArrowRight size={16} />
                </a>
                <div className="glass rounded-xl border border-border px-6 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm font-semibold text-foreground">128 Players</span>
                  </div>
                  <span className="text-xs text-muted-foreground">( 5 000+ conturi înregistrate )</span>
                </div>
              </div>

              {/* Shop card */}
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-4 rounded-xl bg-gradient-accent px-6 py-4 transition-all hover:scale-[1.02] group"
              >
                <div>
                  <span className="text-xs font-medium text-foreground/80">Vizitează</span>
                  <p className="font-display text-xl font-bold text-foreground uppercase">Magazin</p>
                </div>
                <ChevronRight className="text-foreground/60 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
              De ce <span className="text-gradient-red">Artemis</span>?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Un server construit cu pasiune, pentru jucători care apreciază roleplay-ul de calitate.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/30 hover:glow-red"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground mb-2">
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
          <div className="rounded-2xl border border-border bg-gradient-card p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Pregătit să intri în joc?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Creează-ți cont, citește regulamentul și alătură-te comunității Artemis Romania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:glow-red-strong transition-all"
                >
                  Creează Cont
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary transition-all"
                >
                  <ShoppingBag size={16} />
                  Vizitează Magazinul
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
