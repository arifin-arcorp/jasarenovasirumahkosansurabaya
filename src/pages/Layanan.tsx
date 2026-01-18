import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { services, companyInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function Layanan() {
  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <Navbar />
      <FloatingWA />

      {/* Header */}
      <div className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Solusi konstruksi lengkap dari renovasi ringan hingga pembangunan total dengan standar profesional.
          </p>
        </div>
      </div>

      {/* Services Detail */}
      <div className="container mx-auto px-4 py-16 space-y-24">
        {services.map((service, idx) => (
          <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={service.image} alt={service.title} className="w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-muted text-primary px-3 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                <service.icon className="h-4 w-4" />
                Layanan #{idx + 1}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">{service.title}</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.description} Kami memastikan setiap detail dikerjakan dengan presisi tinggi menggunakan material terbaik sesuai budget Anda. Tim kami berpengalaman menangani berbagai tantangan di lapangan.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Gratis survei lokasi & konsultasi", "RAB transparan & detail", "Garansi hasil pekerjaan", "Update progres berkala"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-secondary/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" asChild>
                <a href={`https://wa.me/${companyInfo.whatsapp}?text=Saya%20tertarik%20dengan%20layanan%20${service.title}`} target="_blank" rel="noreferrer">
                  Konsultasi Layanan Ini <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
