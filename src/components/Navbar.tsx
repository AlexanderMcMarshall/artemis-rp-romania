import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import artemisLogo from "@/assets/artemis-logo.png";

const navLinks = [
  { label: "Acasă", path: "/" },
  { label: "Regulament", path: "/regulament" },
  { label: "Magazin", path: "/shop" },
  { label: "Panou", path: "/dashboard" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={artemisLogo} alt="Artemis Romania" className="h-9 w-9" />
          <span className="font-display text-lg font-bold text-gradient-gold">
            Artemis Romania
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <Link
            to="/login"
            className="ml-4 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-gold"
          >
            Conectare
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background px-4 pb-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Conectare
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
