import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-gradient-gold mb-3">
              Artemis Romania
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cel mai imersiv server de GTA V Roleplay din România. Intră în poveste.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Navigare</h4>
            <div className="space-y-2">
              <Link to="/regulament" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Regulament</Link>
              <Link to="/shop" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Magazin</Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Panou Jucător</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Comunitate</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">FiveM Connect</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Artemis Romania. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
