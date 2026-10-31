/* ==========================================================================
   LA FINCA — GASTRONOMÍA & HOSPEDAJE
   Collapsible Digital Menu, Real Lodging Gallery, Pick-Up Order & Quoter
   WhatsApp Oficial: (+506) 8585-7454
   ========================================================================== */

const WHATSAPP_NUMBER = "50685857454";
const EXCHANGE_RATE_CRC_USD = 515;

/* --------------------------------------------------------------------------
   1. COMPLETE DIGITAL MENU DATASET (57 Authentic Items from La Finca)
   -------------------------------------------------------------------------- */
const MENU_CATEGORIES = [
  { id: "platos-fuertes", nameEs: "Platos Fuertes", nameEn: "Main Dishes" },
  { id: "comidas-rapidas", nameEs: "Comidas Rápidas", nameEn: "Fast Food" },
  { id: "sopas", nameEs: "Sopas", nameEn: "Soups" },
  { id: "bebidas-frias", nameEs: "Bebidas Frías", nameEn: "Cold Beverages" },
  { id: "bebidas-calientes", nameEs: "Bebidas Calientes", nameEn: "Hot Beverages" }
];

const MENU_ITEMS = [
  // ==================== PLATOS FUERTES / MAIN DISHES ====================
  {
    id: "pf-tilapia-entera",
    category: "platos-fuertes",
    nameEs: "Tilapia Entera Frita",
    nameEn: "Fried Whole Tilapia",
    descEs: "Papas fritas y ensalada o yuca frita y ceviche de banano.",
    descEn: "French fries and salad or fried yucca with banana ceviche.",
    price: 7500,
    badges: ["popular", "seafood"],
    options: [
      "Papas fritas y ensalada",
      "Yuca frita y ceviche de banano"
    ]
  },
  {
    id: "pf-filet-tilapia-plancha",
    category: "platos-fuertes",
    nameEs: "Filet de Tilapia a la Plancha",
    nameEn: "Grilled Tilapia Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Grilled Tilapia accompanied with vegetables and white rice.",
    price: 4800,
    badges: ["seafood"]
  },
  {
    id: "pf-filet-tilapia-empanizado",
    category: "platos-fuertes",
    nameEs: "Filet de Tilapia Empanizado",
    nameEn: "Breaded Tilapia Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Breaded Tilapia accompanied with vegetables and white rice.",
    price: 4800,
    badges: ["seafood"]
  },
  {
    id: "pf-filet-pollo-plancha",
    category: "platos-fuertes",
    nameEs: "Filet de Pollo a la Plancha",
    nameEn: "Grilled Chicken Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Grilled Chicken with vegetables and white rice.",
    price: 4500,
    badges: ["popular"]
  },
  {
    id: "pf-filet-pollo-empanizado",
    category: "platos-fuertes",
    nameEs: "Filet de Pollo Empanizado",
    nameEn: "Breaded Chicken Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Breaded Chicken with vegetables and white rice.",
    price: 4500,
    badges: []
  },
  {
    id: "pf-camarones-ajillo",
    category: "platos-fuertes",
    nameEs: "Camarones al Ajillo, Ensalada y Arroz",
    nameEn: "Garlic Shrimp, Salad & Rice",
    descEs: "Camarones en salsa de ajo acompañados de arroz y ensalada.",
    descEn: "Shrimp in garlic sauce, rice and salad.",
    price: 4500,
    badges: ["popular", "seafood"]
  },
  {
    id: "pf-camarones-empanizados",
    category: "platos-fuertes",
    nameEs: "Camarones Empanizados, Ensalada y Arroz",
    nameEn: "Breaded Shrimp, Salad & Rice",
    descEs: "Camarones empanizados acompañados de arroz blanco y ensalada.",
    descEn: "Breaded Shrimp, white rice and salad.",
    price: 4500,
    badges: ["seafood"]
  },
  {
    id: "pf-gordon-blue",
    category: "platos-fuertes",
    nameEs: "Gordon Blue de Pollo",
    nameEn: "Chicken Cordon Bleu",
    descEs: "En salsa blanca acompañado de puré y vegetales.",
    descEn: "Chicken Cordon Bleu in white sauce with mashed potatoes and vegetables.",
    price: 5000,
    badges: ["popular"]
  },
  {
    id: "pf-fajitas-pollo",
    category: "platos-fuertes",
    nameEs: "Fajitas de Pollo",
    nameEn: "Chicken Fajitas",
    descEs: "Acompañadas de papas fritas y ceviche de banano.",
    descEn: "Chicken Fajitas with French fries and banana ceviche.",
    price: 4000,
    badges: []
  },
  {
    id: "pf-fajitas-pescado",
    category: "platos-fuertes",
    nameEs: "Fajitas de Pescado",
    nameEn: "Fish Fajitas",
    descEs: "Acompañadas de papas fritas y ceviche de banano.",
    descEn: "Fish Fajitas with French fries and banana ceviche.",
    price: 4800,
    badges: ["seafood"]
  },
  {
    id: "pf-arroz-con-camarones",
    category: "platos-fuertes",
    nameEs: "Arroz con Camarones",
    nameEn: "Shrimp Fried Rice",
    descEs: "Acompañado de papas fritas y ensalada.",
    descEn: "Shrimp Fried Rice with French fries and salad.",
    price: 5000,
    badges: ["popular", "seafood"]
  },
  {
    id: "pf-camarones-con-arroz",
    category: "platos-fuertes",
    nameEs: "Camarones con Arroz",
    nameEn: "Special Shrimp with Rice",
    descEs: "Acompañado de papas fritas y ensalada.",
    descEn: "Shrimp with rice, French fries and salad.",
    price: 6500,
    badges: ["seafood"]
  },
  {
    id: "pf-arroz-mariscos",
    category: "platos-fuertes",
    nameEs: "Arroz con Mariscos",
    nameEn: "Seafood Fried Rice",
    descEs: "Acompañado de papas fritas y ensalada.",
    descEn: "Seafood Fried Rice with French fries and salad.",
    price: 5000,
    badges: ["seafood"]
  },
  {
    id: "pf-arroz-cantones",
    category: "platos-fuertes",
    nameEs: "Arroz Cantonés",
    nameEn: "Cantonese Fried Rice",
    descEs: "Acompañado de papas fritas y ensalada.",
    descEn: "Cantonese Fried Rice with French fries and salad.",
    price: 5000,
    badges: ["popular"]
  },
  {
    id: "pf-arroz-pollo",
    category: "platos-fuertes",
    nameEs: "Arroz con Pollo",
    nameEn: "Chicken Fried Rice",
    descEs: "Con papas fritas y ensalada.",
    descEn: "Chicken Fried Rice with French fries and salad.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "pf-arroz-cerdo",
    category: "platos-fuertes",
    nameEs: "Arroz con Cerdo",
    nameEn: "Pork Fried Rice",
    descEs: "Acompañado de papas fritas y ensalada.",
    descEn: "Pork Fried Rice with French fries and salad.",
    price: 4000,
    badges: []
  },
  {
    id: "pf-arroz-carne-salsa",
    category: "platos-fuertes",
    nameEs: "Arroz con Carne en Salsa",
    nameEn: "Rice with Stewed Beef",
    descEs: "Acompañado de ensalada verde.",
    descEn: "Rice with stewed beef and green house salad.",
    price: 3500,
    badges: []
  },
  {
    id: "pf-casados",
    category: "platos-fuertes",
    nameEs: "Casados",
    nameEn: "Traditional Casado",
    descEs: "Pollo, Bistec, Carne en Salsa, Pescado o Chuleta.",
    descEn: "With Chicken, Skirt steak, Stewed beef, Fish or Pork Chop.",
    price: 4000,
    badges: ["popular"],
    options: [
      "Pollo (Chicken)",
      "Bistec (Skirt Steak)",
      "Carne en Salsa (Stewed Beef)",
      "Pescado (Fish)",
      "Chuleta (Pork Chop)"
    ]
  },
  {
    id: "pf-casado-vegetariano",
    category: "platos-fuertes",
    nameEs: "Casados Vegetarianos",
    nameEn: "Vegetarian Casado",
    descEs: "Arroz, frijoles, vegetales, plátano maduro y ensalada.",
    descEn: "Rice, beans, vegetables, sweet plantain and salad.",
    price: 4000,
    badges: ["veg"]
  },

  // ==================== COMIDAS RÁPIDAS / FAST FOOD ====================
  {
    id: "cr-nachos-mixtos",
    category: "comidas-rapidas",
    nameEs: "Nachos Mixtos",
    nameEn: "Mixed Nachos",
    descEs: "Nachos con combinación mixta de carnes, queso y aderezos.",
    descEn: "Mixed Nachos.",
    price: 4500,
    badges: ["popular"]
  },
  {
    id: "cr-nachos-pollo-carne",
    category: "comidas-rapidas",
    nameEs: "Nachos de Pollo o Carne",
    nameEn: "Chicken or Beef Nachos",
    descEs: "Nachos preparados con pollo o carne.",
    descEn: "Chicken or Beef Nachos.",
    price: 4000,
    badges: [],
    options: ["Pollo (Chicken)", "Carne (Beef)"]
  },
  {
    id: "cr-papanachos-pollo-carne",
    category: "comidas-rapidas",
    nameEs: "Papanachos de Pollo o Carne",
    nameEn: "Chicken or Beef Papanachos",
    descEs: "Papas y nachos con queso, aderezos y proteína.",
    descEn: "Chicken or Beef Papanachos.",
    price: 5000,
    badges: ["popular"],
    options: ["Pollo (Chicken)", "Carne (Beef)"]
  },
  {
    id: "cr-papanachos-mixtos",
    category: "comidas-rapidas",
    nameEs: "Papanachos Mixtos",
    nameEn: "Mixed Papanachos",
    descEs: "Papanachos con combinación de pollo y carne.",
    descEn: "Mixed Papanachos.",
    price: 5500,
    badges: ["popular"]
  },
  {
    id: "cr-ceviche-pescado",
    category: "comidas-rapidas",
    nameEs: "Ceviche de Pescado",
    nameEn: "Fish Ceviche",
    descEs: "Ceviche fresco de pescado.",
    descEn: "Fresh Fish Ceviche.",
    price: 3500,
    badges: ["popular", "seafood"]
  },
  {
    id: "cr-ceviche-pequeno",
    category: "comidas-rapidas",
    nameEs: "Ceviche de Pescado Pequeño",
    nameEn: "Fish Ceviche (Small size)",
    descEs: "Porción pequeña de ceviche de pescado.",
    descEn: "Fish Ceviche (Small size).",
    price: 2500,
    badges: ["seafood"]
  },
  {
    id: "cr-chifrijo",
    category: "comidas-rapidas",
    nameEs: "Chifrijo",
    nameEn: "Traditional Chifrijo",
    descEs: "Arroz, frijoles, pico de gallo y tortillas tostadas.",
    descEn: "Chifrijo, fried rice, beans, pico de gallo and toast tortilla.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "cr-papas-fritas",
    category: "comidas-rapidas",
    nameEs: "Orden Papas Fritas",
    nameEn: "French Fries",
    descEs: "Porción de papas a la francesa.",
    descEn: "French Fries.",
    price: 2000,
    badges: ["veg"]
  },
  {
    id: "cr-patacones",
    category: "comidas-rapidas",
    nameEs: "Orden de Patacones",
    nameEn: "Fried Green Plantains",
    descEs: "Acompañado de frijoles molidos y pico de gallo.",
    descEn: "Fried green plantains with refried beans and pico de gallo.",
    price: 3000,
    badges: ["popular", "veg"]
  },
  {
    id: "cr-yuca-frita",
    category: "comidas-rapidas",
    nameEs: "Orden de Yuca Frita",
    nameEn: "Fried Yucca",
    descEs: "Porción de yuca frita dorada al momento.",
    descEn: "Fried Yucca.",
    price: 2000,
    badges: ["veg"]
  },
  {
    id: "cr-chicharrones",
    category: "comidas-rapidas",
    nameEs: "Chicharrones",
    nameEn: "Pork Rinds with Yucca & Pico de Gallo",
    descEs: "Yuca y pico de gallo.",
    descEn: "Pork rinds with yucca and pico de gallo.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "cr-emparedados",
    category: "comidas-rapidas",
    nameEs: "Emparedados",
    nameEn: "Sandwiches",
    descEs: "Pollo, Carne o Jamón y Queso.",
    descEn: "Sandwich (chicken, beef or ham and cheese).",
    price: 2000,
    badges: [],
    options: [
      "Pollo (Chicken)",
      "Carne (Beef)",
      "Jamón y Queso (Ham & Cheese)"
    ]
  },
  {
    id: "cr-hamburguesa-sencilla",
    category: "comidas-rapidas",
    nameEs: "Hamburguesa Sencilla",
    nameEn: "Simple Hamburger",
    descEs: "Hamburguesa tradicional con torta de carne y vegetales.",
    descEn: "Simple Hamburger.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-hamburguesa-papas",
    category: "comidas-rapidas",
    nameEs: "Hamburguesa con Papas",
    nameEn: "Hamburger with French Fries",
    descEs: "Hamburguesa acompañada de papas fritas.",
    descEn: "Hamburger with French fries.",
    price: 3000,
    badges: ["popular"]
  },
  {
    id: "cr-taco-sencillo",
    category: "comidas-rapidas",
    nameEs: "Taco Sencillo",
    nameEn: "Simple Taco",
    descEs: "Taco crujiente con carne y repollo.",
    descEn: "Simple Taco.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-taco-papas",
    category: "comidas-rapidas",
    nameEs: "Taco con Papas",
    nameEn: "Taco with French Fries",
    descEs: "Taco acompañado de papas fritas.",
    descEn: "Taco with French fries.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-torta-carne",
    category: "comidas-rapidas",
    nameEs: "Torta de Carne",
    nameEn: "Beef Patty",
    descEs: "Torta de carne al estilo casero.",
    descEn: "Beef patty.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-salchipapas",
    category: "comidas-rapidas",
    nameEs: "Salchipapas",
    nameEn: "Sausage and Fries",
    descEs: "Papas fritas con salchicha.",
    descEn: "Sausage and Fries.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-gallo-salchichon",
    category: "comidas-rapidas",
    nameEs: "Gallo de Salchichón",
    nameEn: "Sausage with Tortilla",
    descEs: "Salchichón servido con tortilla.",
    descEn: "Sausage with tortilla.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-gallo-queso",
    category: "comidas-rapidas",
    nameEs: "Gallo de Queso",
    nameEn: "Cheese with Tortilla",
    descEs: "Queso servido con tortilla.",
    descEn: "Cheese with tortilla.",
    price: 1500,
    badges: ["veg"]
  },
  {
    id: "cr-gallo-pescado",
    category: "comidas-rapidas",
    nameEs: "Gallo de Pescado",
    nameEn: "Fish with Tortilla",
    descEs: "Pescado servido con tortilla.",
    descEn: "Fish with tortilla.",
    price: 2500,
    badges: ["seafood"]
  },
  {
    id: "cr-prensadas",
    category: "comidas-rapidas",
    nameEs: "Prensadas",
    nameEn: "Cheese Crisp",
    descEs: "Tortillas prensadas con queso.",
    descEn: "Cheese crisp.",
    price: 1000,
    badges: ["veg"]
  },
  {
    id: "cr-platano-natilla",
    category: "comidas-rapidas",
    nameEs: "Plátano con Natilla",
    nameEn: "Plantains with Sour Cream",
    descEs: "Plátano maduro con natilla.",
    descEn: "Plantains with sour cream.",
    price: 2000,
    badges: ["veg"]
  },

  // ==================== SOPAS / SOUPS ====================
  {
    id: "sp-sopa-ranchera",
    category: "sopas",
    nameEs: "Sopa Ranchera",
    nameEn: "Ranchero Soup",
    descEs: "Sopa tradicional estilo ranchero.",
    descEn: "Ranchero Soup.",
    price: 3500,
    badges: ["popular"]
  },
  {
    id: "sp-sopa-mariscos",
    category: "sopas",
    nameEs: "Sopa de Mariscos",
    nameEn: "Seafood Soup",
    descEs: "Sopa de mariscos frescos.",
    descEn: "Seafood Soup.",
    price: 5000,
    badges: ["popular", "seafood"]
  },

  // ==================== BEBIDAS FRÍAS / COLD BEVERAGES ====================
  {
    id: "bf-batidos-leche",
    category: "bebidas-frias",
    nameEs: "Batidos en Leche",
    nameEn: "Milkshakes",
    descEs: "Sabores: Fresa, Cacomal, Crema, Papaya o Mora.",
    descEn: "Milkshakes: Strawberry, Cacomal, Cream, Papaya, Blackberry.",
    price: 2000,
    badges: ["popular"],
    options: [
      "Fresa",
      "Cacomal",
      "Crema",
      "Papaya",
      "Mora"
    ]
  },
  {
    id: "bf-refrescos-naturales",
    category: "bebidas-frias",
    nameEs: "Refrescos Naturales",
    nameEn: "Natural Fruit Juice",
    descEs: "Refresco natural del día.",
    descEn: "Natural fruit juice.",
    price: 1000,
    badges: ["popular"]
  },
  {
    id: "bf-gaseosa-desechable",
    category: "bebidas-frias",
    nameEs: "Gaseosa Desechable",
    nameEn: "Soft Drinks (Plastic Bottle)",
    descEs: "Gaseosa en botella plástica.",
    descEn: "Soft drinks (Plastic bottle).",
    price: 1400,
    badges: []
  },
  {
    id: "bf-gaseosa-vidrio",
    category: "bebidas-frias",
    nameEs: "Gaseosas de Vidrio",
    nameEn: "Soft Drinks (Glass Bottle)",
    descEs: "Gaseosa en botella de vidrio.",
    descEn: "Soft drinks (Glass bottle).",
    price: 1200,
    badges: []
  },
  {
    id: "bf-tropicales",
    category: "bebidas-frias",
    nameEs: "Tropicales",
    nameEn: "Bottled Juice",
    descEs: "Refresco embotellado.",
    descEn: "Bottled juice.",
    price: 1200,
    badges: []
  },
  {
    id: "bf-tropicales-desechables",
    category: "bebidas-frias",
    nameEs: "Tropicales Desechables",
    nameEn: "Bottled Juice (Plastic)",
    descEs: "Refresco embotellado desechable.",
    descEn: "Bottled juice.",
    price: 1400,
    badges: []
  },
  {
    id: "bf-cerveza",
    category: "bebidas-frias",
    nameEs: "Cerveza",
    nameEn: "Beer",
    descEs: "Consultar marcas y disponibilidad en el restaurante.",
    descEn: "Inquire for available brands.",
    price: 1500,
    badges: [],
    options: [
      "Imperial",
      "Rock Limón",
      "Otra (Consultar)"
    ]
  },

  // ==================== BEBIDAS CALIENTES / HOT BEVERAGES ====================
  {
    id: "bc-cafe-negro",
    category: "bebidas-calientes",
    nameEs: "Café Negro",
    nameEn: "Black Coffee",
    descEs: "Café negro recién hecho.",
    descEn: "Black Coffee.",
    price: 800,
    badges: ["popular"]
  },
  {
    id: "bc-cafe-leche",
    category: "bebidas-calientes",
    nameEs: "Café con Leche",
    nameEn: "Coffee with Cream",
    descEs: "Café caliente con leche.",
    descEn: "Coffee with cream.",
    price: 800,
    badges: ["popular"]
  },
  {
    id: "bc-chocolate",
    category: "bebidas-calientes",
    nameEs: "Chocolate",
    nameEn: "Hot Chocolate",
    descEs: "Chocolate caliente.",
    descEn: "Hot Chocolate.",
    price: 1200,
    badges: []
  },
  {
    id: "bc-agua-dulce",
    category: "bebidas-calientes",
    nameEs: "Agua Dulce",
    nameEn: "Sugar Cane Tea",
    descEs: "Agua dulce caliente tradicional.",
    descEn: "Sugar cane tea.",
    price: 800,
    badges: []
  },
  {
    id: "bc-agua-dulce-leche",
    category: "bebidas-calientes",
    nameEs: "Agua Dulce con Leche",
    nameEn: "Sugar Cane Tea with Milk",
    descEs: "Agua dulce preparada con leche.",
    descEn: "Sugar cane tea with milk.",
    price: 1200,
    badges: ["popular"]
  },
  {
    id: "bc-te-agua",
    category: "bebidas-calientes",
    nameEs: "Té en Agua",
    nameEn: "Tea",
    descEs: "Té caliente en agua.",
    descEn: "Tea.",
    price: 800,
    badges: []
  }
];

