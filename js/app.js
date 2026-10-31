/* ==========================================================================
   LA FINCA — RESTAURANTE & HOSPEDAJE
   Complete Digital Menu Data, Carousel, Pick-Up Order & Quoter Engine
   WhatsApp Oficial: (+506) 8585-7454
   ========================================================================== */

const WHATSAPP_NUMBER = "50685857454";
const WHATSAPP_DISPLAY = "8585-7454";

/* --------------------------------------------------------------------------
   1. COMPLETE DIGITAL MENU DATASET (100% Transcribed from La Finca Menu)
   -------------------------------------------------------------------------- */
const MENU_CATEGORIES = [
  { id: "all", nameEs: "Todo el Menú", nameEn: "Full Menu", icon: "🍽️" },
  { id: "platos-fuertes", nameEs: "Platos Fuertes", nameEn: "Main Dishes", icon: "🍛" },
  { id: "comidas-rapidas", nameEs: "Comidas Rápidas", nameEn: "Fast Food", icon: "🍔" },
  { id: "sopas", nameEs: "Sopas", nameEn: "Soups", icon: "🍲" },
  { id: "bebidas-frias", nameEs: "Bebidas Frías", nameEn: "Cold Beverages", icon: "🥤" },
  { id: "bebidas-calientes", nameEs: "Bebidas Calientes", nameEn: "Hot Beverages", icon: "☕" }
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
    optionLabelEs: "Elige el acompañamiento:",
    optionLabelEn: "Choose side dish:",
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
    descEn: "Grilled Tilapia accompanied with vegetable and white rice.",
    price: 4800,
    badges: ["seafood"]
  },
  {
    id: "pf-filet-tilapia-empanizado",
    category: "platos-fuertes",
    nameEs: "Filet de Tilapia Empanizado",
    nameEn: "Breaded Tilapia Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Breaded Tilapia accompanied with vegetable and white rice.",
    price: 4800,
    badges: ["seafood"]
  },
  {
    id: "pf-filet-pollo-plancha",
    category: "platos-fuertes",
    nameEs: "Filet de Pollo a la Plancha",
    nameEn: "Grilled Chicken Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Grilled Chicken with vegetable and white rice.",
    price: 4500,
    badges: ["popular"]
  },
  {
    id: "pf-filet-pollo-empanizado",
    category: "platos-fuertes",
    nameEs: "Filet de Pollo Empanizado",
    nameEn: "Breaded Chicken Fillet",
    descEs: "Acompañado de vegetales y arroz blanco.",
    descEn: "Breaded Chicken with vegetable and white rice.",
    price: 4500,
    badges: []
  },
  {
    id: "pf-camarones-ajillo",
    category: "platos-fuertes",
    nameEs: "Camarones al Ajillo, Ensalada y Arroz",
    nameEn: "Garlic Shrimp, Salad & Rice",
    descEs: "Camarones en salsa de ajo acompañados de arroz y ensalada.",
    descEn: "Shrimp in garlic sauce, fried rice and salad.",
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
    descEn: "Chicken Cordon Bleu in white sauce with smashed potatoes and vegetable.",
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
    descEs: "Porción especial de camarones con arroz, acompañado de papas fritas y ensalada.",
    descEn: "Shrimp Fried Rice with French fries and salad.",
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
    descEn: "Cantones Fried Rice with French fries and salad.",
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
    descEn: "Rice with stewed beef and green or house salad.",
    price: 3500,
    badges: []
  },
  {
    id: "pf-casados",
    category: "platos-fuertes",
    nameEs: "Casado Tradicional",
    nameEn: "Traditional Costa Rican Casado",
    descEs: "Arroz, frijoles, acompañamiento tradicional y proteína a elegir.",
    descEn: "With Chicken, Skirt steak, Stewed beef, Fish or Pork Chop.",
    price: 4000,
    badges: ["popular"],
    optionLabelEs: "Elige la proteína del Casado:",
    optionLabelEn: "Choose protein:",
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
    nameEs: "Casado Vegetariano",
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
    descEs: "Nachos crujientes con combinación mixta de carnes, queso y aderezos.",
    descEn: "Mixed Nachos.",
    price: 4500,
    badges: ["popular"]
  },
  {
    id: "cr-nachos-pollo-carne",
    category: "comidas-rapidas",
    nameEs: "Nachos de Pollo o Carne",
    nameEn: "Chicken or Beef Nachos",
    descEs: "Nachos preparados al momento con pollo o carne.",
    descEn: "Chicken or Beef Nachos.",
    price: 4000,
    badges: [],
    optionLabelEs: "Elige proteína:",
    optionLabelEn: "Choose protein:",
    options: ["Pollo (Chicken)", "Carne (Beef)"]
  },
  {
    id: "cr-papanachos-pollo-carne",
    category: "comidas-rapidas",
    nameEs: "Papanachos de Pollo o Carne",
    nameEn: "Chicken or Beef Papanachos",
    descEs: "Deliciosa base de papas y nachos con queso, aderezos y proteína.",
    descEn: "Chicken or Beef Papanachos.",
    price: 5000,
    badges: ["popular"],
    optionLabelEs: "Elige proteína:",
    optionLabelEn: "Choose protein:",
    options: ["Pollo (Chicken)", "Carne (Beef)"]
  },
  {
    id: "cr-papanachos-mixtos",
    category: "comidas-rapidas",
    nameEs: "Papanachos Mixtos",
    nameEn: "Mixed Papanachos",
    descEs: "Papanachos especiales con mezcla de pollo y carne.",
    descEn: "Mixed Papanachos.",
    price: 5500,
    badges: ["popular"]
  },
  {
    id: "cr-ceviche-pescado",
    category: "comidas-rapidas",
    nameEs: "Ceviche de Pescado (Grande)",
    nameEn: "Fish Ceviche (Regular)",
    descEs: "Ceviche fresco de pescado preparado al estilo tradicional.",
    descEn: "Fresh Fish Ceviche.",
    price: 3500,
    badges: ["popular", "seafood"]
  },
  {
    id: "cr-ceviche-pequeno",
    category: "comidas-rapidas",
    nameEs: "Ceviche de Pescado Pequeño",
    nameEn: "Fish Ceviche (Small size)",
    descEs: "Porción pequeña de ceviche fresco de pescado.",
    descEn: "Fish Ceviche (Small size).",
    price: 2500,
    badges: ["seafood"]
  },
  {
    id: "cr-chifrijo",
    category: "comidas-rapidas",
    nameEs: "Chifrijo La Finca",
    nameEn: "Traditional Chifrijo",
    descEs: "Arroz, frijoles, chicharrón, pico de gallo y tortillas tostadas.",
    descEn: "Chifrijo, fried rice, beans, pico de gallo and toast tortilla.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "cr-papas-fritas",
    category: "comidas-rapidas",
    nameEs: "Orden de Papas Fritas",
    nameEn: "French Fries Order",
    descEs: "Porción de papas a la francesa doradas y crujientes.",
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
    nameEn: "Fried Yucca Order",
    descEs: "Porción de yuca frita dorada al momento.",
    descEn: "Fried Yucca.",
    price: 2000,
    badges: ["veg"]
  },
  {
    id: "cr-chicharrones",
    category: "comidas-rapidas",
    nameEs: "Chicharrones con Yuca y Pico de Gallo",
    nameEn: "Pork Rinds with Yucca & Pico de Gallo",
    descEs: "Acompañados de yuca frita y pico de gallo fresco.",
    descEn: "Pork rinds with yucca and pico de gallo.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "cr-emparedados",
    category: "comidas-rapidas",
    nameEs: "Emparedados",
    nameEn: "Sandwiches",
    descEs: "Emparedado recién preparado de pollo, carne o jamón y queso.",
    descEn: "Sandwich (chicken, beef or ham and cheese).",
    price: 2000,
    badges: [],
    optionLabelEs: "Elige el tipo de emparedado:",
    optionLabelEn: "Choose sandwich type:",
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
    descEs: "Hamburguesa artesanal con torta de carne, queso y vegetales frescos.",
    descEn: "Simple Hamburger.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-hamburguesa-papas",
    category: "comidas-rapidas",
    nameEs: "Hamburguesa con Papas",
    nameEn: "Hamburger with French Fries",
    descEs: "Hamburguesa completa acompañada de orden de papas fritas.",
    descEn: "Hamburger with French fries.",
    price: 3000,
    badges: ["popular"]
  },
  {
    id: "cr-taco-sencillo",
    category: "comidas-rapidas",
    nameEs: "Taco Sencillo",
    nameEn: "Simple Taco",
    descEs: "Taco crujiente con carne, repollo y aderezos tradicionales.",
    descEn: "Simple Taco.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-taco-papas",
    category: "comidas-rapidas",
    nameEs: "Taco con Papas",
    nameEn: "Taco with French Fries",
    descEs: "Taco tradicional acompañado de papas fritas.",
    descEn: "Taco with French fries.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-torta-carne",
    category: "comidas-rapidas",
    nameEs: "Torta de Carne",
    nameEn: "Beef Patty",
    descEs: "Torta de carne sazonada al estilo casero.",
    descEn: "Beef patty.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-salchipapas",
    category: "comidas-rapidas",
    nameEs: "Salchipapas",
    nameEn: "Sausage and Fries",
    descEs: "Papas fritas con salchicha y salsas.",
    descEn: "Sausage and Fries.",
    price: 2500,
    badges: []
  },
  {
    id: "cr-gallo-salchichon",
    category: "comidas-rapidas",
    nameEs: "Gallo de Salchichón",
    nameEn: "Sausage with Tortilla",
    descEs: "Salchichón criollo servido en tortilla caliente.",
    descEn: "Sausage with tortilla.",
    price: 2000,
    badges: []
  },
  {
    id: "cr-gallo-queso",
    category: "comidas-rapidas",
    nameEs: "Gallo de Queso",
    nameEn: "Cheese with Tortilla",
    descEs: "Queso frito o a la plancha en tortilla casera.",
    descEn: "Cheese with tortilla.",
    price: 1500,
    badges: ["veg"]
  },
  {
    id: "cr-gallo-pescado",
    category: "comidas-rapidas",
    nameEs: "Gallo de Pescado",
    nameEn: "Fish with Tortilla",
    descEs: "Filet de pescado servido con tortilla.",
    descEn: "Fish with tortilla.",
    price: 2500,
    badges: ["seafood"]
  },
  {
    id: "cr-prensadas",
    category: "comidas-rapidas",
    nameEs: "Prensadas",
    nameEn: "Cheese Crisp Tortilla",
    descEs: "Tortillas prensadas con queso derretido.",
    descEn: "Cheese crisp.",
    price: 1000,
    badges: ["veg"]
  },
  {
    id: "cr-platano-natilla",
    category: "comidas-rapidas",
    nameEs: "Plátano con Natilla",
    nameEn: "Plantains with Sour Cream",
    descEs: "Plátano maduro dorado acompañado de natilla.",
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
    descEs: "Sopa casera caliente estilo ranchero con pollo y vegetales.",
    descEn: "Hot homemade Ranchero Soup.",
    price: 3500,
    badges: ["popular"]
  },
  {
    id: "sp-sopa-mariscos",
    category: "sopas",
    nameEs: "Sopa de Mariscos",
    nameEn: "Seafood Soup",
    descEs: "Exquisita sopa de mariscos frescos recién preparada.",
    descEn: "Fresh Seafood Soup.",
    price: 5000,
    badges: ["popular", "seafood"]
  },

  // ==================== BEBIDAS FRÍAS / COLD BEVERAGES ====================
  {
    id: "bf-batidos-leche",
    category: "bebidas-frias",
    nameEs: "Batidos en Leche",
    nameEn: "Milkshakes",
    descEs: "Batido cremoso en leche preparado con fruta seleccionada.",
    descEn: "Creamy Milkshakes: Strawberry, Cacomal, Cream, Papaya, Blackberry.",
    price: 2000,
    badges: ["popular"],
    optionLabelEs: "Elige el sabor del batido:",
    optionLabelEn: "Choose milkshake flavor:",
    options: [
      "Fresa (Strawberry)",
      "Cacomal",
      "Crema (Cream)",
      "Papaya",
      "Mora (Blackberry)"
    ]
  },
  {
    id: "bf-refrescos-naturales",
    category: "bebidas-frias",
    nameEs: "Refrescos Naturales",
    nameEn: "Natural Fruit Juice",
    descEs: "Refresco natural del día bien frío.",
    descEn: "Natural fruit juice.",
    price: 1000,
    badges: ["popular"]
  },
  {
    id: "bf-gaseosa-desechable",
    category: "bebidas-frias",
    nameEs: "Gaseosa Desechable",
    nameEn: "Soft Drink (Plastic Bottle)",
    descEs: "Refresco gaseoso en envase desechable.",
    descEn: "Soft drinks (Plastic bottle).",
    price: 1400,
    badges: []
  },
  {
    id: "bf-gaseosa-vidrio",
    category: "bebidas-frias",
    nameEs: "Gaseosa de Vidrio",
    nameEn: "Soft Drink (Glass Bottle)",
    descEs: "Refresco gaseoso bien frío en botella de vidrio.",
    descEn: "Soft drinks (Glass bottle).",
    price: 1200,
    badges: []
  },
  {
    id: "bf-tropicales",
    category: "bebidas-frias",
    nameEs: "Tropicales (Vidrio)",
    nameEn: "Tropical Bottled Juice",
    descEs: "Fresco o té frío Tropical en botella.",
    descEn: "Bottled juice.",
    price: 1200,
    badges: []
  },
  {
    id: "bf-tropicales-desechables",
    category: "bebidas-frias",
    nameEs: "Tropicales Desechables",
    nameEn: "Tropical Disposable Bottle",
    descEs: "Fresco o té frío Tropical en botella desechable.",
    descEn: "Bottled juice (Plastic bottle).",
    price: 1400,
    badges: []
  },
  {
    id: "bf-cerveza",
    category: "bebidas-frias",
    nameEs: "Cerveza (Consultar en Restaurante)",
    nameEn: "Beer (Inquire for brands)",
    descEs: "Cervezas nacionales y bebidas (Imperial, Rock Limón, etc. Consultar precio según marca).",
    descEn: "National beers (Inquire via WhatsApp for availability).",
    price: 1500,
    badges: [],
    optionLabelEs: "Preferencia (sujeto a disponibilidad):",
    optionLabelEn: "Preference:",
    options: [
      "Imperial",
      "Rock Limón",
      "Pilsen / Otra (Consultar)"
    ]
  },

  // ==================== BEBIDAS CALIENTES / HOT BEVERAGES ====================
  {
    id: "bc-cafe-negro",
    category: "bebidas-calientes",
    nameEs: "Café Negro",
    nameEn: "Black Coffee",
    descEs: "Café chorreado costarricense recién hecho.",
    descEn: "Fresh Costa Rican Black Coffee.",
    price: 800,
    badges: ["popular"]
  },
  {
    id: "bc-cafe-leche",
    category: "bebidas-calientes",
    nameEs: "Café con Leche",
    nameEn: "Coffee with Milk",
    descEs: "Café caliente acompañado con leche.",
    descEn: "Coffee with cream / milk.",
    price: 800,
    badges: ["popular"]
  },
  {
    id: "bc-chocolate",
    category: "bebidas-calientes",
    nameEs: "Chocolate Caliente",
    nameEn: "Hot Chocolate",
    descEs: "Delicioso chocolate caliente cremoso.",
    descEn: "Hot Chocolate.",
    price: 1200,
    badges: []
  },
  {
    id: "bc-agua-dulce",
    category: "bebidas-calientes",
    nameEs: "Agua Dulce",
    nameEn: "Sugar Cane Tea",
    descEs: "Bebida tradicional caliente de tapa de dulce.",
    descEn: "Traditional sugar cane tea.",
    price: 800,
    badges: []
  },
  {
    id: "bc-agua-dulce-leche",
    category: "bebidas-calientes",
    nameEs: "Agua Dulce con Leche",
    nameEn: "Sugar Cane Tea with Milk",
    descEs: "Tradicional agua dulce preparada con leche caliente.",
    descEn: "Sugar cane tea with milk.",
    price: 1200,
    badges: ["popular"]
  },
  {
    id: "bc-te-agua",
    category: "bebidas-calientes",
    nameEs: "Té en Agua",
    nameEn: "Hot Tea",
    descEs: "Infusión de té caliente en agua.",
    descEn: "Hot Tea.",
    price: 800,
    badges: []
  }
];

