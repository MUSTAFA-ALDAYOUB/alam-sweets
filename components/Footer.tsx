import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="glass-dark border border-[#d4af37]/20 shadow-xl rounded-[30px] p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/brand/pattern.png')] opacity-5 pointer-events-none mix-blend-overlay" />
          
          <div className="text-center md:text-right relative z-10">
            <div className="font-extrabold text-2xl title-gradient-gold mb-1">
              {site.brand}
            </div>
            <div className="text-sm text-[#d4af37]/80 font-medium">
              {site.tradeName} <span className="mx-2 opacity-50">•</span> {site.slogan}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-[#fdfbf7] relative z-10">
            <Link className="hover:text-[#d4af37] transition-colors" href="/#categories">
              الأقسام
            </Link>
            <Link className="hover:text-[#d4af37] transition-colors" href="/products">
              الكاتالوج
            </Link>
            <Link className="hover:text-[#d4af37] transition-colors" href="/#contact">
              تواصل معنا
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm font-medium text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-[#d4af37]">{site.brand}</span> — {site.tradeName}. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-1.5 mt-2 opacity-80 hover:opacity-100 transition-opacity">
            <span>تطوير وبرمجة:</span>
            <a href="https://wa.me/963968804006" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] font-bold hover:underline" dir="ltr">
              ENG.Mustafa AL-Dayoub
            </a>
            <span className="text-xs">💻</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
