import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import { Book, Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#beranda" className="inline-flex items-center gap-2 text-slate-900 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white"><Book size={18} /></span>
          TPQ Sabilun Najah
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#beranda" className="hover:text-emerald-700">Beranda</a>
          <a href="#tentang" className="hover:text-emerald-700">Tentang</a>
          <a href="#program" className="hover:text-emerald-700">Program</a>
          <a href="#pendaftaran" className="hover:text-emerald-700">Pendaftaran</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pendaftaran" className="hidden md:inline-flex rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-sm">Daftar Sekarang</a>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col gap-3 text-sm text-slate-700">
            <a onClick={() => setOpen(false)} href="#beranda" className="py-1">Beranda</a>
            <a onClick={() => setOpen(false)} href="#tentang" className="py-1">Tentang</a>
            <a onClick={() => setOpen(false)} href="#program" className="py-1">Program</a>
            <a onClick={() => setOpen(false)} href="#pendaftaran" className="py-1">Pendaftaran</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-6 items-center">
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-slate-800">TPQ Sabilun Najah</p>
          <p className="mt-1">Leles, Karangtengah, Cianjur</p>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
          <a href="#tentang" className="hover:text-emerald-700">Profil</a>
          <a href="#program" className="hover:text-emerald-700">Program</a>
          <a href="#pendaftaran" className="hover:text-emerald-700">Kontak</a>
        </div>
        <p className="text-sm text-slate-600 md:text-right">© {new Date().getFullYear()} TPQ Sabilun Najah</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