/* --------------------------------------------------------------------------
   2. HOSPEDAJE GALLERY SLIDES (ONLY THE 3 REAL PHOTOS PROVIDED BY THE USER)
   -------------------------------------------------------------------------- */
const LODGING_SLIDES = [
  {
    src: "assets/images/hospedaje-cabana-exterior.jpg",
    badgeEs: "Exterior",
    badgeEn: "Exterior",
    titleEs: "Cabaña en Madera Rodeada de Naturaleza",
    titleEn: "Wooden Cabin Surrounded by Nature",
    descEs: "Vista exterior de la cabaña rodeada de jardines tropicales y árboles en La Finca."
  },
  {
    src: "assets/images/hospedaje-principal-clean.jpg",
    badgeEs: "Interior Equipado",
    badgeEn: "Equipped Interior",
    titleEs: "Habitación, Comedor y Cocina Equipada",
    titleEn: "Bedroom, Dining & Equipped Kitchen",
    descEs: "Interior amplio con cama matrimonial, comedor para 4 personas, refrigeradora, microondas y salida al balcón."
  },
  {
    src: "assets/images/hospedaje-bosque-natural.jpg",
    badgeEs: "Entorno Natural",
    badgeEn: "Natural Surroundings",
    titleEs: "Bosque Tropical en La Finca",
    titleEn: "Tropical Forest at La Finca",
    descEs: "Vegetación natural que rodea el hospedaje brindando frescura y tranquilidad."
  }
];

