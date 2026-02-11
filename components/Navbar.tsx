"use client";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Sparkles, X, MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { Button, IconButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import { quickHelloMessage, waLink } from "@/lib/whatsapp";

const NAV = [
  { label: "الرئيسية", href: "/#home" },
  { label: "الكاتالوج", href: "/products" },
  { label: "تواصل", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const p = h > 0 ? (y / h) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openWhatsApp = () => window.open(waLink(quickHelloMessage()), "_blank");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition",
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)]">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">
  <Image
    src="/brand/mark.png"
    alt="logo"
    fill
    className="object-contain p-1.5"
    priority
  />
</span>

            <div className="leading-tight">
              <div className="font-extrabold bg-gradient-to-r from-rose-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
                {site.brand}
              </div>
              <div className="text-xs text-slate-600">{site.tradeName}</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-white/60 transition"
              >
                {it.label}
              </Link>
            ))}
            <Button variant="whatsapp" className="ms-2" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              اطلب عبر واتساب
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <Button variant="whatsapp" size="sm" onClick={openWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              واتساب
            </Button>
            <IconButton onClick={() => setOpen(true)} aria-label="فتح القائمة">
              <Menu className="h-5 w-5" />
            </IconButton>
          </div>
        </div>

        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-[2px] bg-gradient-to-r from-rose-500 via-fuchsia-500 to-emerald-500 transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute top-3 right-3 w-[88%] max-w-sm bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,.18),_0_20px_60px_rgba(2,6,23,.12)] rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold">{site.brand}</div>
              <IconButton onClick={() => setOpen(false)} aria-label="إغلاق">
                <X className="h-5 w-5" />
              </IconButton>
            </div>

            <div className="mt-3 grid gap-2">
              {NAV.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-white/70 transition"
                >
                  {it.label}
                </Link>
              ))}

              <Button variant="whatsapp" className="w-full" onClick={openWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                اطلب عبر واتساب
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
