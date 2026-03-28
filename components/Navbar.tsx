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
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-dark"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-3">
            <span className={cn("relative transition-all duration-300 rounded-xl flex items-center justify-center overflow-hidden", scrolled ? "h-12 w-28" : "h-14 w-32 bg-white/5 shadow-lg backdrop-blur-sm border border-[#d4af37]/20")}>
              <Image
                src="/brand/mark.png"
                alt="logo marker"
                fill
                className="object-contain p-1"
                priority
              />
            </span>

            <div className="leading-tight flex flex-col justify-center">
              <div className="font-extrabold text-lg title-gradient-gold tracking-wide">
                {site.brand}
              </div>
              <div className={cn("text-xs transition-colors duration-300", scrolled ? "text-[#d4af37]/70" : "text-[#1a2f23]")}>
                {site.tradeName}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {NAV.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  scrolled 
                    ? "text-[#fdfbf7] hover:text-[#d4af37] hover:bg-white/5" 
                    : "text-[#1a2f23] hover:text-[#d4af37] hover:bg-[#1a2f23]/5"
                )}
              >
                {it.label}
              </Link>
            ))}
            <Button variant="whatsapp" className="ms-4 rounded-full shadow-lg shadow-[#10b981]/20" onClick={openWhatsApp}>
              <MessageCircle className="h-5 w-5" />
              اطلب عبر واتساب
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <Button variant="whatsapp" size="sm" className="rounded-full" onClick={openWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              واتساب
            </Button>
            <IconButton 
              onClick={() => setOpen(true)} 
              aria-label="فتح القائمة"
              className={cn("transition-colors", scrolled ? "text-[#d4af37] hover:bg-white/10" : "text-[#1a2f23]")}
            >
              <Menu className="h-6 w-6" />
            </IconButton>
          </div>
        </div>

        <div className="h-[2px] w-full bg-transparent">
          <div
            className="h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-[#061a14]/60 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="absolute top-4 right-4 w-[90%] max-w-sm glass-dark rounded-3xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-lg font-extrabold title-gradient-gold">{site.brand}</div>
              <IconButton onClick={() => setOpen(false)} aria-label="إغلاق" className="text-[#d4af37] hover:bg-white/10">
                <X className="h-6 w-6" />
              </IconButton>
            </div>

            <div className="grid gap-3">
              {NAV.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-semibold text-[#fdfbf7] hover:text-[#d4af37] hover:bg-white/5 transition-all"
                >
                  {it.label}
                </Link>
              ))}

              <Button variant="whatsapp" className="w-full mt-4 rounded-2xl py-6" onClick={openWhatsApp}>
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
