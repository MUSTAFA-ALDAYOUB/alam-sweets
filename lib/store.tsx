"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/config/site";
import { categories, products } from "@/data/catalog";
import { Button } from "@/components/ui";
import { quickHelloMessage, waLink } from "@/lib/whatsapp";

export default function HomePage() {
  const featured = products.filter((p) => p.badges?.includes("الأكثر طلبًا") && p.available !== false).slice(0, 6);

  const openWhatsApp = () => window.open(waLink(quickHelloMessage()), "_blank");

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/*  */}
      <section id="home" className="section pt-10">
        <div className="glass rounded-3xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/40 px-3 py-1 text-sm font-bold text-slate-700">
              {site.tradeName}
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              كاتالوج + طلب واتساب
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight">
              <span className="title-gradient">{site.brand}</span>
              <br />
              <span className="text-slate-900">حلاوة تليق بالمناسبة</span>
            </h1>

            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl">
              {site.slogan} — تصفح الأصناف والأسعار، ثم اطلب عبر واتساب خلال ثوانٍ.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products">
                <Button>تصفح الكاتالوج</Button>
              </Link>

              <Button variant="whatsapp" onClick={openWhatsApp}>
                اطلب عبر واتساب
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="section mt-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-black">الأقسام</h2>
          <p className="text-slate-600 mt-2">اختر القسم ثم تصفح المنتجات بسهولة.</p>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-sm font-extrabold title-gradient">{c.title}</div>
              <div className="text-sm text-slate-600 mt-2">{c.description}</div>

              <div className="mt-4">
                <Link href={`/products?cat=${c.id}`}>
                  <Button variant="secondary" className="w-full">
                    عرض أصناف {c.title}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="section mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">الأكثر طلبًا</h2>
            <p className="text-slate-600 mt-2">مختاراتنا السريعة… اطلبها عبر واتساب.</p>
          </div>
          <Link href="/products">
            <Button variant="secondary">عرض الكل</Button>
          </Link>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="glass rounded-2xl p-5"
            >
              <div className="text-lg font-extrabold">{p.name}</div>
              <div className="mt-2 text-sm text-slate-600">{p.description}</div>

              <div className="mt-4">
                <Button variant="whatsapp" className="w-full" onClick={openWhatsApp}>
                  اطلب عبر واتساب
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section mt-12 mb-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="glass rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black">تواصل</h2>
            <p className="mt-2 text-slate-600">جاهزين للطلبات والاستفسارات.</p>

            <div className="mt-5 grid gap-3 text-sm">
              <div className="glass rounded-2xl p-4">
                <div className="font-extrabold">العنوان</div>
                <div className="text-slate-600 mt-1">
                  {site.city} — {site.address}
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="whatsapp" onClick={openWhatsApp}>
                واتساب الآن
              </Button>
              <Link href="/products">
                <Button variant="secondary">الكاتالوج</Button>
              </Link>
            </div>
          </div>

          <div className="glass rounded-3xl overflow-hidden min-h-[320px]">
            {site.mapEmbedUrl ? (
              <iframe
                title="map"
                src={site.mapEmbedUrl}
                className="w-full h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-center p-8">
                <div>
                  <div className="font-extrabold">الخريطة (اختياري)</div>
                  <div className="text-sm text-slate-600 mt-2">
                    ضع رابط Google Maps Embed داخل <span className="font-mono">config/site.ts</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
