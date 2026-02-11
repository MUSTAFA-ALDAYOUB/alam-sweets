// أقسام الموقع
export const categories = [
  {
    id: "arabic",
    title: "الحلويات العربية",
    description: "أصناف تقليدية بالفستق الحلبي والنكهات الأصيلة",
  },
  {
    id: "gateau",
    title: "الجاتو",
    description: "كيك وجاتو للمناسبات الخاصة",
  },
  {
    id: "pastries",
    title: "المعجنات",
    description: "معجنات يومية طازجة",
  },
  {
    id: "petitfour",
    title: "البيتيفور",
    description: "حلويات صغيرة أنيقة",
  },
];

// أنواع البيانات
export type CategoryId = "arabic" | "gateau" | "pastries" | "petitfour";

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  image?: string;
  price?: number;
  badges?: string[];
  available?: boolean;
};

// المنتجات (نبدأ بالحلويات العربية)
export const products: Product[] = [
  {
    id: "mabrouma-pistachio",
    name: "المبرومة بالفستق الحلبي",
    category: "arabic",
    description: "لفائف مقرمشة محشوة بفستق حلبي فاخر",
    badges: ["فستق حلبي", "الأكثر طلبًا"],
    available: true,
  },
  {
    id: "bulori-pistachio",
    name: "البلورية بالفستق الحلبي",
    category: "arabic",
    description: "طبقات رقيقة بطعم غني وقوام بلوري",
    badges: ["فستق حلبي"],
    available: true,
  },
  {
    id: "basma-pistachio",
    name: "بصمة بالفستق الحلبي",
    category: "arabic",
    description: "حلوى أنيقة بحشوة فستق حلبي",
    badges: ["فستق حلبي"],
    available: true,
  },
  {
    id: "swar-elsit",
    name: "سوارة الست",
    category: "arabic",
    description: "شكل جميل وطعم عربي أصيل",
    available: true,
  },
  {
    id: "asabea-pistachio",
    name: "أصابع فستق",
    category: "arabic",
    description: "أصابع محشوة بالفستق الحلبي",
    available: true,
  },
  {
    id: "yabraq",
    name: "يبرقة",
    category: "arabic",
    description: "حلوى شرقية بقوام مميز",
    available: true,
  },
  {
    id: "boqaj-khadra",
    name: "بقج خضراء",
    category: "arabic",
    description: "حبات خضراء غنية بالفستق",
    available: true,
  },
  {
    id: "lesan-asfour",
    name: "لسان العصفور",
    category: "arabic",
    description: "مقرمشة وخفيفة مناسبة للقهوة",
    available: true,
  },
  {
    id: "basli-walnut",
    name: "بصلة بجوز",
    category: "arabic",
    description: "حلوى محشوة بالجوز الطبيعي",

  },
];