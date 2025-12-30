import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">
             Barkaas
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience the finest Arabian cuisine in an atmosphere of timeless
              elegance. A culinary journey through the Middle East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Our Menu", path: "/menu" },
                { name: "Book a Table", path: "/book" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-gold mt-1 shrink-0" />
                <span>123 Arabian Way, Dubai Marina, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-gold shrink-0" />
                <span>info@alqasr.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-gold mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Clock size={18} className="text-gold mt-1 shrink-0" />
                <div>
                  <p>Mon - Thu: 12:00 PM - 11:00 PM</p>
                  <p>Fri - Sun: 12:00 PM - 12:00 AM</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()}Barkaas Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
