/**
 * Dentiva Clinic Config & Data Store
 * File ini menyimpan seluruh data terpersonalisasi yang dapat diubah manual atau via script otomasi per klinik.
 */

const CLINIC_CONFIG = {
  // Metadata & Kontak Utama Klinik
  clinicName: "Dentiva",
  tagline: "Klinik Gigi Modern & Terpercaya",
  heroSubtitle: "Menyediakan perawatan gigi berkualitas, bebas rasa takut, dan ramah kantong untuk kesehatan gigi seluruh keluarga Anda.",
  phone: "+62 851-5068-8320",
  whatsappNumber: "6285150688320",
  address: "Jl. Raya Utama No. 45, Kota",
  operatingHours: "Senin - Sabtu: 09:00 - 20:00 WIB | Minggu: Tutup",

  // Statistik & Metrics Counter (Bisa diganti per klinik)
  patientCount: "500+",
  patientCountTarget: 500,
  doctorCount: "3+",
  doctorCountTarget: 3,
  experienceYears: "8+",
  experienceYearsTarget: 8,
  satisfactionRate: "99%",
  satisfactionRateTarget: 99,

  // Data Tim Dokter & Jadwal Praktik
  doctors: [
    {
      id: "bayu",
      name: "drg. Bayu Saputra, Sp.BM",
      specialty: "Spesialis Bedah Mulut",
      badge: "Spesialis Implan & Bedah",
      experience: "Pengalaman 8+ Tahun • Spesialis Bedah Mulut",
      description: "Melayani pencabutan gigi bungsu, bedah mulut ringan, dan perawatan restorasi gigi dengan ramah dan nyaman.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop",
      schedule: [
        { day: "Senin - Jumat", time: "09:00 - 16:00 WIB" },
        { day: "Sabtu", time: "09:00 - 13:00 WIB" },
        { day: "Minggu", time: "Tutup" }
      ]
    },
    {
      id: "ayu",
      name: "drg. Ayu Lestari, Sp.Ort",
      specialty: "Spesialis Ortodonti",
      badge: "Spesialis Behel Gigi",
      experience: "Pengalaman 6+ Tahun • Spesialis Behel Gigi",
      description: "Berpengalaman dalam merapikan posisi gigi dengan behel konvensional maupun behel estetika untuk usia remaja dan dewasa.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop",
      schedule: [
        { day: "Senin - Jumat", time: "13:00 - 20:00 WIB" },
        { day: "Sabtu", time: "10:00 - 15:00 WIB" },
        { day: "Minggu", time: "Tutup" }
      ]
    },
    {
      id: "nadia",
      name: "drg. Nadia Putri, Sp.KG",
      specialty: "Spesialis Konservasi Gigi",
      badge: "Spesialis Penambalan Gigi",
      experience: "Pengalaman 7+ Tahun • Spesialis Penambalan & Saluran Akar",
      description: "Berfokus pada perawatan penambalan gigi estetis, perawatan saluran akar, dan perawatan gigi berlubang agar gigi asli tetap terjaga.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop",
      schedule: [
        { day: "Senin - Jumat", time: "09:00 - 17:00 WIB" },
        { day: "Sabtu", time: "09:00 - 14:00 WIB" },
        { day: "Minggu", time: "Tutup" }
      ]
    }
  ],

  // Data Testimoni Pasien (Gaya Kasual & Natural Indonesia)
  testimonials: [
    {
      id: 1,
      name: "Siti Rahma",
      treatment: "Scaling & Tambal Gigi",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop",
      text: "Dulu paling takut kalau harus ke dokter gigi, tapi drg. Bayu dan timnya ramah banget. Pembersihan karang giginya halus dan penjelasannya mudah dimengerti!"
    },
    {
      id: 2,
      name: "Ahmad Fauzi",
      treatment: "Behel Konvensional",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop",
      text: "Pasang behel di Dentiva hasilnya memuaskan banget. Dokternya telaten, harganya masuk akal, dan bisa reservasi jadwal lewat WhatsApp tanpa perlu antre lama."
    },
    {
      id: 3,
      name: "Dewi Anggraini",
      treatment: "Perawatan Saluran Akar",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop",
      text: "Sakit gigi yang menyiksa langsung hilang setelah ditangani drg. Nadia. Prosedurnya nyaman dan penanganannya cepat. Sangat direkomendasikan!"
    },
    {
      id: 4,
      name: "Budi Santoso",
      treatment: "Pemutihan Gigi (Bleaching)",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop",
      text: "Hasil bleaching giginya kelihatan alami banget dan gak bikin gigi ngilu. Kliniknya bersih, nyaman, dan pelayanan dari stafnya juara."
    }
  ],

  // Layanan Gigi Relevan Klinik UMKM
  services: [
    {
      id: "scaling",
      category: "general",
      categoryLabel: "Perawatan Umum",
      title: "Scaling Gigi & Pembersihan Karang",
      priceLabel: "Mulai Rp 150 Rb",
      startingPrice: 150000,
      description: "Pembersihan karang gigi dan plak secara menyeluruh menggunakan teknologi ultrasound scaling yang nyaman dan aman untuk gusi.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&auto=format&fit=crop"
    },
    {
      id: "braces",
      category: "ortho",
      categoryLabel: "Ortodonti",
      title: "Behel Konvensional & Perataan Gigi",
      priceLabel: "Mulai Rp 3,5 Jt",
      startingPrice: 3500000,
      description: "Perawatan behel gigi logam/estetis untuk merapikan susunan gigi dengan hasil optimal dan kontrol berkala yang teratur.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop"
    },
    {
      id: "extraction",
      category: "surgery",
      categoryLabel: "Bedah Mulut",
      title: "Cabut Gigi & Bedah Mulut Ringan",
      priceLabel: "Mulai Rp 250 Rb",
      startingPrice: 250000,
      description: "Tindakan pencabutan gigi berlubang atau gigi bungsu yang aman, higienis, dan minim rasa sakit oleh dokter berpengalaman.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&auto=format&fit=crop"
    },
    {
      id: "filling",
      category: "general",
      categoryLabel: "Perawatan Umum",
      title: "Tambal Gigi Komposit Estetis",
      priceLabel: "Mulai Rp 200 Rb",
      startingPrice: 200000,
      description: "Penambalan gigi berlubang dengan bahan komposit warna alami yang kuat, tahan lama, dan menyatu dengan warna asli gigi.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=500&auto=format&fit=crop"
    },
    {
      id: "whitening",
      category: "cosmetic",
      categoryLabel: "Estetika Gigi",
      title: "Pemutihan Gigi (Bleaching)",
      priceLabel: "Mulai Rp 1,2 Jt",
      startingPrice: 1200000,
      description: "Perawatan bleaching gigi aman untuk mencerahkan warna gigi yang kusam agar tampil lebih bersih dan percaya diri.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop"
    },
    {
      id: "pediatric",
      category: "general",
      categoryLabel: "Perawatan Umum",
      title: "Perawatan Gigi Anak & Pencegahan",
      priceLabel: "Mulai Rp 150 Rb",
      startingPrice: 150000,
      description: "Pemeriksaan dan perawatan preventif khusus anak dengan penanganan yang lembut dan ramah agar anak tidak takut berobat gigi.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop"
    }
  ],

  // Data Kalkulator Estimasi Biaya (Indonesian Market UMKM Prices IDR)
  estimator: {
    scaling: {
      name: "Scaling Gigi & Pembersihan Karang",
      basePriceMin: 150000,
      basePriceMax: 350000,
      duration: "1 Sesi (30-45 Menit)"
    },
    filling: {
      name: "Tambal Gigi Komposit Estetis",
      basePriceMin: 200000,
      basePriceMax: 450000,
      duration: "1 Sesi (45 Menit)"
    },
    extraction: {
      name: "Cabut Gigi (Eksodontia)",
      basePriceMin: 250000,
      basePriceMax: 600000,
      duration: "1 Sesi (30-60 Menit)"
    },
    braces: {
      name: "Behel Konvensional (Behel Gigi)",
      basePriceMin: 3500000,
      basePriceMax: 6500000,
      duration: "Pemasangan + Kontrol Rutin"
    },
    whitening: {
      name: "Pemutihan Gigi (Bleaching)",
      basePriceMin: 1200000,
      basePriceMax: 2500000,
      duration: "1 Sesi (60 Menit)"
    }
  }
};

if (typeof window !== 'undefined') {
  window.CLINIC_CONFIG = CLINIC_CONFIG;
}