/* --------------------------------------------------------------------------
   2. HOSPEDAJE CAROUSEL PHOTOS (Real Photos + Details)
   -------------------------------------------------------------------------- */
const LODGING_SLIDES = [
  {
    src: "assets/images/hospedaje-cabana-exterior.jpg",
    badgeEs: "Fotografía Real • Cabaña La Finca",
    badgeEn: "Real Photo • La Finca Cabin",
    titleEs: "Cabaña de Madera Rodeada de Naturaleza",
    titleEn: "Wooden Cabin Surrounded by Nature",
    descEs: "Acogedora cabaña en madera con corredor, jardines tropicales y árboles centenarios para una estadía llena de paz y privacidad."
  },
  {
    src: "assets/images/hospedaje-principal-clean.jpg",
    badgeEs: "Fotografía Real • Interior Equipado",
    badgeEn: "Real Photo • Equipped Interior",
    titleEs: "Estudio Completo y Moderno en su Interior",
    titleEn: "Full Modern Equipped Studio Inside",
    descEs: "Amplio espacio integrado con cama matrimonial, comedor para 4 personas, cocina equipada y acceso directo al balcón con vista al bosque."
  },
  {
    src: "assets/images/hospedaje-bosque-natural.jpg",
    badgeEs: "Fotografía Real • Bosque Tropical",
    badgeEn: "Real Photo • Tropical Rainforest",
    titleEs: "Entorno Natural y Bosque en La Finca",
    titleEn: "Natural Rainforest Surroundings",
    descEs: "Conecta con la naturaleza pura de la zona: vegetación exuberante, aire fresco, canto de aves y tranquilidad absoluta."
  },
  {
    src: "assets/images/hospedaje-cocina-comedor.png",
    badgeEs: "Comodidad Total",
    badgeEn: "Full Convenience",
    titleEs: "Cocina Privada & Comedor de Madera",
    titleEn: "Private Kitchen & Wooden Dining Area",
    descEs: "Equipada con refrigeradora grande de acero inoxidable, microondas, fregadero, utensilios y mesa de comedor junto a ventanales naturales."
  },
  {
    src: "assets/images/hospedaje-area-descanso.png",
    badgeEs: "Descanso & Confort",
    badgeEn: "Rest & Comfort",
    titleEs: "Área de Descanso & Salida a Terraza",
    titleEn: "Sleeping Area & Terrace Access",
    descEs: "Cama matrimonial confortable con ropa de cama impecable, paños incluidos, pisos de porcelanato y puerta directa hacia el balcón."
  },
  {
    src: "assets/images/hospedaje-vista-bosque.png",
    badgeEs: "Vista desde la Habitación",
    badgeEn: "View from the Room",
    titleEs: "Balcón y Ventanales hacia el Bosque",
    titleEn: "Balcony & Windows Facing the Forest",
    descEs: "Despierta con luz natural abundante y el restaurante La Finca a pocos pasos de tu cabaña."
  }
];

