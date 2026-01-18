import { HandMetal, Home, PaintBucket, Hammer, CheckCircle, MapPin, Phone, MessageSquare, Clock, ShieldCheck, Star, FileText } from "lucide-react";

import heroImg from "@/assets/image_w1376_h768_hero_renovation.jpeg";
import kosanImg from "@/assets/image_w1200_h896_service_kosan.jpeg";
import workerImg from "@/assets/image_w1200_h896_service_worker.jpeg";
import livingImg from "@/assets/image_w1200_h896_gallery_livingroom.jpeg";
import logoImg from "@/assets/logo_custom.png";

export const companyInfo = {
  name: "ARIFIN PINTUJHDOTCOM",
  shortName: "ARIFIN PINTUJH",
  tagline: "Jasa Renovasi Rumah & Kosan Surabaya Sidoarjo (FREE DESAIN)",
  phone: "083834418700",
  whatsapp: "6283834418700",
  address: "Jl. Ketegan Barat 12, RT 3 RW 1, Taman, Sidoarjo 61257",
  area: "Surabaya, Sidoarjo, dan seluruh Indonesia",
  rating: 4.9,
  reviews: 1137,
  projects: "9.500+",
  hours: "Buka 24 Jam",
  mapUrl: "https://www.google.com/maps/place/Jl.+Ketegan+Barat+12,+Taman,+Sidoarjo",
};

export const assets = {
  hero: heroImg,
  kosan: kosanImg,
  worker: workerImg,
  living: livingImg,
  logo: logoImg,
};

export const services = [
  {
    id: "renovasi-rumah",
    title: "Renovasi Rumah Tinggal",
    description: "Layanan renovasi total atau sebagian untuk hunian Anda. Mulai dari perbaikan atap, lantai, hingga penambahan ruangan.",
    icon: Home,
    image: livingImg,
  },
  {
    id: "renovasi-kos",
    title: "Renovasi & Bangun Kos",
    description: "Spesialis kos-kosan hemat biaya tapi awet. Desain efisien untuk memaksimalkan jumlah kamar dan pendapatan sewa.",
    icon:  ShieldCheck,
    image: kosanImg,
  },
  {
    id: "tukang-panggilan",
    title: "Tukang Bangunan Panggilan",
    description: "Butuh perbaikan kecil? Tukang kami siap datang untuk perbaikan bocor, cat ulang, pasang keramik, dan lainnya.",
    icon: Hammer,
    image: workerImg,
  },
  {
    id: "finishing",
    title: "Perbaikan Struktural & Finishing",
    description: "Pekerjaan detail mulai dari pengecatan, plafon gypsum, pagar, kanopi, hingga instalasi listrik dan air.",
    icon: PaintBucket,
    image: heroImg,
  },
];

export const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Kos di Sidoarjo",
    text: "Pengerjaan kosan saya di Waru sangat rapi dan cepat. Mas Arifin kasih desain gratis yang bikin tata letak kamar jadi lebih banyak. Sangat puas!",
    rating: 5,
  },
  {
    name: "Siti Aminah",
    role: "Ibu Rumah Tangga, Surabaya",
    text: "Awalnya ragu cari tukang online, tapi Arifin Pintujh membuktikan kualitasnya. Renovasi dapur selesai tepat waktu dan budget transparan.",
    rating: 5,
  },
  {
    name: "Hendro Wijaya",
    role: "Developer Perumahan",
    text: "Tim yang solid dan profesional. Bisa diajak diskusi soal budget dan material. Hasil finishingnya halus banget untuk harga segini.",
    rating: 4.8,
  },
];

export const advantages = [
  {
    title: "9.500+ Foto Proyek Nyata",
    description: "Kami tidak pakai foto stok. Semua dokumentasi adalah hasil kerja keras tim kami di lapangan.",
    icon: CheckCircle,
  },
  {
    title: "Gratis Desain & Konsultasi",
    description: "Bingung mulai dari mana? Kami buatkan desain denah dan 3D gratis sebelum deal proyek.",
    icon: HandMetal, // Using generic abstract icon
  },
  {
    title: "Biaya Transparan",
    description: "RAB detail di awal. Tidak ada biaya siluman di tengah jalan. Bisa sesuaikan dengan budget Anda.",
    icon: FileText, // Will verify import
  },
  {
    title: "Garansi Pemeliharaan",
    description: "Kami memberikan garansi retensi untuk memastikan hasil pekerjaan benar-benar aman dan awet.",
    icon: ShieldCheck,
  },
];


