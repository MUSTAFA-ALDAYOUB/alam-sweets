import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// دمج كلاسهات Tailwind بشكل ذكي (يمنع تعارض الكلاسات)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// حماية من أخطاء JSON في localStorage
export function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

// تحديد رقم بين حدين
export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// تنسيق سعر (اختياري الآن لأن الأسعار لم تُضف بعد)
export function formatPrice(price: number, currency = "ر.س") {
  const p = Number.isFinite(price) ? price : 0;
  return `${p.toFixed(0)} ${currency}`;
}
