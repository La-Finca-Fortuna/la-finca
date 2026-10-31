/* ==========================================================================
   LA FINCA — GASTRONOMÍA & HOSPEDAJE
   Complete Bilingual (ES/EN), Dual-Currency (CRC/USD), Collapsible Menu & Quoter
   WhatsApp Oficial: (+506) 8585-7454
   ========================================================================== */

const WHATSAPP_NUMBER = "50685857454";
const EXCHANGE_RATE_CRC_USD = 515;

/* --------------------------------------------------------------------------
   1. FULL-PAGE BILINGUAL DICTIONARY (ES / EN)
   -------------------------------------------------------------------------- */
const UI_TRANSLATIONS = {
  es: {
    "brand.tagline": "Gastronomía & Hospedaje",
    "nav.home": "Inicio",
    "nav.menu": "Menú Digital",
    "nav.lodging": "Hospedaje",
    "nav.quoter": "Pedidos & Cotizaciones",
    "nav.location": "Ubicación",
    "nav.contact": "Contacto",
    "nav.orderBtn": "Orden",

    "hero.eyebrow": "Restaurante & Estancia Natural",
    "hero.title": "Cocina tradicional y refugio privado en <em>La Finca</em>",
    "hero.desc": "Accede a nuestro menú digital desplegable por categorías, realiza tus pedidos para retirar en el restaurante, conoce nuestra cabaña equipada y gestiona tu cotización directamente con nosotros.",
    "hero.btnMenu": "Ver Menú Digital",
    "hero.btnLodging": "Conocer el Hospedaje",
    "hero.btnQuoter": "Cotizar en Línea",
    "hero.m1Title": "Menú Desplegable",
    "hero.m1Desc": "Platos fuertes, comidas rápidas, sopas y bebidas organizadas por categoría.",
    "hero.m2Title": "Retiro en Local",
    "hero.m2Desc": "Ordena en línea y pasa a retirar recién preparado sin esperas.",
    "hero.m3Title": "Cabaña Equipada",
    "hero.m3Desc": "Cocina privada, comedor, habitación matrimonial y bosque natural.",
    "hero.tabCabin": "Cabaña",
    "hero.tabInterior": "Interior",
    "hero.tabForest": "Bosque",

    "menu.eyebrow": "Gastronomía",
    "menu.title": "Menú Digital Desplegable",
    "menu.subtitle": "Haz clic en cualquier categoría para desplegar sus platillos y agregarlos a tu pedido para retirar o a tu cotización.",
    "menu.searchPlaceholder": "Buscar platillo o bebida (al escribir se despliegan las coincidencias)...",
    "menu.filterAll": "Todos",
    "menu.filterPopular": "Recomendados",
    "menu.filterSeafood": "Mariscos",
    "menu.filterVeg": "Vegetariano",
    "menu.viewPhysical": "Ver Menú Físico",

    "lodge.eyebrow": "Estancia Privada",
    "lodge.title": "Hospedaje La Finca",
    "lodge.subtitle": "Cabaña independiente en madera, totalmente equipada en su interior y rodeada por la tranquilidad del bosque.",
    "lodge.zoomBtn": "Ampliar",
    "lodge.specEyebrow": "Comodidades",
    "lodge.specTitle": "Privacidad, amplitud y equipamiento completo",
    "lodge.specDesc": "Ideal para parejas, familias o estancias de descanso, con acceso directo a los platillos de nuestro restaurante.",
    "lodge.am1Title": "Cabaña Independiente",
    "lodge.am1Desc": "Construcción en madera con corredor y terraza hacia el bosque.",
    "lodge.am2Title": "Cocina Equipada",
    "lodge.am2Desc": "Refrigeradora de acero inoxidable, microondas, fregadero y menaje.",
    "lodge.am3Title": "Área de Descanso",
    "lodge.am3Desc": "Cama matrimonial vestida con ropa de cama y paños incluidos.",
    "lodge.am4Title": "Comedor & Restaurante",
    "lodge.am4Desc": "Mesa para 4 personas y servicio directo del restaurante La Finca.",
    "lodge.btnQuote": "Cotizar Estadía",
    "lodge.btnWa": "Consultar por WhatsApp (8585-7454)",

    "quoter.eyebrow": "Gestión en Línea",
    "quoter.title": "Pedidos para Retirar & Cotizador",
    "quoter.subtitle": "Envía tu pedido listo para retirar en el restaurante o cotiza tu estadía y alimentación directamente a nuestro WhatsApp.",
    "quoter.tab1": "Pedidos para Retirar / Cotizar Menú",
    "quoter.tab2": "Cotizar Hospedaje & Estadía",
    "quoter.p1Title": "Detalles del Pedido o Cotización",
    "quoter.p1Desc": "Completa la información para preparar tu orden a tiempo o enviarte una cotización formal.",
    "quoter.lblName": "Nombre Completo",
    "quoter.phName": "Nombre y apellido",
    "quoter.lblPhone": "Teléfono de Contacto",
    "quoter.lblMode": "Modalidad",
    "quoter.modePickup": "Pedido para Retirar en el Restaurante",
    "quoter.modeQuote": "Cotización de Alimentación / Grupo",
    "quoter.modeTable": "Reserva de Mesa con Pedido Anticipado",
    "quoter.lblTime": "Hora Estimada de Retiro",
    "quoter.timeAsap": "Lo antes posible (20 - 30 min)",
    "quoter.time45": "En 45 minutos",
    "quoter.time60": "En 1 hora",
    "quoter.timeCustom": "Hora específica (indicar en notas)",
    "quoter.lblPayment": "Método de Pago",
    "quoter.paySinpe": "SINPE Móvil (8585-7454)",
    "quoter.payCash": "Efectivo al retirar",
    "quoter.payCard": "Tarjeta en el restaurante",
    "quoter.lblSplit": "Dividir estimado entre (personas)",
    "quoter.lblNotes": "Observaciones o Instrucciones Especiales",
    "quoter.phNotes": "Indicaciones de preparación, hora exacta de retiro o detalles adicionales...",
    "quoter.btnSendWa": "Enviar por WhatsApp (8585-7454)",
    "quoter.btnPrint": "Imprimir / PDF",
    "quoter.sumTitle": "Resumen de la Orden",
    "quoter.btnClear": "Vaciar selección",
    "quoter.sumSub": "Platillos seleccionados desde el Menú Digital:",
    "quoter.lblPerPerson": "Monto estimado por persona",
    "quoter.lblTotalEst": "Total Estimado",
    "quoter.sinpeTitle": "Pago por SINPE Móvil",
    "quoter.btnCopy": "Copiar Número",
    "quoter.btnAddMore": "Añadir más platillos del menú",

    "quoter.p2Title": "Cotizar Estadía en Hospedaje",
    "quoter.p2Desc": "Indica las fechas deseadas, cantidad de huéspedes y plan de alimentación para confirmar disponibilidad.",
    "quoter.lblCheckIn": "Fecha de Entrada (Check-in)",
    "quoter.lblCheckOut": "Fecha de Salida (Check-out)",
    "quoter.lblGuests": "Huéspedes",
    "quoter.g1": "1 Huésped",
    "quoter.g2": "2 Huéspedes",
    "quoter.g3": "3 Huéspedes",
    "quoter.g4": "4 Huéspedes",
    "quoter.lblMealPlan": "Plan de Alimentación",
    "quoter.includeCartLbl": "Incluir también los platillos seleccionados en mi orden actual dentro de la cotización",
    "quoter.lblLodgeNotes": "Comentarios o Requerimientos Especiales",
    "quoter.phLodgeNotes": "Hora estimada de llegada o consultas adicionales...",
    "quoter.btnSendLodge": "Solicitar Disponibilidad y Cotización (8585-7454)",
    "quoter.lodgeSumTitle": "Resumen de Estadía",
    "quoter.lodgeSumSub": "Detalle de la solicitud para recepción:",
    "quoter.lblDuration": "Estadía",
    "quoter.lblCap": "Capacidad seleccionada",
    "quoter.lblUnit": "Unidad",
    "quoter.valUnit": "Cabaña Equipada",
    "quoter.lblRegime": "Régimen",
    "quoter.lblMealEst": "Alimentación estimada",
    "quoter.lblCartAddon": "Orden de menú adjunta",
    "quoter.lblQuoteStatus": "Cotización",
    "quoter.lodgeFootNote": "Al enviar tu solicitud recibirás atención directa por WhatsApp al (+506) 8585-7454 con la disponibilidad y tarifa vigente para tus fechas.",

    "contact.eyebrow": "Atención & Ubicación",
    "contact.title": "Contacto Directo",
    "contact.subtitle": "Comunícate con nosotros al (+506) 8585-7454 o visítanos directamente siguiendo nuestra ubicación oficial en Google Maps y Waze.",
    "contact.c1Eyebrow": "Consultas Frecuentes",
    "contact.c1Title": "Atención por WhatsApp",
    "contact.c1Desc": "Selecciona un motivo de consulta para iniciar la conversación:",
    "contact.wa1": "Ordenar comida para retirar",
    "contact.wa2": "Disponibilidad y tarifa de hospedaje",
    "contact.wa3": "Cotización para grupos o eventos",
    "contact.wa4": "Consultar horario de atención",
    "contact.c2Eyebrow": "Servicios",
    "contact.c2Title": "Gastronomía & Estancia",
    "contact.c2Desc": "Experiencia integral para visitantes del restaurante y huéspedes:",
    "contact.s1Title": "Restaurante & Para Llevar",
    "contact.s1Desc": "Platos fuertes, mariscos, arroces, casados, sopas y comidas rápidas preparadas al momento.",
    "contact.s2Title": "Hospedaje Privado",
    "contact.s2Desc": "Cabaña equipada con cocina, refrigeradora, microondas, comedor y terraza.",
    "contact.s3Title": "Facilidades de Pago",
    "contact.s3Desc": "Aceptamos SINPE Móvil (8585-7454), efectivo y tarjeta.",
    "contact.c3Eyebrow": "Línea Oficial",
    "contact.c3Title": "Reservaciones & Pedidos",
    "contact.c3Desc": "Atención directa para pedidos de retiro en el restaurante, reservaciones de mesa y estadías en el hospedaje.",
    "contact.lblPhoneWa": "Teléfono & WhatsApp",
    "contact.btnWriteWa": "Escribir por WhatsApp",
    "contact.btnCall": "Llamar al 8585-7454",

    "loc.eyebrow": "Ubicación",
    "loc.title": "Cómo llegar a La Finca",
    "loc.desc": "Encuéntranos fácilmente a través de Google Maps o Waze. Contamos con acceso cómodo y espacio de parqueo para clientes del restaurante y huéspedes.",
    "loc.destLbl": "Destino:",
    "loc.coordsLbl": "Coordenadas:",
    "loc.routePhoneLbl": "Contacto en ruta:",
    "loc.btnMaps": "Abrir en Google Maps",
    "loc.btnWaze": "Navegar con Waze",

    "footer.desc": "Cocina costarricense, mariscos frescos, comidas rápidas y hospedaje privado rodeado de naturaleza.",
    "footer.secTitle": "Secciones",
    "footer.catTitle": "Categorías del Menú",
    "footer.locTitle": "Ubicación & Orden",
    "footer.locDesc": "Realiza tu pedido en línea para retirar en el restaurante o consulta disponibilidad de hospedaje.",
    "footer.rights": "© 2026 La Finca — Restaurante & Hospedaje. Todos los derechos reservados.",

    "drawer.title": "Tu Orden",
    "drawer.sub": "La Finca — Retiro en Restaurante o Cotización",
    "drawer.shipTitle": "Datos de Envío (WhatsApp 8585-7454)",
    "drawer.btnFullQuoter": "Abrir Cotizador Completo",
    "drawer.btnClear": "Vaciar",
    "modal.physTitle": "Menú Impreso Original — La Finca",
    "modal.physSub": "Fotografías de nuestro menú físico en el restaurante.",
    "modal.close": "Cerrar",
    "mobile.viewOrder": "Ver Orden"
  },
  en: {
    "brand.tagline": "Gastronomy & Lodging",
    "nav.home": "Home",
    "nav.menu": "Digital Menu",
    "nav.lodging": "Lodging",
    "nav.quoter": "Orders & Quotes",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.orderBtn": "Order",

    "hero.eyebrow": "Restaurant & Nature Stay",
    "hero.title": "Traditional cuisine and private retreat at <em>La Finca</em>",
    "hero.desc": "Browse our collapsible digital menu by category, place pick-up orders for the restaurant, explore our equipped cabin, and request quotes directly with us.",
    "hero.btnMenu": "View Digital Menu",
    "hero.btnLodging": "Explore Lodging",
    "hero.btnQuoter": "Online Quoter",
    "hero.m1Title": "Collapsible Menu",
    "hero.m1Desc": "Main dishes, fast food, soups, and beverages organized by category.",
    "hero.m2Title": "Restaurant Pick-Up",
    "hero.m2Desc": "Order online and pick up freshly prepared without waiting.",
    "hero.m3Title": "Equipped Cabin",
    "hero.m3Desc": "Private kitchen, dining area, queen bedroom, and natural forest.",
    "hero.tabCabin": "Cabin",
    "hero.tabInterior": "Interior",
    "hero.tabForest": "Forest",

    "menu.eyebrow": "Gastronomy",
    "menu.title": "Collapsible Digital Menu",
    "menu.subtitle": "Click on any category to expand its dishes and add them to your pick-up order or quote.",
    "menu.searchPlaceholder": "Search dish or drink (matching categories expand automatically)...",
    "menu.filterAll": "All",
    "menu.filterPopular": "Featured",
    "menu.filterSeafood": "Seafood",
    "menu.filterVeg": "Vegetarian",
    "menu.viewPhysical": "Original Menu Photos",

    "lodge.eyebrow": "Private Stay",
    "lodge.title": "La Finca Lodging",
    "lodge.subtitle": "Independent wooden cabin, fully equipped inside and surrounded by the tranquility of the rainforest.",
    "lodge.zoomBtn": "Fullscreen",
    "lodge.specEyebrow": "Amenities",
    "lodge.specTitle": "Privacy, space, and full equipment",
    "lodge.specDesc": "Ideal for couples, families, or relaxing getaways, with direct access to our restaurant dishes.",
    "lodge.am1Title": "Independent Cabin",
    "lodge.am1Desc": "Wooden construction with porch and terrace facing the forest.",
    "lodge.am2Title": "Equipped Kitchen",
    "lodge.am2Desc": "Stainless steel refrigerator, microwave, sink, and cookware.",
    "lodge.am3Title": "Sleeping Area",
    "lodge.am3Desc": "Double bed with fresh linens and towels included.",
    "lodge.am4Title": "Dining & Restaurant",
    "lodge.am4Desc": "Table for 4 guests and direct service from La Finca restaurant.",
    "lodge.btnQuote": "Quote Your Stay",
    "lodge.btnWa": "Inquire via WhatsApp (8585-7454)",

    "quoter.eyebrow": "Online Management",
    "quoter.title": "Pick-Up Orders & Quoter",
    "quoter.subtitle": "Send your order ready for pick-up at the restaurant or quote your stay and meals directly via WhatsApp.",
    "quoter.tab1": "Pick-Up Orders / Menu Quote",
    "quoter.tab2": "Quote Lodging & Stay",
    "quoter.p1Title": "Order or Quote Details",
    "quoter.p1Desc": "Complete your details so we can prepare your order on time or send you a formal quote.",
    "quoter.lblName": "Full Name",
    "quoter.phName": "First and last name",
    "quoter.lblPhone": "Contact Phone",
    "quoter.lblMode": "Request Type",
    "quoter.modePickup": "Pick-Up Order at Restaurant",
    "quoter.modeQuote": "Food / Group Quote",
    "quoter.modeTable": "Table Reservation with Pre-Order",
    "quoter.lblTime": "Estimated Pick-Up Time",
    "quoter.timeAsap": "As soon as possible (20 - 30 min)",
    "quoter.time45": "In 45 minutes",
    "quoter.time60": "In 1 hour",
    "quoter.timeCustom": "Specific time (indicate in notes)",
    "quoter.lblPayment": "Payment Method",
    "quoter.paySinpe": "SINPE Móvil (8585-7454)",
    "quoter.payCash": "Cash upon pick-up",
    "quoter.payCard": "Card at the restaurant",
    "quoter.lblSplit": "Split estimate among (people)",
    "quoter.lblNotes": "Special Instructions or Notes",
    "quoter.phNotes": "Preparation notes, exact pick-up time, or additional details...",
    "quoter.btnSendWa": "Send via WhatsApp (8585-7454)",
    "quoter.btnPrint": "Print / PDF",
    "quoter.sumTitle": "Order Summary",
    "quoter.btnClear": "Clear selection",
    "quoter.sumSub": "Dishes selected from the Digital Menu:",
    "quoter.lblPerPerson": "Estimated amount per person",
    "quoter.lblTotalEst": "Estimated Total",
    "quoter.sinpeTitle": "SINPE Móvil Payment",
    "quoter.btnCopy": "Copy Number",
    "quoter.btnAddMore": "Add more dishes from menu",

    "quoter.p2Title": "Quote Lodging Stay",
    "quoter.p2Desc": "Select your dates, number of guests, and meal plan to confirm availability.",
    "quoter.lblCheckIn": "Check-in Date",
    "quoter.lblCheckOut": "Check-out Date",
    "quoter.lblGuests": "Guests",
    "quoter.g1": "1 Guest",
    "quoter.g2": "2 Guests",
    "quoter.g3": "3 Guests",
    "quoter.g4": "4 Guests",
    "quoter.lblMealPlan": "Meal Plan",
    "quoter.includeCartLbl": "Also include the dishes currently selected in my order within this quote",
    "quoter.lblLodgeNotes": "Comments or Special Requests",
    "quoter.phLodgeNotes": "Estimated arrival time or additional questions...",
    "quoter.btnSendLodge": "Request Availability & Quote (8585-7454)",
    "quoter.lodgeSumTitle": "Stay Summary",
    "quoter.lodgeSumSub": "Request details for reception:",
    "quoter.lblDuration": "Duration",
    "quoter.lblCap": "Selected capacity",
    "quoter.lblUnit": "Unit",
    "quoter.valUnit": "Equipped Cabin",
    "quoter.lblRegime": "Meal Plan",
    "quoter.lblMealEst": "Estimated meals",
    "quoter.lblCartAddon": "Attached menu order",
    "quoter.lblQuoteStatus": "Quote Total",
    "quoter.lodgeFootNote": "Upon sending your request you will receive direct assistance via WhatsApp at (+506) 8585-7454 with availability and rates for your dates.",

    "contact.eyebrow": "Assistance & Location",
    "contact.title": "Direct Contact",
    "contact.subtitle": "Reach us at (+506) 8585-7454 or visit us directly following our official location on Google Maps and Waze.",
    "contact.c1Eyebrow": "Frequent Inquiries",
    "contact.c1Title": "WhatsApp Concierge",
    "contact.c1Desc": "Select an inquiry topic to start chatting immediately:",
    "contact.wa1": "Order food for pick-up",
    "contact.wa2": "Lodging availability & nightly rate",
    "contact.wa3": "Quote for groups or family events",
    "contact.wa4": "Check today's opening hours",
    "contact.c2Eyebrow": "Services",
    "contact.c2Title": "Gastronomy & Stay",
    "contact.c2Desc": "A complete experience for both restaurant visitors and lodging guests:",
    "contact.s1Title": "Restaurant & Takeout",
    "contact.s1Desc": "Main dishes, seafood, rice specialties, casados, soups, and fast food cooked to order.",
    "contact.s2Title": "Private Lodging",
    "contact.s2Desc": "Equipped cabin with kitchen, refrigerator, microwave, dining table, and terrace.",
    "contact.s3Title": "Payment Methods",
    "contact.s3Desc": "We accept SINPE Móvil (8585-7454), cash, and credit/debit cards.",
    "contact.c3Eyebrow": "Official Line",
    "contact.c3Title": "Reservations & Orders",
    "contact.c3Desc": "Direct assistance for restaurant pick-up orders, table reservations, and lodging stays.",
    "contact.lblPhoneWa": "Phone & WhatsApp",
    "contact.btnWriteWa": "Chat on WhatsApp",
    "contact.btnCall": "Call 8585-7454",

    "loc.eyebrow": "Location",
    "loc.title": "How to get to La Finca",
    "loc.desc": "Find us easily via Google Maps or Waze. Convenient access and private parking available for restaurant guests and lodging visitors.",
    "loc.destLbl": "Destination:",
    "loc.coordsLbl": "Coordinates:",
    "loc.routePhoneLbl": "On-route contact:",
    "loc.btnMaps": "Open in Google Maps",
    "loc.btnWaze": "Navigate with Waze",

    "footer.desc": "Costa Rican cuisine, fresh seafood, casual dining, and private lodging surrounded by nature.",
    "footer.secTitle": "Sections",
    "footer.catTitle": "Menu Categories",
    "footer.locTitle": "Location & Orders",
    "footer.locDesc": "Place your online order for restaurant pick-up or inquire about lodging availability.",
    "footer.rights": "© 2026 La Finca — Restaurant & Lodging. All rights reserved.",

    "drawer.title": "Your Order",
    "drawer.sub": "La Finca — Restaurant Pick-Up or Quote",
    "drawer.shipTitle": "Dispatch Details (WhatsApp 8585-7454)",
    "drawer.btnFullQuoter": "Open Full Quoter",
    "drawer.btnClear": "Clear",
    "modal.physTitle": "Original Printed Menu — La Finca",
    "modal.physSub": "Photographs of our physical menu at the restaurant.",
    "modal.close": "Close",
    "mobile.viewOrder": "View Order"
  }
};

