import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { companyInfo, assets, services, testimonials, advantages } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, Quote, Phone, MapPin, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <FloatingWA />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.hero}
            alt="Renovasi Rumah Surabaya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Star className="w-4 h-4 fill-current" />
              <span>Jasa Renovasi Terpercaya No.1 di Surabaya & Sidoarjo</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow-lg">
              BANGUN & RENOVASI RUMAH KOSAN <span className="text-primary block md:inline">TANPA PUSING</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-relaxed">
              Spesialis renovasi rumah, kosan, dan bangunan komersial. 
              <span className="font-bold text-primary ml-1">GRATIS DESAIN</span> & Konsultasi. 
              Hasil rapi, biaya transparan, dan bergaransi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform" asChild>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
                  <Phone className="mr-2 h-5 w-5" /> Konsultasi Gratis
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
                <Link href="/galeri">Lihat Hasil Kerja</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-primary py-8 relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground divide-x divide-primary-foreground/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">4.9 ⭐</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-sm opacity-90">Ulasan Positif</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-sm opacity-90">dari 6 klien puas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24 Jam</div>
              <div className="text-sm opacity-90">Siap Melayani</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-3">Layanan Kami</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              <a href="https://jasarenovasirumahsemua.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                Solusi Bangunan Lengkap
              </a>
            </h3>
            <p className="text-muted-foreground text-lg">
              Apapun kebutuhan bangunan Anda, dari perbaikan kecil hingga bangun baru, kami siap kerjakan dengan standar kualitas tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <CardContent className="p-6 relative bg-card">
                  <div className="absolute -top-10 right-6 bg-primary text-primary-foreground p-3 rounded-lg shadow-lg group-hover:-translate-y-2 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/layanan">
                    <a className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                      Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-widest uppercase mb-3">Kenapa Memilih Kami?</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Bukan Sekadar Janji, Tapi Bukti Nyata</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg h-fit text-primary">
                      <adv.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-2">{adv.title}</h4>
                      <p className="text-secondary-foreground/70 text-sm leading-relaxed">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90" asChild>
                  <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
                    Tanya Estimasi Biaya
                  </a>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                 <img src={assets.worker} alt="Construction Worker" className="w-full object-cover" />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                   <p className="text-white font-bold text-xl">"Kualitas adalah prioritas kami. Tidak ada kompromi untuk keamanan bangunan Anda."</p>
                   <p className="text-primary mt-2">- Arifin, Founder</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-3">Testimoni</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Kata Mereka Tentang Kami</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testi, idx) => (
              <Card key={idx} className="bg-muted/30 border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("h-4 w-4 fill-current", i >= Math.floor(testi.rating) && "text-gray-300 fill-gray-300")} />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testi.text}"</p>
                  <div>
                    <h4 className="font-bold text-secondary">{testi.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{testi.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mewujudkan Hunian Impian?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan renovasi Anda sekarang. Dapatkan penawaran terbaik dan desain gratis khusus bulan ini.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" /> Chat WhatsApp
              </a>
            </Button>
             <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href={`tel:${companyInfo.phone}`}>
                <Phone className="mr-2 h-5 w-5" /> Telepon Langsung
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