/* --------------------------------------------------------------------------
   3. APPLICATION STATE
   -------------------------------------------------------------------------- */
const state = {
  lang: "es", // 'es' | 'en'
  activeCategory: "all",
  searchQuery: "",
  dietaryFilter: "all", // 'all' | 'popular' | 'seafood' | 'veg'
  cart: [], // [{ cartKey, id, nameEs, nameEn, price, variant, qty }]
  carouselIndex: 0,
  carouselAutoPlay: true,
  carouselTimer: null
};

// Load saved cart from localStorage
try {
  const savedCart = localStorage.getItem("lafinca_cart_v1");
  if (savedCart) {
    state.cart = JSON.parse(savedCart);
  }
} catch (err) {
  console.warn("Could not load cart from storage:", err);
}

function saveCart() {
  try {
    localStorage.setItem("lafinca_cart_v1", JSON.stringify(state.cart));
  } catch (err) {
    // ignore storage errors
  }
}

function formatColones(amount) {
  return "₡" + Number(amount || 0).toLocaleString("es-CR");
}

/* --------------------------------------------------------------------------
   4. RENDER DIGITAL MENU
   -------------------------------------------------------------------------- */
function renderCategoryPills() {
  const container = document.getElementById("categoryPillsContainer");
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => {
    const count = cat.id === "all"
      ? MENU_ITEMS.length
      : MENU_ITEMS.filter(item => item.category === cat.id).length;

    const activeClass = state.activeCategory === cat.id ? "active" : "";
    const label = state.lang === "es" ? cat.nameEs : cat.nameEn;

    return `
      <button type="button" class="cat-pill ${activeClass}" data-cat="${cat.id}">
        <span>${cat.icon}</span>
        <span>${label}</span>
        <span class="count">${count}</span>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.getAttribute("data-cat");
      renderCategoryPills();
      renderMenuGrid();
    });
  });
}

function renderMenuGrid() {
  const container = document.getElementById("menuContainer");
  if (!container) return;

  const q = state.searchQuery.trim().toLowerCase();

  // Filter items
  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = state.activeCategory === "all" || item.category === state.activeCategory;
    const matchesDiet = state.dietaryFilter === "all" || (item.badges && item.badges.includes(state.dietaryFilter));
    const matchesSearch = !q ||
      item.nameEs.toLowerCase().includes(q) ||
      item.nameEn.toLowerCase().includes(q) ||
      item.descEs.toLowerCase().includes(q) ||
      item.descEn.toLowerCase().includes(q);

    return matchesCat && matchesDiet && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 3.5rem 1rem; background: var(--clr-surface); border-radius: var(--radius-lg); border: 1px solid var(--clr-border);">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.4rem;">
          ${state.lang === "es" ? "No encontramos platillos con ese filtro" : "No dishes found matching your filter"}
        </h3>
        <p style="color: var(--clr-text-muted); margin-bottom: 1.2rem;">
          ${state.lang === "es" ? "Intenta con otra palabra o limpia los filtros activos." : "Try another keyword or reset active filters."}
        </p>
        <button type="button" class="btn btn-outline" onclick="resetMenuFilters()">
          ${state.lang === "es" ? "Mostrar Todo el Menú" : "Show Full Menu"}
        </button>
      </div>
    `;
    return;
  }

  // Group by category for clean restaurant presentation
  const categoriesToRender = state.activeCategory === "all"
    ? MENU_CATEGORIES.filter(c => c.id !== "all")
    : MENU_CATEGORIES.filter(c => c.id === state.activeCategory);

  let html = "";

  categoriesToRender.forEach(cat => {
    const catItems = filtered.filter(i => i.category === cat.id);
    if (catItems.length === 0) return;

    const catTitle = state.lang === "es" ? cat.nameEs : cat.nameEn;
    const catSub = state.lang === "es" ? cat.nameEn : cat.nameEs;

    html += `
      <div class="menu-category-group">
        <div class="menu-category-header">
          <h3 class="menu-category-title">
            <span>${cat.icon}</span>
            <span>${catTitle}</span>
          </h3>
          <span class="menu-category-subtitle">${catSub} • ${catItems.length} ${state.lang === "es" ? "opciones" : "items"}</span>
        </div>
        <div class="menu-grid">
          ${catItems.map(item => renderMenuCardHTML(item)).join("")}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  attachMenuCardListeners(container);
}

function renderMenuCardHTML(item) {
  const title = state.lang === "es" ? item.nameEs : item.nameEn;
  const desc = state.lang === "es" ? item.descEs : item.descEn;
  const subLang = state.lang === "es" ? item.nameEn : item.nameEs;

  const badgesHTML = (item.badges || []).map(b => {
    if (b === "popular") return `<span class="item-badge badge-popular">★ ${state.lang === "es" ? "Favorito" : "Popular"}</span>`;
    if (b === "seafood") return `<span class="item-badge badge-seafood">🐟 ${state.lang === "es" ? "Mariscos" : "Seafood"}</span>`;
    if (b === "veg") return `<span class="item-badge badge-veg">🌿 ${state.lang === "es" ? "Vegetariano" : "Veggie"}</span>`;
    return "";
  }).join("");

  const hasOptions = Array.isArray(item.options) && item.options.length > 0;
  const optionLabel = state.lang === "es" ? item.optionLabelEs : item.optionLabelEn;

  const optionsHTML = hasOptions ? `
    <div class="menu-card-options">
      <label for="opt-${item.id}">${optionLabel}</label>
      <select id="opt-${item.id}" class="variant-select" data-item-id="${item.id}">
        ${item.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
      </select>
    </div>
  ` : "";

  return `
    <article class="menu-card" data-card-id="${item.id}">
      <div>
        <div class="menu-card-top">
          <div class="menu-item-info">
            ${badgesHTML ? `<div class="menu-item-badges">${badgesHTML}</div>` : ""}
            <h4 class="menu-item-name">${title}</h4>
            <p class="menu-item-desc">${desc}</p>
            <p class="menu-item-en">${subLang}</p>
          </div>
          <div class="menu-item-price">${formatColones(item.price)}</div>
        </div>
      </div>

      <div>
        ${optionsHTML}
        <div class="menu-card-footer" style="${hasOptions ? 'margin-top:0.65rem;' : ''}">
          <div class="qty-stepper">
            <button type="button" class="qty-btn dec-btn" aria-label="Disminuir">−</button>
            <span class="qty-val" data-qty-for="${item.id}">1</span>
            <button type="button" class="qty-btn inc-btn" aria-label="Aumentar">+</button>
          </div>
          <button type="button" class="add-to-order-btn" data-add-id="${item.id}">
            <span>+</span>
            <span>${state.lang === "es" ? "Agregar al Pedido" : "Add to Order"}</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function attachMenuCardListeners(container) {
  container.querySelectorAll(".menu-card").forEach(card => {
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

      // Button feedback animation
      const originalHTML = addBtn.innerHTML;
      addBtn.classList.add("added");
      addBtn.innerHTML = `<span>✓</span><span>${state.lang === "es" ? "¡Agregado!" : "Added!"}</span>`;
      setTimeout(() => {
        addBtn.classList.remove("added");
        addBtn.innerHTML = originalHTML;
      }, 950);
    });
  });
}

window.resetMenuFilters = function () {
  state.activeCategory = "all";
  state.searchQuery = "";
  state.dietaryFilter = "all";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".diet-filter-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-diet") === "all");
  });
  renderCategoryPills();
  renderMenuGrid();
};