/* --------------------------------------------------------------------------
   3. APPLICATION STATE
   -------------------------------------------------------------------------- */
const state = {
  lang: "es",
  currency: "CRC",
  searchQuery: "",
  dietaryFilter: "all",
  openCategories: [], // Empty by default so all categories start compactly folded!
  cart: [],
  carouselIndex: 0,
  carouselAutoPlay: true,
  carouselTimer: null
};

try {
  const savedCart = localStorage.getItem("lafinca_cart_v1");
  if (savedCart) state.cart = JSON.parse(savedCart);
} catch (err) {}

function saveCart() {
  try {
    localStorage.setItem("lafinca_cart_v1", JSON.stringify(state.cart));
  } catch (err) {}
}

function formatPrice(crcAmount) {
  const val = Number(crcAmount || 0);
  if (state.currency === "USD") {
    return "$" + (val / EXCHANGE_RATE_CRC_USD).toFixed(2);
  }
  return "₡" + val.toLocaleString("es-CR");
}

function formatColonesExact(crcAmount) {
  return "₡" + Number(crcAmount || 0).toLocaleString("es-CR");
}

/* --------------------------------------------------------------------------
   4. COLLAPSIBLE DIGITAL MENU (ACORDEONES POR CATEGORÍA)
   -------------------------------------------------------------------------- */
