import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import { companyInfo, assets } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Users, Clock } from "lucide-react";

export default function Tentang() {
  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <Navbar />
      <FloatingWA />

      <div className="bg-secondary text-secondary-foreground py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Lebih dari sekadar kontraktor, kami adalah mitra terpercaya Anda dalam membangun masa depan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase mb-3">Siapa Kami?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">ARIFIN PINTUJHDOTCOM</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Berawal dari pengalaman lapangan selama bertahun-tahun sebagai tukang bangunan mandiri, 
                Arifin mendirikan usaha ini dengan satu visi: <strong>Memberikan layanan konstruksi yang jujur, rapi, dan terjangkau</strong> bagi warga Surabaya dan Sidoarjo.
              </p>
              <p>
                Kami mengerti kekhawatiran Anda: tukang yang kerjanya asal-asalan, biaya yang membengkak, atau proyek yang ditinggal kabur. 
                Di sini, hal itu tidak akan terjadi. Kami bekerja dengan sistem transparan, di mana setiap rupiah yang Anda keluarkan tercatat jelas dalam RAB.
              </p>
              <p>
                Kini, kami telah menangani ribuan proyek mulai dari perbaikan atap bocor kecil hingga pembangunan kos-kosan bertingkat. 
                Kepercayaan Anda adalah amanah bagi kami.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="relative p-4 border-2 border-dashed border-primary/30 rounded-2xl">
               <img src={assets.hero} alt="Tim Arifin Pintujh" className="rounded-xl shadow-2xl w-full" />
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border hidden md:block">
                 <div className="text-4xl font-bold text-primary mb-1">{companyInfo.projects}</div>
                 <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Proyek Terselesaikan</div>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Amanah & Jujur", desc: "Tidak ada pengurangan spek material. Apa yang disepakati, itu yang dipasang." },
            { icon: Users, title: "Tim Ahli", desc: "Tukang kami bukan sembarang tukang, tapi tenaga ahli yang sudah terseleksi skill-nya." },
            { icon: Clock, title: "Tepat Waktu", desc: "Kami bekerja dengan target waktu yang jelas agar Anda bisa segera menempati hunian." },
            { icon: CheckCircle, title: "Bergaransi", desc: "Kami memberikan masa retensi (pemeliharaan) setelah proyek selesai." },
          ].map((item, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-muted/20">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