/* --------------------------------------------------------------------------
   5. CART / PICK-UP ORDER & FOOD QUOTER ENGINE
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
      ? `Agregado: ${qty}x ${item.nameEs}${variant ? ` (${variant})` : ""}`
      : `Added: ${qty}x ${item.nameEn}${variant ? ` (${variant})` : ""}`
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
  showToast(state.lang === "es" ? "Pedido vaciado" : "Order cleared");
}

function getCartTotals() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  return { totalItems, subtotal };
}

function updateCartUI() {
  const { totalItems, subtotal } = getCartTotals();

  // Header Badge
  const headerCount = document.getElementById("headerCartCount");
  const headerTotal = document.getElementById("headerCartTotal");
  if (headerCount) headerCount.textContent = totalItems;
  if (headerTotal) headerTotal.textContent = formatColones(subtotal);

  // Mobile sticky bar
  const mobileBar = document.getElementById("mobileStickyOrderBar");
  const mobileCount = document.getElementById("mobileCartCount");
  const mobileTotal = document.getElementById("mobileCartTotal");
  if (mobileBar) {
    mobileBar.classList.toggle("has-items", totalItems > 0);
  }
  if (mobileCount) mobileCount.textContent = `${totalItems} ${totalItems === 1 ? "platillo" : "platillos"}`;
  if (mobileTotal) mobileTotal.textContent = formatColones(subtotal);

  // Slide-over Drawer list
  renderDrawerCartItems();

  // Quoter Section Food & Lodging Summaries
  renderPickupQuoterTable();
  calculateLodgingQuote();
}

function renderDrawerCartItems() {
  const listEl = document.getElementById("drawerCartList");
  const subtotalEl = document.getElementById("drawerSubtotal");
  if (!listEl) return;

  const { subtotal } = getCartTotals();
  if (subtotalEl) subtotalEl.textContent = formatColones(subtotal);

  if (state.cart.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding: 2.5rem 1rem; color: var(--clr-text-muted);">
        <div style="font-size: 2.4rem; margin-bottom: 0.6rem;">🧺</div>
        <p style="font-weight: 700; color: var(--clr-forest-950); margin-bottom: 0.3rem;">
          ${state.lang === "es" ? "Tu orden está vacía" : "Your order is empty"}
        </p>
        <p style="font-size: 0.85rem;">
          ${state.lang === "es"
            ? "Selecciona platillos y bebidas del menú digital para armar tu pedido para retirar o cotización."
            : "Select dishes and drinks from the digital menu to build your pick-up order or quote."}
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
          ${item.variant ? `<p>Opción: <strong>${item.variant}</strong></p>` : ""}
          <p>${formatColones(item.price)} c/u • <strong>${formatColones(lineTotal)}</strong></p>
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
   6. HOSPEDAJE CAROUSEL (CARRETE INTERACTIVO + UPLOAD LOCAL PREVIEW)
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
    counter.textContent = `${state.carouselIndex + 1} / ${LODGING_SLIDES.length}`;
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
    counter.textContent = `${state.carouselIndex + 1} / ${total}`;
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
  if (state.carouselAutoPlay) {
    startCarouselTimer();
  }
}

function initCarouselControls() {
  const prevBtn = document.getElementById("carouselPrevBtn");
  const nextBtn = document.getElementById("carouselNextBtn");
  const autoPlayBtn = document.getElementById("carouselAutoPlayBtn");
  const zoomBtn = document.getElementById("carouselZoomBtn");
  const uploadInput = document.getElementById("customPhotosInput");

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
      autoPlayBtn.textContent = state.carouselAutoPlay ? "⏸ Auto" : "▶ Auto";
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

  // Allow user to add more photos dynamically to the carousel!
  if (uploadInput) {
    uploadInput.addEventListener("change", (e) => {
      const files = Array.from(e.target.files || []);
      if (files.length === 0) return;

      files.forEach((file, i) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          LODGING_SLIDES.push({
            src: ev.target.result,
            badgeEs: "Fotografía Agregada",
            badgeEn: "Added Photo",
            titleEs: file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ") || `Vista del Hospedaje #${LODGING_SLIDES.length + 1}`,
            titleEn: `Lodging View #${LODGING_SLIDES.length + 1}`,
            descEs: "Fotografía adicional del hospedaje La Finca."
          });
          renderCarousel();
          if (i === files.length - 1) {
            goToSlide(LODGING_SLIDES.length - 1);
            showToast(`¡${files.length} fotografía(s) agregada(s) al carrete!`);
          }
        };
        reader.readAsDataURL(file);
      });
    });
  }

  renderCarousel();
  startCarouselTimer();
}

/* --------------------------------------------------------------------------
   7. PICK-UP ORDER & QUOTER CALCULATORS + WHATSAPP DISPATCH
   -------------------------------------------------------------------------- */