/* --------------------------------------------------------------------------
   2. COMPLETE DIGITAL MENU DATASET (57 Authentic Items)
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
    optionsEs: ["Papas fritas y ensalada", "Yuca frita y ceviche de banano"],
    optionsEn: ["French fries and salad", "Fried yucca and banana ceviche"]
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
    optionsEs: ["Pollo", "Bistec", "Carne en Salsa", "Pescado", "Chuleta"],
    optionsEn: ["Chicken", "Skirt Steak", "Stewed Beef", "Fish", "Pork Chop"]
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
    descEn: "Mixed Nachos with beef, chicken, cheese and toppings.",
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
    optionsEs: ["Pollo", "Carne"],
    optionsEn: ["Chicken", "Beef"]
  },
  {
    id: "cr-papanachos-pollo-carne",
    category: "comidas-rapidas",
    nameEs: "Papanachos de Pollo o Carne",
    nameEn: "Chicken or Beef Papanachos",
    descEs: "Papas y nachos con queso, aderezos y proteína.",
    descEn: "French fries and nachos topped with cheese and protein.",
    price: 5000,
    badges: ["popular"],
    optionsEs: ["Pollo", "Carne"],
    optionsEn: ["Chicken", "Beef"]
  },
  {
    id: "cr-papanachos-mixtos",
    category: "comidas-rapidas",
    nameEs: "Papanachos Mixtos",
    nameEn: "Mixed Papanachos",
    descEs: "Papanachos con combinación de pollo y carne.",
    descEn: "Mixed chicken and beef Papanachos.",
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
    descEn: "Fried rice, beans, pork, pico de gallo and toast tortilla.",
    price: 4000,
    badges: ["popular"]
  },
  {
    id: "cr-papas-fritas",
    category: "comidas-rapidas",
    nameEs: "Orden Papas Fritas",
    nameEn: "French Fries",
    descEs: "Porción de papas a la francesa.",
    descEn: "Golden French Fries.",
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
    descEn: "Crispy Fried Yucca.",
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
    optionsEs: ["Pollo", "Carne", "Jamón y Queso"],
    optionsEn: ["Chicken", "Beef", "Ham & Cheese"]
  },
  {
    id: "cr-hamburguesa-sencilla",
    category: "comidas-rapidas",
    nameEs: "Hamburguesa Sencilla",
    nameEn: "Simple Hamburger",
    descEs: "Hamburguesa tradicional con torta de carne y vegetales.",
    descEn: "Simple Hamburger with beef patty and vegetables.",
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
    descEn: "Crispy Taco with beef and cabbage salad.",
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
    descEn: "Seasoned homemade beef patty.",
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
    descEn: "Grilled tortillas with melted cheese.",
    price: 1000,
    badges: ["veg"]
  },
  {
    id: "cr-platano-natilla",
    category: "comidas-rapidas",
    nameEs: "Plátano con Natilla",
    nameEn: "Plantains with Sour Cream",
    descEs: "Plátano maduro con natilla.",
    descEn: "Sweet plantains with sour cream.",
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
    descEn: "Traditional Ranchero Soup.",
    price: 3500,
    badges: ["popular"]
  },
  {
    id: "sp-sopa-mariscos",
    category: "sopas",
    nameEs: "Sopa de Mariscos",
    nameEn: "Seafood Soup",
    descEs: "Sopa de mariscos frescos.",
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
    descEs: "Sabores: Fresa, Cacomal, Crema, Papaya o Mora.",
    descEn: "Flavors: Strawberry, Cacomal, Cream, Papaya, Blackberry.",
    price: 2000,
    badges: ["popular"],
    optionsEs: ["Fresa", "Cacomal", "Crema", "Papaya", "Mora"],
    optionsEn: ["Strawberry", "Cacomal", "Cream", "Papaya", "Blackberry"]
  },
  {
    id: "bf-refrescos-naturales",
    category: "bebidas-frias",
    nameEs: "Refrescos Naturales",
    nameEn: "Natural Fruit Juice",
    descEs: "Refresco natural del día.",
    descEn: "Natural fruit juice of the day.",
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
    nameEn: "Bottled Juice (Glass)",
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
    descEn: "Bottled juice (Plastic bottle).",
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
    optionsEs: ["Imperial", "Rock Limón", "Otra (Consultar)"],
    optionsEn: ["Imperial", "Rock Limón", "Other (Inquire)"]
  },

  // ==================== BEBIDAS CALIENTES / HOT BEVERAGES ====================
  {
    id: "bc-cafe-negro",
    category: "bebidas-calientes",
    nameEs: "Café Negro",
    nameEn: "Black Coffee",
    descEs: "Café negro recién hecho.",
    descEn: "Freshly brewed Black Coffee.",
    price: 800,
    badges: ["popular"]
  },
  {
    id: "bc-cafe-leche",
    category: "bebidas-calientes",
    nameEs: "Café con Leche",
    nameEn: "Coffee with Milk",
    descEs: "Café caliente con leche.",
    descEn: "Hot coffee with milk.",
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
    descEn: "Traditional hot sugar cane tea.",
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
    nameEn: "Hot Tea",
    descEs: "Té caliente en agua.",
    descEn: "Hot Tea.",
    price: 800,
    badges: []
  }
];

/* --------------------------------------------------------------------------
   3. HOSPEDAJE GALLERY SLIDES (ONLY USER'S 3 REAL PHOTOS)
   -------------------------------------------------------------------------- */
