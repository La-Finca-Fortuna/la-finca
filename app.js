/**
 * ============================================================================
 * LA FINCA · CABAÑA & RESTAURANTE (SPA + PWA)
 * Archivo: app.js (100% Client-Side Vanilla JavaScript)
 * Ubicación: San Isidro de Peñas Blancas, Alajuela, Costa Rica
 * Contacto WhatsApp: +506 8585 7454
 * ============================================================================
 */

/* --------------------------------------------------------------------------
 * 1. CONFIGURACIÓN GLOBAL Y HORARIO OFICIAL DEL RESTAURANTE
 * -------------------------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: '50685857454',
  exchangeRateUSD: 515, // 1 USD = 515 CRC
  cabin: {
    baseNightlyRateCRC: 38000,
    extraGuestFeeCRC: 8000,
    includedGuests: 2,
    maxGuests: 6,
  },
  carouselIntervalMs: 5000,
};

/**
 * Horario oficial de Restaurante La Finca (según Google Maps):
 * domingo:    9:30 a.m. – 7:00 p.m.
 * lunes:     11:00 a.m. – 6:00 p.m.
 * martes:    11:00 a.m. – 6:00 p.m.
 * miércoles: 11:00 a.m. – 7:00 p.m.
 * jueves:     9:30 a.m. – 7:00 p.m.
 * viernes:    9:30 a.m. – 7:00 p.m.
 * sábado:     9:30 a.m. – 7:00 p.m.
 */
const RESTAURANT_SCHEDULE = [
  { dayIndex: 0, day: { es: 'domingo', en: 'Sunday' }, hours: { es: '9:30 a.m.–7 p.m.', en: '9:30 AM–7:00 PM' }, openMin: 9 * 60 + 30, closeMin: 19 * 60 },
  { dayIndex: 1, day: { es: 'lunes', en: 'Monday' }, hours: { es: '11 a.m.–6 p.m.', en: '11:00 AM–6:00 PM' }, openMin: 11 * 60, closeMin: 18 * 60 },
  { dayIndex: 2, day: { es: 'martes', en: 'Tuesday' }, hours: { es: '11 a.m.–6 p.m.', en: '11:00 AM–6:00 PM' }, openMin: 11 * 60, closeMin: 18 * 60 },
  { dayIndex: 3, day: { es: 'miércoles', en: 'Wednesday' }, hours: { es: '11 a.m.–7 p.m.', en: '11:00 AM–7:00 PM' }, openMin: 11 * 60, closeMin: 19 * 60 },
  { dayIndex: 4, day: { es: 'jueves', en: 'Thursday' }, hours: { es: '9:30 a.m.–7 p.m.', en: '9:30 AM–7:00 PM' }, openMin: 9 * 60 + 30, closeMin: 19 * 60 },
  { dayIndex: 5, day: { es: 'viernes', en: 'Friday' }, hours: { es: '9:30 a.m.–7 p.m.', en: '9:30 AM–7:00 PM' }, openMin: 9 * 60 + 30, closeMin: 19 * 60 },
  { dayIndex: 6, day: { es: 'sábado', en: 'Saturday' }, hours: { es: '9:30 a.m.–7 p.m.', en: '9:30 AM–7:00 PM' }, openMin: 9 * 60 + 30, closeMin: 19 * 60 },
];

/* --------------------------------------------------------------------------
 * 2. DICCIONARIO DE INTERNACIONALIZACIÓN (i18n: Español / Inglés)
 * -------------------------------------------------------------------------- */
const I18N = {
  es: {
    nav: {
      home: 'Inicio',
      cabinShort: 'Cabaña',
      restShort: 'Menú',
      lightMode: 'Claro',
      darkMode: 'Oscuro',
    },
    landing: {
      badge: 'San Isidro de Peñas Blancas · Costa Rica',
      heroTitle: 'Bienvenido a La Finca',
      heroSubtitle:
        'Selecciona qué experiencia deseas explorar hoy. Puedes cambiar idioma, moneda o modo claro/oscuro en la barra superior en cualquier momento.',
      installPwa: 'Instalar App en tu celular',
      cabinTag: 'Hospedaje',
      cabinLocation: 'Peñas Blancas · A 20 min de La Fortuna',
      cabinTitle: 'Cabaña La Finca',
      cabinDesc: 'Galería oficial de Airbnb, cotizador interactivo por fechas y pronóstico del clima.',
      restTag: 'Menú Digital',
      restHours: 'Pedidos para salón, llevar o cabaña',
      restTitle: 'Restaurante La Finca',
      restDesc: 'Comidas rápidas, sopas, tilapias, mariscos, arroces, casados y bebidas.',
    },
    footer: {
      locationLine: '📍 San Isidro de Peñas Blancas, Alajuela, Costa Rica',
    },
    cabin: {
      locationBadge: 'San Isidro de Peñas Blancas, Costa Rica',
      title: 'Cabaña La Finca',
      subtitle: '1 habitación · 2 camas · 1 baño privado · Cocina completa · Amplias zonas verdes.',
      distFortunaLabel: 'A La Fortuna',
      distVolcanoLabel: 'Al Volcán Arenal',
      paymentTitle: 'Pagos:',
      payCash: '💵 Efectivo (₡/$)',
      payCards: '💳 Tarjetas',
    },
    quote: {
      kicker: 'Reserva Directa',
      title: 'Cotizador de Estadía',
      baseRateLabel: 'Por noche',
      checkinLabel: 'Entrada (Check-in)',
      checkoutLabel: 'Salida (Check-out)',
      extraGuestNote: 'Base incluye 2 personas (máx. 6)',
      totalEstimated: 'Total Estimado',
      whatsappBtn: 'Consultar fechas por WhatsApp',
      nightSingular: 'noche',
      nightPlural: 'noches',
      guestSingular: 'Huésped',
      guestPlural: 'Huéspedes',
      extraGuestsLine: 'Huéspedes extra',
      includedText: 'Incluido',
    },
    weather: {
      kicker: 'Clima Estimado en tus Fechas',
      upsellBadge: '🍽️ Sugerencia del Restaurante',
      upsellCta: 'Ver en el menú →',
      availableAt: 'En el menú por',
    },
    reviews: {
      title: 'Reseñas en Airbnb y Google Maps',
    },
    rest: {
      badge: 'Menú Oficial · La Finca',
      title: 'Restaurante La Finca',
      subtitle: 'Toca el botón + en cualquier platillo para armar tu pedido y enviarlo por WhatsApp.',
      openStatus: 'Abierto ahora',
      closedStatus: 'Cerrado',
      todayPrefix: 'Hoy',
      openMapsShort: 'Cómo llegar',
      searchPlaceholder: 'Buscar platillo o bebida (ej. Tilapia, Ceviche, Nachos, Café)...',
      recommendedPill: '★ Sugerido',
      noResults: 'No se encontraron platillos con esa búsqueda.',
    },
    cart: {
      floatingCta: 'Ver pedido',
      title: 'Tu Pedido',
      subtitle: 'Restaurante La Finca',
      emptyTitle: 'Tu carrito está vacío',
      emptyDesc: 'Toca el botón + en cualquier platillo del menú para agregarlo.',
      nameLabel: 'Tu Nombre',
      modeLabel: 'Modalidad',
      modeDineIn: 'En el Restaurante',
      modeTakeout: 'Para Llevar',
      modeCabin: 'Entregar en Cabaña',
      totalLabel: 'Total a Pagar',
      clearBtn: 'Vaciar',
      checkoutBtn: 'Enviar pedido por WhatsApp',
    },
  },

  en: {
    nav: {
      home: 'Home',
      cabinShort: 'Cabin',
      restShort: 'Menu',
      lightMode: 'Light',
      darkMode: 'Dark',
    },
    landing: {
      badge: 'San Isidro de Peñas Blancas · Costa Rica',
      heroTitle: 'Welcome to La Finca',
      heroSubtitle:
        'Choose your experience below. Switch language, currency, or light/dark theme anytime from the top bar.',
      installPwa: 'Install App on your phone',
      cabinTag: 'Cabin Stay',
      cabinLocation: 'Peñas Blancas · 20 min from La Fortuna',
      cabinTitle: 'Cabaña La Finca',
      cabinDesc: 'Official Airbnb photo gallery, interactive stay calculator & weather forecast.',
      restTag: 'Digital Menu',
      restHours: 'Dine-in, takeout or cabin delivery',
      restTitle: 'Restaurante La Finca',
      restDesc: 'Fast food, soups, whole fried tilapia, seafood, fried rice, casados & drinks.',
    },
    footer: {
      locationLine: '📍 San Isidro de Peñas Blancas, Alajuela, Costa Rica',
    },
    cabin: {
      locationBadge: 'San Isidro de Peñas Blancas, Costa Rica',
      title: 'Cabaña La Finca',
      subtitle: '1 bedroom · 2 beds · 1 private bath · Full kitchen · Spacious green areas.',
      distFortunaLabel: 'To La Fortuna',
      distVolcanoLabel: 'To Arenal Volcano',
      paymentTitle: 'Payments:',
      payCash: '💵 Cash (₡/$)',
      payCards: '💳 Cards',
    },
    quote: {
      kicker: 'Direct Booking',
      title: 'Stay Calculator',
      baseRateLabel: 'Per night',
      checkinLabel: 'Check-in',
      checkoutLabel: 'Check-out',
      extraGuestNote: 'Base rate includes 2 guests (max 6)',
      totalEstimated: 'Estimated Total',
      whatsappBtn: 'Inquire dates via WhatsApp',
      nightSingular: 'night',
      nightPlural: 'nights',
      guestSingular: 'Guest',
      guestPlural: 'Guests',
      extraGuestsLine: 'Extra guests',
      includedText: 'Included',
    },
    weather: {
      kicker: 'Estimated Forecast for Your Dates',
      upsellBadge: '🍽️ Restaurant Pairing Pick',
      upsellCta: 'View on menu →',
      availableAt: 'On the menu for',
    },
    reviews: {
      title: 'Reviews on Airbnb & Google Maps',
    },
    rest: {
      badge: 'Official Menu · La Finca',
      title: 'Restaurante La Finca',
      subtitle: 'Tap the + button on any dish to build your order and send it via WhatsApp.',
      openStatus: 'Open now',
      closedStatus: 'Closed',
      todayPrefix: 'Today',
      openMapsShort: 'Directions',
      searchPlaceholder: 'Search dish or drink (e.g. Tilapia, Ceviche, Nachos, Coffee)...',
      recommendedPill: '★ Weather Pick',
      noResults: 'No dishes matched your search.',
    },
    cart: {
      floatingCta: 'View order',
      title: 'Your Order',
      subtitle: 'Restaurante La Finca',
      emptyTitle: 'Your cart is empty',
      emptyDesc: 'Tap the + button on any dish in the menu to add it.',
      nameLabel: 'Your Name',
      modeLabel: 'Order Type',
      modeDineIn: 'Dine-in',
      modeTakeout: 'Takeout',
      modeCabin: 'Cabin Delivery',
      totalLabel: 'Total Due',
      clearBtn: 'Clear',
      checkoutBtn: 'Send Order via WhatsApp',
    },
  },
};

