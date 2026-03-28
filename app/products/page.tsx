"use client";

import Image from "next/image";
import { Suspense, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, MessageCircle, Filter, LayoutGrid } from "lucide-react";

import { categories, products, type CategoryId } from "@/data/catalog";
import { Button, Chip, Input } from "@/components/ui";
import { quickHelloMessage, waLink } from "@/lib/whatsapp";

function categoryTitle(id: CategoryId) {
  return categories.find((c) => c.id === id)?.title ?? "القسم غير معروف";
}

function categoryDescription(id: CategoryId) {
  return categories.find((c) => c.id === id)?.description ?? "تصفح منتجات هذا القسم";
}

function ProductsClient() {
  const [q, setQ] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const catParam = (searchParams.get("cat") as CategoryId | null) ?? "arabic";
  const [cat, setCat] = useState<CategoryId>(catParam);

  useEffect(() => setCat(catParam), [catParam]);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return products
      .filter((p) => p.category === cat)
      .filter((p) => {
        if (!qq) return true;
        return (p.name + " " + p.description).toLowerCase().includes(qq);
      });
  }, [cat, q]);

  const setCategory = (next: CategoryId) => {
    setCat(next);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("cat", next);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 pb-24">
      <section className="section pt-6">
        <div className="glass-dark rounded-[30px] p-6 md:p-10 overflow-hidden relative shadow-xl border border-[#d4af37]/20">
          <div className="absolute inset-0 bg-[url('/brand/pattern.png')] opacity-5 pointer-events-none mix-blend-overlay" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#d4af37]/20 blur-[80px]" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#1a2f23]/80 blur-[80px]" />

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1a2f23]/60 border border-[#d4af37]/30 px-4 py-1.5 text-sm font-bold text-[#d4af37] backdrop-blur-md mb-4 shadow-lg">
                <LayoutGrid className="h-4 w-4" />
                القائمة الكاملة
              </div>

              <h1 className="text-3xl md:text-5xl font-black">
                <span className="title-gradient-gold">الكاتالوج الفاخر</span>
              </h1>

              <p className="mt-4 text-slate-300 text-lg max-w-xl font-light leading-relaxed">
                تصفح تشكيلتنا المختارة بعناية. اختر القسم، ابحث عن طلبك، وأرسله مباشرة عبر واتساب.
              </p>
            </div>

            <div className="w-full lg:w-[420px] bg-[#fdfbf7]/10 p-5 rounded-3xl backdrop-blur-md border border-white/10 shadow-lg">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="ابحث... مثال: بقلاوة، فستق، جوز"
                  className="pr-12 bg-white/90 border-0 focus:ring-[#d4af37] h-14"
                />
              </div>

              <div className="mt-4">
                <Button
                  variant="whatsapp"
                  className="w-full h-14 text-base font-bold shadow-lg shadow-[#10b981]/20"
                  onClick={() => window.open(waLink(quickHelloMessage()), "_blank")}
                  title="تواصل لطلب المساعدة أو الاقتراحات"
                >
                  <MessageCircle className="h-6 w-6 ml-2" />
                  اطلب الآن عبر واتساب
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-2 mb-4 text-[#d4af37] text-sm font-bold">
              <Filter className="h-4 w-4" /> تصنيف حسب القسم:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((c) => (
                <Chip
                  key={c.id}
                  active={cat === c.id}
                  onClick={() => setCategory(c.id as CategoryId)}
                  className="text-sm px-6 py-2.5"
                >
                  {c.title}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <div className="text-sm font-bold text-[#d4af37] tracking-wider uppercase">{categoryTitle(cat)}</div>
            <h2 className="text-2xl md:text-3xl font-black mt-2 text-[#1a2f23]">أصناف القسم</h2>
            <p className="text-slate-500 mt-2">{categoryDescription(cat)}</p>
          </div>
          <div className="inline-flex items-center justify-center bg-[#fdfbf7] border border-slate-200 text-[#1a2f23] font-bold px-4 py-2 rounded-xl text-sm shadow-sm h-10">
            {filtered.length} صنف متاح
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="glass rounded-[30px] p-16 mt-6 text-center border border-slate-200/50">
            <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-4">🔍</div>
            <div className="text-2xl font-black text-[#1a2f23]">لا توجد نتائج مطابقة</div>
            <div className="text-slate-500 mt-3 text-lg">لم نعثر على أصناف تطابق بحثك "{q}". يرجى محاولة كلمات أخرى.</div>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setQ("")}
            >
              مسح البحث
            </Button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="glass bg-white rounded-[24px] p-5 border border-slate-200/60 hover:border-[#d4af37]/40 hover:shadow-[0_15px_30px_rgba(26,47,35,0.08)] transition-all duration-300 group flex flex-col h-full">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-[#fdfbf7] flex items-center justify-center border border-slate-100 group-hover:bg-[#1a2f23]/5 transition-colors">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500">✨</div>
                  )}
                  {p.badges?.map((badge, i) => (
                    <div key={i} className="absolute top-3 right-3 bg-[#1a2f23]/80 backdrop-blur-md text-[#d4af37] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {badge}
                    </div>
                  ))}
                  {p.available === false && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-10">
                      <span className="bg-rose-100 text-rose-700 font-bold px-4 py-2 rounded-full shadow-sm">نفذت الكمية</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-2">{categoryTitle(p.category)}</div>
                  <h3 className="text-xl font-extrabold text-[#1a2f23] mb-2 group-hover:text-[#2c4a38] transition-colors line-clamp-2">{p.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{p.description}</p>
                  
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <div className="text-lg font-black text-[#1a2f23]">
                      {typeof p.price === "number" ? <span className="text-[#2c4a38]">{p.price} <span className="text-sm font-normal text-slate-500">ر.س</span></span> : <span className="text-sm text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-lg">حسب الطلب</span>}
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl group-hover:bg-[#1a2f23] group-hover:text-white group-hover:border-[#1a2f23] px-4" onClick={() => window.open(waLink(`مرحباً، أود الاستفسار عن ${p.name}`), "_blank")}>
                      طلب
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="glass-dark rounded-[30px] p-12 text-center max-w-lg mx-auto border border-[#d4af37]/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/brand/pattern.png')] opacity-10 mix-blend-overlay" />
            <div className="w-16 h-16 border-4 border-[#d4af37]/30 border-t-[#d4af37] rounded-full animate-spin mx-auto mb-6 relative z-10" />
            <div className="text-2xl font-black title-gradient-gold relative z-10">جاري تجهيز الكاتالوج الفاخر</div>
            <div className="text-slate-300 mt-3 relative z-10 font-light">لحظات ونستعرض لكم أشهى الأصناف...</div>
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}

