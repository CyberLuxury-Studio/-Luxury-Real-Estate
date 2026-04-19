import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-[#131313]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer">
          <span className="material-symbols-outlined text-primary-container text-2xl group-hover:scale-110 transition-transform">
            architecture
          </span>
          <h1 className="font-headline tracking-[0.3em] uppercase text-lg font-bold text-primary-container drop-shadow-[0_0_10px_rgba(0,240,255,0.4)]">
            LUMINESCENT ESTATE
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-headline tracking-widest uppercase text-[10px] font-medium">
          <Link
            className="text-primary-container border-b border-primary-container pb-1 hover:text-white transition-colors"
            href="#"
          >
            EXPLORE
          </Link>
          <Link
            className="text-slate-400 hover:text-primary-container transition-colors"
            href="#"
          >
            BLUEPRINTS
          </Link>
          <Link
            className="text-slate-400 hover:text-primary-container transition-colors"
            href="#"
          >
            PORTAL
          </Link>
          <button className="bg-primary-container/5 border border-primary-container text-primary-container px-6 py-2 btn-glow transition-all duration-300 uppercase tracking-widest text-[10px] font-bold">
            RESERVE UNIT
          </button>
        </nav>
      </div>
    </header>
  );
}
