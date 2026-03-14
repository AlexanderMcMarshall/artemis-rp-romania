import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

interface Section {
  id: string;
  emoji: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "generale-discord",
    emoji: "1️⃣",
    title: "Reguli Generale Discord",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Respectul este obligatoriu față de toți membrii.</li>
        <li>Este interzis: rasismul, discriminarea, hate speech, jignirile grave, amenințările, bullying-ul.</li>
        <li>Glumele sunt permise, dar fără să deranjezi intenționat pe cineva.</li>
        <li>Certurile și drama sunt interzise. Dacă ai o problemă, deschizi ticket.</li>
      </ul>
    ),
  },
  {
    id: "spam-flood",
    emoji: "2️⃣",
    title: "Spam / Flood / Tag Abuziv",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Spam-ul este interzis în orice canal.</li>
        <li>Flood-ul (mesaje repetate) este interzis.</li>
        <li>Tag-ul abuziv (@everyone / @here / staff) este strict interzis.</li>
        <li>Reclamele în DM către membri sunt interzise.</li>
        <li className="text-accent">📌 Sancțiuni: mute / warn / ban.</li>
      </ul>
    ),
  },
  {
    id: "reclama",
    emoji: "3️⃣",
    title: "Reclamă și Promovare",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Este strict interzis să faci reclamă la: alte servere FiveM, alte Discord-uri, canale YouTube/TikTok fără acord staff, produse/servicii/crypto/scam.</li>
        <li>Link-urile dubioase sunt interzise.</li>
        <li className="text-destructive font-medium">📌 Reclamă = BAN direct.</li>
      </ul>
    ),
  },
  {
    id: "canale",
    emoji: "4️⃣",
    title: "Canale și Utilizarea Lor",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Respectă scopul fiecărui canal, nu scrie în canal greșit.</li>
        <li>În canalele importante (anunțuri/reguli) nu ai voie să faci spam sau comentarii inutile.</li>
        <li>Nu ai voie să postezi conținut inutil, provocator sau ofensator.</li>
      </ul>
    ),
  },
  {
    id: "continut-interzis",
    emoji: "5️⃣",
    title: "Conținut Interzis",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Este strict interzis să postezi: pornografie/nuditate, gore/violență extremă, conținut ilegal, scam/phishing, doxxing.</li>
        <li className="text-destructive font-medium">📌 Oricare dintre acestea = BAN PERMANENT.</li>
      </ul>
    ),
  },
  {
    id: "voice-discord",
    emoji: "6️⃣",
    title: "Reguli Voice Channel",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Respectă membrii în voice.</li>
        <li>Este interzis: să urli intenționat, să bagi muzică în microfon, trolling excesiv, voice changer deranjant.</li>
        <li>Staff-ul poate da mute/kick dacă deranjezi.</li>
      </ul>
    ),
  },
  {
    id: "nume-profil",
    emoji: "7️⃣",
    title: "Reguli pentru Nume / Profil",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Numele de pe Discord trebuie să fie decent.</li>
        <li>Este interzis să ai nume ofensator sau provocator.</li>
        <li>Poza de profil trebuie să fie decentă.</li>
        <li>Este interzis să te dai drept staff.</li>
      </ul>
    ),
  },
  {
    id: "staff-discord",
    emoji: "8️⃣",
    title: "Respectarea Staff-ului",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Deciziile staff-ului trebuie respectate.</li>
        <li>Nu ai voie să jignești staff-ul sau să comentezi sancțiunile în public.</li>
        <li>Dacă ai o problemă cu o decizie: deschizi ticket și vorbești civilizat.</li>
        <li className="text-destructive font-medium">Amenințările către staff = BAN.</li>
      </ul>
    ),
  },
  {
    id: "tickets",
    emoji: "9️⃣",
    title: "Tickets / Reclamații",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Pentru orice problemă folosește sistemul de ticket.</li>
        <li>Reclamațiile false sau făcute la nervi pot fi sancționate.</li>
        <li>Dacă deschizi ticket, ai obligația să vorbești respectuos.</li>
      </ul>
    ),
  },
  {
    id: "confidentialitate",
    emoji: "🔟",
    title: "Reguli de Confidențialitate",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Este interzis să postezi conversații private fără acord.</li>
        <li>Este interzis să distribui informații din staff chat sau ticket-uri.</li>
        <li className="text-destructive font-medium">Orice leak de informații interne = BAN.</li>
      </ul>
    ),
  },
  {
    id: "pedepse",
    emoji: "1️⃣1️⃣",
    title: "Pedepse",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <p>Staff-ul poate aplica sancțiuni în funcție de gravitate:</p>
        <div className="grid grid-cols-2 gap-2">
          <span>⚠️ Warn</span>
          <span>🔇 Mute</span>
          <span>🚫 Kick</span>
          <span>⛔ Ban temporar</span>
          <span>❌ Ban permanent</span>
        </div>
        <p className="text-accent text-sm">📌 Staff-ul are dreptul să sancționeze fără avertisment în cazuri grave.</p>
      </div>
    ),
  },
  {
    id: "rp-generale",
    emoji: "🎮",
    title: "Reguli Generale RP (FiveM)",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Respectul este obligatoriu.</li>
        <li>Fără injurii grave, rasism, discriminare, amenințări sau bullying.</li>
        <li>Limbajul vulgar moderat este permis doar în RP, dar fără exagerări.</li>
        <li>Nu ai voie să te dai drept staff sau să minți că ai funcție.</li>
        <li>Exploatarea bug-urilor este interzisă — raportează imediat.</li>
        <li className="text-destructive font-medium">Cheat / mod menu / script-uri ilegale = BAN PERMANENT.</li>
      </ul>
    ),
  },
  {
    id: "reguli-roleplay",
    emoji: "🎭",
    title: "Reguli Roleplay (RP)",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li><strong className="text-foreground">Metagaming (MG):</strong> Interzis — nu folosi informații din afara RP.</li>
        <li><strong className="text-foreground">Powergaming (PG):</strong> Interzis — nu forța acțiuni imposibile.</li>
        <li><strong className="text-foreground">FailRP:</strong> Interzis — joacă realist și serios.</li>
        <li><strong className="text-foreground">RDM:</strong> Interzis — nu omori fără motiv RP clar.</li>
        <li><strong className="text-foreground">VDM:</strong> Interzis — nu calci oameni intenționat.</li>
        <li><strong className="text-foreground">No Fear RP:</strong> Interzis — comportă-te realist sub amenințare.</li>
        <li><strong className="text-foreground">Combat Logging:</strong> Interzis — nu ieși din server în RP activ.</li>
        <li><strong className="text-foreground">NLR:</strong> Dacă mori și dai respawn, uiți tot.</li>
      </ul>
    ),
  },
  {
    id: "ooc",
    emoji: "💬",
    title: "Reguli OOC",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Chat-ul OOC trebuie folosit minim și doar pentru informații importante.</li>
        <li>Certurile OOC în public sunt interzise.</li>
        <li>Problemele se rezolvă prin ticket / staff.</li>
      </ul>
    ),
  },
  {
    id: "voice-rp",
    emoji: "🎤",
    title: "Reguli Voice / Microfon (RP)",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Microfonul trebuie să fie clar.</li>
        <li>Interzis: voice changer exagerat, muzică în microfon, țipete și spam audio.</li>
        <li>Dacă nu ai microfon funcțional, nu ai voie să faci RP serios.</li>
      </ul>
    ),
  },
  {
    id: "politie-smurd",
    emoji: "🚔",
    title: "Reguli Poliție / SMURD",
    content: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          <h4 className="font-display text-foreground mb-2">Poliție</h4>
          <ul className="space-y-1">
            <li>Abuzul de putere este interzis.</li>
            <li>Poliția trebuie să respecte procedurile RP.</li>
            <li>Nu ai voie să tragi fără motiv RP serios.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-foreground mb-2">SMURD</h4>
          <ul className="space-y-1">
            <li>SMURD trebuie să ofere tratament realist.</li>
            <li>Nu ai voie să refuzi roleplay-ul fără motiv.</li>
            <li>Este interzis să ajuți ilegalități fără RP solid.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "criminalitate",
    emoji: "🔫",
    title: "Reguli Criminalitate / Mafii",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Jafurile și răpirile trebuie să aibă motiv RP.</li>
        <li>Este interzis să faci crime nonstop fără poveste RP.</li>
        <li>Nu ai voie să răpești persoane în safezone.</li>
        <li>Tortura extremă și RP-ul bolnav este interzis.</li>
      </ul>
    ),
  },
  {
    id: "safezone",
    emoji: "🏥",
    title: "Safezone (Zonă Sigură)",
    content: (
      <div className="space-y-3 text-muted-foreground">
        <p>În Safezone este interzis: să tragi, să lovești, să răpești, să fugi de poliție cu RP abuziv.</p>
        <p className="text-foreground font-medium">Exemple Safezone:</p>
        <div className="grid grid-cols-2 gap-1 text-sm">
          <span>• Spital</span>
          <span>• Secție Poliție</span>
          <span>• Primărie</span>
          <span>• Zone de spawn / job center</span>
          <span>• Dealership / garaje (dacă sunt marcate)</span>
        </div>
      </div>
    ),
  },
  {
    id: "vehicule",
    emoji: "🚗",
    title: "Reguli Vehicule / Condus",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Condusul trebuie să fie realist.</li>
        <li>Este interzis: să conduci ca pe GTA Online fără frică, să sari cu mașina fără consecințe.</li>
        <li>Pit maneuver fără RP = sancțiune.</li>
      </ul>
    ),
  },
  {
    id: "jafuri",
    emoji: "💰",
    title: "Reguli Jafuri / Robbery",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Nu ai voie să faci jaf dacă nu sunt polițiști online (numărul minim stabilit de staff).</li>
        <li>Negocierile trebuie respectate.</li>
        <li>Este interzis să începi un jaf doar ca să faci PvP.</li>
        <li>Hostage trebuie tratat realist.</li>
      </ul>
    ),
  },
  {
    id: "streaming",
    emoji: "📹",
    title: "Reguli Streaming / Clipuri",
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li>Este permis streaming pe server.</li>
        <li>Este interzis să arăți: informații din admin menu, rapoarte/ticket-uri, discuții private cu staff.</li>
        <li className="text-destructive font-medium">Stream sniping = BAN.</li>
      </ul>
    ),
  },
];

export default function Regulament() {
  const [active, setActive] = useState(sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <div className="pt-20 container mx-auto px-4">
        <div className="py-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            📜 Regulament
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Prin intrarea pe server accepți automat regulamentul de mai jos. Citește cu atenție!
          </p>
        </div>

        {/* Mobile TOC toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden mb-4 flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground"
        >
          <ChevronRight size={16} className={sidebarOpen ? "rotate-90 transition-transform" : "transition-transform"} />
          Cuprins
        </button>

        <div className="flex gap-8 pb-24">
          {/* Sidebar */}
          <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block w-72 shrink-0`}>
            <div className="sticky top-24 rounded-xl border border-border bg-gradient-card p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3">Cuprins</h3>
              <nav className="space-y-0.5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                      active === s.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {s.emoji} {s.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="space-y-8">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="scroll-mt-28 rounded-xl border border-border bg-gradient-card p-6 md:p-8"
                >
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    {s.emoji} {s.title}
                  </h2>
                  {s.content}
                </motion.section>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-primary font-display font-semibold">
                ✅ Dacă nu cunoști o regulă, nu înseamnă că ești scutit de pedeapsă.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
