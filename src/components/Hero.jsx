import { MessageCircle, Phone } from 'lucide-react';

const whatsappNumber = '6281234567890'; // Ganti dengan nomor admin yang aktif
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin menanyakan info pendaftaran TPQ Sabilun Najah.')} `;

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50" />
      {/* subtle geometric pattern */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geo" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20H40M20 0V40" stroke="#94a3b8" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="3" fill="#94a3b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geo)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">TPQ Sabilun Najah • Leles, Karangtengah, Cianjur</span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Membentuk Generasi Cinta Al-Qur'an
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg leading-relaxed">
              Suasana belajar yang menyenangkan, ramah anak, dan tetap syar'i. Fokus pada Iqro'/Tilawati, Tahfidz Juz Amma, dan pembinaan akhlak Qur'ani.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pendaftaran" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-medium shadow-sm transition">
                <MessageCircle size={18} /> Info Pendaftaran
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-5 py-3 font-medium shadow-sm transition">
                <Phone size={18} /> Hubungi Kami
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">Metode</p>
                <p className="text-sm text-slate-600">Iqro'/Tilawati</p>
              </div>
              <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">Hafalan</p>
                <p className="text-sm text-slate-600">Juz Amma</p>
              </div>
              <div className="rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
                <p className="text-2xl font-bold text-emerald-700">Ramah</p>
                <p className="text-sm text-slate-600">Anak & Syari</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop"
                alt="Suasana belajar mengaji yang menyenangkan"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl bg-white/80 backdrop-blur p-4 shadow-lg ring-1 ring-slate-200">
                <p className="text-sm text-slate-600">Fokus: Pemberantasan buta huruf Hijaiyah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
