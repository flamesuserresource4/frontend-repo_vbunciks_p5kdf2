import { BookOpenCheck, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tentang Kami</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              TPQ Sabilun Najah berdiri sebagai taman pendidikan Al-Qur'an di wilayah Leles, Karangtengah, Cianjur. Kami berkomitmen menghadirkan pembelajaran yang menyenangkan, terarah, dan berlandaskan akhlak Qur'ani.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2">
                  <BookOpenCheck size={18} />
                </div>
                <p className="text-slate-700"><span className="font-semibold">Visi:</span> Membentuk generasi yang cinta Al-Qur'an, terampil membaca dengan tartil, dan berakhlak mulia.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2">
                  <ShieldCheck size={18} />
                </div>
                <p className="text-slate-700"><span className="font-semibold">Misi:</span> Memberantas buta huruf Hijaiyah, menanamkan hafalan Juz Amma, dan membiasakan adab Islami sehari-hari.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                'https://images.unsplash.com/photo-1605693519155-5fefcf5a55d8?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=600&auto=format&fit=crop',
              ].map((src, i) => (
                <img key={i} src={src} alt="Galeri kegiatan TPQ" className="h-28 w-full object-cover rounded-lg shadow ring-1 ring-slate-200" />
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">Ustadz/Ustadzah</h3>
              <p className="mt-2 text-sm text-slate-600">Profil singkat pengajar untuk membangun kepercayaan.</p>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Ustadz Ahmad', role: 'Pembina Tajwid', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadzah Aisyah', role: 'Tahfidz Juz Amma', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadz Fajar', role: 'Metode Iqro\'', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
                  { name: 'Ustadzah Maryam', role: 'Adab & Doa Harian', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop' },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border border-slate-200 p-3">
                    <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.name}</p>
                      <p className="text-sm text-slate-600">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-emerald-700">
                <Users size={18} />
                <p className="text-sm">Pendampingan hangat, penuh motivasi, dan ramah anak.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
