import Link from "next/link";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-extrabold text-lg bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
              {site.brand}
            </div>
            <div className="text-sm text-slate-600">
              {site.tradeName} • {site.slogan}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <Link className="hover:text-slate-900" href="/#categories">
              الأقسام
            </Link>
            <Link className="hover:text-slate-900" href="/products">
              الكاتالوج
            </Link>
            <Link className="hover:text-slate-900" href="/#contact">
              تواصل
            </Link>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.brand} — {site.tradeName}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
