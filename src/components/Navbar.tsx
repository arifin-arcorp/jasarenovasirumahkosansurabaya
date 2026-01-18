import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo, assets } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "/layanan" },
    { name: "Galeri", href: "/galeri" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-border" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            {/* Fallback to text if logo fails to load properly, but we use image here */}
            <div className="h-12 w-auto bg-white p-1 rounded-md overflow-hidden">
             <img src={assets.logo} alt="Arifin Pintujh Logo" className="h-full w-auto object-contain" />
            </div>
            <span className={cn("font-heading font-bold text-xl hidden sm:block", scrolled ? "text-foreground" : "text-white")}>
              {companyInfo.shortName}
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium uppercase tracking-wider hover:text-primary transition-colors",
                  location === link.href ? "text-primary font-bold" : "",
                  !scrolled && location !== link.href ? "text-white/90 hover:text-white" : ""
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button variant={scrolled ? "default" : "secondary"} size="sm" asChild>
            <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "block text-base font-medium py-2 px-4 rounded-md hover:bg-muted",
                  location === link.href ? "text-primary bg-muted/50" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="w-full" asChild>
             <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
              <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
