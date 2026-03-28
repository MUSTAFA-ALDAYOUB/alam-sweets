import { redirect } from "next/navigation";
import { categories } from "@/data/catalog";

export const dynamicParams = false;

// حتى Next يقدر يولّد صفحات ثابتة لكل قسم (SSG)
export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  redirect(`/products?cat=${encodeURIComponent(cat)}`);
}