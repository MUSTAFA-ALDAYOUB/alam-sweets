import { site } from "@/config/site";

// رابط واتساب مع نص جاهز
export function waLink(text: string) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

// رسالة سريعة عامة للطلب/الاستفسار
export function quickHelloMessage() {
  return `السلام عليكم 🌸
أريد الاستفسار/الطلب من ${site.brand} (${site.tradeName}).

الاسم:
العنوان (إن وجد):
ملاحظات:
`;
}
