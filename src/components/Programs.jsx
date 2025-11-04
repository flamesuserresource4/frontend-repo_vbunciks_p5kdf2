import { Book, Target, CheckCircle2, BrainCircuit, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    title: "Pembelajaran Iqro'/Tilawati",
    desc: "Kemampuan membaca Al-Qur'an dari dasar: pengenalan huruf Hijaiyah, makhraj, dan tartil.",
    icon: Book,
    accent: 'from-emerald-100 to-teal-50',
  },
  {
    title: 'Tahfidz Juz Amma',
    desc: 'Target hafalan bertahap dengan murojaah dan penyetoran rutin yang menyenangkan.',
    icon: Target,
    accent: 'from-sky-100 to-indigo-50',
  },
  {
    title: 'Dasar-dasar Tajwid',
    desc: 'Penguatan kaidah tajwid secara praktis agar bacaan semakin baik dan benar.',
    icon: CheckCircle2,
    accent: 'from-amber-100 to-orange-50',
  },
  {
    title: 'Pelajaran Tambahan',
    desc: 'Fiqih dasar, Akidah Akhlak, Doa Harian, dan Sirah dengan pendekatan cerita & games Islami.',
    icon: BrainCircuit,
    accent: 'from-rose-100 to-pink-50',
  },
];

export default function Programs() {
  return (
    <section id="program" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Program & Metode</h2>
          <p className="mt-3 text-slate-600">Belajar menyenangkan, bertahap, dan fokus pada hasil yang nyata untuk anak.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, desc, icon: Icon, accent }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`group rounded-2xl bg-gradient-to-b ${accent} p-6 ring-1 ring-slate-200/70 shadow-sm hover:shadow-md transition`}
            >
              <div className="inline-flex rounded-xl bg-white text-emerald-700 p-3 group-hover:scale-105 transition">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white text-emerald-700 p-2"><Sparkles size={18} /></div>
              <p className="text-emerald-900 font-medium">Pendekatan: klasikal, setoran hafalan, sorogan/privat, ditambah aktivitas kreatif.</p>
            </div>
            <a href="#pendaftaran" className="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition">Lihat Info Pendaftaran</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