/* --------------------------------------------------------------------------
 * 3. GALERÍA VISUAL DE CABAÑA LA FINCA (Únicamente las 27 Fotos Oficiales de Airbnb)
 * Fuente: https://www.airbnb.co.cr/rooms/1773491009691684318
 * -------------------------------------------------------------------------- */
const GALLERY_SLIDES = [
  {
    id: 'airbnb-exterior-1',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/440f2127-ec8d-484c-a420-3da9963d40a2.jpeg',
    caption: { es: 'Cabaña La Finca · Exterior y jardines (Foto 1)', en: 'Cabaña La Finca · Exterior & gardens (Photo 1)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-3',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/376620f8-9433-4dcc-a31c-52297c13c68d.jpeg',
    caption: { es: 'Vista exterior rodeada de naturaleza (Foto 2)', en: 'Exterior view surrounded by nature (Photo 2)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-4',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/d9997f07-d69c-4552-a5c0-5a9a39571bbf.jpeg',
    caption: { es: 'Entorno natural y terraza de la cabaña (Foto 3)', en: 'Natural surroundings & cabin terrace (Photo 3)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-7',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/2fe1cbe7-c0b9-4246-ad77-5bbec0cf3f23.jpeg',
    caption: { es: 'Jardines y áreas verdes de la propiedad (Foto 4)', en: 'Property gardens & green areas (Photo 4)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-8',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/d0723183-e0c7-47c9-a47b-6800f37ab840.jpeg',
    caption: { es: 'Senderos y áreas exteriores en Peñas Blancas (Foto 5)', en: 'Outdoor paths & gardens in Peñas Blancas (Photo 5)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-bedroom-1',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/f6eb219e-19fa-440c-acf8-e9ae1a8ae50a.jpeg',
    caption: { es: 'Habitación equipada con 2 camas cómodas (Foto 6)', en: 'Bedroom equipped with 2 comfortable beds (Photo 6)' },
    tag: { es: 'Habitación', en: 'Bedroom' },
  },
  {
    id: 'airbnb-bedroom-2',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/9fd332c9-aaae-4c4b-b45a-0c175e67c00a.jpeg',
    caption: { es: 'Dormitorio acogedor y ventilado (Foto 7)', en: 'Cozy bedroom (Photo 7)' },
    tag: { es: 'Habitación', en: 'Bedroom' },
  },
  {
    id: 'airbnb-bedroom-3',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/be22fce5-b08c-4480-8599-4c673c2b1705.jpeg',
    caption: { es: 'Espacio de descanso impecable (Foto 8)', en: 'Spotless sleeping area (Photo 8)' },
    tag: { es: 'Habitación', en: 'Bedroom' },
  },
  {
    id: 'airbnb-bedroom-4',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/aa97d7ff-7949-41a2-8a19-741f9e76cbca.jpeg',
    caption: { es: 'Detalles del dormitorio principal (Foto 9)', en: 'Master bedroom details (Photo 9)' },
    tag: { es: 'Habitación', en: 'Bedroom' },
  },
  {
    id: 'airbnb-kitchen-1',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/e253b643-2487-48ee-974c-ca801b84a7ac.jpeg',
    caption: { es: 'Cocina completa equipada para tu estadía (Foto 10)', en: 'Full kitchen equipped for your stay (Photo 10)' },
    tag: { es: 'Cocina Completa', en: 'Full Kitchen' },
  },
  {
    id: 'airbnb-kitchen-2',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/b0462921-4d02-4480-a8b1-8c3914b647b8.jpeg',
    caption: { es: 'Área de cocina y electrodomésticos (Foto 11)', en: 'Kitchen area & appliances (Photo 11)' },
    tag: { es: 'Cocina Completa', en: 'Full Kitchen' },
  },
  {
    id: 'airbnb-dining-1',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/bf793260-ef12-4a2c-aa88-4f400b5ef684.jpeg',
    caption: { es: 'Área de comedor interior (Foto 12)', en: 'Indoor dining area (Photo 12)' },
    tag: { es: 'Comedor', en: 'Dining Area' },
  },
  {
    id: 'airbnb-bath-1',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/d74bf255-8e1e-4c55-8553-7f726cd1ac92.jpeg',
    caption: { es: 'Baño completo privado (Foto 13)', en: 'Private full bathroom (Photo 13)' },
    tag: { es: 'Baño Completo', en: 'Full Bathroom' },
  },
  {
    id: 'airbnb-bath-2',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/e3080d3b-83db-4a38-8c36-a9b367df9e2b.jpeg',
    caption: { es: 'Ducha y acabados del baño completo (Foto 14)', en: 'Shower & full bathroom finishes (Photo 14)' },
    tag: { es: 'Baño Completo', en: 'Full Bathroom' },
  },
  {
    id: 'airbnb-bath-3',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/c6035a26-0e0f-4a50-a4bf-465eac425698.jpeg',
    caption: { es: 'Lavamanos y detalles de baño (Foto 15)', en: 'Vanity & bathroom details (Photo 15)' },
    tag: { es: 'Baño Completo', en: 'Full Bathroom' },
  },
  {
    id: 'airbnb-exterior-2',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/283e9b58-3ad1-4b64-95b5-005e4e48b4e7.jpeg',
    caption: { es: 'Acceso exterior de Cabaña La Finca (Foto 16)', en: 'Exterior entrance of Cabaña La Finca (Photo 16)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-5',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/a9e35c48-1190-49a2-b2a6-2d206a2bf91f.jpeg',
    caption: { es: 'Vegetación tropical alrededor de la cabaña (Foto 17)', en: 'Tropical greenery around the cabin (Photo 17)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-6',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/cedc3e44-a12b-4c80-830a-1b1c59a29262.jpeg',
    caption: { es: 'Vista del jardín desde la propiedad (Foto 18)', en: 'Garden view from the property (Photo 18)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-9',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/e3952da6-3e65-41e5-b9aa-70436ad62b64.jpeg',
    caption: { es: 'Ambiente natural en Peñas Blancas (Foto 19)', en: 'Natural setting in Peñas Blancas (Photo 19)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-10',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/37772596-892e-4316-a62e-59cce655edcd.jpeg',
    caption: { es: 'Entorno verde de la finca (Foto 20)', en: 'Green surroundings of the property (Photo 20)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-exterior-11',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/92d005cc-cd3f-48d5-89c2-4679da478087.jpeg',
    caption: { es: 'Naturaleza y tranquilidad en Cabaña La Finca (Foto 21)', en: 'Nature & tranquility at Cabaña La Finca (Photo 21)' },
    tag: { es: 'Exterior', en: 'Exterior' },
  },
  {
    id: 'airbnb-extra-1',
    orientation: 'LANDSCAPE',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/e05209cc-c35e-4da3-9511-5553592f97b6.jpeg',
    caption: { es: 'Galería adicional de la propiedad (Foto 22)', en: 'Additional property gallery (Photo 22)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
  {
    id: 'airbnb-extra-2',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1732806563395028991/original/24dae9cb-618a-4188-8b5a-8349bae5567f.jpeg',
    caption: { es: 'Detalles de la estancia (Foto 23)', en: 'Stay details (Photo 23)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
  {
    id: 'airbnb-extra-3',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/c53b07ef-1405-494f-99d9-c48b5e379df6.jpeg',
    caption: { es: 'Rincón natural en La Finca (Foto 24)', en: 'Natural corner at La Finca (Photo 24)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
  {
    id: 'airbnb-extra-4',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/408eb31b-6db8-4397-9264-0bcb59d4dbf1.jpeg',
    caption: { es: 'Vista adicional de Cabaña La Finca (Foto 25)', en: 'Additional view of Cabaña La Finca (Photo 25)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
  {
    id: 'airbnb-extra-5',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/032fd58e-d55e-411c-b72d-781e051b91a8.jpeg',
    caption: { es: 'Área exterior y jardines (Foto 26)', en: 'Outdoor area & gardens (Photo 26)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
  {
    id: 'airbnb-extra-6',
    orientation: 'PORTRAIT',
    imageUrl: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1773491009691684318/original/16bf56dd-d2a1-4e26-b25d-c7a7e7dc38e9.jpeg',
    caption: { es: 'Experiencia auténtica en Peñas Blancas (Foto 27)', en: 'Authentic experience in Peñas Blancas (Photo 27)' },
    tag: { es: 'Galería Airbnb', en: 'Airbnb Gallery' },
  },
];

/* --------------------------------------------------------------------------
 * 4. RESEÑAS ESTÁTICAS DE AIRBNB Y GOOGLE MAPS
 * -------------------------------------------------------------------------- */
const REVIEWS_DATA = [
  {
    id: 'rev-1',
    platform: 'Airbnb',
    author: 'Mariana & Lucas',
    country: '🇨🇷 San José, CR',
    rating: 5,
    date: { es: 'Hace 2 semanas', en: '2 weeks ago' },
    text: {
      es: '¡Una joya en Peñas Blancas! La cabaña es impecable y silenciosa. En 20 min estábamos en La Fortuna y al regresar cenamos delicioso en el Restaurante La Finca.',
      en: 'A true gem in Peñas Blancas! The cabin is spotless and peaceful. We reached La Fortuna in 20 min and came back to an amazing dinner at Restaurante La Finca.',
    },
  },
  {
    id: 'rev-2',
    platform: 'Google Maps',
    author: 'David Miller',
    country: '🇺🇸 Austin, TX',
    rating: 5,
    date: { es: 'Hace 1 mes', en: '1 month ago' },
    text: {
      es: 'Hospitalidad costarricense de primer nivel. Tener el restaurante familiar a pocos pasos hace toda la diferencia: el café caliente y los patacones fueron inolvidables.',
      en: 'Top-notch Costa Rican hospitality. Having the family restaurant steps away makes all the difference—the hot coffee and patacones were unforgettable.',
    },
  },
  {
    id: 'rev-3',
    platform: 'Airbnb',
    author: 'Sophie Laurent',
    country: '🇫🇷 Lyon, Francia',
    rating: 5,
    date: { es: 'Hace 1 mes', en: '1 month ago' },
    text: {
      es: 'Despertar rodeados de jardines verdes camino al Volcán Arenal fue mágico. Cocina muy completa y camas súper cómodas.',
      en: 'Waking up surrounded by green gardens on the way to Arenal Volcano was magical. Full kitchen and very comfortable beds.',
    },
  },
  {
    id: 'rev-4',
    platform: 'Google Maps',
    author: 'Carlos Vindas',
    country: '🇨🇷 Heredia, CR',
    rating: 5,
    date: { es: 'Hace 2 meses', en: '2 months ago' },
    text: {
      es: 'Excelente relación calidad-precio. La Tilapia Entera Frita, el Chifrijo y el Ceviche del restaurante son 10/10. Volveremos sin duda.',
      en: 'Unbeatable value. The Whole Fried Tilapia, Chifrijo, and Fish Ceviche at the restaurant are 10/10. We will definitely return.',
    },
  },
];

/* --------------------------------------------------------------------------
 * 5. PERFILES SIMULADOS DE CLIMA + UPSELLING DINÁMICO CON EL MENÚ OFICIAL
 * -------------------------------------------------------------------------- */
const WEATHER_PROFILES = [
  {
    id: 'rainy-afternoon',
    tempC: 22,
    recommendedDishId: 'sopa-mariscos',
    recommendedCategory: 'soups',
    title: { es: 'Tarde Lluviosa de Montaña', en: 'Mountain Rain Shower' },
    desc: { es: 'Lluvia suave tropical con brisa fresca en Peñas Blancas.', en: 'Gentle tropical rain with fresh mountain breeze.' },
    upsell: {
      es: '🍲 Tarde lluviosa: ideal para un Café con Leche (₡800), Agua Dulce con Leche o una Sopa de Mariscos calientita.',
      en: '🍲 Rainy afternoon: ideal for a hot Coffee with Milk, Sugar Cane Tea, or a steaming Seafood Soup.',
    },
    svgIcon: `
      <svg class="w-11 h-11 text-sky-300" viewBox="0 0 64 64" fill="none">
        <path d="M20 42h26a10 10 0 001.2-19.9A14 14 0 0020 18a11 11 0 000 22z" fill="currentColor" opacity="0.9"/>
        <line x1="24" y1="47" x2="21" y2="56" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="animate-rain-drop"/>
        <line x1="34" y1="47" x2="31" y2="56" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="animate-rain-drop" style="animation-delay:0.4s"/>
        <line x1="44" y1="47" x2="41" y2="56" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" class="animate-rain-drop" style="animation-delay:0.8s"/>
      </svg>
    `,
  },
  {
    id: 'sunny-tropical',
    tempC: 29,
    recommendedDishId: 'ceviche-pescado',
    recommendedCategory: 'fast_food',
    title: { es: 'Día Soleado Tropical', en: 'Sunny Tropical Day' },
    desc: { es: 'Cielo despejado hacia La Fortuna y el Volcán Arenal.', en: 'Clear skies toward La Fortuna and Arenal Volcano.' },
    upsell: {
      es: '🍋 Día soleado: refréscate con un Ceviche de Pescado fresco y un Batido en Leche o Cerveza bien fría.',
      en: '🍋 Sunny day: cool down with our fresh Fish Ceviche and an ice-cold Milkshake or Beer.',
    },
    svgIcon: `
      <svg class="w-11 h-11 text-amber-300 animate-sun-spin" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="13" fill="currentColor"/>
        <g stroke="currentColor" stroke-width="3.5" stroke-linecap="round">
          <line x1="32" y1="7" x2="32" y2="13"/><line x1="32" y1="51" x2="32" y2="57"/>
          <line x1="7" y1="32" x2="13" y2="32"/><line x1="51" y1="32" x2="57" y2="32"/>
          <line x1="14.3" y1="14.3" x2="18.5" y2="18.5"/><line x1="45.5" y1="45.5" x2="49.7" y2="49.7"/>
          <line x1="49.7" y1="14.3" x2="45.5" y2="18.5"/><line x1="18.5" y1="45.5" x2="14.3" y2="49.7"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'warm-breeze',
    tempC: 26,
    recommendedDishId: 'tilapia-entera-frita',
    recommendedCategory: 'mains',
    title: { es: 'Clima Templado de Montaña', en: 'Mild Mountain Breeze' },
    desc: { es: 'Temperatura agradable para disfrutar al aire libre.', en: 'Pleasant temperature for outdoor dining.' },
    upsell: {
      es: '🐟 Clima ideal: prueba nuestra especialidad de Tilapia Entera Frita con patacones o un Casado Tradicional.',
      en: '🐟 Ideal weather: try our specialty Whole Fried Tilapia with patacones or a Traditional Casado.',
    },
    svgIcon: `
      <svg class="w-11 h-11 text-emerald-300 animate-float-slow" viewBox="0 0 64 64" fill="none">
        <circle cx="22" cy="22" r="9" fill="#fbbf24"/>
        <path d="M22 44h24a9 9 0 001-17.9A12.5 12.5 0 0023 22a9.5 9.5 0 00-1 22z" fill="#e2e8f0" opacity="0.95"/>
        <path d="M14 52h28" stroke="#6ee7b7" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
  },
];

/* --------------------------------------------------------------------------
 * 6. MENÚ DIGITAL OFICIAL DE RESTAURANTE LA FINCA (57 Ítems del Menú Físico)
 * -------------------------------------------------------------------------- */
const MENU_CATEGORIES = [
  { id: 'all', label: { es: 'Todos', en: 'All' }, icon: '✨' },
  { id: 'fast_food', label: { es: 'Comidas Rápidas', en: 'Fast Food' }, icon: '🍔' },
  { id: 'soups', label: { es: 'Sopas', en: 'Soups' }, icon: '🍲' },
  { id: 'mains', label: { es: 'Platos Fuertes', en: 'Main Dishes' }, icon: '🍛' },
  { id: 'hot_drinks', label: { es: 'Bebidas Calientes', en: 'Hot Drinks' }, icon: '☕' },
  { id: 'cold_drinks', label: { es: 'Bebidas Frías', en: 'Cold Drinks' }, icon: '🥤' },
];

const MENU_ITEMS = [
  // ================= COMIDAS RÁPIDAS / FAST FOOD =================
  {
    id: 'nachos-mixtos',
    category: 'fast_food',
    priceCRC: 4500,
    name: { es: 'Nachos Mixtos', en: 'Mixed Nachos' },
    desc: { es: 'Nachos crujientes mixtos (pollo y carne).', en: 'Crispy mixed nachos (chicken and beef).' },
  },
  {
    id: 'nachos-pollo-carne',
    category: 'fast_food',
    priceCRC: 4000,
    name: { es: 'Nachos de Pollo o Carne', en: 'Chicken or Beef Nachos' },
    desc: { es: 'Elige pollo o carne en las notas del pedido.', en: 'Choose chicken or beef in order notes.' },
  },
  {
    id: 'papanachos-pollo-carne',
    category: 'fast_food',
    priceCRC: 5000,
    name: { es: 'Papanachos de Pollo o Carne', en: 'Chicken or Beef Papanachos' },
    desc: { es: 'Base de papas con pollo o carne a elección.', en: 'Crispy potato base with chicken or beef.' },
  },
  {
    id: 'papanachos-mixtos',
    category: 'fast_food',
    priceCRC: 5500,
    name: { es: 'Papanachos Mixtos', en: 'Mixed Papanachos' },
    desc: { es: 'Papanachos combinados con pollo y carne.', en: 'Mixed papanachos with chicken and beef.' },
  },
  {
    id: 'ceviche-pescado',
    category: 'fast_food',
    priceCRC: 3500,
    name: { es: 'Ceviche de Pescado', en: 'Fish Ceviche' },
    desc: { es: 'Porción regular de ceviche de pescado fresco.', en: 'Regular size fresh fish ceviche.' },
  },
  {
    id: 'ceviche-pescado-pequeno',
    category: 'fast_food',
    priceCRC: 2500,
    name: { es: 'Ceviche de Pescado Pequeño', en: 'Fish Ceviche (Small size)' },
    desc: { es: 'Porción pequeña de ceviche de pescado.', en: 'Small size fresh fish ceviche.' },
  },
  {
    id: 'chifrijo',
    category: 'fast_food',
    priceCRC: 4000,
    name: { es: 'Chifrijo', en: 'Chifrijo Bowl' },
    desc: { es: 'Arroz, frijoles, pico de gallo y tortillas tostadas.', en: 'Fried rice, beans, pico de gallo & toast tortilla.' },
  },
  {
    id: 'orden-papas-fritas',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Orden de Papas Fritas', en: 'French Fries' },
    desc: { es: 'Porción de papas fritas crujientes.', en: 'Crispy golden French fries.' },
  },
  {
    id: 'orden-patacones',
    category: 'fast_food',
    priceCRC: 3000,
    name: { es: 'Orden de Patacones', en: 'Order of Patacones' },
    desc: { es: 'Acompañado de frijoles molidos y pico de gallo.', en: 'Fried green plantains with refried beans & pico de gallo.' },
  },
  {
    id: 'orden-yuca-frita',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Orden de Yuca Frita', en: 'Fried Yucca' },
    desc: { es: 'Porción de yuca frita dorada.', en: 'Crispy fried cassava root.' },
  },
  {
    id: 'chicharrones',
    category: 'fast_food',
    priceCRC: 4000,
    name: { es: 'Chicharrones', en: 'Pork Rinds (Chicharrones)' },
    desc: { es: 'Con yuca frita y pico de gallo.', en: 'Pork rinds with yucca and pico de gallo.' },
  },
  {
    id: 'emparedados',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Emparedados', en: 'Sandwich' },
    desc: { es: 'Pollo, carne o jamón y queso.', en: 'Chicken, beef or ham and cheese.' },
  },
  {
    id: 'hamburguesa-sencilla',
    category: 'fast_food',
    priceCRC: 2500,
    name: { es: 'Hamburguesa Sencilla', en: 'Simple Hamburger' },
    desc: { es: 'Hamburguesa tradicional preparada al momento.', en: 'Classic freshly made hamburger.' },
  },
  {
    id: 'hamburguesa-con-papas',
    category: 'fast_food',
    priceCRC: 3000,
    name: { es: 'Hamburguesa con Papas', en: 'Hamburger with French Fries' },
    desc: { es: 'Hamburguesa acompañada de papas fritas.', en: 'Hamburger served with French fries.' },
  },
  {
    id: 'taco-sencillo',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Taco Sencillo', en: 'Simple Taco' },
    desc: { es: 'Taco tico crujiente con repollo y salsas.', en: 'Crispy Costa Rican style taco.' },
  },
  {
    id: 'taco-con-papas',
    category: 'fast_food',
    priceCRC: 2500,
    name: { es: 'Taco con Papas', en: 'Taco with French Fries' },
    desc: { es: 'Taco crujiente acompañado de papas fritas.', en: 'Taco served with French fries.' },
  },
  {
    id: 'torta-de-carne',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Torta de Carne', en: 'Beef Patty' },
    desc: { es: 'Torta de carne al estilo casero.', en: 'Homestyle seasoned beef patty.' },
  },
  {
    id: 'salchipapas',
    category: 'fast_food',
    priceCRC: 2500,
    name: { es: 'Salchipapas', en: 'Sausage and Fries' },
    desc: { es: 'Papas fritas con salchicha.', en: 'French fries with sliced sausage.' },
  },
  {
    id: 'gallo-salchichon',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Gallo de Salchichón', en: 'Sausage with Tortilla' },
    desc: { es: 'Salchichón en tortilla caliente.', en: 'Sausage served on tortilla.' },
  },
  {
    id: 'gallo-queso',
    category: 'fast_food',
    priceCRC: 1500,
    name: { es: 'Gallo de Queso', en: 'Cheese with Tortilla' },
    desc: { es: 'Queso a la plancha en tortilla.', en: 'Grilled cheese with tortilla.' },
  },
  {
    id: 'gallo-pescado',
    category: 'fast_food',
    priceCRC: 2500,
    name: { es: 'Gallo de Pescado', en: 'Fish with Tortilla' },
    desc: { es: 'Filet de pescado en tortilla.', en: 'Fish fillet with tortilla.' },
  },
  {
    id: 'prensadas',
    category: 'fast_food',
    priceCRC: 1000,
    name: { es: 'Prensadas', en: 'Cheese Crisp (Prensada)' },
    desc: { es: 'Tortilla prensada con queso.', en: 'Pressed tortilla with melted cheese.' },
  },
  {
    id: 'platano-con-natilla',
    category: 'fast_food',
    priceCRC: 2000,
    name: { es: 'Plátano con Natilla', en: 'Plantains with Sour Cream' },
    desc: { es: 'Plátano maduro con natilla.', en: 'Sweet plantains with sour cream.' },
  },

  // ================= SOPAS / SOUPS =================
  {
    id: 'sopa-ranchera',
    category: 'soups',
    priceCRC: 3500,
    name: { es: 'Sopa Ranchera', en: 'Ranchero Soup' },
    desc: { es: 'Sopa ranchera tradicional caliente.', en: 'Hearty traditional Ranchero soup.' },
  },
  {
    id: 'sopa-mariscos',
    category: 'soups',
    priceCRC: 5000,
    name: { es: 'Sopa de Mariscos', en: 'Seafood Soup' },
    desc: { es: 'Sopa reconfortante de mariscos frescos.', en: 'Rich fresh seafood soup.' },
  },

  // ================= PLATOS FUERTES / MAIN DISHES =================
  {
    id: 'tilapia-entera-frita',
    category: 'mains',
    priceCRC: 7500,
    name: { es: 'Tilapia Entera Frita', en: 'Fried Whole Tilapia' },
    desc: {
      es: 'Papas fritas y ensalada o yuca frita y ceviche de banano.',
      en: 'French fries & salad or fried yucca with banana ceviche.',
    },
  },
  {
    id: 'filet-tilapia-plancha',
    category: 'mains',
    priceCRC: 4800,
    name: { es: 'Filet de Tilapia a la Plancha', en: 'Grilled Tilapia Fillet' },
    desc: { es: 'Acompañado de vegetales y arroz blanco.', en: 'With vegetables and white rice.' },
  },
  {
    id: 'filet-tilapia-empanizado',
    category: 'mains',
    priceCRC: 4800,
    name: { es: 'Filet de Tilapia Empanizado', en: 'Breaded Tilapia Fillet' },
    desc: { es: 'Acompañado de vegetales y arroz blanco.', en: 'Breaded tilapia with vegetables and white rice.' },
  },
  {
    id: 'filet-pollo-plancha',
    category: 'mains',
    priceCRC: 4500,
    name: { es: 'Filet de Pollo a la Plancha', en: 'Grilled Chicken Fillet' },
    desc: { es: 'Acompañado de vegetales y arroz blanco.', en: 'Grilled chicken with vegetables and white rice.' },
  },
  {
    id: 'filet-pollo-empanizado',
    category: 'mains',
    priceCRC: 4500,
    name: { es: 'Filet de Pollo Empanizado', en: 'Breaded Chicken Fillet' },
    desc: { es: 'Acompañado de vegetales y arroz blanco.', en: 'Breaded chicken with vegetables and white rice.' },
  },
  {
    id: 'camarones-al-ajillo',
    category: 'mains',
    priceCRC: 4500,
    name: { es: 'Camarones al Ajillo, Ensalada y Arroz', en: 'Shrimp in Garlic Sauce, Rice & Salad' },
    desc: { es: 'Camarones al ajillo con ensalada y arroz.', en: 'Garlic shrimp with fried rice and salad.' },
  },
  {
    id: 'camarones-empanizados',
    category: 'mains',
    priceCRC: 4500,
    name: { es: 'Camarones Empanizados, Ensalada y Arroz', en: 'Breaded Shrimp, White Rice & Salad' },
    desc: { es: 'Camarones empanizados con arroz blanco y ensalada.', en: 'Breaded shrimp, white rice and salad.' },
  },
  {
    id: 'gordon-blue-pollo',
    category: 'mains',
    priceCRC: 5000,
    name: { es: 'Gordon Blue de Pollo', en: 'Chicken Cordon Bleu' },
    desc: { es: 'En salsa blanca acompañado de puré y vegetales.', en: 'With mashed potatoes and vegetables in white sauce.' },
  },
  {
    id: 'fajitas-pollo',
    category: 'mains',
    priceCRC: 4000,
    name: { es: 'Fajitas de Pollo', en: 'Chicken Fajitas' },
    desc: { es: 'Acompañadas de papas fritas y ceviche de banano.', en: 'With French fries and banana ceviche.' },
  },
  {
    id: 'fajitas-pescado',
    category: 'mains',
    priceCRC: 4800,
    name: { es: 'Fajitas de Pescado', en: 'Fish Fajitas' },
    desc: { es: 'Acompañadas de papas fritas y ceviche de banano.', en: 'With French fries and banana ceviche.' },
  },
  {
    id: 'arroz-con-camarones',
    category: 'mains',
    priceCRC: 5000,
    name: { es: 'Arroz con Camarones', en: 'Shrimp Fried Rice' },
    desc: { es: 'Acompañado de papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'camarones-con-arroz',
    category: 'mains',
    priceCRC: 6500,
    name: { es: 'Camarones con Arroz', en: 'Premium Shrimp with Rice' },
    desc: { es: 'Acompañado de papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'arroz-con-mariscos',
    category: 'mains',
    priceCRC: 5000,
    name: { es: 'Arroz con Mariscos', en: 'Seafood Fried Rice' },
    desc: { es: 'Acompañado de papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'arroz-cantones',
    category: 'mains',
    priceCRC: 5000,
    name: { es: 'Arroz Cantonés', en: 'Cantonese Fried Rice' },
    desc: { es: 'Acompañado de papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'arroz-con-pollo',
    category: 'mains',
    priceCRC: 4000,
    name: { es: 'Arroz con Pollo', en: 'Chicken Fried Rice' },
    desc: { es: 'Con papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'arroz-con-cerdo',
    category: 'mains',
    priceCRC: 4000,
    name: { es: 'Arroz con Cerdo', en: 'Pork Fried Rice' },
    desc: { es: 'Acompañado de papas fritas y ensalada.', en: 'Served with French fries and salad.' },
  },
  {
    id: 'arroz-con-carne-salsa',
    category: 'mains',
    priceCRC: 3500,
    name: { es: 'Arroz con Carne en Salsa', en: 'Rice with Stewed Beef' },
    desc: { es: 'Acompañado de ensalada verde.', en: 'Rice with stewed beef and green salad.' },
  },
  {
    id: 'casados',
    category: 'mains',
    priceCRC: 4000,
    name: { es: 'Casados', en: 'Traditional Casado' },
    desc: { es: 'Pollo, Bistec, Carne en Salsa, Pescado o Chuleta.', en: 'Chicken, Skirt Steak, Stewed Beef, Fish or Pork Chop.' },
  },
  {
    id: 'casados-vegetarianos',
    category: 'mains',
    priceCRC: 4000,
    name: { es: 'Casados Vegetarianos', en: 'Vegetarian Casado' },
    desc: { es: 'Arroz, frijoles, vegetales, plátano y ensalada.', en: 'Rice, beans, vegetables, plantain and salad.' },
  },

  // ================= BEBIDAS CALIENTES / HOT BEVERAGES =================
  {
    id: 'cafe-negro',
    category: 'hot_drinks',
    priceCRC: 800,
    name: { es: 'Café Negro', en: 'Black Coffee' },
    desc: { es: 'Café recién chorreado.', en: 'Fresh black coffee.' },
  },
  {
    id: 'cafe-con-leche',
    category: 'hot_drinks',
    priceCRC: 800,
    name: { es: 'Café con Leche', en: 'Coffee with Milk' },
    desc: { es: 'Café recién hecho con leche caliente.', en: 'Coffee with hot milk/cream.' },
  },
  {
    id: 'chocolate-caliente',
    category: 'hot_drinks',
    priceCRC: 1200,
    name: { es: 'Chocolate', en: 'Hot Chocolate' },
    desc: { es: 'Chocolate caliente tradicional.', en: 'Creamy hot chocolate.' },
  },
  {
    id: 'agua-dulce',
    category: 'hot_drinks',
    priceCRC: 800,
    name: { es: 'Agua Dulce', en: 'Sugar Cane Tea' },
    desc: { es: 'Agua dulce caliente de tapa.', en: 'Traditional hot cane sugar tea.' },
  },
  {
    id: 'agua-dulce-con-leche',
    category: 'hot_drinks',
    priceCRC: 1200,
    name: { es: 'Agua Dulce con Leche', en: 'Sugar Cane Tea with Milk' },
    desc: { es: 'Agua dulce preparada con leche.', en: 'Hot sugar cane tea with milk.' },
  },
  {
    id: 'te-en-agua',
    category: 'hot_drinks',
    priceCRC: 800,
    name: { es: 'Té en Agua', en: 'Hot Tea' },
    desc: { es: 'Té caliente en agua.', en: 'Hot herbal or black tea.' },
  },

  // ================= BEBIDAS FRÍAS / COLD BEVERAGES =================
  {
    id: 'gaseosa-desechable',
    category: 'cold_drinks',
    priceCRC: 1400,
    name: { es: 'Gaseosa Desechable', en: 'Soft Drinks (Plastic Bottle)' },
    desc: { es: 'Refresco gaseoso en botella plástica.', en: 'Soft drink in plastic bottle.' },
  },
  {
    id: 'gaseosa-vidrio',
    category: 'cold_drinks',
    priceCRC: 1200,
    name: { es: 'Gaseosas de Vidrio', en: 'Soft Drinks (Glass Bottle)' },
    desc: { es: 'Refresco gaseoso en botella de vidrio.', en: 'Soft drink in glass bottle.' },
  },
  {
    id: 'tropicales-vidrio',
    category: 'cold_drinks',
    priceCRC: 1200,
    name: { es: 'Tropicales', en: 'Bottled Juice (Glass)' },
    desc: { es: 'Refresco Tropical en botella de vidrio.', en: 'Bottled Tropical juice (glass).' },
  },
  {
    id: 'tropicales-desechables',
    category: 'cold_drinks',
    priceCRC: 1400,
    name: { es: 'Tropicales Desechables', en: 'Bottled Juice (Plastic)' },
    desc: { es: 'Refresco Tropical desechable.', en: 'Bottled Tropical juice (plastic).' },
  },
  {
    id: 'refrescos-naturales',
    category: 'cold_drinks',
    priceCRC: 1000,
    name: { es: 'Refrescos Naturales', en: 'Natural Fruit Juice' },
    desc: { es: 'Fresco natural de fruta en agua.', en: 'Fresh natural fruit juice.' },
  },
  {
    id: 'batidos-en-leche',
    category: 'cold_drinks',
    priceCRC: 2000,
    name: { es: 'Batidos en Leche', en: 'Milkshakes' },
    desc: { es: 'Sabores: Fresa, Cocomani, Crema, Papaya o Mora.', en: 'Flavors: Strawberry, Cocomani, Cream, Papaya, Blackberry.' },
  },
  {
    id: 'cerveza',
    category: 'cold_drinks',
    priceCRC: 2000,
    name: { es: 'Cerveza', en: 'Cold Beer' },
    desc: { es: 'Cerveza bien fría (₡2,000 c/u).', en: 'Ice-cold beer.' },
  },
];

/* --------------------------------------------------------------------------
 * 7. CONTROLADOR PRINCIPAL DE LA APLICACIÓN (App)
 * -------------------------------------------------------------------------- */
const App = {
  state: {
    currentView: 'landing',
    lang: localStorage.getItem('lafinca_lang') || 'es',
    currency: localStorage.getItem('lafinca_currency') || 'CRC',
    theme:
      localStorage.getItem('lafinca_theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    activeCategory: 'all',
    searchQuery: '',
    hoursExpanded: false,
    highlightedDishId: null,
    carouselIndex: 0,
    carouselPaused: false,
    carouselTimer: null,
    quote: {
      checkin: '',
      checkout: '',
      guests: 2,
      nights: 2,
      totalCRC: 76000,
      weatherProfile: WEATHER_PROFILES[0],
    },
    cart: JSON.parse(localStorage.getItem('lafinca_cart') || '{}'),
    deferredInstallPrompt: null,
  },

  init() {
    this.initDefaultDates();
    this.applyTheme(this.state.theme);
    this.setupPWA();
    this.renderCarousel();
    this.startCarouselAutoPlay();
    this.renderAll();

    const hashView = window.location.hash.replace('#', '');
    if (['landing', 'cabin', 'restaurant'].includes(hashView)) {
      this.navigateTo(hashView, false);
    } else {
      this.updateActiveNavButtons();
    }

    window.addEventListener('hashchange', () => {
      const target = window.location.hash.replace('#', '') || 'landing';
      if (['landing', 'cabin', 'restaurant'].includes(target) && target !== this.state.currentView) {
        this.navigateTo(target, false);
      }
    });
  },

  initDefaultDates() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkout = new Date(tomorrow);
    checkout.setDate(checkout.getDate() + 2);

    const formatISO = (d) => d.toISOString().split('T')[0];
    this.state.quote.checkin = formatISO(tomorrow);
    this.state.quote.checkout = formatISO(checkout);

    const checkinEl = document.getElementById('quote-checkin');
    const checkoutEl = document.getElementById('quote-checkout');
    if (checkinEl && checkoutEl) {
      checkinEl.min = formatISO(new Date());
      checkinEl.value = this.state.quote.checkin;
      checkoutEl.min = formatISO(tomorrow);
      checkoutEl.value = this.state.quote.checkout;
    }
  },

  /* ========================================================================
   * NAVEGACIÓN SPA
   * ======================================================================== */
  navigateTo(viewName, updateHash = true) {
    this.state.currentView = viewName;
    if (updateHash) {
      window.history.pushState(null, '', `#${viewName}`);
    }

    ['landing', 'cabin', 'restaurant'].forEach((v) => {
      const el = document.getElementById(`view-${v}`);
      if (!el) return;
      if (v === viewName) {
        el.classList.remove('view-hidden');
        el.classList.add('view-active');
      } else {
        el.classList.remove('view-active');
        el.classList.add('view-hidden');
      }
    });

    this.updateActiveNavButtons();
    this.updateFloatingCartVisibility();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updateActiveNavButtons() {
    const activeClasses = ['bg-emerald-700', 'text-white', 'shadow-sm'];
    const inactiveClasses = ['text-slate-600', 'dark:text-zinc-300', 'hover:text-slate-900', 'dark:hover:text-white'];

    [
      { id: 'nav-btn-landing', view: 'landing' },
      { id: 'nav-btn-cabin', view: 'cabin' },
      { id: 'nav-btn-restaurant', view: 'restaurant' },
    ].forEach(({ id, view }) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      if (this.state.currentView === view) {
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);
      } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
      }
    });
  },

  /* ========================================================================
   * MODO CLARO / OSCURO (Funciona en Celular y Desktop)
   * ======================================================================== */
  toggleTheme() {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  },

  applyTheme(theme) {
    this.state.theme = theme;
    localStorage.setItem('lafinca_theme', theme);
    const root = document.documentElement;
    const metaTheme = document.getElementById('meta-theme-color');

    if (theme === 'dark') {
      root.classList.add('dark');
      if (metaTheme) metaTheme.setAttribute('content', '#18181b');
    } else {
      root.classList.remove('dark');
      if (metaTheme) metaTheme.setAttribute('content', '#f5f5f4');
    }
    this.updateThemeLabel();
  },

  updateThemeLabel() {
    const label = document.getElementById('theme-mode-label');
    if (label) {
      label.textContent =
        this.state.theme === 'dark' ? this.t('nav.darkMode') : this.t('nav.lightMode');
    }
  },

  /* ========================================================================
   * IDIOMA (ES / EN) Y MONEDA (CRC / USD)
   * ======================================================================== */
  toggleLanguage() {
    const next = this.state.lang === 'es' ? 'en' : 'es';
    this.setLanguage(next);
  },

  setLanguage(lang) {
    if (!I18N[lang]) return;
    this.state.lang = lang;
    localStorage.setItem('lafinca_lang', lang);
    document.documentElement.lang = lang;
    this.renderAll();
  },

  t(keyPath) {
    const parts = keyPath.split('.');
    let current = I18N[this.state.lang];
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        return keyPath;
      }
    }
    return current;
  },

  toggleCurrency() {
    const next = this.state.currency === 'CRC' ? 'USD' : 'CRC';
    this.setCurrency(next);
  },

  setCurrency(currency) {
    if (!['CRC', 'USD'].includes(currency)) return;
    this.state.currency = currency;
    localStorage.setItem('lafinca_currency', currency);
    this.renderAll();
  },

  formatMoney(amountCRC) {
    if (this.state.currency === 'USD') {
      const usdValue = amountCRC / CONFIG.exchangeRateUSD;
      return `$${usdValue.toFixed(2)}`;
    }
    return `₡${Math.round(amountCRC).toLocaleString('es-CR')}`;
  },

  /* ========================================================================
   * HORARIO INTERACTIVO EN TIEMPO REAL (RESTAURANTE LA FINCA)
   * ======================================================================== */
  toggleHoursDropdown() {
    this.state.hoursExpanded = !this.state.hoursExpanded;
    const dropdown = document.getElementById('rest-hours-dropdown');
    const chevron = document.getElementById('rest-hours-chevron');
    if (dropdown) {
      dropdown.classList.toggle('hidden', !this.state.hoursExpanded);
    }
    if (chevron) {
      chevron.classList.toggle('rotate-180', this.state.hoursExpanded);
    }
  },

  renderRestaurantSchedule() {
    // Obtener día y hora actual en Costa Rica (UTC-6)
    const now = new Date();
    const crString = now.toLocaleString('en-US', { timeZone: 'America/Costa_Rica' });
    const crDate = new Date(crString);
    const currentDay = crDate.getDay(); // 0 = domingo ... 6 = sábado
    const currentMinutes = crDate.getHours() * 60 + crDate.getMinutes();

    const todayConfig = RESTAURANT_SCHEDULE.find((d) => d.dayIndex === currentDay) || RESTAURANT_SCHEDULE[0];
    const isOpen = currentMinutes >= todayConfig.openMin && currentMinutes < todayConfig.closeMin;

    const dotEl = document.getElementById('rest-live-dot');
    const statusTextEl = document.getElementById('rest-live-status-text');
    const todayHoursEl = document.getElementById('rest-today-hours');
    const landingStatusPill = document.getElementById('landing-rest-status-pill');

    if (dotEl) {
      dotEl.className = isOpen
        ? 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0'
        : 'w-2 h-2 rounded-full bg-rose-500 shrink-0';
    }
    if (statusTextEl) {
      statusTextEl.textContent = isOpen ? this.t('rest.openStatus') : this.t('rest.closedStatus');
      statusTextEl.className = isOpen
        ? 'font-bold text-emerald-700 dark:text-emerald-400'
        : 'font-bold text-rose-600 dark:text-rose-400';
    }
    if (todayHoursEl) {
      todayHoursEl.textContent = `${this.t('rest.todayPrefix')} (${todayConfig.day[this.state.lang]}): ${todayConfig.hours[this.state.lang]}`;
    }
    if (landingStatusPill) {
      landingStatusPill.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}"></span>
        <span>${isOpen ? this.t('rest.openStatus') : this.t('rest.closedStatus')} · ${todayConfig.hours[this.state.lang]}</span>
      `;
    }

    const dropdown = document.getElementById('rest-hours-dropdown');
    if (dropdown) {
      dropdown.innerHTML = RESTAURANT_SCHEDULE.map((item) => {
        const isToday = item.dayIndex === currentDay;
        return `
          <div class="flex items-center justify-between py-1 px-2 rounded-lg ${
            isToday
              ? 'bg-emerald-50 dark:bg-emerald-950/60 font-bold text-slate-900 dark:text-white'
              : 'text-slate-600 dark:text-zinc-400'
          }">
            <span class="capitalize">${item.day[this.state.lang]}</span>
            <span>${item.hours[this.state.lang]}</span>
          </div>
        `;
      }).join('');
    }
  },

  /* ========================================================================
   * RENDERIZADO REACTIVO INTEGRAL
   * ======================================================================== */
  renderAll() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.placeholder = this.t('rest.searchPlaceholder');
    }

    document.querySelectorAll('.lang-indicator').forEach((el) => {
      el.textContent = this.state.lang.toUpperCase();
    });
    document.querySelectorAll('.currency-symbol-indicator').forEach((el) => {
      el.textContent = this.state.currency === 'CRC' ? '₡' : '$';
    });
    document.querySelectorAll('.currency-code-indicator').forEach((el) => {
      el.textContent = this.state.currency;
    });

    this.updateThemeLabel();
    this.renderRestaurantSchedule();
    this.renderCarouselCaptions();
    this.updateCabinQuote();
    this.renderReviews();
    this.renderMenuCategories();
    this.renderMenuGrid();
    this.renderCart();
  },

  /* ========================================================================
   * GALERÍA CARRUSEL DE CABAÑA LA FINCA (27 Fotos Oficiales de Airbnb)
   * ======================================================================== */
  renderCarousel() {
    const track = document.getElementById('cabin-carousel-track');
    const dots = document.getElementById('cabin-carousel-dots');
    const counter = document.getElementById('cabin-carousel-counter');
    if (!track || !dots) return;

    if (counter) {
      counter.textContent = `${this.state.carouselIndex + 1} / ${GALLERY_SLIDES.length}`;
    }

    track.innerHTML = GALLERY_SLIDES.map(
      (slide, index) => `
        <div
          data-carousel-slide="${index}"
          class="absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === this.state.carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }"
        >
          <img
            src="${slide.imageUrl}"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
            loading="${index === 0 ? 'eager' : 'lazy'}"
          />
          <img
            src="${slide.imageUrl}"
            alt="${slide.caption[this.state.lang]}"
            class="relative z-10 w-full h-full ${
              slide.orientation === 'PORTRAIT' ? 'object-contain' : 'object-cover'
            } object-center"
            loading="${index === 0 ? 'eager' : 'lazy'}"
          />
          <div class="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent pointer-events-none"></div>
          <div class="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 right-5 z-20 text-white pointer-events-none">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600/90 mb-1" data-slide-tag="${index}">
              ${slide.tag[this.state.lang]}
            </span>
            <p class="font-display text-sm sm:text-lg font-semibold text-slate-100 drop-shadow" data-slide-caption="${index}">
              ${slide.caption[this.state.lang]}
            </p>
          </div>
        </div>
      `
    ).join('');

    dots.innerHTML = GALLERY_SLIDES.map(
      (slide, index) => `
        <button
          type="button"
          onclick="App.goToSlide(${index})"
          data-carousel-dot="${index}"
          aria-label="Foto ${index + 1}"
          class="relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
            index === this.state.carouselIndex
              ? 'border-emerald-500 opacity-100 scale-105'
              : 'border-transparent opacity-55 hover:opacity-90'
          }"
        >
          <img src="${slide.imageUrl}" alt="" class="w-full h-full object-cover" loading="lazy" />
        </button>
      `
    ).join('');
  },

  renderCarouselCaptions() {
    GALLERY_SLIDES.forEach((slide, index) => {
      const tagEl = document.querySelector(`[data-slide-tag="${index}"]`);
      const capEl = document.querySelector(`[data-slide-caption="${index}"]`);
      if (tagEl) tagEl.textContent = slide.tag[this.state.lang];
      if (capEl) capEl.textContent = slide.caption[this.state.lang];
    });
  },

  goToSlide(index) {
    this.state.carouselIndex = (index + GALLERY_SLIDES.length) % GALLERY_SLIDES.length;

    const counter = document.getElementById('cabin-carousel-counter');
    if (counter) {
      counter.textContent = `${this.state.carouselIndex + 1} / ${GALLERY_SLIDES.length}`;
    }

    document.querySelectorAll('[data-carousel-slide]').forEach((el) => {
      const i = Number(el.getAttribute('data-carousel-slide'));
      el.classList.toggle('opacity-100', i === this.state.carouselIndex);
      el.classList.toggle('z-10', i === this.state.carouselIndex);
      el.classList.toggle('opacity-0', i !== this.state.carouselIndex);
      el.classList.toggle('z-0', i !== this.state.carouselIndex);
      el.classList.toggle('pointer-events-none', i !== this.state.carouselIndex);
    });

    document.querySelectorAll('[data-carousel-dot]').forEach((dot) => {
      const i = Number(dot.getAttribute('data-carousel-dot'));
      const isActive = i === this.state.carouselIndex;
      dot.className = `relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all ${
        isActive
          ? 'border-emerald-500 opacity-100 scale-105'
          : 'border-transparent opacity-55 hover:opacity-90'
      }`;
      if (isActive) {
        dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  },

  nextSlide() {
    this.goToSlide(this.state.carouselIndex + 1);
  },

  prevSlide() {
    this.goToSlide(this.state.carouselIndex - 1);
  },

  startCarouselAutoPlay() {
    if (this.state.carouselTimer) clearInterval(this.state.carouselTimer);
    this.state.carouselTimer = setInterval(() => {
      if (!this.state.carouselPaused && this.state.currentView === 'cabin') {
        this.nextSlide();
      }
    }, CONFIG.carouselIntervalMs);
  },

  pauseCarousel(paused) {
    this.state.carouselPaused = paused;
  },

  /* ========================================================================
   * COTIZADOR DE CABAÑA + CLIMA Y UPSELLING
   * ======================================================================== */
  changeGuestCount(delta) {
    const next = Math.min(CONFIG.cabin.maxGuests, Math.max(1, this.state.quote.guests + delta));
    this.state.quote.guests = next;
    this.updateCabinQuote();
  },

  updateCabinQuote() {
    const checkinInput = document.getElementById('quote-checkin');
    const checkoutInput = document.getElementById('quote-checkout');

    if (checkinInput && checkoutInput) {
      this.state.quote.checkin = checkinInput.value;
      this.state.quote.checkout = checkoutInput.value;
    }

    const start = new Date(this.state.quote.checkin);
    const end = new Date(this.state.quote.checkout);
    let diffDays = Math.round((end - start) / (1000 * 60 * 60 * 24));

    if (isNaN(diffDays) || diffDays < 1) {
      diffDays = 1;
      if (!isNaN(start.getTime()) && checkoutInput) {
        const nextDay = new Date(start);
        nextDay.setDate(nextDay.getDate() + 1);
        this.state.quote.checkout = nextDay.toISOString().split('T')[0];
        checkoutInput.value = this.state.quote.checkout;
      }
    }

    this.state.quote.nights = diffDays;

    const baseNightly = CONFIG.cabin.baseNightlyRateCRC;
    const extraGuests = Math.max(0, this.state.quote.guests - CONFIG.cabin.includedGuests);
    const nightsSubtotalCRC = diffDays * baseNightly;
    const extraGuestsSubtotalCRC = diffDays * extraGuests * CONFIG.cabin.extraGuestFeeCRC;
    const grandTotalCRC = nightsSubtotalCRC + extraGuestsSubtotalCRC;
    this.state.quote.totalCRC = grandTotalCRC;

    const baseRateEl = document.getElementById('cabin-base-rate-display');
    if (baseRateEl) baseRateEl.textContent = this.formatMoney(baseNightly);

    const guestsCountEl = document.getElementById('quote-guests-count');
    const guestsDisplayEl = document.getElementById('quote-guests-display');
    const guestWord =
      this.state.quote.guests === 1 ? this.t('quote.guestSingular') : this.t('quote.guestPlural');
    if (guestsCountEl) guestsCountEl.textContent = String(this.state.quote.guests);
    if (guestsDisplayEl) guestsDisplayEl.textContent = `${this.state.quote.guests} ${guestWord}`;

    const nightWord =
      diffDays === 1 ? this.t('quote.nightSingular') : this.t('quote.nightPlural');
    const nightsLineEl = document.getElementById('quote-nights-line');
    const nightsSubEl = document.getElementById('quote-nights-subtotal');
    if (nightsLineEl) {
      nightsLineEl.textContent = `${diffDays} ${nightWord} × ${this.formatMoney(baseNightly)}`;
    }
    if (nightsSubEl) {
      nightsSubEl.textContent = this.formatMoney(nightsSubtotalCRC);
    }

    const extraLineEl = document.getElementById('quote-extra-guests-line');
    const extraSubEl = document.getElementById('quote-extra-guests-subtotal');
    if (extraLineEl && extraSubEl) {
      if (extraGuests > 0) {
        extraLineEl.textContent = `${this.t('quote.extraGuestsLine')} (${extraGuests} × ${diffDays} ${nightWord})`;
        extraSubEl.textContent = this.formatMoney(extraGuestsSubtotalCRC);
      } else {
        extraLineEl.textContent = `${this.t('quote.extraGuestsLine')} (0)`;
        extraSubEl.textContent = this.t('quote.includedText');
      }
    }

    const grandTotalEl = document.getElementById('quote-grand-total');
    if (grandTotalEl) {
      grandTotalEl.textContent = this.formatMoney(grandTotalCRC);
    }

    this.updateSimulatedWeather(start, end);
  },

  updateSimulatedWeather(startDate, endDate) {
    const seed =
      !isNaN(startDate.getTime())
        ? startDate.getDate() + startDate.getMonth() * 31 + this.state.quote.nights
        : 1;
    const profile = WEATHER_PROFILES[seed % WEATHER_PROFILES.length];
    this.state.quote.weatherProfile = profile;

    const iconEl = document.getElementById('weather-animated-icon');
    const tempEl = document.getElementById('weather-temp');
    const titleEl = document.getElementById('weather-condition-title');
    const descEl = document.getElementById('weather-condition-desc');
    const upsellEl = document.getElementById('weather-upsell-text');
    const upsellPriceEl = document.getElementById('weather-upsell-price');
    const dateRangeEl = document.getElementById('weather-date-range');

    if (iconEl) iconEl.innerHTML = profile.svgIcon;
    if (tempEl) {
      const tempF = Math.round((profile.tempC * 9) / 5 + 32);
      tempEl.textContent =
        this.state.lang === 'en' ? `${profile.tempC}°C / ${tempF}°F` : `${profile.tempC}°C`;
    }
    if (titleEl) titleEl.textContent = profile.title[this.state.lang];
    if (descEl) descEl.textContent = profile.desc[this.state.lang];
    if (upsellEl) upsellEl.textContent = profile.upsell[this.state.lang];

    const linkedDish = MENU_ITEMS.find((item) => item.id === profile.recommendedDishId);
    if (upsellPriceEl && linkedDish) {
      upsellPriceEl.textContent = `${this.t('weather.availableAt')} ${this.formatMoney(linkedDish.priceCRC)}`;
    }

    if (dateRangeEl && !isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const locale = this.state.lang === 'es' ? 'es-CR' : 'en-US';
      const fmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
      dateRangeEl.textContent = `${fmt.format(startDate)} – ${fmt.format(endDate)}`;
    }
  },

  goToRecommendedMenu() {
    const profile = this.state.quote.weatherProfile;
    if (profile) {
      this.state.activeCategory = profile.recommendedCategory || 'all';
      this.state.highlightedDishId = profile.recommendedDishId || null;
      this.state.searchQuery = '';
      const searchInput = document.getElementById('menu-search-input');
      if (searchInput) searchInput.value = '';
    }
    this.navigateTo('restaurant');
    this.renderMenuCategories();
    this.renderMenuGrid();

    if (this.state.highlightedDishId) {
      setTimeout(() => {
        const card = document.getElementById(`dish-card-${this.state.highlightedDishId}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  },

  sendCabinQuoteWhatsApp() {
    const { checkin, checkout, guests, nights, totalCRC } = this.state.quote;
    const totalFormatted = this.formatMoney(totalCRC);

    const message =
      this.state.lang === 'es'
        ? `¡Hola Cabaña La Finca! 🌿 Me gustaría consultar disponibilidad para reservar:\n\n` +
          `📅 *Check-in:* ${checkin}\n` +
          `📅 *Check-out:* ${checkout} (${nights} ${nights === 1 ? 'noche' : 'noches'})\n` +
          `👥 *Huéspedes:* ${guests}\n` +
          `💰 *Total estimado (${this.state.currency}):* ${totalFormatted}\n\n` +
          `¿Tienen disponibilidad para estas fechas?`
        : `Hello Cabaña La Finca! 🌿 I would like to check availability for a stay:\n\n` +
          `📅 *Check-in:* ${checkin}\n` +
          `📅 *Check-out:* ${checkout} (${nights} ${nights === 1 ? 'night' : 'nights'})\n` +
          `👥 *Guests:* ${guests}\n` +
          `💰 *Estimated Total (${this.state.currency}):* ${totalFormatted}\n\n` +
          `Are these dates available?`;

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  /* ========================================================================
   * SECCIÓN DE RESEÑAS COMPACTA
   * ======================================================================== */
  renderReviews() {
    const container = document.getElementById('reviews-slider');
    if (!container) return;

    container.innerHTML = REVIEWS_DATA.map((rev) => {
      const isAirbnb = rev.platform === 'Airbnb';
      const badgeClass = isAirbnb
        ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/70 dark:text-rose-300 border-rose-200 dark:border-rose-800/60'
        : 'bg-blue-50 text-blue-600 dark:bg-blue-950/70 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';

      return `
        <article class="snap-start shrink-0 w-[82%] sm:w-[320px] bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${badgeClass}">
                ${rev.platform}
              </span>
              <span class="text-amber-400 text-xs">★★★★★</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
              “${rev.text[this.state.lang]}”
            </p>
          </div>
          <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/60 pt-2.5 text-xs">
            <div>
              <strong class="text-slate-900 dark:text-slate-100 block">${rev.author}</strong>
              <span class="text-[11px] text-slate-500 dark:text-zinc-400">${rev.country}</span>
            </div>
            <span class="text-[10px] text-slate-400">${rev.date[this.state.lang]}</span>
          </div>
        </article>
      `;
    }).join('');
  },

  scrollReviews(direction) {
    const container = document.getElementById('reviews-slider');
    if (!container) return;
    container.scrollBy({ left: direction * 320, behavior: 'smooth' });
  },

  /* ========================================================================
   * MENÚ DIGITAL COMPACTO E INTERACTIVO + BUSCADOR EN TIEMPO REAL
   * ======================================================================== */
  setCategory(categoryId) {
    this.state.activeCategory = categoryId;
    this.renderMenuCategories();
    this.renderMenuGrid();
  },

  setSearchQuery(query) {
    this.state.searchQuery = (query || '').trim().toLowerCase();
    this.renderMenuGrid();
  },

  renderMenuCategories() {
    const container = document.getElementById('menu-category-tabs');
    if (!container) return;

    container.innerHTML = MENU_CATEGORIES.map((cat) => {
      const active = this.state.activeCategory === cat.id;
      const count =
        cat.id === 'all'
          ? MENU_ITEMS.length
          : MENU_ITEMS.filter((i) => i.category === cat.id).length;

      return `
        <button
          type="button"
          onclick="App.setCategory('${cat.id}')"
          class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
            active
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100'
          }"
        >
          <span>${cat.icon}</span>
          <span>${cat.label[this.state.lang]}</span>
          <span class="px-1.5 py-0.2 rounded-full text-[10px] ${
            active ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400'
          }">${count}</span>
        </button>
      `;
    }).join('');
  },

  renderMenuGrid() {
    const grid = document.getElementById('restaurant-menu-grid');
    if (!grid) return;

    const query = this.state.searchQuery;
    const filtered = MENU_ITEMS.filter((item) => {
      const matchesCategory =
        this.state.activeCategory === 'all' || item.category === this.state.activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const nameEs = item.name.es.toLowerCase();
      const nameEn = item.name.en.toLowerCase();
      const descEs = item.desc.es.toLowerCase();
      const descEn = item.desc.en.toLowerCase();
      return (
        nameEs.includes(query) ||
        nameEn.includes(query) ||
        descEs.includes(query) ||
        descEn.includes(query)
      );
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-10 text-center text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
          ${this.t('rest.noResults')}
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((dish) => {
        const qty = this.state.cart[dish.id] || 0;
        const isRecommended =
          this.state.quote.weatherProfile &&
          this.state.quote.weatherProfile.recommendedDishId === dish.id;

        return `
          <article
            id="dish-card-${dish.id}"
            class="rounded-2xl bg-white dark:bg-slate-800/90 border ${
              isRecommended
                ? 'border-amber-400 ring-1 ring-amber-400/40'
                : qty > 0
                ? 'border-emerald-500/70 dark:border-emerald-500/60'
                : 'border-slate-200/80 dark:border-slate-700/80'
            } p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-3"
          >
            <!-- Información del Platillo (Izquierda) -->
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <h3 class="font-semibold text-sm text-slate-900 dark:text-slate-100 leading-snug">
                  ${dish.name[this.state.lang]}
                </h3>
                ${
                  isRecommended
                    ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-zinc-950">
                        ${this.t('rest.recommendedPill')}
                      </span>`
                    : ''
                }
              </div>
              <p class="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 line-clamp-2 mt-0.5">
                ${dish.desc[this.state.lang]}
              </p>
              <span class="inline-block font-display text-sm sm:text-base font-bold text-emerald-700 dark:text-emerald-400 mt-1.5">
                ${this.formatMoney(dish.priceCRC)}
              </span>
            </div>

            <!-- Control Compacto de Cantidad (Derecha: no ocupa espacio innecesario) -->
            <div class="shrink-0">
              ${
                qty === 0
                  ? `
                    <button
                      type="button"
                      onclick="App.updateCartQty('${dish.id}', 1)"
                      class="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-emerald-700 hover:text-white dark:bg-slate-700 dark:hover:bg-emerald-600 dark:text-emerald-300 font-bold text-lg flex items-center justify-center border border-emerald-200 dark:border-slate-600 transition-all active:scale-90"
                      aria-label="Agregar ${dish.name[this.state.lang]}"
                    >
                      +
                    </button>
                  `
                  : `
                    <div class="flex items-center gap-1 bg-emerald-700 text-white rounded-xl p-1 shadow-sm">
                      <button
                        type="button"
                        onclick="App.updateCartQty('${dish.id}', -1)"
                        class="w-7 h-7 rounded-lg hover:bg-white/15 font-bold text-sm flex items-center justify-center active:scale-90"
                        aria-label="Quitar uno"
                      >
                        −
                      </button>
                      <span class="w-5 text-center text-xs font-bold">${qty}</span>
                      <button
                        type="button"
                        onclick="App.updateCartQty('${dish.id}', 1)"
                        class="w-7 h-7 rounded-lg hover:bg-white/15 font-bold text-sm flex items-center justify-center active:scale-90"
                        aria-label="Agregar uno"
                      >
                        +
                      </button>
                    </div>
                  `
              }
            </div>
          </article>
        `;
      })
      .join('');
  },

  /* ========================================================================
   * CARRITO Y CHECKOUT VÍA WHATSAPP
   * ======================================================================== */
  updateCartQty(dishId, delta) {
    const current = this.state.cart[dishId] || 0;
    const next = Math.max(0, current + delta);
    if (next === 0) {
      delete this.state.cart[dishId];
    } else {
      this.state.cart[dishId] = next;
    }
    localStorage.setItem('lafinca_cart', JSON.stringify(this.state.cart));
    this.renderMenuGrid();
    this.renderCart();
  },

  clearCart() {
    this.state.cart = {};
    localStorage.setItem('lafinca_cart', JSON.stringify(this.state.cart));
    this.renderMenuGrid();
    this.renderCart();
  },

  getCartSummary() {
    let totalItems = 0;
    let totalCRC = 0;
    const lines = [];

    Object.entries(this.state.cart).forEach(([dishId, qty]) => {
      const dish = MENU_ITEMS.find((item) => item.id === dishId);
      if (dish && qty > 0) {
        const subtotalCRC = dish.priceCRC * qty;
        totalItems += qty;
        totalCRC += subtotalCRC;
        lines.push({ dish, qty, subtotalCRC });
      }
    });

    return { totalItems, totalCRC, lines };
  },

  renderCart() {
    const { totalItems, totalCRC, lines } = this.getCartSummary();

    const headerBadge = document.getElementById('header-cart-count');
    const floatingBadge = document.getElementById('floating-cart-badge');
    const floatingTotal = document.getElementById('floating-cart-total');
    const drawerTotal = document.getElementById('cart-drawer-total');
    const container = document.getElementById('cart-items-container');

    if (headerBadge) headerBadge.textContent = String(totalItems);
    if (floatingBadge) floatingBadge.textContent = String(totalItems);
    if (floatingTotal) floatingTotal.textContent = this.formatMoney(totalCRC);
    if (drawerTotal) drawerTotal.textContent = this.formatMoney(totalCRC);

    this.updateFloatingCartVisibility();

    if (!container) return;

    if (lines.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 px-4 space-y-2">
          <div class="text-2xl">🍽️</div>
          <h3 class="font-display text-sm font-bold text-slate-800 dark:text-slate-200">
            ${this.t('cart.emptyTitle')}
          </h3>
          <p class="text-xs text-slate-500 dark:text-zinc-400">
            ${this.t('cart.emptyDesc')}
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = lines
      .map(
        ({ dish, qty, subtotalCRC }) => `
          <div class="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700">
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                ${dish.name[this.state.lang]}
              </h4>
              <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                ${this.formatMoney(subtotalCRC)}
              </span>
            </div>
            <div class="flex items-center gap-1">
              <button
                type="button"
                onclick="App.updateCartQty('${dish.id}', -1)"
                class="w-6 h-6 rounded-md bg-white dark:bg-zinc-900 border border-slate-300 dark:border-slate-700 text-xs font-bold"
              >
                −
              </button>
              <span class="w-5 text-center text-xs font-bold">${qty}</span>
              <button
                type="button"
                onclick="App.updateCartQty('${dish.id}', 1)"
                class="w-6 h-6 rounded-md bg-emerald-700 text-white text-xs font-bold"
              >
                +
              </button>
            </div>
          </div>
        `
      )
      .join('');
  },

  updateFloatingCartVisibility() {
    const bar = document.getElementById('floating-cart-bar');
    if (!bar) return;
    const { totalItems } = this.getCartSummary();
    if (totalItems > 0 && this.state.currentView !== 'landing') {
      bar.classList.remove('hidden');
    } else {
      bar.classList.add('hidden');
    }
  },

  toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (!drawer || !backdrop) return;

    if (open) {
      backdrop.classList.remove('hidden');
      drawer.classList.remove('translate-x-full');
    } else {
      backdrop.classList.add('hidden');
      drawer.classList.add('translate-x-full');
    }
  },

  checkoutWhatsApp() {
    const { lines, totalCRC } = this.getCartSummary();
    if (lines.length === 0) return;

    const customerName = (document.getElementById('cart-customer-name')?.value || '').trim();
    const deliveryMode = document.getElementById('cart-delivery-mode')?.value || 'En el Restaurante';
    const notes = (document.getElementById('cart-notes')?.value || '').trim();

    const itemLines = lines
      .map(
        ({ dish, qty, subtotalCRC }) =>
          `• ${qty}x ${dish.name[this.state.lang]} (${this.formatMoney(subtotalCRC)})`
      )
      .join('\n');

    const totalFormatted = this.formatMoney(totalCRC);

    const message =
      this.state.lang === 'es'
        ? `¡Hola Restaurante La Finca! 🍽️ Quisiera realizar el siguiente pedido:\n\n` +
          `${itemLines}\n\n` +
          `💰 *Total (${this.state.currency}):* ${totalFormatted}\n` +
          `📍 *Modalidad:* ${deliveryMode}\n` +
          (customerName ? `👤 *Nombre:* ${customerName}\n` : '') +
          (notes ? `📝 *Notas:* ${notes}\n` : '') +
          `\n¡Muchas gracias!`
        : `Hello Restaurante La Finca! 🍽️ I would like to place the following order:\n\n` +
          `${itemLines}\n\n` +
          `💰 *Total (${this.state.currency}):* ${totalFormatted}\n` +
          `📍 *Order Type:* ${deliveryMode}\n` +
          (customerName ? `👤 *Name:* ${customerName}\n` : '') +
          (notes ? `📝 *Notes:* ${notes}\n` : '') +
          `\nThank you!`;

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  },

  /* ========================================================================
   * PWA & SERVICE WORKER
   * ======================================================================== */
  setupPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
      });
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.state.deferredInstallPrompt = e;
      const btn = document.getElementById('pwa-install-btn');
      if (btn) {
        btn.classList.remove('hidden');
        btn.classList.add('inline-flex');
      }
    });
  },

  async installPWA() {
    if (!this.state.deferredInstallPrompt) return;
    this.state.deferredInstallPrompt.prompt();
    await this.state.deferredInstallPrompt.userChoice;
    this.state.deferredInstallPrompt = null;
    const btn = document.getElementById('pwa-install-btn');
    if (btn) {
      btn.classList.add('hidden');
      btn.classList.remove('inline-flex');
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
