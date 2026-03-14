import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Gamepad2, ShoppingBag, LogIn } from "lucide-react";
import { useState } from "react";
import artemisLogo from "@/assets/artemis-logo.png";

const navLinks = [
  { label: "Acasă", path: "/" },
  { label: "Regulament", path: "/regulament" },
  { label: "Top Jucători", path: "/dashboard" },
  { label: "Cum să joci", path: "/regulament" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl">
      <div className="glass-strong rounded-2xl border border-border px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={artemisLogo} alt="Artemis Romania" className="h-8 w-8" />
          <div className="hidden sm:block">
            <span className="font-display text-base font-bold uppercase tracking-wider text-foreground">
              Artemis Roleplay
            </span>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground leading-none">
              Cel mai bun server roleplay
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path + link.label}
              to={link.path}
              className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                location.pathname === link.path
                  ? "glass text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-primary/40"
          >
            Discord <Gamepad2 size={16} />
          </a>
          <Link
            to="/shop"
            className="flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-primary/40"
          >
            Magazin <ShoppingBag size={16} />
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-blue"
          >
            Sign In <LogIn size={16} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-2 glass-strong rounded-2xl border border-border px-4 py-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path + link.label}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-border px-4 py-2.5 text-center text-sm text-muted-foreground"
            >
              Magazin
            </Link>
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Sign In
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
