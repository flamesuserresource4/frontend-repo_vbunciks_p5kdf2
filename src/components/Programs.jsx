import { Book, Sparkles, Target, CheckCircle2, BrainCircuit } from 'lucide-react';

const items = [
  {
    title: "Pembelajaran Iqro'/Tilawati",
    desc: 'Kemampuan membaca Al-Qur\'an dari dasar, pengenalan huruf Hijaiyah, makhraj, dan tartil.',
    icon: Book,
  },
  {
    title: 'Tahfidz Juz Amma',
    desc: 'Target hafalan bertahap dengan murojaah dan penyetoran rutin yang menyenangkan.',
    icon: Target,
  },
  {
    title: 'Dasar-dasar Tajwid',
    desc: 'Penguatan kaidah tajwid secara praktis agar bacaan semakin baik dan benar.',
    icon: CheckCircle2,
  },
  {
    title: 'Pelajaran Tambahan',
    desc: 'Fiqih dasar, Akidah Akhlak, Doa Harian, dan Sirah dengan pendekatan cerita dan games Islami.',
    icon: BrainCircuit,
  },
];

export default function Programs() {
  return (
    <section id="program" className="relative bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Program & Metode</h2>
          <p className="mt-3 text-slate-600">Kelas klasikal dan sorogan/privat, diselingi aktivitas kreatif agar belajar terasa ringan dan bermakna.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
              <div className="inline-flex rounded-lg bg-emerald-100 text-emerald-700 p-2 group-hover:scale-110 transition">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white text-emerald-700 p-2"><Sparkles size={18} /></div>
              <p className="text-emerald-900 font-medium">Pendekatan belajar: klasikal, setoran hafalan, dan games Islami.</p>
            </div>
            <a href="#pendaftaran" className="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm transition">Lihat Info Pendaftaran</a>
          </div>
        </div>
      </div>
    </section>
  );
}