const LODGING_SLIDES = [
  {
    src: "assets/images/hospedaje-cabana-exterior.jpg",
    badgeEs: "Exterior",
    badgeEn: "Exterior",
    titleEs: "Cabaña en Madera Rodeada de Naturaleza",
    titleEn: "Wooden Cabin Surrounded by Nature",
    descEs: "Vista exterior de la cabaña rodeada de jardines tropicales y árboles en La Finca.",
    descEn: "Exterior view of the wooden cabin surrounded by tropical gardens and trees at La Finca."
  },
  {
    src: "assets/images/hospedaje-principal-clean.jpg",
    badgeEs: "Interior Equipado",
    badgeEn: "Equipped Interior",
    titleEs: "Habitación, Comedor y Cocina Equipada",
    titleEn: "Bedroom, Dining & Equipped Kitchen",
    descEs: "Interior amplio con cama matrimonial, comedor para 4 personas, refrigeradora, microondas y salida al balcón.",
    descEn: "Spacious interior with double bed, dining table for 4, refrigerator, microwave, and balcony access."
  },
  {
    src: "assets/images/hospedaje-bosque-natural.jpg",
    badgeEs: "Entorno Natural",
    badgeEn: "Natural Surroundings",
    titleEs: "Bosque Tropical en La Finca",
    titleEn: "Tropical Forest at La Finca",
    descEs: "Vegetación natural que rodea el hospedaje brindando frescura y tranquilidad.",
    descEn: "Lush natural vegetation surrounding the lodging, providing fresh air and tranquility."
  }
];