function toggleCategoryAccordion(catId) {
  const idx = state.openCategories.indexOf(catId);
  if (idx >= 0) {
    state.openCategories.splice(idx, 1);
  } else {
    state.openCategories.push(catId);
  }
  renderMenuGrid();
  updateExpandAllBtnLabel();
}

function toggleAllCategories() {
  if (state.openCategories.length === MENU_CATEGORIES.length) {
    state.openCategories = [];
  } else {
    state.openCategories = MENU_CATEGORIES.map(c => c.id);
  }
  renderMenuGrid();
  updateExpandAllBtnLabel();
}

function updateExpandAllBtnLabel() {
  const btn = document.getElementById("expandAllMenuBtn");
  if (!btn) return;
  const allOpen = state.openCategories.length === MENU_CATEGORIES.length;
  if (state.lang === "es") {
    btn.textContent = allOpen ? "Contraer todas" : "Desplegar todas";
  } else {
    btn.textContent = allOpen ? "Collapse all" : "Expand all";
  }
}

window.toggleCategoryAccordion = toggleCategoryAccordion;
window.toggleAllCategories = toggleAllCategories;

function renderMenuGrid() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  const q = state.searchQuery.trim().toLowerCase();
  const isFiltering = q.length > 0 || state.dietaryFilter !== "all";

  const filtered = MENU_ITEMS.filter(item => {
    const matchesDiet = state.dietaryFilter === "all" || (item.badges && item.badges.includes(state.dietaryFilter));
    const matchesSearch = !q ||
      item.nameEs.toLowerCase().includes(q) ||
      item.nameEn.toLowerCase().includes(q) ||
      item.descEs.toLowerCase().includes(q) ||
      item.descEn.toLowerCase().includes(q);

    return matchesDiet && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 2.5rem 1.25rem; background: var(--bg-surface); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <h3 style="font-family: var(--font-serif); font-size: 1.45rem; font-weight: 500; margin-bottom: 0.35rem;">
          ${state.lang === "es" ? "No se encontraron platillos" : "No dishes found"}
        </h3>
        <p style="color: var(--text-muted); font-size: 0.86rem; margin-bottom: 1.15rem;">
          ${state.lang === "es" ? "Prueba con otra búsqueda o restablece los filtros." : "Try another keyword or reset filters."}
        </p>
        <button type="button" class="btn btn-outline" onclick="resetMenuFilters()">
          ${state.lang === "es" ? "Restablecer filtros" : "Reset filters"}
        </button>
      </div>
    `;
    return;
  }

  let html = `<div class="menu-accordions-stack">`;

  MENU_CATEGORIES.forEach(cat => {
    const catItems = filtered.filter(i => i.category === cat.id);
    if (catItems.length === 0) return;

    const catTitle = state.lang === "es" ? cat.nameEs : cat.nameEn;
    const catSub = state.lang === "es" ? cat.nameEn : cat.nameEs;

    // Calculate price range for category header
    const prices = catItems.map(i => i.price);
    const minP = Math.min(...prices);
    const maxP = Math.max(...prices);
    const priceRangeText = minP === maxP
      ? formatPrice(minP)
      : `${formatPrice(minP)} – ${formatPrice(maxP)}`;

    // Open if user clicked it OR if user is actively searching/filtering
    const isOpen = isFiltering || state.openCategories.includes(cat.id);
    const openClass = isOpen ? "open" : "";
    const toggleWord = isOpen
      ? (state.lang === "es" ? "Ocultar" : "Hide")
      : (state.lang === "es" ? "Desplegar" : "Expand");

    html += `
      <div class="menu-accordion ${openClass}" data-accordion-cat="${cat.id}">
        <button type="button" class="menu-accordion-header" onclick="toggleCategoryAccordion('${cat.id}')" aria-expanded="${isOpen}">
          <div class="accordion-title-group">
            <span class="accordion-cat-title">${catTitle}</span>
            <span class="accordion-cat-meta">${catSub} • ${catItems.length} ${state.lang === "es" ? "opciones" : "items"}</span>
          </div>
          <div class="accordion-right-meta">
            <span class="accordion-price-range">${priceRangeText}</span>
            <span class="accordion-toggle-indicator">
              <span>${toggleWord}</span>
              <svg class="accordion-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </button>

        <div class="menu-accordion-body">
          <div class="menu-compact-grid">
            ${catItems.map(item => renderCompactMenuItemHTML(item)).join("")}
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
  attachMenuCardListeners(container);
  updateExpandAllBtnLabel();
}

function renderCompactMenuItemHTML(item) {
  const title = state.lang === "es" ? item.nameEs : item.nameEn;
  const desc = state.lang === "es" ? item.descEs : item.descEn;

  const badgeHTML = (item.badges || []).map(b => {
    if (b === "popular") return `<span class="compact-badge badge-popular">${state.lang === "es" ? "Recomendado" : "Popular"}</span>`;
    if (b === "seafood") return `<span class="compact-badge badge-seafood">${state.lang === "es" ? "Mariscos" : "Seafood"}</span>`;
    if (b === "veg") return `<span class="compact-badge badge-veg">${state.lang === "es" ? "Vegetariano" : "Veg"}</span>`;
    return "";
  }).join("");

  const hasOptions = Array.isArray(item.options) && item.options.length > 0;
  const selectHTML = hasOptions ? `
    <select class="compact-variant-select variant-select" data-item-id="${item.id}" aria-label="Opción para ${title}">
      ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
    </select>
  ` : `<span style="font-size:0.72rem; color:var(--text-muted);">${item.nameEn}</span>`;

  return `
    <article class="menu-compact-item" data-card-id="${item.id}">
      <div class="compact-item-main">
        <div class="compact-item-title-wrap">
          <h4 class="compact-item-name">${title}</h4>
          ${badgeHTML}
          <p class="compact-item-desc">${desc}</p>
        </div>
        <div class="compact-item-price">${formatPrice(item.price)}</div>
      </div>

      <div class="compact-item-actions">
        ${selectHTML}
        <div class="compact-controls-right">
          <div class="qty-stepper">
            <button type="button" class="qty-btn dec-btn" aria-label="Disminuir">−</button>
            <span class="qty-val" data-qty-for="${item.id}">1</span>
            <button type="button" class="qty-btn inc-btn" aria-label="Aumentar">+</button>
          </div>
          <button type="button" class="add-to-order-btn" data-add-id="${item.id}">
            ${state.lang === "es" ? "+ Agregar" : "+ Add"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachMenuCardListeners(container) {
  container.querySelectorAll(".menu-compact-item").forEach(card => {
    const qtySpan = card.querySelector(".qty-val");
    const decBtn = card.querySelector(".dec-btn");
    const incBtn = card.querySelector(".inc-btn");
    const addBtn = card.querySelector(".add-to-order-btn");
    const variantSelect = card.querySelector(".variant-select");
    const itemId = card.getAttribute("data-card-id");

    decBtn.addEventListener("click", () => {
      let current = parseInt(qtySpan.textContent, 10) || 1;
      if (current > 1) qtySpan.textContent = current - 1;
    });

    incBtn.addEventListener("click", () => {
      let current = parseInt(qtySpan.textContent, 10) || 1;
      if (current < 50) qtySpan.textContent = current + 1;
    });

    addBtn.addEventListener("click", () => {
      const qty = parseInt(qtySpan.textContent, 10) || 1;
      const variant = variantSelect ? variantSelect.value : "";
      addToCart(itemId, qty, variant);
      qtySpan.textContent = "1";

      const originalText = addBtn.textContent;
      addBtn.classList.add("added");
      addBtn.textContent = state.lang === "es" ? "✓ Listo" : "✓ Added";
      setTimeout(() => {
        addBtn.classList.remove("added");
        addBtn.textContent = originalText;
      }, 850);
    });
  });
}

window.resetMenuFilters = function () {
  state.searchQuery = "";
  state.dietaryFilter = "all";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";
  document.querySelectorAll(".diet-filter-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-diet") === "all");
  });
  renderMenuGrid();
};

window.openAndScrollToCategory = function (catId) {
  if (!state.openCategories.includes(catId)) {
    state.openCategories.push(catId);
    renderMenuGrid();
  }
  const el = document.querySelector(`[data-accordion-cat="${catId}"]`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* --------------------------------------------------------------------------
   5. CART / PICK-UP ORDER & QUOTER ENGINE
   -------------------------------------------------------------------------- */
function addToCart(itemId, qty = 1, variant = "") {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const cartKey = variant ? `${item.id}::${variant}` : item.id;
  const existing = state.cart.find(c => c.cartKey === cartKey);

  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      cartKey,
      id: item.id,
      nameEs: item.nameEs,
      nameEn: item.nameEn,
      price: item.price,
      variant,
      qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(
    state.lang === "es"
      ? `${qty}x ${item.nameEs}${variant ? ` (${variant})` : ""} agregado`
      : `${qty}x ${item.nameEn}${variant ? ` (${variant})` : ""} added`
  );
}

function updateCartItemQty(cartKey, delta) {
  const idx = state.cart.findIndex(c => c.cartKey === cartKey);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartUI();
  showToast(state.lang === "es" ? "Orden vaciada" : "Order cleared");
}

function getCartTotals() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  return { totalItems, subtotal };
}

function updateCartUI() {
  const { totalItems, subtotal } = getCartTotals();

  const headerCount = document.getElementById("headerCartCount");
  const headerTotal = document.getElementById("headerCartTotal");
  if (headerCount) headerCount.textContent = totalItems;
  if (headerTotal) headerTotal.textContent = formatPrice(subtotal);

  const mobileBar = document.getElementById("mobileStickyOrderBar");
  const mobileCount = document.getElementById("mobileCartCount");
  const mobileTotal = document.getElementById("mobileCartTotal");
  if (mobileBar) mobileBar.classList.toggle("has-items", totalItems > 0);
  if (mobileCount) mobileCount.textContent = `${totalItems} ${totalItems === 1 ? "ítem" : "ítems"}`;
  if (mobileTotal) mobileTotal.textContent = formatPrice(subtotal);

  renderDrawerCartItems();
  renderPickupQuoterTable();
  calculateLodgingQuote();
}

function renderDrawerCartItems() {
  const listEl = document.getElementById("drawerCartList");
  const subtotalEl = document.getElementById("drawerSubtotal");
  if (!listEl) return;

  const { subtotal } = getCartTotals();
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.3rem;">
          ${state.lang === "es" ? "Tu orden está vacía" : "Your order is empty"}
        </p>
        <p style="font-size: 0.8rem;">
          ${state.lang === "es"
            ? "Despliega las categorías del menú digital para agregar tus platillos."
            : "Expand the digital menu categories to add dishes."}
        </p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = state.cart.map(item => {
    const name = state.lang === "es" ? item.nameEs : item.nameEn;
    const lineTotal = item.price * item.qty;
    return `
      <div class="cart-item-row">
        <div class="cart-item-details">
          <h4>${name}</h4>
          ${item.variant ? `<p>${item.variant}</p>` : ""}
          <p>${formatPrice(item.price)} c/u — <strong>${formatPrice(lineTotal)}</strong></p>
        </div>
        <div class="cart-item-controls">
          <div class="qty-stepper">
            <button type="button" class="qty-btn" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

window.updateCartItemQty = updateCartItemQty;
window.clearCart = clearCart;

/* --------------------------------------------------------------------------
   6. HOSPEDAJE GALLERY CAROUSEL (3 Real Photos)
   -------------------------------------------------------------------------- */
function renderCarousel() {
  const stage = document.getElementById("carouselStage");
  const thumbs = document.getElementById("carouselThumbs");
  const counter = document.getElementById("carouselCounter");
  if (!stage || !thumbs) return;

  stage.innerHTML = LODGING_SLIDES.map((slide, idx) => {
    const active = idx === state.carouselIndex ? "active" : "";
    const badge = state.lang === "es" ? slide.badgeEs : slide.badgeEn;
    const title = state.lang === "es" ? slide.titleEs : slide.titleEn;
    return `
      <div class="carousel-slide ${active}" data-slide-idx="${idx}">
        <img src="${slide.src}" alt="${title}" loading="${idx === 0 ? 'eager' : 'lazy'}" />
        <div class="carousel-caption-bar">
          <div class="carousel-caption-text">
            <span class="badge">${badge}</span>
            <h3>${title}</h3>
            <p>${slide.descEs}</p>
          </div>
        </div>
      </div>
    `;
  }).join("");

  thumbs.innerHTML = LODGING_SLIDES.map((slide, idx) => {
    const active = idx === state.carouselIndex ? "active" : "";
    const title = state.lang === "es" ? slide.titleEs : slide.titleEn;
    return `
      <button type="button" class="carousel-thumb ${active}" data-thumb-idx="${idx}" aria-label="${title}">
        <img src="${slide.src}" alt="${title}" />
      </button>
    `;
  }).join("");

  if (counter) {
    const num = String(state.carouselIndex + 1).padStart(2, "0");
    const tot = String(LODGING_SLIDES.length).padStart(2, "0");
    counter.textContent = `${num} / ${tot}`;
  }

  thumbs.querySelectorAll(".carousel-thumb").forEach(btn => {
    btn.addEventListener("click", () => {
      goToSlide(parseInt(btn.getAttribute("data-thumb-idx"), 10));
      resetCarouselTimer();
    });
  });
}

function goToSlide(index) {
  const total = LODGING_SLIDES.length;
  state.carouselIndex = (index + total) % total;

  const slides = document.querySelectorAll("#carouselStage .carousel-slide");
  const thumbs = document.querySelectorAll("#carouselThumbs .carousel-thumb");
  const counter = document.getElementById("carouselCounter");

  slides.forEach((s, idx) => s.classList.toggle("active", idx === state.carouselIndex));
  thumbs.forEach((t, idx) => t.classList.toggle("active", idx === state.carouselIndex));

  if (counter) {
    const num = String(state.carouselIndex + 1).padStart(2, "0");
    const tot = String(total).padStart(2, "0");
    counter.textContent = `${num} / ${tot}`;
  }
}

function startCarouselTimer() {
  stopCarouselTimer();
  if (!state.carouselAutoPlay) return;
  state.carouselTimer = setInterval(() => {
    goToSlide(state.carouselIndex + 1);
  }, 5500);
}

function stopCarouselTimer() {
  if (state.carouselTimer) {
    clearInterval(state.carouselTimer);
    state.carouselTimer = null;
  }
}

function resetCarouselTimer() {
  if (state.carouselAutoPlay) startCarouselTimer();
}

function initCarouselControls() {
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const autoPlayBtn = document.getElementById("carouselAutoPlayBtn");
  const zoomBtn = document.getElementById("carouselZoomBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(state.carouselIndex - 1);
      resetCarouselTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(state.carouselIndex + 1);
      resetCarouselTimer();
    });
  }

  if (autoPlayBtn) {
    autoPlayBtn.addEventListener("click", () => {
      state.carouselAutoPlay = !state.carouselAutoPlay;
      autoPlayBtn.textContent = state.carouselAutoPlay ? "Pausar" : "Reproducir";
      if (state.carouselAutoPlay) startCarouselTimer();
      else stopCarouselTimer();
    });
  }

  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => {
      const currentSlide = LODGING_SLIDES[state.carouselIndex];
      if (currentSlide) openLightboxModal(currentSlide.src, currentSlide.titleEs);
    });
  }

  renderCarousel();
  startCarouselTimer();
}

