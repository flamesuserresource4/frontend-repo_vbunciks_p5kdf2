import { MapPin, Phone, MessageCircle, Clock, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const whatsappNumber = '6281234567890'; // Ganti dengan nomor admin yang aktif
const whatsappText = encodeURIComponent('Assalamu’alaikum, saya ingin menanyakan info pendaftaran TPQ Sabilun Najah.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function Contact() {
  return (
    <section id="pendaftaran" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pendaftaran & Kontak</h2>
            <p className="mt-3 text-slate-600">Hubungi kami untuk informasi kuota, jadwal, dan syarat pendaftaran. Respon cepat via WhatsApp.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2"><Clock size={18} /></div>
                <p className="text-slate-700"><span className="font-semibold">Jadwal Belajar:</span> Setiap sore (Senin–Jumat), pukul 16.00–17.30 WIB.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2"><CreditCard size={18} /></div>
                <p className="text-slate-700"><span className="font-semibold">Biaya:</span> Transparan dan terjangkau. Rincian disampaikan saat pendaftaran.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-md bg-emerald-100 text-emerald-700 p-2"><MessageCircle size={18} /></div>
                <p className="text-slate-700"><span className="font-semibold">Alur:</span> Isi data singkat via WhatsApp, pilih jadwal, lalu hadir ke lokasi untuk verifikasi.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold shadow-sm transition">
                <MessageCircle size={18} /> Chat WhatsApp Admin
              </a>
              <a href="tel:+62-812-3456-7890" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-5 py-3 font-semibold shadow-sm transition">
                <Phone size={18} /> 0812-3456-7890
              </a>
            </div>

            <div className="mt-8 rounded-xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-emerald-200">
              <p className="text-sm">Kami menjaga privasi dan aurat santri dalam dokumentasi kegiatan. Orang tua dapat meminta dokumentasi khusus bila diperlukan.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <iframe
                title="Peta Lokasi TPQ Sabilun Najah"
                src="https://www.google.com/maps?q=Leles,Karangtengah,Cianjur&output=embed"
                className="w-full h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="rounded-md bg-emerald-100 text-emerald-700 p-2"><MapPin size={18} /></div>
              <p className="text-slate-700">Alamat: Leles, Karangtengah, Cianjur, Jawa Barat.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp for mobile */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 shadow-lg md:hidden"
      >
        <MessageCircle size={18} /> Daftar
      </a>
    </section>
  );
}