/* --------------------------------------------------------------------------
   4. APPLICATION STATE & HELPERS
   -------------------------------------------------------------------------- */
const state = {
  lang: "es",
  currency: "CRC",
  searchQuery: "",
  dietaryFilter: "all",
  openCategories: [],
  cart: [],
  carouselIndex: 0,
  carouselAutoPlay: true,
  carouselTimer: null,
  heroMode: "hospedaje"
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
   5. LANGUAGE & CURRENCY SWITCHERS (GLOBAL FULL-PAGE UPDATE)
   -------------------------------------------------------------------------- */
function applyStaticTranslations() {
  const dict = UI_TRANSLATIONS[state.lang] || UI_TRANSLATIONS.es;
  document.documentElement.lang = state.lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Update Meal Plan select options with current language and currency
  const mealPlanSelect = document.getElementById("lodgeMealPlan");
  if (mealPlanSelect) {
    const pDesayuno = formatPrice(4500);
    const pMedia = formatPrice(5000);
    const pCompleta = formatPrice(9500);

    if (state.lang === "es") {
      mealPlanSelect.options[0].textContent = "Solo Hospedaje (Cocina equipada)";
      mealPlanSelect.options[1].textContent = `Con Desayuno en Restaurante (+${pDesayuno}/p día)`;
      mealPlanSelect.options[2].textContent = `Media Pensión: Almuerzo o Cena (+${pMedia}/p día)`;
      mealPlanSelect.options[3].textContent = `Pensión Completa: 3 Tiempos (+${pCompleta}/p día)`;
    } else {
      mealPlanSelect.options[0].textContent = "Lodging Only (Equipped kitchen)";
      mealPlanSelect.options[1].textContent = `With Breakfast at Restaurant (+${pDesayuno}/p day)`;
      mealPlanSelect.options[2].textContent = `Half Board: Lunch or Dinner (+${pMedia}/p day)`;
      mealPlanSelect.options[3].textContent = `Full Board: 3 Meals (+${pCompleta}/p day)`;
    }
  }

  // Update Hero Showcase caption
  updateHeroShowcaseText(state.heroMode);

  // Update Carousel Play/Pause button text
  const autoPlayBtn = document.getElementById("carouselAutoPlayBtn");
  if (autoPlayBtn) {
    if (state.lang === "es") {
      autoPlayBtn.textContent = state.carouselAutoPlay ? "Pausar" : "Reproducir";
    } else {
      autoPlayBtn.textContent = state.carouselAutoPlay ? "Pause" : "Play";
    }
  }
}

function updateHeroShowcaseText(mode) {
  state.heroMode = mode || "hospedaje";
  const img = document.getElementById("heroShowcaseImg");
  const title = document.getElementById("heroShowcaseTitle");
  const sub = document.getElementById("heroShowcaseSub");
  if (!img || !title || !sub) return;

  if (state.heroMode === "hospedaje") {
    img.src = "assets/images/hospedaje-cabana-exterior.jpg";
    title.textContent = state.lang === "es"
      ? "Cabaña en Madera Rodeada de Naturaleza"
      : "Wooden Cabin Surrounded by Nature";
    sub.textContent = state.lang === "es"
      ? "Privacidad, jardines tropicales y árboles en La Finca."
      : "Privacy, tropical gardens, and trees at La Finca.";
  } else if (state.heroMode === "interior") {
    img.src = "assets/images/hospedaje-principal-clean.jpg";
    title.textContent = state.lang === "es"
      ? "Habitación, Comedor y Cocina Equipada"
      : "Bedroom, Dining & Equipped Kitchen";
    sub.textContent = state.lang === "es"
      ? "Refrigeradora, microondas, comedor para 4 personas y salida al balcón."
      : "Refrigerator, microwave, dining table for 4, and balcony access.";
  } else {
    img.src = "assets/images/hospedaje-bosque-natural.jpg";
    title.textContent = state.lang === "es"
      ? "Entorno de Bosque Tropical"
      : "Tropical Rainforest Surroundings";
    sub.textContent = state.lang === "es"
      ? "Naturaleza y tranquilidad en toda la propiedad."
      : "Pure nature and tranquility throughout the property.";
  }
}

function setLanguage(lang) {
  state.lang = lang === "en" ? "en" : "es";
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === state.lang);
  });
  applyStaticTranslations();
  renderMenuGrid();
  renderCarousel();
  updateCartUI();
  showToast(state.lang === "es" ? "Idioma: Español" : "Language: English");
}

