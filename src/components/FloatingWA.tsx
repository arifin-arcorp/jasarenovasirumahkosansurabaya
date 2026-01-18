import { MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/content";

export default function FloatingWA() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp}?text=Halo%20Pak%20Arifin,%20saya%20mau%20konsultasi%20renovasi.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-xl hover:bg-[#128C7E] transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Chat WhatsApp"
    >
      <MessageSquare className="h-6 w-6 fill-current" />
      <span className="font-bold hidden group-hover:block animate-in fade-in slide-in-from-right-2 duration-300">
        Chat Sekarang
      </span>
    </a>
  );
}
