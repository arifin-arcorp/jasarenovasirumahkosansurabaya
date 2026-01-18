import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { companyInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Kontak() {
  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <Navbar />
      <FloatingWA />

      <div className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Konsultasi gratis 24 jam. Jangan ragu untuk bertanya, kami siap membantu solusi bangunan Anda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-l-4 border-l-primary shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telepon / WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Respon cepat 24 Jam</p>
                    <a href={`https://wa.me/${companyInfo.whatsapp}`} className="text-primary font-bold hover:underline block">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Alamat Kantor</h3>
                    <p className="text-muted-foreground">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Jam Operasional</h3>
                    <p className="text-muted-foreground">
                      {companyInfo.hours}
                    </p>
                    <p className="text-sm text-green-600 font-medium mt-1">Sedang Buka Sekarang</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Form Placeholder */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-muted rounded-xl overflow-hidden h-96 shadow-inner border border-border relative group">
               {/* Embed Google Maps */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.387979313276!2d112.7136973147746!3d-7.309999994723829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f94355555555%3A0x123456789abcdef!2sJl.+Ketegan+Barat+12!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen 
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Lokasi Arifin Pintujh"
                 className="grayscale hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg md:w-fit pointer-events-none">
                 <p className="font-bold text-sm">📍 Lokasi Kami di Sidoarjo Perbatasan Surabaya</p>
               </div>
             </div>

             <div className="bg-primary/5 p-8 rounded-xl border border-primary/20 text-center">
               <h3 className="text-2xl font-bold mb-4">Langsung Bicara dengan Pak Arifin?</h3>
               <p className="text-muted-foreground mb-6">Klik tombol di bawah ini untuk terhubung langsung ke WhatsApp pribadi owner tanpa perantara admin.</p>
               <Button size="lg" className="text-lg px-8" asChild>
                 <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
                   <Phone className="mr-2 h-5 w-5" /> Chat Owner Sekarang
                 </a>
               </Button>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