function setCurrency(curr) {
  state.currency = curr === "USD" ? "USD" : "CRC";
  document.querySelectorAll(".curr-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-curr") === state.currency);
  });
  applyStaticTranslations();
  renderMenuGrid();
  updateCartUI();
  showToast(
    state.currency === "USD"
      ? (state.lang === "es" ? "Precios en Dólares ($ USD)" : "Prices in US Dollars ($ USD)")
      : (state.lang === "es" ? "Precios en Colones (₡ CRC)" : "Prices in Colones (₡ CRC)")
  );
}

window.setLanguage = setLanguage;
window.setCurrency = setCurrency;

/* --------------------------------------------------------------------------
   6. COLLAPSIBLE DIGITAL MENU (ACORDEONES POR CATEGORÍA)
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

    const prices = catItems.map(i => i.price);
    const minP = Math.min(...prices);
    const maxP = Math.max(...prices);
    const priceRangeText = minP === maxP
      ? formatPrice(minP)
      : `${formatPrice(minP)} – ${formatPrice(maxP)}`;

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
  const secondaryName = state.lang === "es" ? item.nameEn : item.nameEs;

  const badgeHTML = (item.badges || []).map(b => {
    if (b === "popular") return `<span class="compact-badge badge-popular">${state.lang === "es" ? "Recomendado" : "Featured"}</span>`;
    if (b === "seafood") return `<span class="compact-badge badge-seafood">${state.lang === "es" ? "Mariscos" : "Seafood"}</span>`;
    if (b === "veg") return `<span class="compact-badge badge-veg">${state.lang === "es" ? "Vegetariano" : "Veg"}</span>`;
    return "";
  }).join("");

  const opts = state.lang === "es" ? item.optionsEs : item.optionsEn;
  const hasOptions = Array.isArray(opts) && opts.length > 0;
  const selectHTML = hasOptions ? `
    <select class="compact-variant-select variant-select" data-item-id="${item.id}" aria-label="${title}">
      ${opts.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
    </select>
  ` : `<span style="font-size:0.72rem; color:var(--text-muted);">${secondaryName}</span>`;

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
   7. CART / PICK-UP ORDER & QUOTER ENGINE
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
  if (mobileCount) {
    mobileCount.textContent = state.lang === "es"
      ? `${totalItems} ${totalItems === 1 ? "ítem" : "ítems"}`
      : `${totalItems} ${totalItems === 1 ? "item" : "items"}`;
  }
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
          <p>${formatPrice(item.price)} — <strong>${formatPrice(lineTotal)}</strong></p>
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
   8. HOSPEDAJE GALLERY CAROUSEL (3 Real Photos)
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
    const desc = state.lang === "es" ? slide.descEs : slide.descEn;
    return `
      <div class="carousel-slide ${active}" data-slide-idx="${idx}">
        <img src="${slide.src}" alt="${title}" loading="${idx === 0 ? 'eager' : 'lazy'}" />
        <div class="carousel-caption-bar">
          <div class="carousel-caption-text">
            <span class="badge">${badge}</span>
            <h3>${title}</h3>
            <p>${desc}</p>
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
      if (state.lang === "es") {
        autoPlayBtn.textContent = state.carouselAutoPlay ? "Pausar" : "Reproducir";
      } else {
        autoPlayBtn.textContent = state.carouselAutoPlay ? "Pause" : "Play";
      }
      if (state.carouselAutoPlay) startCarouselTimer();
      else stopCarouselTimer();
    });
  }

  if (zoomBtn) {
    zoomBtn.addEventListener("click", () => {
      const currentSlide = LODGING_SLIDES[state.carouselIndex];
      if (currentSlide) {
        const cap = state.lang === "es" ? currentSlide.titleEs : currentSlide.titleEn;
        openLightboxModal(currentSlide.src, cap);
      }
    });
  }

  renderCarousel();
  startCarouselTimer();
}

/* --------------------------------------------------------------------------
   9. QUOTER & PICK-UP ORDER DISPATCH
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
        ${state.lang === "es" ? "No hay platillos seleccionados." : "No dishes selected yet."}
        <a href="#menu-digital" style="color: var(--text-primary); font-weight: 600; text-decoration: underline; margin-left: 0.35rem;">
          ${state.lang === "es" ? "Ir al Menú Digital" : "Go to Digital Menu"}
        </a>
      </div>
    `;
    return;
  }

  container.innerHTML = state.cart.map(item => {
    const itemName = state.lang === "es" ? item.nameEs : item.nameEn;
    return `
      <div class="quote-line">
        <div>
          <strong>${item.qty}x ${itemName}</strong>
          ${item.variant ? `<span style="font-size:0.76rem; color:var(--text-muted);"> (${item.variant})</span>` : ""}
        </div>
        <div style="display:flex; align-items:center; gap:0.65rem;">
          <span>${formatPrice(item.price * item.qty)}</span>
          <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', -1)" style="color:var(--text-muted); font-weight:600;" title="−">−</button>
          <button type="button" onclick="updateCartItemQty('${item.cartKey.replace(/'/g, "\\'")}', 1)" style="color:var(--text-primary); font-weight:600;" title="+">+</button>
        </div>
      </div>
    `;
  }).join("");
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
  let mealLabel = state.lang === "es"
    ? "Solo Hospedaje (Cocina equipada)"
    : "Lodging Only (Equipped kitchen)";

  if (mealPlan === "desayuno") {
    mealCostPerDayPerGuest = 4500;
    mealLabel = state.lang === "es"
      ? "Desayuno y Café en el Restaurante"
      : "Breakfast & Coffee at Restaurant";
  } else if (mealPlan === "media-pension") {
    mealCostPerDayPerGuest = 5000;
    mealLabel = state.lang === "es"
      ? "Almuerzo o Cena en el Restaurante"
      : "Lunch or Dinner at Restaurant";
  } else if (mealPlan === "pension-completa") {
    mealCostPerDayPerGuest = 9500;
    mealLabel = state.lang === "es"
      ? "Alimentación Completa (3 tiempos)"
      : "Full Board (3 meals daily)";
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

  if (nightsBadge) {
    nightsBadge.textContent = state.lang === "es"
      ? `${nights} ${nights === 1 ? "noche" : "noches"}`
      : `${nights} ${nights === 1 ? "night" : "nights"}`;
  }
  if (guestsBadge) {
    guestsBadge.textContent = state.lang === "es"
      ? `${guests} ${guests === 1 ? "huésped" : "huéspedes"}`
      : `${guests} ${guests === 1 ? "guest" : "guests"}`;
  }
  if (planBadge) planBadge.textContent = mealLabel;
  if (mealCostEl) {
    mealCostEl.textContent = mealTotal > 0
      ? formatPrice(mealTotal)
      : (state.lang === "es" ? "Según selección" : "Per selection");
  }
  if (cartCostEl) cartCostEl.textContent = formatPrice(foodOrderAddon);
  if (totalFoodEl) {
    totalFoodEl.textContent = estimatedFoodTotal > 0
      ? `${formatPrice(estimatedFoodTotal)} + ${state.lang === "es" ? "Tarifa de Estadía" : "Lodging Rate"}`
      : (state.lang === "es" ? "Confirmar tarifa por fechas" : "Confirm rate for dates");
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
    showToast(state.lang === "es" ? "Número SINPE Móvil 8585-7454 copiado" : "SINPE Móvil number 8585-7454 copied");
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
    showToast(state.lang === "es" ? "Agrega al menos un platillo antes de enviar." : "Add at least one dish before sending.");
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
   10. MODALS, DRAWER & TOAST HELPERS
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
   11. INITIALIZATION
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

  applyStaticTranslations();
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

  // Hero Visual Switcher
  document.querySelectorAll(".showcase-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".showcase-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      updateHeroShowcaseText(tab.getAttribute("data-showcase"));
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
