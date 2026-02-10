import { Sun } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Sun className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                Solar<span className="text-secondary">Kraft</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Jaipur's trusted solar energy partner — delivering smart, sustainable solutions for homes, farms, and industries.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {["Home", "Services", "Solutions", "Why Us", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-secondary">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Residential Solar",
                "Agricultural Solar",
                "Commercial & Industrial",
                "Rooftop Solutions",
                "Ground Mount Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-primary-foreground/60"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} SolarKraft. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Crown Plaza, Amrapali Marg, Vaishali Nagar, Jaipur, Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
