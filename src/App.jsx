import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import { Book, Home } from 'lucide-react';

function Navbar() {
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
        <a href="#pendaftaran" className="md:inline-flex hidden rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-medium shadow-sm">Daftar Sekarang</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} TPQ Sabilun Najah • Leles, Karangtengah, Cianjur</p>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#tentang" className="hover:text-emerald-700">Profil</a>
          <a href="#program" className="hover:text-emerald-700">Program</a>
          <a href="#pendaftaran" className="hover:text-emerald-700">Kontak</a>
        </div>
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
