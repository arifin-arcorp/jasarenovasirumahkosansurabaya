import { companyInfo } from "@/data/content";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{companyInfo.name}</h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Solusi renovasi rumah dan kosan terpercaya di Surabaya & Sidoarjo. 
              Mengutamakan kualitas, transparansi, dan kepuasan pelanggan dengan harga kompetitif.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <a href="https://www.facebook.com/pintujhdotcom" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/pintujhdotcom" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Menu Cepat</h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Layanan Kami", href: "/layanan" },
                { name: "Galeri Proyek", href: "/galeri" },
                { name: "Tentang Kami", href: "/tentang" },
                { name: "Hubungi Kami", href: "/kontak" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="text-secondary-foreground/80 hover:text-primary transition-colors hover:pl-2 duration-200 block">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Layanan Utama</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li>Renovasi Rumah Total</li>
              <li>Bangun & Renovasi Kos</li>
              <li>Tukang Bangunan Panggilan</li>
              <li>Perbaikan Atap & Bocor</li>
              <li>Pemasangan Keramik/Granit</li>
              <li>Pengecatan Interior/Eksterior</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Kontak & Alamat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-secondary-foreground/80">{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-secondary-foreground/80 hover:text-primary">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span className="text-secondary-foreground/80">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
