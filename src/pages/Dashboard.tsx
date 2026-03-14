import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  User, Wallet, Heart, Droplets, Utensils, Briefcase,
  Shield, Clock, TrendingUp, Car, LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const StatusBar = ({ label, value, max, color, icon: Icon }: {
  label: string; value: number; max: number; color: string; icon: React.ElementType;
}) => {
  const pct = (value / max) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
          <Icon size={14} /> {label}
        </span>
        <span className="text-xs font-medium text-foreground">{value}/{max}</span>
      </div>
      <div className="h-2 rounded-full bg-background overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
};

export default function Dashboard() {
  const player = {
    name: "ArtemisPlayer",
    job: "Taxi Driver",
    level: 12,
    cash: 15420,
    bank: 82350,
    coins: 540,
    health: 85,
    hunger: 60,
    thirst: 45,
    playtime: "142h 30m",
    vehicles: 3,
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />

      <div className="pt-28 container mx-auto px-4 pb-24">
        <div className="py-6">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground mb-1">
            Panou Jucător
          </h1>
          <p className="text-muted-foreground text-sm">
            Bine ai venit, <span className="text-foreground font-medium">{player.name}</span>
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-gradient-card p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold uppercase text-foreground">{player.name}</h2>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Briefcase size={14} /> {player.job}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-primary">
                <TrendingUp size={14} /> Level {player.level}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock size={14} /> {player.playtime}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Car size={14} /> {player.vehicles} vehicule
              </span>
            </div>
          </motion.div>

          {/* Wallet Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-gradient-card p-6"
          >
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <Wallet size={14} className="text-primary" /> Portofel
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cash</span>
                <span className="text-lg font-bold text-success">${player.cash.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Bancă</span>
                <span className="text-lg font-bold text-foreground">${player.bank.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="text-sm text-accent font-medium">Artemis Coins</span>
                <span className="text-lg font-bold text-gradient-gold">{player.coins}</span>
              </div>
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-gradient-card p-6 md:col-span-2 lg:col-span-1"
          >
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <Shield size={14} className="text-primary" /> Status
            </h3>
            <div className="space-y-4">
              <StatusBar label="Viață" value={player.health} max={100} color="bg-success" icon={Heart} />
              <StatusBar label="Foame" value={player.hunger} max={100} color="bg-accent" icon={Utensils} />
              <StatusBar label="Sete" value={player.thirst} max={100} color="bg-primary" icon={Droplets} />
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <Link
            to="/shop"
            className="rounded-2xl border border-border bg-gradient-card p-5 text-center transition-all hover:border-primary/30 hover:glow-blue"
          >
            <Wallet className="mx-auto mb-2 h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">Magazin & Donații</span>
          </Link>
          <Link
            to="/regulament"
            className="rounded-2xl border border-border bg-gradient-card p-5 text-center transition-all hover:border-primary/30 hover:glow-blue"
          >
            <Shield className="mx-auto mb-2 h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-foreground">Regulament</span>
          </Link>
          <button
            className="rounded-2xl border border-destructive/20 bg-gradient-card p-5 text-center transition-all hover:border-destructive/40"
          >
            <LogOut className="mx-auto mb-2 h-6 w-6 text-destructive" />
            <span className="text-sm font-medium text-destructive">Deconectare</span>
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="text-xs text-muted-foreground">
            ⚠️ Datele afișate sunt demonstrative. Conectează-te la server pentru date reale.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
