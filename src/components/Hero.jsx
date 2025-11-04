import { MessageCircle, Phone, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '6281234567890'; // Ganti dengan nomor admin yang aktif
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Assalamu’alaikum, saya ingin menanyakan info pendaftaran TPQ Sabilun Najah.')} `;

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_20%_0%,#ecfdf5_0%,#eff6ff_45%,#fff7ed_100%)]" />

      {/* Subtle Islamic pattern */}
      <div className="absolute inset-0 opacity-[0.08] select-none pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M18 0v36M0 18h36" stroke="#0ea5e9" strokeWidth="0.5" />
              <circle cx="18" cy="18" r="2.5" fill="#059669" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <ShieldCheck size={14} /> TPQ Sabilun Najah • Leles, Karangtengah, Cianjur
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Membentuk Generasi Cinta Al-Qur'an
            </h1>
            <p className="mt-4 text-slate-700 md:text-lg leading-relaxed max-w-xl">
              Belajar mengaji yang hangat dan menyenangkan. Fokus pada Iqro'/Tilawati, Tahfidz Juz Amma, tajwid, serta pembiasaan adab Islami.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pendaftaran" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold shadow-sm transition">
                <MessageCircle size={18} /> Info Pendaftaran
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 font-semibold shadow-sm transition">
                <Phone size={18} /> Hubungi Admin
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-center">
              {[
                { title: 'Metode', desc: "Iqro'/Tilawati" },
                { title: 'Hafalan', desc: 'Juz Amma' },
                { title: 'Suasana', desc: 'Ramah & Syari' },
              ].map((i) => (
                <motion.div
                  key={i.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl bg-white/80 backdrop-blur p-5 shadow-sm ring-1 ring-slate-200"
                >
                  <p className="text-2xl font-bold text-emerald-700">{i.title}</p>
                  <p className="text-sm text-slate-600">{i.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop"
                alt="Suasana belajar mengaji yang menyenangkan"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-6 -left-6 hidden md:block"
            >
              <div className="rounded-2xl bg-white/90 backdrop-blur p-4 shadow-lg ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-amber-600">
                  <Star size={16} />
                  <p className="text-sm font-medium">Fokus: Menguatkan huruf Hijaiyah & tartil</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden>
        <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 64C240 16 480 16 720 64C960 112 1200 112 1440 64V80H0V64Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
