import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="text-sm font-black text-white uppercase architectural-heading">
            THE LUMINESCENT ESTATE
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-10">
          <Link
            className="font-body text-[9px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary-container transition-colors"
            href="#"
          >
            The Void
          </Link>
          <Link
            className="font-body text-[9px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary-container transition-colors"
            href="#"
          >
            Archive
          </Link>
          <Link
            className="font-body text-[9px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary-container transition-colors"
            href="#"
          >
            Portal
          </Link>
          <Link
            className="font-body text-[9px] tracking-[0.3em] uppercase text-slate-500 hover:text-primary-container transition-colors"
            href="#"
          >
            Legal
          </Link>
        </nav>
        <div className="font-body text-[8px] text-slate-700 uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} ARCHITECTURAL ASCENSION GUARANTEED.
        </div>
      </div>
    </footer>
  );
}
