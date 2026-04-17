// أقسام الموقع

export const categories: { id: CategoryId; title: string; description: string }[] = [
  {
    id: "arabic",
    title: "الحلويات العربية",
    description: "أصناف تقليدية بالفستق الحلبي والمكسرات الفاخرة",
  },
  {
    id: "harissa",
    title: "الهريسة",
    description: "تشكيلة متنوعة من الهريسة السورية الأصيلة",
  },
  {
    id: "pastries",
    title: "المعجنات",
    description: "أشهى أنواع الكعك والبرازق والمعمول",
  },
  {
    id: "gateau",
    title: "الجاتو",
    description: "كيك وجاتو للمناسبات الخاصة",
  },

  {
    id: "kunafa",
    title: "الكنافة",
    description: "أجود أنواع الكنافة الساخنة والمقرمشة",
  },
  {
    id: "shuaibiyat",
    title: "الشعيبيات",
    description: "شعيبيات مورقة بكافة الحشوات",
  },
];


// أنواع البيانات
export type CategoryId = "arabic" | "harissa" | "pastries" | "gateau" | "kunafa" | "shuaibiyat";

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

// المنتجات
export const products: Product[] = [
  // --- قسم الحلويات العربية ---
  { id: "mabrouma-pistachio", name: "مبرومة بالفستق الحلبي", category: "arabic", description: "مبرومة محشوة بالفستق الحلبي الفاخر", image: "/products/mabrouma-pistachio.jpeg", available: true },
  { id: "ballourieh-pistachio", name: "بلورية بالفستق الحلبي", category: "arabic", description: "بلورية غنية بالفستق الحلبي", image: "/products/ballourieh-pistachio.jpeg", available: true },
  { id: "osmanliyeh-pistachio", name: "عصملية بالفستق الحلبي", category: "arabic", description: "عصملية مقرمشة بالفستق الحلبي", image: "/products/osmanliyeh-pistachio.jpeg", available: true },
  { id: "lesan-asfour-pistachio", name: "لسان العصفور بالفستق الحلبي", category: "arabic", description: "قطع صغيرة محشوة بالفستق", image: "/products/lesan-asfour-pistachio.jpeg", available: true },
  { id: "luqmat-zaeem-pistachio", name: "لقمة الزعيم بالفستق الحلبي", category: "arabic", description: "لقمة فخمة غنية بالفستق", image: "/products/luqmat-zaeem-pistachio.jpeg", available: true },
  { id: "yabraq-pistachio", name: "يبرقة بالفستق الحلبي", category: "arabic", description: "يبرقة مميزة بالفستق الحلبي", image: "/products/yabraq-pistachio.jpeg", available: true },
  { id: "basali-pistachio", name: "بصلة بالفستق الحلبي", category: "arabic", description: "بصلة محشوة بالفستق الحلبي", image: "/products/basali-pistachio.jpeg", available: true },
  { id: "baklava-turkish-pistachio", name: "بقلاوة تركية بالفستق الحلبي", category: "arabic", description: "بقلاوة على الطريقة التركية بالفستق", image: "/products/baklava-turkish-pistachio.jpeg", available: true },
  { id: "baklava-turkish-cashew", name: "بقلاوة تركية بالكاجو", category: "arabic", description: "بقلاوة على الطريقة التركية بالكاجو", image: "/products/baklava-turkish-cashew.jpeg", available: true },
  { id: "boqaj-pistachio", name: "بقج فستق حلبي", category: "arabic", description: "بقج محشوة بالفستق الحلبي", image: "/products/boqaj-pistachio.jpeg", available: true },
  { id: "swara-pistachio", name: "سوارة فستق حلبي", category: "arabic", description: "سوارة أنيقة بالفستق الحلبي", image: "/products/swara-pistachio.jpeg", available: true },
  { id: "asabea-pistachio", name: "أصابع فستق حلبي", category: "arabic", description: "أصابع مقرمشة بالفستق الحلبي", image: "/products/asabea-pistachio.jpeg", available: true },
  { id: "asabea-cashew", name: "أصابع كاجو", category: "arabic", description: "أصابع مقرمشة بالكاجو", image: "/products/asabea-cashew.jpeg", available: true },
  { id: "basali-cashew-choc", name: "بصلة كاجو وشوكولا", category: "arabic", description: "بصلة مميزة بالكاجو والشوكولا", image: "/products/basali-cashew-choc.jpeg", available: true },
  { id: "basali-walnut", name: "بصلة جوز", category: "arabic", description: "بصلة محشوة بالجوز", image: "/products/basali-walnut.jpeg", available: true },
  { id: "taj-nuts", name: "تاج مكسرات", category: "arabic", description: "تاج غني بتشكيلة المكسرات", image: "/products/taj-nuts.jpeg", available: true },

  // --- قسم الهريسة ---
  { id: "harissa-spanish-milk", name: "هريسة إسبانية حليب", category: "harissa", description: "هريسة إسبانية غنية بالحليب", image: "/products/harissa-spanish-milk.jpeg", available: true },
  { id: "harissa-spanish-choc", name: "هريسة إسبانية شوكولاتة", category: "harissa", description: "هريسة إسبانية بنكهة الشوكولاتة", image: "/products/harissa-spanish-choc.jpeg", available: true },
  { id: "harissa-pistachio", name: "هريسة بالفستق الحلبي", category: "harissa", description: "هريسة تقليدية مزينة بالفستق الحلبي", image: "/products/harissa-pistachio.jpeg", available: true },
  { id: "harissa-nuts", name: "هريسة مكسرات", category: "harissa", description: "هريسة غنية بالمكسرات المتنوعة", image: "/products/harissa-nuts.jpeg", available: true },
  { id: "harissa-plain", name: "هريسة عادية", category: "harissa", description: "هريسة سادة تقليدية", image: "/products/harissa-plain.jpeg", available: true },

  // --- قسم المعجنات ---
  { id: "kaak-water-cheese", name: "كعك مياه جبنة", category: "pastries", description: "كعك مالح بالجبنة", image: "/products/kaak-water-cheese.jpeg", available: true },
  { id: "kaak-salty", name: "كعك تبلي مالح", category: "pastries", description: "كعك تبلي مقرمش مالح", image: "/products/kaak-salty.jpeg", available: true },
  { id: "ajwa-shami", name: "عجوة شامي", category: "pastries", description: "معروف بالعجوة على الطريقة الشامية", image: "/products/ajwa-shami.jpeg", available: true },
  { id: "ajwa-halabi", name: "عجوة حلبي", category: "pastries", description: "معروف بالعجوة على الطريقة الحلبية", image: "/products/ajwa-halabi.jpeg", available: true },
  { id: "ghraybeh-halabi", name: "غريبة حلبية", category: "pastries", description: "غريبة حلب الشهيرة تذوب بالفم", image: "/products/ghraybeh-halabi.jpeg", available: true },
  { id: "ghraybeh-shami", name: "غريبة شامية", category: "pastries", description: "غريبة شامية كلاسيكية", image: "/products/ghraybeh-shami.jpeg", available: true },
  { id: "baraziq-plain", name: "برازق عادية", category: "pastries", description: "برازق مقرمشة بالسمسم", image: "/products/baraziq-plain.jpeg", available: true },
  { id: "baraziq-halabi", name: "برازق حلبي", category: "pastries", description: "برازق حلبية غنية بالفستق", image: "/products/baraziq-halabi.jpeg", available: true },
  { id: "karabij-walnut", name: "كرابيج جوز", category: "pastries", description: "كرابيج هشة محشوة بالجوز", image: "/products/karabij-walnut.jpeg", available: true },
  { id: "karabij-pistachio", name: "كرابيج فستق حلبي", category: "pastries", description: "كرابيج هشة محشوة بالفستق الحلبي", image: "/products/karabij-pistachio.jpeg", available: true },
  { id: "maamoul-lebanese-pistachio", name: "معمول لبناني فستق حلبي", category: "pastries", description: "معمول لبناني بالفستق الحلبي", image: "/products/maamoul-lebanese-pistachio.jpeg", available: true },
  { id: "maamoul-shami-walnut", name: "معمول شامي جوز", category: "pastries", description: "معمول شامي كلاسيكي بالجوز", image: "/products/maamoul-shami-walnut.jpeg", available: true },
  { id: "petitfour-turkish-sweet", name: "بيتيفور تركي حلو", category: "pastries", description: "بيتيفور على الطريقة التركية (حلو)", image: "/products/petitfour-turkish-sweet.jpeg", available: true },
  { id: "petitfour-turkish-salty", name: "بيتيفور تركي مالح", category: "pastries", description: "بيتيفور هش على الطريقة التركية (مالح)", image: "/products/petitfour-turkish-salty.jpeg", available: true },


  // --- قسم الكنافة ---
  { id: "kunafa-regular", name: "كنافة عادية", category: "kunafa", description: "كنافة شهية معدة على الأصول", image: "/products/kunafa-regular.jpeg", available: true },
  { id: "kunafa-labey", name: "كنافة لبي", category: "kunafa", description: "كنافة لبي مميزة", image: "/products/kunafa-labey.jpeg", available: true },
  { id: "kunafa-maghshousha", name: "مغشوشة", category: "kunafa", description: "مغشوشة فخمة وغنية", image: "/products/kunafa-maghshousha.jpeg", available: true },
  { id: "kunafa-maghshousha-plates", name: "صحون مغشوشة", category: "kunafa", description: "مغشوشة جاهزة للتقديم في صحون خشبية/راعية", image: "/products/kunafa-maghshousha-plates.jpeg", available: true },
  { id: "kunafa-qishta", name: "كنافة قشطة", category: "kunafa", description: "كنافة محشية بالقشطة الطازجة", image: "/products/kunafa-qishta.jpeg", available: true },
  { id: "kunafa-kaab-ghazal", name: "كنافة كعب الغزال", category: "kunafa", description: "كعب الغزال بعجينة الكنافة المقرمشة", image: "/products/kunafa-kaab-ghazal.jpeg", available: true },
  { id: "kunafa-balls", name: "طابات كنافة", category: "kunafa", description: "طابات كنافة مقرمشة ولذيذة", image: "/products/kunafa-balls.jpeg", available: true },

  // --- قسم الشعيبيات ---
  { id: "shuaibiyat-halabi", name: "شعيبيات حلبية", category: "shuaibiyat", description: "شعيبيات مورقة على الطريقة الحلبية", image: "/products/shuaibiyat-halabi.jpeg", available: true },
  { id: "shuaibiyat-pistachio", name: "شعيبيات فستق حلبي", category: "shuaibiyat", description: "شعيبيات غنية بحشوة الفستق الحلبي", image: "/products/shuaibiyat-pistachio.jpeg", available: true },
  { id: "shuaibiyat-idlebi", name: "شعيبيات ادلبية", category: "shuaibiyat", description: "شعيبيات إدلبية شهيرة بأسلوب أصيل", image: "/products/shuaibiyat-idlebi.jpeg", available: true },
  { id: "shuaibiyat-walnut", name: "شعيبيات جوز", category: "shuaibiyat", description: "شعيبيات مقرمشة محشية بالجوز", image: "/products/shuaibiyat-walnut.jpeg", available: true },
];