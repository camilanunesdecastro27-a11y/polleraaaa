/* ==========================================================================
   1. CATÁLOGO DE PRODUCTOS CON IMÁGENES Y RESPALDO AUTOMÁTICO
   ========================================================================== */
const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'%3E%3Crect fill='%23ffe3f1' width='600' height='600'/%3E%3Ctext fill='%23ff007f' font-family='sans-serif' font-size='28' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EPULSEFIT SPORT%3C/text%3E%3C/svg%3E";

const PRODUCTS = [
  {
    id: 1,
    name: "Top Deportivo Seamless Fucsia",
    brand: "alo",
    category: "remate deportivo",
    price: 10,
    oldPrice: 28,
    promo: "REMATE $10",
    featured: true,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Pack 2x Shorts Ciclista Sculpt",
    brand: "shein",
    category: "remate deportivo",
    price: 15,
    oldPrice: 30,
    promo: "PROMO 2x$15",
    featured: true,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Tenis Running Air Pulse Pink",
    brand: "nike",
    category: "zapatos damas",
    price: 65,
    oldPrice: 95,
    promo: "-30% OFF",
    featured: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Zapatillas Urbanas Ultraboost",
    brand: "adidas",
    category: "zapatos caballeros",
    price: 75,
    oldPrice: 110,
    promo: "TOP VENTAS",
    featured: true,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Leggings Compresión High-Waist",
    brand: "fashion nova",
    category: "remate deportivo",
    price: 10,
    oldPrice: 32,
    promo: "REMATE $10",
    featured: true,
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Bolso Gym Duffel Rosa Pastel",
    brand: "hero",
    category: "bolsos",
    price: 25,
    oldPrice: 45,
    promo: "LIQUIDACIÓN",
    featured: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Pack 2x Camisetas Dry-Fit Pro",
    brand: "adidas",
    category: "remate deportivo",
    price: 15,
    oldPrice: 36,
    promo: "PROMO 2x$15",
    featured: false,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Tenis Deportivos Junior Spark",
    brand: "nike",
    category: "zapatos niñas",
    price: 38,
    oldPrice: 55,
    promo: "OFERTA",
    featured: false,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Zapatillas Kids Runner Velocity",
    brand: "adidas",
    category: "zapatos niños",
    price: 35,
    oldPrice: 50,
    promo: "OFERTA",
    featured: false,
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Botas Outdoor & Training Grip",
    brand: "hero",
    category: "botas",
    price: 58,
    oldPrice: 85,
    promo: "NUEVO",
    featured: false,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    name: "Mini Mochila Crossbody Sport",
    brand: "shein",
    category: "bolsos",