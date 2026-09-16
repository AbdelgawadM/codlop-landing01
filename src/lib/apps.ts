import type { Lang } from "./content";

/**
 * Apps designed and developed by CODLOP, as listed on the company's App Store
 * developer page. Icons are the official App Store artwork (public/apps/icons/<id>.webp).
 */
export const APP_STORE_DEVELOPER = "https://apps.apple.com/sa/developer/codlop-estabilshment-for-information-technology/id1621508600";

export type StoreApp = {
  id: number;
  name: string;
  genre: Record<Lang, string>;
  url: string;
};

const g = {
  shop: { ar: "تسوق", en: "Shopping" },
  business: { ar: "أعمال", en: "Business" },
  food: { ar: "طعام ومشروبات", en: "Food & Drink" },
  edu: { ar: "تعليم", en: "Education" },
  family: { ar: "عائلة", en: "Family" },
  services: { ar: "خدمات", en: "Services" },
  realestate: { ar: "عقارات", en: "Real estate" },
  cars: { ar: "سيارات", en: "Cars" },
};

const store = (id: number, slug: string) => `https://apps.apple.com/sa/app/${slug}/id${id}`;

/** Client apps published under the client's own developer account. */
export const CLIENT_APPS: StoreApp[] = [
  { id: 6499096210, name: "Promate بروميت", genre: g.shop, url: "https://apps.apple.com/sa/app/promate-%D8%A8%D8%B1%D9%88%D9%85%D9%8A%D8%AA/id6499096210" },
  { id: 1566163635, name: "دخوني Dkhoni", genre: g.shop, url: "https://apps.apple.com/sa/app/%D8%AF%D8%AE%D9%80%D9%80%D9%80%D9%80%D9%88%D9%86%D9%8A/id1566163635" },
  { id: 1581594134, name: "Madenflorist | مادن فلورست", genre: g.shop, url: "https://apps.apple.com/sa/app/madenflorist-%D9%85%D8%A7%D8%AF%D9%86-%D9%81%D9%84%D9%88%D8%B1%D8%B3%D8%AA/id1581594134" },
  { id: 1572417061, name: "The Beauty Secrets", genre: g.shop, url: "https://apps.apple.com/sa/app/the-beauty-secrets/id1572417061" },
  { id: 1317763515, name: "Alfakhera", genre: { ar: "أزياء", en: "Lifestyle" }, url: "https://apps.apple.com/sa/app/alfakhera/id1317763515" },
];

export type FeaturedApp = {
  id: number;
  /** Short line drawn from the app's own App Store description */
  tagline: Record<Lang, string>;
  client: string;
};

/** The showcase: the clients' flagship apps first, then CODLOP's own headline releases. */
export const FEATURED: FeaturedApp[] = [
  { id: 6499096210, client: "Promate Technologies", tagline: { ar: "متجر الإلكترونيات والإكسسوارات التقنية", en: "Tech & gadgets store" } },
  { id: 1566163635, client: "Dakhun Al‑Imaratiyyah", tagline: { ar: "عطور إماراتية فاخرة", en: "Luxury Emirati fragrances" } },
  { id: 1581594134, client: "Hikayah Madin", tagline: { ar: "متجر ورد وهدايا لكل مناسبة", en: "Flowers & gifts for every occasion" } },
  { id: 1572417061, client: "Al Safa Co.", tagline: { ar: "منتجات عناية بالبشرة بريطانية الصنع", en: "UK‑made skincare products" } },
  { id: 1317763515, client: "Alfakhera", tagline: { ar: "أزياء فاخرة مع تفصيل وتوصيل مجاني", en: "Luxury fashion with free tailoring" } },
  { id: 6760566518, client: "الراجحي للصناعة والتجارة الوقفية", tagline: { ar: "مواد بناء بخبرة تتجاوز 60 عاماً", en: "Building materials, 60+ years" } },
  { id: 6758912969, client: "النادي العربي السعودي", tagline: { ar: "المتجر الرسمي للنادي", en: "The club's official store" } },
  { id: 6757854762, client: "السيف", tagline: { ar: "أواني منزلية وأجهزة كهربائية منذ 1962", en: "Home & appliances since 1962" } },
  { id: 6761481661, client: "أسواق الديرة", tagline: { ar: "محلات القيصرية والمعيقلية وأشيقر في تطبيق", en: "Heritage souq brands in one app" } },
];

export const appShot = (id: number) => `/apps/shots/${id}.webp`;

export const APPS: StoreApp[] = [
  { id: 6760566518, name: "الراجحي AlRajhi", genre: g.business, url: store(6760566518, "alrajhi") },
  { id: 6758912969, name: "النادي العربي السعودي", genre: g.shop, url: store(6758912969, "alarabi-club") },
  { id: 6757854762, name: "السيف", genre: g.shop, url: store(6757854762, "alsaif") },
  { id: 6761481661, name: "أسواق الديرة", genre: g.shop, url: store(6761481661, "aswaq-aldeera") },
  { id: 6787891167, name: "365 Days Beauty", genre: g.shop, url: store(6787891167, "365-days-beauty") },
  { id: 6768585524, name: "لين", genre: g.shop, url: store(6768585524, "leen") },
  { id: 6764527230, name: "دوباميكافين", genre: g.food, url: store(6764527230, "dopamicaffeine") },
  { id: 6763896194, name: "SmartShopperksa", genre: g.shop, url: store(6763896194, "smartshopperksa") },
  { id: 6755613891, name: "Azhala", genre: g.services, url: store(6755613891, "azhala") },
  { id: 6753135400, name: "Contractors", genre: g.services, url: store(6753135400, "contractors") },
  { id: 6749224606, name: "movo", genre: g.services, url: store(6749224606, "movo") },
  { id: 6743152066, name: "lanes", genre: g.business, url: store(6743152066, "lanes") },
  { id: 6740624981, name: "صديق التاجر", genre: g.realestate, url: store(6740624981, "sadiq-eltajer") },
  { id: 6736878917, name: "كراج — سيارات ولوحات", genre: g.cars, url: store(6736878917, "garage") },
  { id: 6502586680, name: "الشمالي", genre: g.family, url: store(6502586680, "alshamali") },
  { id: 6449225759, name: "عائلتي", genre: g.family, url: store(6449225759, "aelty") },
  { id: 6478853641, name: "غيمة سحب", genre: g.food, url: store(6478853641, "ghaimat-sahab") },
  { id: 6475108649, name: "Collector", genre: g.shop, url: store(6475108649, "collector") },
  { id: 6470715867, name: "Care Outlet | اوت لت العناية", genre: g.shop, url: store(6470715867, "care-outlet") },
  { id: 6444649610, name: "A-SmartyBox", genre: g.business, url: store(6444649610, "a-smartybox") },
  { id: 1663240934, name: "صيانتي للتكييفات", genre: g.services, url: store(1663240934, "siyanty") },
  { id: 1661135942, name: "انطلق بطلاقة", genre: g.edu, url: store(1661135942, "entaleq-betalaqa") },
  { id: 1617887759, name: "Wastah — واسطة", genre: g.shop, url: store(1617887759, "wastah") },
  { id: 1602068670, name: "OnOff", genre: g.shop, url: store(1602068670, "onoff") },
  { id: 1597587073, name: "Rkhis — رخيص", genre: g.shop, url: store(1597587073, "rkhis") },
];

export const appIcon = (id: number) => `/apps/icons/${id}.webp`;

/** Everything, for the compact grid. */
export const ALL_APPS: StoreApp[] = [...CLIENT_APPS, ...APPS];
export const findApp = (id: number) => ALL_APPS.find((a) => a.id === id)!;