function renderPickupQuoterTable() {
  const container = document.getElementById("pickupQuoterItemsBox");
  const totalEl = document.getElementById("pickupQuoterTotal");
  const groupCountInput = document.getElementById("pickupGroupSize");
  const perPersonEl = document.getElementById("pickupPerPersonEstimate");

  if (!container) return;

  const { subtotal } = getCartTotals();
  if (totalEl) totalEl.textContent = formatColones(subtotal);

  const people = Math.max(1, parseInt(groupCountInput?.value || "1", 10));
  if (perPersonEl) {
    perPersonEl.textContent = formatColones(Math.round(subtotal / people));
  }

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="padding: 1.25rem; text-align: center; color: var(--clr-text-muted); background: var(--clr-surface); border-radius: var(--radius-sm); border: 1px dashed var(--clr-border-strong);">
        Aún no has seleccionado platillos del menú digital.
        <a href="#menu-digital" style="color: var(--clr-burgundy-700); font-weight: 700; text-decoration: underline; margin-left: 0.3rem;">Ir al Menú Digital ↑</a>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="quote-line">
      <div>
        <strong>${item.qty}x ${item.nameEs}</strong>
        ${item.variant ? `<span style="font-size:0.8rem; color:var(--clr-text-muted);"> (${item.variant})</span>` : ""}
      </div>
      <div style="display:flex; align-items:center; gap:0.65rem;">
        <strong>${formatColones(item.price * item.qty)}</strong>
        <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', -1)" style="color:var(--clr-burgundy-700); font-weight:700;" title="Quitar 1">−</button>
        <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', 1)" style="color:var(--clr-forest-800); font-weight:700;" title="Sumar 1">+</button>
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

  // Meal plan supplement per person per day (using real menu prices as reference)
  // Desayuno típico + Café (~₡4,800) | Almuerzo/Cena Casado + Refresco (~₡5,000)
  let mealCostPerDayPerGuest = 0;
  let mealLabel = "Solo Hospedaje (Cocina equipada disponible)";
  if (mealPlan === "desayuno") {
    mealCostPerDayPerGuest = 4500;
    mealLabel = "Desayuno y Café en el Restaurante";
  } else if (mealPlan === "media-pension") {
    mealCostPerDayPerGuest = 5000;
    mealLabel = "Almuerzo o Cena (Casado/Plato fuerte + Bebida)";
  } else if (mealPlan === "pension-completa") {
    mealCostPerDayPerGuest = 9500;
    mealLabel = "Alimentación Completa (Desayuno + Almuerzo + Cena)";
  }

  const mealTotal = mealCostPerDayPerGuest * guests * nights;
  const { subtotal: cartSubtotal } = getCartTotals();
  const foodOrderAddon = includeCart ? cartSubtotal : 0;
  const estimatedFoodTotal = mealTotal + foodOrderAddon;

  // Update UI summary
  const nightsBadge = document.getElementById("quoteNightsDisplay");
  const guestsBadge = document.getElementById("quoteGuestsDisplay");
  const planBadge = document.getElementById("quotePlanDisplay");
  const mealCostEl = document.getElementById("quoteMealPlanCost");
  const cartCostEl = document.getElementById("quoteCartAddonCost");
  const totalFoodEl = document.getElementById("quoteFoodCombinedTotal");

  if (nightsBadge) nightsBadge.textContent = `${nights} ${nights === 1 ? "noche" : "noches"}`;
  if (guestsBadge) guestsBadge.textContent = `${guests} ${guests === 1 ? "huésped" : "huéspedes"}`;
  if (planBadge) planBadge.textContent = mealLabel;
  if (mealCostEl) mealCostEl.textContent = mealTotal > 0 ? formatColones(mealTotal) : "₡0 (Solo estadía)";
  if (cartCostEl) cartCostEl.textContent = formatColones(foodOrderAddon);
  if (totalFoodEl) {
    totalFoodEl.textContent = estimatedFoodTotal > 0
      ? `${formatColones(estimatedFoodTotal)} + Tarifa de Estadía`
      : "Tarifa según fechas (Confirmar por WhatsApp)";
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

// Send Pick-up Order or Food Quote via WhatsApp
function sendOrderViaWhatsApp(source = "drawer") {
  const isDrawer = source === "drawer";
  const name = (document.getElementById(isDrawer ? "drawerCustomerName" : "pickupCustomerName")?.value || "").trim();
  const phone = (document.getElementById(isDrawer ? "drawerCustomerPhone" : "pickupCustomerPhone")?.value || "").trim();
  const pickupTime = document.getElementById(isDrawer ? "drawerPickupTime" : "pickupTimeSelect")?.value || "Lo antes posible (20-30 min)";
  const orderType = document.getElementById(isDrawer ? "drawerOrderType" : "pickupOrderMode")?.value || "Pedido para Retirar";
  const payment = document.getElementById(isDrawer ? "drawerPaymentMethod" : "pickupPaymentMethod")?.value || "SINPE Móvil";
  const notes = (document.getElementById(isDrawer ? "drawerOrderNotes" : "pickupOrderNotes")?.value || "").trim();

  if (state.cart.length === 0) {
    showToast("Agrega al menos un platillo del menú antes de enviar.");
    return;
  }

  const { totalItems, subtotal } = getCartTotals();

  const lines = [
    `🌿 *LA FINCA — ${orderType.toUpperCase()}* 🍽️`,
    `----------------------------------`,
    name ? `👤 *Cliente:* ${name}` : null,
    phone ? `📞 *Teléfono:* ${phone}` : null,
    `🕒 *Retiro / Entrega:* ${pickupTime}`,
    `💳 *Método de pago:* ${payment}`,
    ``,
    `📋 *DETALLE DEL PEDIDO (${totalItems} ítems):*`
  ].filter(Boolean);

  state.cart.forEach(item => {
    const optText = item.variant ? ` [${item.variant}]` : "";
    lines.push(`• ${item.qty}x ${item.nameEs}${optText} — ${formatColones(item.price * item.qty)}`);
  });

  lines.push(`----------------------------------`);
  lines.push(`💰 *TOTAL ESTIMADO: ${formatColones(subtotal)}*`);

  if (notes) {
    lines.push(``, `📝 *Notas / Instrucciones:* ${notes}`);
  }

  lines.push(``, `¡Hola La Finca! Me gustaría confirmar este ${orderType.toLowerCase()}. ¡Gracias!`);

  openWhatsAppWithText(lines.join("\n"));
}

// Send Lodging Quote / Inquiry via WhatsApp
function sendLodgingQuoteViaWhatsApp() {
  const quote = calculateLodgingQuote();
  const name = (document.getElementById("lodgeCustomerName")?.value || "").trim();
  const phone = (document.getElementById("lodgeCustomerPhone")?.value || "").trim();
  const notes = (document.getElementById("lodgeNotes")?.value || "").trim();

  const lines = [
    `🏡 *LA FINCA — COTIZACIÓN Y RESERVA DE HOSPEDAJE* 🌿`,
    `----------------------------------`,
    name ? `👤 *Nombre:* ${name}` : null,
    phone ? `📞 *Teléfono:* ${phone}` : null,
    `📅 *Check-in:* ${quote.checkIn}`,
    `📅 *Check-out:* ${quote.checkOut}`,
    `🌙 *Estadía:* ${quote.nights} ${quote.nights === 1 ? "noche" : "noches"}`,
    `👥 *Huéspedes:* ${quote.guests} ${quote.guests === 1 ? "persona" : "personas"}`,
    `🍽️ *Plan de Alimentación:* ${quote.mealLabel}`,
    quote.mealTotal > 0 ? `🍛 *Subtotal Alimentación Plan:* ${formatColones(quote.mealTotal)}` : null
  ].filter(Boolean);

  if (quote.includeCart && state.cart.length > 0) {
    lines.push(``, `🧺 *Platillos del Menú Digital incluidos (${formatColones(quote.foodOrderAddon)}):*`);
    state.cart.forEach(item => {
      const optText = item.variant ? ` [${item.variant}]` : "";
      lines.push(`  • ${item.qty}x ${item.nameEs}${optText} (${formatColones(item.price * item.qty)})`);
    });
  }

  if (notes) {
    lines.push(``, `📝 *Consulta / Comentarios:* ${notes}`);
  }

  lines.push(``, `¡Hola La Finca! Me gustaría consultar disponibilidad y cotización exacta del hospedaje para estas fechas. ¡Muchas gracias!`);

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
  toast.innerHTML = `<span>✨</span><span>${text}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 2600);
}

window.toggleOrderDrawer = toggleOrderDrawer;
window.openPhysicalMenuModal = openPhysicalMenuModal;
window.closePhysicalMenuModal = closePhysicalMenuModal;
window.openLightboxModal = openLightboxModal;
window.closeLightboxModal = closeLightboxModal;

/* --------------------------------------------------------------------------
   9. INITIALIZATION & EVENT LISTENERS
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Set default dates on Lodging Quoter (Tomorrow & Day after tomorrow)
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

  // Render initial views
  renderCategoryPills();
  renderMenuGrid();
  initCarouselControls();
  updateCartUI();

  // Search bar listener
  const searchInput = document.getElementById("menuSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.searchQuery = searchInput.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
      }
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

  // Dietary / Popular filter chips
  document.querySelectorAll(".diet-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.dietaryFilter = btn.getAttribute("data-diet");
      document.querySelectorAll(".diet-filter-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
      });
      renderMenuGrid();
    });
  });

  // Language switcher (ES / EN)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.lang = btn.getAttribute("data-lang");
      document.querySelectorAll(".lang-btn").forEach(b => {
        b.classList.toggle("active", b === btn);
      });
      renderCategoryPills();
      renderMenuGrid();
      renderCarousel();
      updateCartUI();
      showToast(state.lang === "es" ? "Idioma cambiado a Español" : "Language switched to English");
    });
  });

  // Hero Visual Switcher (Restaurante vs Hospedaje preview)
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
        title.textContent = "Cabaña en Madera & Hospedaje Equipado";
        sub.textContent = "Exterior rodeado de jardines tropicales e interior con cocina, comedor y cama matrimonial.";
      } else if (mode === "interior") {
        img.src = "assets/images/hospedaje-principal-clean.jpg";
        title.textContent = "Interior Completo: Cocina, Comedor y Descanso";
        sub.textContent = "Acabados modernos, refrigeradora, microondas, cama matrimonial y salida al balcón.";
      } else if (mode === "platillos") {
        img.src = "assets/images/plato-tilapia.jpg";
        title.textContent = "Tilapia Entera Frita, Casados, Mariscos y Más";
        sub.textContent = "Sabor auténtico recién preparado para comer aquí o pedir para retirar.";
      } else {
        img.src = "assets/images/hero-la-finca.jpg";
        title.textContent = "Gastronomía Costarricense & Descanso Natural";
        sub.textContent = "Disfruta en nuestro restaurante o cotiza tu estadía rodeado de naturaleza.";
      }
    });
  });

  // Quoter Tabs Switcher
  document.querySelectorAll(".quoter-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-quoter-tab");
      document.querySelectorAll(".quoter-tab-btn").forEach(b => b.classList.toggle("active", b === btn));
      document.querySelectorAll(".quoter-panel").forEach(p => {
        p.classList.toggle("active", p.id === target);
      });
    });
  });

  // Lodging Quoter Input Listeners
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

  // Navbar scroll effect & Mobile Menu
  const header = document.getElementById("siteHeader");
  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  });

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }
});
