"use client";
import Image from "next/image";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { categories, products } from "@/data/catalog";
import { Button } from "@/components/ui";
import { quickHelloMessage, waLink } from "@/lib/whatsapp";

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 mt-12 pb-20">
      {/* HERO */}
      
      <section id="home" className="section pt-10">
        <div className="glass-dark rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-2xl border border-[#d4af37]/20">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/brand/pattern.png')] opacity-5 pointer-events-none" />
          
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#d4af37]/20 blur-[80px] animate-[floaty_8s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#10b981]/10 blur-[80px] animate-[floaty_10s_ease-in-out_infinite_reverse]" />

          <div className="flex flex-col items-center text-center relative z-10">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              {/* إطار الشعار: تم تحويله لمستطيل عريض ليبرز الشعار ومحتواه بشكل ممتاز */}
              <div className="gold-frame transform transition-transform hover:scale-105 duration-500 w-[280px] h-[140px] sm:w-[480px] sm:h-[240px] mx-auto shadow-[0_15px_40px_rgba(26,47,35,0.4)]">
                <div className="gold-inner bg-[#1a2f23] flex items-center justify-center p-4 sm:p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/brand/logo.png"
                      alt="logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a2f23]/50 border border-[#d4af37]/30 px-5 py-2 text-sm font-bold text-[#fdfbf7] backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-pulse" />
                أهلاً بكم في عالم الحلويات
              </div>

              <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="title-gradient-gold drop-shadow-lg">عالم الحلويات</span>
                <br />
                <span className="text-[#fdfbf7] font-light mt-2 block text-2xl md:text-4xl text-shadow-sm">حلويات بدوي</span>
              </h1>

              <p className="mt-6 text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                {site.slogan} — تصفح أصنافنا الفاخرة، وأرسل طلبك عبر الواتساب بكل سهولة واحترافية.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto px-10 border-none shadow-[0_0_20px_rgba(212,175,55,0.3)] bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#1a2f23] hover:from-[#eec850] hover:to-[#d4af37]">تصفح الكاتالوج</Button>
                </Link>
                
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto px-10 shadow-[0_0_20px_rgba(18,140,126,0.3)]" onClick={() => window.open(waLink(quickHelloMessage()), "_blank")}>
                  تواصل معنا
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#d4af37]">
                <span className="bg-[#1a2f23]/80 border border-[#d4af37]/30 rounded-full px-5 py-2.5 backdrop-blur-md shadow-lg">✨ فستق حلبي فاخر</span>
                <span className="bg-[#1a2f23]/80 border border-[#d4af37]/30 rounded-full px-5 py-2.5 backdrop-blur-md shadow-lg">🎁 تغليف راقي</span>
                <span className="bg-[#1a2f23]/80 border border-[#d4af37]/30 rounded-full px-5 py-2.5 backdrop-blur-md shadow-lg">⚡ طلب سريع</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black title-gradient inline-block">الأقسام الفاخرة</h2>
          <p className="text-slate-500 mt-4 text-lg">اختر القسم لتتصفح أجود أنواع الحلويات</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6 rounded-full" />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-3xl p-6 group hover:border-[#d4af37]/50 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-[#1a2f23] to-[#d4af37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div className="text-xl font-extrabold text-[#1a2f23] mb-3">{c.title}</div>
              <div className="text-sm text-slate-600 leading-relaxed h-12">{c.description}</div>

              <div className="mt-6 pt-4 border-t border-slate-200/50">
                <Link href={`/products?cat=${c.id}`}>
                  <Button variant="outline" className="w-full group-hover:bg-[#1a2f23] group-hover:text-white group-hover:border-[#1a2f23]">
                    عرض الأصناف
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="section mt-24">
        <div className="flex items-end justify-between gap-4 mb-10 border-b border-slate-200/50 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black title-gradient">الأصناف المميزة</h2>
            <p className="text-slate-500 mt-3 text-lg">مختاراتنا السريعة من أجود الحلويات</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="hidden sm:inline-flex">عرض كل الكاتالوج</Button>
          </Link>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-3xl p-6 flex flex-col h-full group hover:shadow-[0_20px_40px_rgba(26,47,35,0.08)] transition-all duration-300 border border-slate-200/60 hover:border-[#d4af37]/40"
            >
              <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">{categories.find(c => c.id === p.category)?.title || "حلويات"}</div>
              <div className="mt-1 text-xl font-extrabold text-[#1a2f23] group-hover:text-[#2c4a38] transition-colors">{p.name}</div>
              <div className="mt-3 text-sm text-slate-600 flex-grow leading-relaxed">{p.description}</div>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <Link href="/products">
                  <Button className="w-full group-hover:shadow-lg transition-shadow">الذهاب للكاتالوج للطلب</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <Link href="/products">
            <Button variant="outline" className="w-full">عرض كل الكاتالوج</Button>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section mt-24 relative">
        <div className="glass-dark rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/brand/pattern.png')] opacity-10 pointer-events-none mix-blend-overlay" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black title-gradient-gold">عن {site.brand}</h2>
            <div className="w-16 h-1 mb-8 bg-[#d4af37] mx-auto mt-6 rounded-full" />
            
            <p className="mt-6 text-slate-200 text-lg md:text-xl leading-loose font-light">
              نحن نركز على الجودة، الشكل، والطعم المميز... ونقدم تشكيلة مختارة من الحلويات العربية الفاخرة والمعجنات بأفضل المكونات. نسعى دائماً لتقديم تجربة تليق بضيوفك ومناسباتك.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section mt-24 mb-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black title-gradient inline-block">تواصل معنا</h2>
          <p className="text-slate-500 mt-4 text-lg">نحن هنا لتلبية طلباتكم واستفساراتكم</p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass rounded-[30px] p-8 md:p-10 border border-[#d4af37]/20 shadow-xl">
            <h3 className="text-2xl font-bold text-[#1a2f23] mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">📞</span>
              معلومات التواصل
            </h3>

            <div className="grid gap-6">
              <div className="bg-[#fdfbf7] rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-[#1a2f23] text-lg mb-2">العنوان</div>
                <div className="text-slate-600 flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">📍</span>
                  {site.city} — {site.address}
                </div>
              </div>

              <div className="bg-[#fdfbf7] rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="font-bold text-[#1a2f23] text-lg mb-4">ساعات العمل</div>
                <div className="grid gap-3">
                  {site.hours.map((h) => (
                    <div key={h.label} className="flex items-center justify-between pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                      <span className="text-slate-600">{h.label}</span>
                      <span className="font-bold text-[#2c4a38] bg-[#1a2f23]/5 px-3 py-1 rounded-lg text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200/80 text-center">
              <Button size="lg" variant="whatsapp" className="w-full sm:w-auto px-12" onClick={() => window.open(waLink(quickHelloMessage()), "_blank")}>
                راسلنا على واتساب
              </Button>
            </div>
          </div>

          <div className="glass rounded-[30px] overflow-hidden min-h-[400px] border border-[#d4af37]/20 shadow-xl relative group">
            <div className="absolute inset-0 bg-[#1a2f23]/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10" />
            {site.mapEmbedUrl ? (
              <iframe
                title="map"
                src={site.mapEmbedUrl}
                className="w-full h-full min-h-[400px] border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center text-center p-8 bg-[#fdfbf7]">
                <div className="w-16 h-16 rounded-full bg-[#1a2f23]/10 flex items-center justify-center text-[#1a2f23] mb-4 text-2xl">🗺️</div>
                <div className="font-bold text-xl text-[#1a2f23]">موقعنا على الخريطة</div>
                <div className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
                  قم بإضافة رابط Google Maps في إعدادات الموقع <span className="font-mono bg-slate-100 px-2 py-1 rounded text-xs">config/site.ts</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
