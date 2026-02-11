"use client";

import Image from "next/image";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, MessageCircle, Filter } from "lucide-react";

import { categories, products, type CategoryId } from "@/data/catalog";
import { Button, Chip, Input } from "@/components/ui";
import { quickHelloMessage, waLink } from "@/lib/whatsapp";

function categoryTitle(id: CategoryId) {
  return categories.find((c) => c.id === id)?.title ?? "قسم";
}

export default function ProductsPage() {
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
    <div className="max-w-6xl mx-auto px-4">
      <section className="section pt-6">
        <div className="glass rounded-3xl p-6 md:p-8 overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 relative">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/40 px-3 py-1 text-sm font-bold text-slate-700">
                <Filter className="h-4 w-4" />
                الكاتالوج
              </div>
              <h1 className="mt-3 text-2xl md:text-4xl font-black">
                <span className="title-gradient">الأصناف والأسعار</span>
              </h1>
              <p className="mt-2 text-slate-600">اختر القسم، وابحث بالاسم. الطلب يتم عبر واتساب.</p>
            </div>

            <div className="w-full md:w-[380px]">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="ابحث… مثال: بقلاوة / فستق"
                  className="pr-11"
                />
              </div>

              
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 relative">
            {categories.map((c) => (
              <Chip key={c.id} active={cat === c.id} onClick={() => setCategory(c.id)}>
                {c.title}
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="section mt-8 pb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-600">{categoryTitle(cat)}</div>
            <h2 className="text-xl md:text-2xl font-black mt-1">المنتجات</h2>
          </div>
          <div className="text-sm text-slate-600 font-semibold">{filtered.length} صنف</div>
        </div>

        {filtered.length === 0 ? (
          <div className="glass rounded-3xl p-10 mt-6 text-center">
            <div className="text-lg font-extrabold">لا توجد نتائج</div>
            <div className="text-sm text-slate-600 mt-2">جرّب كلمة بحث أخرى أو غيّر القسم.</div>
          </div>
        ) : (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div key={p.id} className="glass rounded-2xl p-4">
                <div className="flex gap-3">
                  <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-white/40 bg-white/60">
                    <Image src={p.image || "/placeholder.svg"} alt={p.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="font-extrabold">{p.name}</div>

                    <div className="mt-1 text-sm font-extrabold text-slate-900">
                      {typeof p.price === "number" ? `${p.price}$` : "السعر عند الطلب"}
                    </div>

                    <div className="text-sm text-slate-600 mt-2">{p.description}</div>

                    {p.available === false && (
                      <div className="mt-2 text-sm font-bold text-rose-600">غير متوفر حاليًا</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 glass rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <div className="font-extrabold">جاهز للطلب؟</div>
            <div className="text-sm text-slate-600">اكتب لنا الأصناف المطلوبة وسنرد عليك سريعًا.</div>
          </div>
          <Button variant="whatsapp" onClick={() => window.open(waLink(quickHelloMessage()), "_blank")}>
            <MessageCircle className="h-5 w-5" />
            اطلب عبر واتساب
          </Button>
        </div>
      </section>
    </div>
  );
}