/* --------------------------------------------------------------------------
   7. QUOTER & PICK-UP ORDER DISPATCH
   -------------------------------------------------------------------------- */
function renderPickupQuoterTable() {
  const container = document.getElementById("pickupQuoterItemsBox");
  const totalEl = document.getElementById("pickupQuoterTotal");
  const groupCountInput = document.getElementById("pickupGroupSize");
  const perPersonEl = document.getElementById("pickupPerPersonEstimate");

  if (!container) return;

  const { subtotal } = getCartTotals();
  if (totalEl) totalEl.textContent = formatPrice(subtotal);

  const people = Math.max(1, parseInt(groupCountInput?.value || "1", 10));
  if (perPersonEl) {
    perPersonEl.textContent = formatPrice(Math.round(subtotal / people));
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.25rem; text-align: center; color: var(--text-muted); background: var(--bg-primary); border-radius: var(--radius-xs); border: 1px solid var(--border-subtle); font-size: 0.84rem;">
        No hay platillos seleccionados.
        <a href="#menu-digital" style="color: var(--text-primary); font-weight: 600; text-decoration: underline; margin-left: 0.35rem;">Ir al Menú Digital</a>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="quote-line">
      <div>
        <strong>${item.qty}x ${item.nameEs}</strong>
        ${item.variant ? `<span style="font-size:0.76rem; color:var(--text-muted);"> (${item.variant})</span>` : ""}
      </div>
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <span>${formatPrice(item.price * item.qty)}</span>
        <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', -1)" style="color:var(--text-muted); font-weight:600;" title="Disminuir">−</button>
        <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', 1)" style="color:var(--text-primary); font-weight:600;" title="Aumentar">+</button>
      </div>
    </div>
  `).join("");
}

function calculateLodgingQuote() {
  const checkInEl = document.getElementById("lodgeCheckIn");
  const checkOutEl = document.getElementById("lodgeCheckOut");
  const guestsEl = document.getElementById("lodgeGuests");
  const planEl = document.getElementById("lodgeMealPlan");
  const includeCartEl = document.getElementById("lodgeIncludeCart");

  if (!checkInEl || !checkOutEl) return;

  let nights = 1;
  if (checkInEl.value && checkOutEl.value) {
    const d1 = new Date(checkInEl.value);
    const d2 = new Date(checkOutEl.value);
    const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
    nights = diff > 0 ? diff : 1;
  }

  const guests = Math.max(1, parseInt(guestsEl?.value || "2", 10));
  const mealPlan = planEl?.value || "solo-hospedaje";
  const includeCart = includeCartEl ? includeCartEl.checked : true;

  let mealCostPerDayPerGuest = 0;
  let mealLabel = "Solo Hospedaje (Cocina equipada disponible)";
  if (mealPlan === "desayuno") {
    mealCostPerDayPerGuest = 4500;
    mealLabel = "Desayuno y Café en el Restaurante";
  } else if (mealPlan === "media-pension") {
    mealCostPerDayPerGuest = 5000;
    mealLabel = "Almuerzo o Cena en el Restaurante";
  } else if (mealPlan === "pension-completa") {
    mealCostPerDayPerGuest = 9500;
    mealLabel = "Alimentación Completa (3 tiempos)";
  }

  const mealTotal = mealCostPerDayPerGuest * guests * nights;
  const { subtotal: cartSubtotal } = getCartTotals();
  const foodOrderAddon = includeCart ? cartSubtotal : 0;
  const estimatedFoodTotal = mealTotal + foodOrderAddon;

  const nightsBadge = document.getElementById("quoteNightsDisplay");
  const guestsBadge = document.getElementById("quoteGuestsDisplay");
  const planBadge = document.getElementById("quotePlanDisplay");
  const mealCostEl = document.getElementById("quoteMealPlanCost");
  const cartCostEl = document.getElementById("quoteCartAddonCost");
  const totalFoodEl = document.getElementById("quoteFoodCombinedTotal");

  if (nightsBadge) nightsBadge.textContent = `${nights} ${nights === 1 ? "noche" : "noches"}`;
  if (guestsBadge) guestsBadge.textContent = `${guests} ${guests === 1 ? "huésped" : "huéspedes"}`;
  if (planBadge) planBadge.textContent = mealLabel;
  if (mealCostEl) mealCostEl.textContent = mealTotal > 0 ? formatPrice(mealTotal) : "Según selección";
  if (cartCostEl) cartCostEl.textContent = formatPrice(foodOrderAddon);
  if (totalFoodEl) {
    totalFoodEl.textContent = estimatedFoodTotal > 0
      ? `${formatPrice(estimatedFoodTotal)} + Tarifa de Estadía`
      : "Confirmar tarifa por fechas";
  }

  return {
    nights,
    guests,
    checkIn: checkInEl.value || "Por definir",
    checkOut: checkOutEl.value || "Por definir",
    mealLabel,
    mealTotal,
    includeCart,
    foodOrderAddon,
    estimatedFoodTotal
  };
}

function copySinpeNumber() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText("85857454");
    showToast("Número SINPE Móvil 8585-7454 copiado");
  }
}

function sendOrderViaWhatsApp(source = "drawer") {
  const isDrawer = source === "drawer";
  const name = (document.getElementById(isDrawer ? "drawerCustomerName" : "pickupCustomerName")?.value || "").trim();
  const phone = (document.getElementById(isDrawer ? "drawerCustomerPhone" : "pickupCustomerPhone")?.value || "").trim();
  const pickupTime = document.getElementById(isDrawer ? "drawerPickupTime" : "pickupTimeSelect")?.value || "En 20-30 minutos";
  const orderType = document.getElementById(isDrawer ? "drawerOrderType" : "pickupOrderMode")?.value || "Pedido para Retirar";
  const payment = document.getElementById(isDrawer ? "drawerPaymentMethod" : "pickupPaymentMethod")?.value || "SINPE Móvil";
  const notes = (document.getElementById(isDrawer ? "drawerOrderNotes" : "pickupOrderNotes")?.value || "").trim();

  if (state.cart.length === 0) {
    showToast("Agrega al menos un platillo del menú antes de enviar.");
    return;
  }

  const { totalItems, subtotal } = getCartTotals();

  const lines = [
    `*LA FINCA — ${orderType.toUpperCase()}*`,
    `----------------------------------`,
    name ? `*Cliente:* ${name}` : null,
    phone ? `*Teléfono:* ${phone}` : null,
    `*Retiro / Entrega:* ${pickupTime}`,
    `*Método de pago:* ${payment}`,
    ``,
    `*DETALLE DE LA ORDEN (${totalItems} ítems):*`
  ].filter(Boolean);

  state.cart.forEach(item => {
    const optText = item.variant ? ` [${item.variant}]` : "";
    lines.push(`• ${item.qty}x ${item.nameEs}${optText} — ${formatColonesExact(item.price * item.qty)}`);
  });

  lines.push(`----------------------------------`);
  lines.push(`*TOTAL: ${formatColonesExact(subtotal)}*`);

  if (notes) {
    lines.push(``, `*Notas:* ${notes}`);
  }

  lines.push(``, `Hola La Finca, deseo confirmar esta solicitud. Muchas gracias.`);

  openWhatsAppWithText(lines.join("\n"));
}

function sendLodgingQuoteViaWhatsApp() {
  const quote = calculateLodgingQuote();
  const name = (document.getElementById("lodgeCustomerName")?.value || "").trim();
  const phone = (document.getElementById("lodgeCustomerPhone")?.value || "").trim();
  const notes = (document.getElementById("lodgeNotes")?.value || "").trim();

  const lines = [
    `*LA FINCA — SOLICITUD DE HOSPEDAJE*`,
    `----------------------------------`,
    name ? `*Huésped:* ${name}` : null,
    phone ? `*Teléfono:* ${phone}` : null,
    `*Check-in:* ${quote.checkIn}`,
    `*Check-out:* ${quote.checkOut}`,
    `*Estadía:* ${quote.nights} ${quote.nights === 1 ? "noche" : "noches"}`,
    `*Huéspedes:* ${quote.guests} ${quote.guests === 1 ? "persona" : "personas"}`,
    `*Plan de Alimentación:* ${quote.mealLabel}`,
    quote.mealTotal > 0 ? `*Subtotal Alimentación Plan:* ${formatColonesExact(quote.mealTotal)}` : null
  ].filter(Boolean);

  if (quote.includeCart && state.cart.length > 0) {
    lines.push(``, `*Platillos del Menú incluidos (${formatColonesExact(quote.foodOrderAddon)}):*`);
    state.cart.forEach(item => {
      const optText = item.variant ? ` [${item.variant}]` : "";
      lines.push(`  • ${item.qty}x ${item.nameEs}${optText} (${formatColonesExact(item.price * item.qty)})`);
    });
  }

  if (notes) {
    lines.push(``, `*Notas:* ${notes}`);
  }

  lines.push(``, `Hola La Finca, me gustaría consultar disponibilidad y cotización para estas fechas. Gracias.`);

  openWhatsAppWithText(lines.join("\n"));
}

function openWhatsAppWithText(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

window.sendOrderViaWhatsApp = sendOrderViaWhatsApp;
window.sendLodgingQuoteViaWhatsApp = sendLodgingQuoteViaWhatsApp;
window.openWhatsAppWithText = openWhatsAppWithText;
window.copySinpeNumber = copySinpeNumber;

/* --------------------------------------------------------------------------
   8. MODALS, DRAWER & TOAST HELPERS
   -------------------------------------------------------------------------- */
function toggleOrderDrawer(open) {
  const drawer = document.getElementById("orderDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  if (!drawer || !backdrop) return;

  const isOpen = typeof open === "boolean" ? open : !drawer.classList.contains("open");
  drawer.classList.toggle("open", isOpen);
  backdrop.classList.toggle("open", isOpen);
}

function openPhysicalMenuModal() {
  const modal = document.getElementById("physicalMenuModal");
  if (modal) modal.classList.add("open");
}

function closePhysicalMenuModal() {
  const modal = document.getElementById("physicalMenuModal");
  if (modal) modal.classList.remove("open");
}

function openLightboxModal(imgSrc, caption) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImage");
  const cap = document.getElementById("lightboxCaption");
  if (!modal || !img) return;
  img.src = imgSrc;
  if (cap) cap.textContent = caption || "";
  modal.classList.add("open");
}

function closeLightboxModal() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("open");
}

function showToast(text) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 2400);
}

window.toggleOrderDrawer = toggleOrderDrawer;
window.openPhysicalMenuModal = openPhysicalMenuModal;
window.closePhysicalMenuModal = closePhysicalMenuModal;
window.openLightboxModal = openLightboxModal;
window.closeLightboxModal = closeLightboxModal;

/* --------------------------------------------------------------------------
   9. INITIALIZATION
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const checkInEl = document.getElementById("lodgeCheckIn");
  const checkOutEl = document.getElementById("lodgeCheckOut");
  if (checkInEl && checkOutEl) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 3);

    const fmt = d => d.toISOString().split("T")[0];
    checkInEl.value = fmt(tomorrow);
    checkInEl.min = fmt(today);
    checkOutEl.value = fmt(dayAfter);
    checkOutEl.min = fmt(tomorrow);
  }

  renderMenuGrid();
  initCarouselControls();
  updateCartUI();

  // Search Input
  const searchInput = document.getElementById("menuSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.searchQuery = searchInput.value;
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
      renderMenuGrid();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.style.display = "none";
      renderMenuGrid();
    });
  }

  // Dietary Filters
  document.querySelectorAll(".diet-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.dietaryFilter = btn.getAttribute("data-diet");
      document.querySelectorAll(".diet-filter-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderMenuGrid();
    });
  });

  // Language Switcher
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.lang = btn.getAttribute("data-lang");
      document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderMenuGrid();
      renderCarousel();
      updateCartUI();
    });
  });

  // Currency Switcher
  document.querySelectorAll(".curr-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.currency = btn.getAttribute("data-curr");
      document.querySelectorAll(".curr-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderMenuGrid();
      updateCartUI();
    });
  });

  // Hero Visual Switcher (Using ONLY the 3 real photos provided by the user)
  document.querySelectorAll(".showcase-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".showcase-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const img = document.getElementById("heroShowcaseImg");
      const title = document.getElementById("heroShowcaseTitle");
      const sub = document.getElementById("heroShowcaseSub");
      const mode = tab.getAttribute("data-showcase");

      if (mode === "hospedaje") {
        img.src = "assets/images/hospedaje-cabana-exterior.jpg";
        title.textContent = "Cabaña en Madera Rodeada de Naturaleza";
        sub.textContent = "Privacidad, jardines tropicales y árboles en La Finca.";
      } else if (mode === "interior") {
        img.src = "assets/images/hospedaje-principal-clean.jpg";
        title.textContent = "Habitación, Comedor y Cocina Equipada";
        sub.textContent = "Refrigeradora, microondas, comedor para 4 personas y salida al balcón.";
      } else {
        img.src = "assets/images/hospedaje-bosque-natural.jpg";
        title.textContent = "Entorno de Bosque Tropical";
        sub.textContent = "Naturaleza y tranquilidad en toda la propiedad.";
      }
    });
  });

  // Quoter Tabs
  document.querySelectorAll(".quoter-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-quoter-tab");
      document.querySelectorAll(".quoter-tab-btn").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".quoter-panel").forEach(p => p.classList.toggle("active", p.id === target));
    });
  });

  ["lodgeCheckIn", "lodgeCheckOut", "lodgeGuests", "lodgeMealPlan", "lodgeIncludeCart", "pickupGroupSize"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        calculateLodgingQuote();
        renderPickupQuoterTable();
      });
      el.addEventListener("input", () => {
        calculateLodgingQuote();
        renderPickupQuoterTable();
      });
    }
  });

  // Header Scroll State & Mobile Menu
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  });

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => navLinks.classList.toggle("mobile-open"));
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }
});
