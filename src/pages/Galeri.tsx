import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { assets, companyInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Galeri() {
  const [activeTab, setActiveTab] = useState("all");

  // Mocking more images by reusing the ones we have
  const projects = [
    { id: 1, title: "Renovasi Rumah Minimalis", category: "rumah", image: assets.living, loc: "Surabaya Timur" },
    { id: 2, title: "Pembangunan Kos 20 Kamar", category: "kos", image: assets.kosan, loc: "Waru, Sidoarjo" },
    { id: 3, title: "Perbaikan Atap & Plafon", category: "perbaikan", image: assets.worker, loc: "Rungkut" },
    { id: 4, title: "Renovasi Tampak Depan", category: "rumah", image: assets.hero, loc: "Citraland" },
    { id: 5, title: "Interior Kamar Kos Eksklusif", category: "kos", image: assets.kosan, loc: "Gubeng" },
    { id: 6, title: "Finishing Lantai Granit", category: "finishing", image: assets.living, loc: "Sidoarjo Kota" },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <Navbar />
      <FloatingWA />

      <div className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Proyek</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Bukti nyata hasil kerja keras tim kami di lapangan. Tanpa rekayasa, 100% proyek asli.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">Semua</TabsTrigger>
              <TabsTrigger value="rumah">Rumah</TabsTrigger>
              <TabsTrigger value="kos">Kos</TabsTrigger>
              <TabsTrigger value="finishing">Lainnya</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                    {project.loc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Tabs>

        <div className="text-center mt-12 bg-muted/50 p-8 rounded-xl border border-dashed border-primary/30">
          <h3 className="text-xl font-bold text-secondary mb-2">Ingin Lihat Lebih Banyak?</h3>
          <p className="text-muted-foreground mb-6">Kami memiliki 9.500+ dokumentasi foto proyek lainnya di database kami.</p>
          <Button asChild>
            <a href={`https://wa.me/${companyInfo.whatsapp}?text=Boleh%20lihat%20portfolio%20proyek%20lainnya?`} target="_blank" rel="noreferrer">
              Minta Foto Proyek Via WhatsApp
            </a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
