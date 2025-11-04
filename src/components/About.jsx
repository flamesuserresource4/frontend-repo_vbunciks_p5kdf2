import { BookOpenCheck, Users, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="tentang" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tentang Kami</h2>
          <p className="mt-3 text-slate-600">TPQ Sabilun Najah berkomitmen menghadirkan pembelajaran Al-Qur'an yang hangat, terarah, dan menyenangkan untuk anak-anak.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2">
                  <BookOpenCheck size={18} />
                </div>
                <p className="text-slate-700"><span className="font-semibold">Visi:</span> Membentuk generasi yang cinta Al-Qur'an, terampil membaca dengan tartil, dan berakhlak mulia.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2">
                  <HeartHandshake size={18} />
                </div>
                <p className="text-slate-700"><span className="font-semibold">Misi:</span> Memberantas buta huruf Hijaiyah, menanamkan hafalan Juz Amma, dan membiasakan adab Islami sehari-hari dengan teladan.</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">
                Suasana belajar ramah anak: kombinasi kelas klasikal, setoran hafalan, dan aktivitas kreatif.
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                'https://images.unsplash.com/photo-1605693519155-5fefcf5a55d8?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=600&auto=format&fit=crop',
              ].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt="Galeri kegiatan TPQ"
                  className="h-28 w-full object-cover rounded-lg shadow ring-1 ring-slate-200"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-2xl bg-gradient-to-b from-white to-slate-50 p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">Ustadz/Ustadzah</h3>
              <p className="mt-2 text-sm text-slate-600">Pengajar ramah, berpengalaman, dan telaten mendampingi santri.</p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Ustadz Ahmad', role: 'Pembina Tajwid', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadzah Aisyah', role: 'Tahfidz Juz Amma', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadz Fajar', role: "Metode Iqro'", img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadzah Maryam', role: 'Adab & Doa Harian', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop' },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-slate-200 p-3 bg-white hover:shadow-md transition"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-600">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-emerald-700">
                <Users size={18} />
                <p className="text-sm">Pendampingan personal, santun, dan memotivasi.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
