/**
 * ============================================================================
 * LA FINCA · CABAÑA & RESTAURANTE (SPA + PWA)
 * Archivo: app.js (100% Client-Side Vanilla JavaScript)
 * Ubicación: San Isidro de Peñas Blancas, Alajuela, Costa Rica
 * Contacto WhatsApp: +506 8585 7454
 * ============================================================================
 */

/* --------------------------------------------------------------------------
 * 1. CONFIGURACIÓN GLOBAL Y PARÁMETROS DEL NEGOCIO
 * -------------------------------------------------------------------------- */
const CONFIG = {
  whatsappNumber: '50685857454',
  exchangeRateUSD: 515, // 1 USD = 515 CRC
  cabin: {
    baseNightlyRateCRC: 38000, // Tarifa base por noche (1-2 personas) en Colones
    extraGuestFeeCRC: 8000,    // Cargo por persona adicional por noche en Colones
    includedGuests: 2,
    maxGuests: 6,
  },
  carouselIntervalMs: 5000,
};

/* --------------------------------------------------------------------------
 * 2. DICCIONARIO DE INTERNACIONALIZACIÓN (i18n: Español / Inglés)
 * -------------------------------------------------------------------------- */
const I18N = {
  es: {
    nav: {
      subtitle: 'Peñas Blancas, CR',
      cabin: 'Cabaña La Finca',
      restaurant: 'Restaurante La Finca',
      order: 'Pedido',
    },
    landing: {
      badge: 'San Isidro de Peñas Blancas · Costa Rica',
      themeLabel: 'Tema',
      installPwa: 'Instalar App',
      welcomePill: 'Hospitalidad y Sabor Auténtico cerca del Volcán Arenal',
      heroTitle: 'Dos experiencias familiares, un mismo corazón natural',
      heroSubtitle:
        'Elige tu destino para comenzar: descansa rodeado de naturaleza en nuestra acogedora cabaña o disfruta los mejores platillos de nuestro restaurante.',
      cabinTag: 'Hospedaje & Naturaleza',
      cabinLocation: 'San Isidro de Peñas Blancas · A 20 min de La Fortuna',
      cabinTitle: 'Cabaña La Finca',
      cabinDesc:
        'Refugio privado rodeado de jardines tropicales, paz de montaña y acceso rápido al Volcán Arenal. Cotiza tu estadía al instante.',
      cabinCta: 'Visitar Cabaña La Finca',
      restTag: 'Menú Oficial La Finca',
      restOrderBadge: 'Pedidos por WhatsApp',
      restHours: 'Abierto todos los días · 7:00 AM – 9:00 PM',
      restTitle: 'Restaurante La Finca',
      restDesc:
        'Comidas rápidas, ceviches, tilapias, mariscos, arroces, casados y bebidas naturales. Arma tu pedido en el menú digital y ordénalo en un clic.',
      restCta: 'Visitar Restaurante La Finca',
    },
    footer: {
      locationLine: '📍 San Isidro de Peñas Blancas, San Ramón, Alajuela, Costa Rica',
    },
    cabin: {
      locationBadge: 'San Isidro de Peñas Blancas, Costa Rica',
      title: 'Cabaña La Finca',
      subtitle:
        'Tu refugio privado entre bosque tropical y montaña (1 habitación · 2 camas · 1 baño completo · cocina equipada). Ideal para descansar a minutos de La Fortuna y el Volcán Arenal.',
      distFortunaLabel: 'A La Fortuna',
      distVolcanoLabel: 'Al Volcán Arenal',
      amenityWifi: 'Wi-Fi de Alta Velocidad',
      amenityAc: '1 Habitación · 2 Camas',
      amenityKitchen: 'Cocina Completa',
      amenityParking: 'Parqueo Privado',
      amenityTerrace: 'Amplias Zonas Verdes',
      amenityRoomService: 'Restaurante a Pasos',
      paymentTitle: 'Métodos de Pago Aceptados',
      payCash: 'Efectivo (₡/$)',
      payCards: 'Tarjetas',
      ctaBannerTitle: '¿Tienes alguna consulta especial sobre Cabaña La Finca?',
      ctaBannerDesc:
        'Atendemos personalmente cada reserva familiar. Escríbenos por WhatsApp y te responderemos de inmediato.',
    },
    quote: {
      kicker: 'Reserva Directa Sin Comisiones',
      title: 'Cotizador de Estadía',
      baseRateLabel: 'Tarifa base por noche',
      checkinLabel: 'Fecha de Entrada (Check-in)',
      checkoutLabel: 'Fecha de Salida (Check-out)',
      guestsLabel: 'Cantidad de Huéspedes (Máx. 6 personas)',
      extraGuestNote: 'Tarifa base incluye 2 personas',
      totalEstimated: 'Total Estimado',
      whatsappBtn: 'Reservar / Consultar fechas por WhatsApp',
      nightSingular: 'noche',
      nightPlural: 'noches',
      guestSingular: 'Huésped',
      guestPlural: 'Huéspedes',
      extraGuestsLine: 'Huéspedes extra',
      includedText: 'Incluido',
    },
    weather: {
      kicker: 'Pronóstico Estimado en tus Fechas',
      upsellBadge: 'Recomendación del Menú para tu Clima',
      upsellCta: 'Ver menú del restaurante',
      availableAt: 'Disponible en Restaurante La Finca por',
    },
    reviews: {
      kicker: 'Experiencias Verificadas',
      title: 'Lo que dicen nuestros huéspedes en Airbnb y Google Maps',
    },
    rest: {
      badge: 'Menú Oficial · Restaurante La Finca',
      openNow: 'Abierto · 7:00 AM a 9:00 PM',
      title: 'Restaurante La Finca',
      subtitle:
        'Explora nuestro menú completo de Comidas Rápidas, Sopas, Platos Fuertes, Bebidas Calientes y Bebidas Frías. Ajusta las cantidades y envía tu pedido directo por WhatsApp.',
      hoursTitle: 'Horario de Atención',
      hoursValue: 'Lunes a Domingo: 7:00 AM – 9:00 PM',
      serviceModes: 'Salón · Para llevar · Entrega en Cabaña',
      openMapsBtn: 'Abrir Ubicación en Google Maps',
      addBtn: 'Agregar al pedido',
      inCartLabel: 'en tu pedido',
      recommendedPill: '★ Sugerido para tu clima',
    },
    cart: {
      floatingTitle: 'Tu Orden Lista',
      floatingCta: 'Ver carrito y hacer pedido',
      title: 'Tu Pedido',
      subtitle: 'Restaurante La Finca',
      emptyTitle: 'Tu carrito está vacío',
      emptyDesc: 'Explora las categorías del menú y agrega tus platillos o bebidas favoritas.',
      nameLabel: 'Tu Nombre (Opcional)',
      modeLabel: 'Modalidad',
      modeDineIn: 'Comer en el Restaurante',
      modeTakeout: 'Para Llevar (Pick-up)',
      modeCabin: 'Entregar en Cabaña La Finca',
      notesLabel: 'Notas o elección (ej. Pollo/Carne, sabor de batido)',
      totalLabel: 'Total a Pagar',
      clearBtn: 'Vaciar',
      checkoutBtn: 'Hacer pedido por WhatsApp',
    },
    cta: {
      whatsappFloat: 'WhatsApp Directo',
    },
  },

  en: {
    nav: {
      subtitle: 'Peñas Blancas, CR',
      cabin: 'La Finca Cabin',
      restaurant: 'La Finca Restaurant',
      order: 'Order',
    },
    landing: {
      badge: 'San Isidro de Peñas Blancas · Costa Rica',
      themeLabel: 'Theme',
      installPwa: 'Install App',
      welcomePill: 'Authentic Hospitality & Flavor near Arenal Volcano',
      heroTitle: 'Two family experiences, one natural heart',
      heroSubtitle:
        'Choose your destination to begin: unwind surrounded by nature in our cozy cabin or savor our full restaurant menu.',
      cabinTag: 'Stay & Nature',
      cabinLocation: 'San Isidro de Peñas Blancas · 20 min from La Fortuna',
      cabinTitle: 'Cabaña La Finca',
      cabinDesc:
        'Private mountain retreat surrounded by tropical gardens, peaceful nature, and quick access to Arenal Volcano. Quote your stay instantly.',
      cabinCta: 'Visit Cabaña La Finca',
      restTag: 'Official La Finca Menu',
      restOrderBadge: 'WhatsApp Ordering',
      restHours: 'Open daily · 7:00 AM – 9:00 PM',
      restTitle: 'Restaurante La Finca',
      restDesc:
        'Fast food, fresh fish ceviche, whole fried tilapia, seafood, fried rice, traditional casados & natural drinks. Order online in seconds.',
      restCta: 'Visit Restaurante La Finca',
    },
    footer: {
      locationLine: '📍 San Isidro de Peñas Blancas, San Ramón, Alajuela, Costa Rica',
    },
    cabin: {
      locationBadge: 'San Isidro de Peñas Blancas, Costa Rica',
      title: 'Cabaña La Finca',
      subtitle:
        'Your private sanctuary between tropical rainforest and mountains (1 bedroom · 2 beds · 1 full bath · full kitchen). Minutes from La Fortuna and Arenal Volcano.',
      distFortunaLabel: 'To La Fortuna',
      distVolcanoLabel: 'To Arenal Volcano',
      amenityWifi: 'High-Speed Wi-Fi',
      amenityAc: '1 Bedroom · 2 Beds',
      amenityKitchen: 'Full Kitchen',
      amenityParking: 'Private Parking',
      amenityTerrace: 'Spacious Green Areas',
      amenityRoomService: 'Steps from Restaurant',
      paymentTitle: 'Accepted Payment Methods',
      payCash: 'Cash (₡/$)',
      payCards: 'Credit / Debit Cards',
      ctaBannerTitle: 'Have a special question about Cabaña La Finca?',
      ctaBannerDesc:
        'Our family personally handles every reservation. Message us on WhatsApp and we will reply right away.',
    },
    quote: {
      kicker: 'Commission-Free Direct Booking',
      title: 'Interactive Stay Calculator',
      baseRateLabel: 'Base nightly rate',
      checkinLabel: 'Check-in Date',
      checkoutLabel: 'Check-out Date',
      guestsLabel: 'Number of Guests (Max 6 guests)',
      extraGuestNote: 'Base rate includes up to 2 guests',
      totalEstimated: 'Estimated Total',
      whatsappBtn: 'Book / Inquire Dates via WhatsApp',
      nightSingular: 'night',
      nightPlural: 'nights',
      guestSingular: 'Guest',
      guestPlural: 'Guests',
      extraGuestsLine: 'Extra guests',
      includedText: 'Included',
    },
    weather: {
      kicker: 'Simulated Forecast for Your Dates',
      upsellBadge: 'Chef’s Weather Pairing Recommendation',
      upsellCta: 'View restaurant menu',
      availableAt: 'Available at Restaurante La Finca for',
    },
    reviews: {
      kicker: 'Verified Guest Stories',
      title: 'What our guests say on Airbnb & Google Maps',
    },
    rest: {
      badge: 'Official Menu · Restaurante La Finca',
      openNow: 'Open Daily · 7:00 AM to 9:00 PM',
      title: 'Restaurante La Finca',
      subtitle:
        'Explore our complete menu of Fast Food, Soups, Main Dishes, Hot Beverages, and Cold Beverages. Adjust quantities in your cart and send your order via WhatsApp.',
      hoursTitle: 'Opening Hours',
      hoursValue: 'Monday to Sunday: 7:00 AM – 9:00 PM',
      serviceModes: 'Dine-in · Takeout · Cabin Delivery',
      openMapsBtn: 'Open Location in Google Maps',
      addBtn: 'Add to order',
      inCartLabel: 'in your order',
      recommendedPill: '★ Weather Pick',
    },
    cart: {
      floatingTitle: 'Your Order is Ready',
      floatingCta: 'View cart & place order',
      title: 'Your Order',
      subtitle: 'Restaurante La Finca',
      emptyTitle: 'Your cart is empty',
      emptyDesc: 'Browse the menu categories and add your favorite dishes or drinks.',
      nameLabel: 'Your Name (Optional)',
      modeLabel: 'Order Type',
      modeDineIn: 'Dine-in at Restaurant',
      modeTakeout: 'Takeout / Pick-up',
      modeCabin: 'Deliver to Cabaña La Finca',
      notesLabel: 'Notes or choices (e.g. Chicken/Beef, milkshake flavor)',
      totalLabel: 'Total Due',
      clearBtn: 'Clear',
      checkoutBtn: 'Place Order via WhatsApp',
    },
    cta: {
      whatsappFloat: 'Direct WhatsApp',
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
    country: '🇨🇷 San José, Costa Rica',
    rating: 5,
    date: { es: 'Hace 2 semanas', en: '2 weeks ago' },
    text: {
      es: '¡Una joya en Peñas Blancas! La cabaña es impecable, súper fresca y silenciosa. En 20 minutos estábamos en La Fortuna y al regresar cenamos delicioso en el Restaurante La Finca.',
      en: 'A true gem in Peñas Blancas! The cabin is spotless, super fresh, and peaceful. We reached La Fortuna in 20 minutes and came back to an amazing dinner at Restaurante La Finca.',
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
      es: 'Hospitalidad costarricense de primer nivel. Tener el restaurante familiar a pocos pasos hace toda la diferencia: el café caliente y los patacones en la tarde lluviosa fueron inolvidables.',
      en: 'Top-notch Costa Rican hospitality. Having the family restaurant steps away makes all the difference—the hot coffee and patacones on a rainy afternoon were unforgettable.',
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
      es: 'Despertar rodeados de jardines verdes camino al Volcán Arenal fue mágico. La cabaña tiene cocina muy completa y camas súper cómodas.',
      en: 'Waking up surrounded by green gardens on the way to Arenal Volcano was magical. The cabin has a full kitchen and very comfortable beds.',
    },
  },
  {
    id: 'rev-4',
    platform: 'Google Maps',
    author: 'Carlos Vindas',
    country: '🇨🇷 Heredia, Costa Rica',
    rating: 5,
    date: { es: 'Hace 2 meses', en: '2 months ago' },
    text: {
      es: 'Excelente relación calidad-precio. Nos quedamos 3 noches en familia; la Tilapia Entera Frita, el Chifrijo y el Ceviche del restaurante son 10/10. Volveremos sin duda.',
      en: 'Unbeatable value. We stayed 3 nights with our family; the Whole Fried Tilapia, Chifrijo, and Fish Ceviche at the restaurant are 10/10. We will definitely return.',
    },
  },
];

/* --------------------------------------------------------------------------
 * 5. PERFILES SIMULADOS DE CLIMA + UPSELLING DINÁMICO CON PLATILLOS DEL MENÚ
 * -------------------------------------------------------------------------- */
const WEATHER_PROFILES = [
  {
    id: 'rainy-afternoon',
    tempC: 22,
    recommendedDishId: 'sopa-mariscos',
    recommendedCategory: 'soups',
    title: {
      es: 'Tarde Lluviosa de Montaña',
      en: 'Cozy Mountain Rain Shower',
    },
    desc: {
      es: 'Lluvia suave tropical típica de Peñas Blancas con brisa fresca en el bosque.',
      en: 'Gentle tropical rain typical of Peñas Blancas with refreshing forest mist.',
    },
    upsell: {
      es: '🍲 Tarde lluviosa: ideal para un Café con Leche (₡800), Agua Dulce con Leche o una reconfortante Sopa de Mariscos calientita.',
      en: '🍲 Rainy afternoon: ideal for a hot Coffee with Milk, Sugar Cane Tea with Milk, or a steaming Seafood Soup.',
    },
    svgIcon: `
      <svg class="w-14 h-14 text-sky-300" viewBox="0 0 64 64" fill="none">
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
    title: {
      es: 'Día Soleado Tropical',
      en: 'Sunny Tropical Day',
    },
    desc: {
      es: 'Cielo despejado y excelente visibilidad hacia el Volcán Arenal y La Fortuna.',
      en: 'Clear blue skies and crisp visibility toward Arenal Volcano and La Fortuna.',
    },
    upsell: {
      es: '🍋 Día soleado: refréscate con nuestro Ceviche de Pescado recién preparado y un Batido en Leche o Refresco Natural bien frío.',
      en: '🍋 Sunny day: cool down with our fresh Fish Ceviche and an ice-cold Natural Fruit Juice or Milkshake.',
    },
    svgIcon: `
      <svg class="w-14 h-14 text-amber-300 animate-sun-spin" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="13" fill="currentColor"/>
        <g stroke="currentColor" stroke-width="3.5" stroke-linecap="round">
          <line x1="32" y1="7" x2="32" y2="13"/>
          <line x1="32" y1="51" x2="32" y2="57"/>
          <line x1="7" y1="32" x2="13" y2="32"/>
          <line x1="51" y1="32" x2="57" y2="32"/>
          <line x1="14.3" y1="14.3" x2="18.5" y2="18.5"/>
          <line x1="45.5" y1="45.5" x2="49.7" y2="49.7"/>
          <line x1="49.7" y1="14.3" x2="45.5" y2="18.5"/>
          <line x1="18.5" y1="45.5" x2="14.3" y2="49.7"/>
        </g>
      </svg>
    `,
  },
  {
    id: 'warm-breeze',
    tempC: 26,
    recommendedDishId: 'tilapia-entera-frita',
    recommendedCategory: 'mains',
    title: {
      es: 'Clima Templado con Brisa del Bosque',
      en: 'Mild Mountain Breeze',
    },
    desc: {
      es: 'Temperatura perfecta para recorrer senderos y disfrutar al aire libre.',
      en: 'Ideal temperature for exploring nature trails and dining al fresco.',
    },
    upsell: {
      es: '🐟 Clima ideal: disfruta nuestra especialidad de Tilapia Entera Frita con patacones/papas y ceviche de banano o un Casado Tradicional.',
      en: '🐟 Ideal weather: enjoy our specialty Whole Fried Tilapia with banana ceviche or a traditional Costa Rican Casado.',
    },
    svgIcon: `
      <svg class="w-14 h-14 text-emerald-300 animate-float-slow" viewBox="0 0 64 64" fill="none">
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
  { id: 'all', label: { es: 'Todo el Menú', en: 'Full Menu' }, icon: '✨' },
  { id: 'fast_food', label: { es: 'Comidas Rápidas', en: 'Fast Food' }, icon: '🍔' },
  { id: 'soups', label: { es: 'Sopas', en: 'Soups' }, icon: '🍲' },
  { id: 'mains', label: { es: 'Platos Fuertes', en: 'Main Dishes' }, icon: '🍛' },
  { id: 'hot_drinks', label: { es: 'Bebidas Calientes', en: 'Hot Beverages' }, icon: '☕' },
  { id: 'cold_drinks', label: { es: 'Bebidas Frías', en: 'Cold Beverages' }, icon: '🥤' },
];

const MENU_ITEMS = [
  // ================= COMIDAS RÁPIDAS / FAST FOOD =================
  {
    id: 'nachos-mixtos',
    category: 'fast_food',
    priceCRC: 4500,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Nachos Mixtos', en: 'Mixed Nachos' },
    desc: { es: 'Nachos crujientes mixtos (pollo y carne) preparados al momento.', en: 'Crispy mixed nachos (chicken and beef) prepared to order.' },
  },
  {
    id: 'nachos-pollo-carne',
    category: 'fast_food',
    priceCRC: 4000,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Nachos de Pollo o Carne', en: 'Chicken or Beef Nachos' },
    desc: { es: 'Elige entre pollo o carne en las notas de tu pedido.', en: 'Choose between chicken or beef in your order notes.' },
  },
  {
    id: 'papanachos-pollo-carne',
    category: 'fast_food',
    priceCRC: 5000,
    badge: { es: 'Especialidad', en: 'Specialty' },
    name: { es: 'Papanachos de Pollo o Carne', en: 'Chicken or Beef Papanachos' },
    desc: { es: 'Base de papas con aderezos y pollo o carne a elección.', en: 'Crispy potato base topped with chicken or beef.' },
  },
  {
    id: 'papanachos-mixtos',
    category: 'fast_food',
    priceCRC: 5500,
    badge: { es: 'Para Compartir', en: 'Shareable' },
    name: { es: 'Papanachos Mixtos', en: 'Mixed Papanachos' },
    desc: { es: 'Papanachos combinados con pollo y carne.', en: 'Mixed papanachos with both chicken and beef.' },
  },
  {
    id: 'ceviche-pescado',
    category: 'fast_food',
    priceCRC: 3500,
    badge: { es: 'Fresco', en: 'Fresh' },
    name: { es: 'Ceviche de Pescado', en: 'Fish Ceviche' },
    desc: { es: 'Porción regular de ceviche de pescado fresco.', en: 'Regular size fresh fish ceviche.' },
  },
  {
    id: 'ceviche-pescado-pequeno',
    category: 'fast_food',
    priceCRC: 2500,
    badge: { es: 'Tamaño Pequeño', en: 'Small Size' },
    name: { es: 'Ceviche de Pescado Pequeño', en: 'Fish Ceviche (Small size)' },
    desc: { es: 'Porción pequeña de ceviche de pescado fresco.', en: 'Small size fresh fish ceviche.' },
  },
  {
    id: 'chifrijo',
    category: 'fast_food',
    priceCRC: 4000,
    badge: { es: 'Favorito Tico', en: 'Local Favorite' },
    name: { es: 'Chifrijo', en: 'Chifrijo Bowl' },
    desc: { es: 'Arroz, frijoles, chicharrón, pico de gallo y tortillas tostadas.', en: 'Rice, beans, pork rinds, pico de gallo, and toasted tortillas.' },
  },
  {
    id: 'orden-papas-fritas',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Acompañamiento', en: 'Side Order' },
    name: { es: 'Orden de Papas Fritas', en: 'French Fries' },
    desc: { es: 'Porción de papas fritas doradas y crujientes.', en: 'Crispy golden French fries.' },
  },
  {
    id: 'orden-patacones',
    category: 'fast_food',
    priceCRC: 3000,
    badge: { es: 'Tradicional', en: 'Traditional' },
    name: { es: 'Orden de Patacones', en: 'Order of Patacones' },
    desc: { es: 'Acompañado de frijoles molidos y pico de gallo.', en: 'Fried green plantains with refried beans and pico de gallo.' },
  },
  {
    id: 'orden-yuca-frita',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Acompañamiento', en: 'Side Order' },
    name: { es: 'Orden de Yuca Frita', en: 'Fried Yucca' },
    desc: { es: 'Porción de yuca frita crujiente por fuera y suave por dentro.', en: 'Crispy fried cassava root.' },
  },
  {
    id: 'chicharrones',
    category: 'fast_food',
    priceCRC: 4000,
    badge: { es: 'De la Casa', en: 'House Pick' },
    name: { es: 'Chicharrones', en: 'Pork Rinds (Chicharrones)' },
    desc: { es: 'Acompañados de yuca frita y pico de gallo.', en: 'Pork rinds served with fried yucca and pico de gallo.' },
  },
  {
    id: 'emparedados',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Comidas Rápidas', en: 'Sandwich' },
    name: { es: 'Emparedados (Pollo, Carne o Jamón y Queso)', en: 'Sandwich (Chicken, Beef or Ham & Cheese)' },
    desc: { es: 'Indica en notas si lo prefieres de pollo, carne o jamón y queso.', en: 'Specify chicken, beef, or ham & cheese in your order notes.' },
  },
  {
    id: 'hamburguesa-sencilla',
    category: 'fast_food',
    priceCRC: 2500,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Hamburguesa Sencilla', en: 'Simple Hamburger' },
    desc: { es: 'Hamburguesa tradicional preparada al momento.', en: 'Classic freshly made hamburger.' },
  },
  {
    id: 'hamburguesa-con-papas',
    category: 'fast_food',
    priceCRC: 3000,
    badge: { es: 'Combo', en: 'Combo' },
    name: { es: 'Hamburguesa con Papas', en: 'Hamburger with French Fries' },
    desc: { es: 'Hamburguesa acompañada de orden de papas fritas.', en: 'Hamburger served with French fries.' },
  },
  {
    id: 'taco-sencillo',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Taco Sencillo', en: 'Simple Taco' },
    desc: { es: 'Taco tico crujiente con repollo y aderezos.', en: 'Crispy Costa Rican style taco.' },
  },
  {
    id: 'taco-con-papas',
    category: 'fast_food',
    priceCRC: 2500,
    badge: { es: 'Combo', en: 'Combo' },
    name: { es: 'Taco con Papas', en: 'Taco with French Fries' },
    desc: { es: 'Taco crujiente acompañado de papas fritas.', en: 'Crispy taco served with French fries.' },
  },
  {
    id: 'torta-de-carne',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Torta de Carne', en: 'Beef Patty' },
    desc: { es: 'Torta de carne sazonada al estilo casero.', en: 'Homestyle seasoned beef patty.' },
  },
  {
    id: 'salchipapas',
    category: 'fast_food',
    priceCRC: 2500,
    badge: { es: 'Comidas Rápidas', en: 'Fast Food' },
    name: { es: 'Salchipapas', en: 'Sausage and Fries' },
    desc: { es: 'Papas fritas con salchicha y salsas.', en: 'French fries with sliced sausage and sauces.' },
  },
  {
    id: 'gallo-salchichon',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Gallo Tico', en: 'Tortilla Gallo' },
    name: { es: 'Gallo de Salchichón', en: 'Sausage with Tortilla' },
    desc: { es: 'Salchichón asado en tortilla casera.', en: 'Seasoned Costa Rican sausage on a warm tortilla.' },
  },
  {
    id: 'gallo-queso',
    category: 'fast_food',
    priceCRC: 1500,
    badge: { es: 'Gallo Tico', en: 'Tortilla Gallo' },
    name: { es: 'Gallo de Queso', en: 'Cheese with Tortilla' },
    desc: { es: 'Queso a la plancha en tortilla.', en: 'Grilled local cheese on a warm tortilla.' },
  },
  {
    id: 'gallo-pescado',
    category: 'fast_food',
    priceCRC: 2500,
    badge: { es: 'Gallo Tico', en: 'Tortilla Gallo' },
    name: { es: 'Gallo de Pescado', en: 'Fish with Tortilla' },
    desc: { es: 'Filet de pescado en tortilla.', en: 'Seasoned fish fillet served on tortilla.' },
  },
  {
    id: 'prensadas',
    category: 'fast_food',
    priceCRC: 1000,
    badge: { es: 'Tradicional', en: 'Traditional' },
    name: { es: 'Prensadas', en: 'Cheese Crisp Tortilla (Prensada)' },
    desc: { es: 'Tortilla prensada con queso derretido.', en: 'Pressed grilled tortilla with melted cheese.' },
  },
  {
    id: 'platano-con-natilla',
    category: 'fast_food',
    priceCRC: 2000,
    badge: { es: 'Dulce Tico', en: 'Sweet Side' },
    name: { es: 'Plátano con Natilla', en: 'Sweet Plantains with Sour Cream' },
    desc: { es: 'Plátano maduro dorado acompañado de natilla.', en: 'Fried sweet plantains served with Costa Rican sour cream.' },
  },

  // ================= SOPAS / SOUPS =================
  {
    id: 'sopa-ranchera',
    category: 'soups',
    priceCRC: 3500,
    badge: { es: 'Sopa Caliente', en: 'Hot Soup' },
    name: { es: 'Sopa Ranchera', en: 'Ranchero Soup' },
    desc: { es: 'Sopa ranchera tradicional preparada al momento.', en: 'Hearty traditional Ranchero soup.' },
  },
  {
    id: 'sopa-mariscos',
    category: 'soups',
    priceCRC: 5000,
    badge: { es: 'Especialidad', en: 'Specialty Soup' },
    name: { es: 'Sopa de Mariscos', en: 'Seafood Soup' },
    desc: { es: 'Sopa reconfortante con mezcla de mariscos frescos.', en: 'Rich and comforting fresh seafood soup.' },
  },

  // ================= PLATOS FUERTES / MAIN DISHES =================
  {
    id: 'tilapia-entera-frita',
    category: 'mains',
    priceCRC: 7500,
    badge: { es: 'Especialidad La Finca', en: 'House Specialty' },
    name: { es: 'Tilapia Entera Frita', en: 'Fried Whole Tilapia' },
    desc: {
      es: 'Papas fritas y ensalada o yuca frita y ceviche de banano.',
      en: 'Served with French fries and salad, or fried yucca with banana ceviche.',
    },
  },
  {
    id: 'filet-tilapia-plancha',
    category: 'mains',
    priceCRC: 4800,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Filet de Tilapia a la Plancha', en: 'Grilled Tilapia Fillet' },
    desc: {
      es: 'Acompañado de vegetales y arroz blanco.',
      en: 'Grilled tilapia accompanied with vegetables and white rice.',
    },
  },
  {
    id: 'filet-tilapia-empanizado',
    category: 'mains',
    priceCRC: 4800,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Filet de Tilapia Empanizado', en: 'Breaded Tilapia Fillet' },
    desc: {
      es: 'Acompañado de vegetales y arroz blanco.',
      en: 'Breaded tilapia accompanied with vegetables and white rice.',
    },
  },
  {
    id: 'filet-pollo-plancha',
    category: 'mains',
    priceCRC: 4500,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Filet de Pollo a la Plancha', en: 'Grilled Chicken Fillet' },
    desc: {
      es: 'Acompañado de vegetales y arroz blanco.',
      en: 'Grilled chicken accompanied with vegetables and white rice.',
    },
  },
  {
    id: 'filet-pollo-empanizado',
    category: 'mains',
    priceCRC: 4500,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Filet de Pollo Empanizado', en: 'Breaded Chicken Fillet' },
    desc: {
      es: 'Acompañado de vegetales y arroz blanco.',
      en: 'Breaded chicken with vegetables and white rice.',
    },
  },
  {
    id: 'camarones-al-ajillo',
    category: 'mains',
    priceCRC: 4500,
    badge: { es: 'Mariscos', en: 'Seafood' },
    name: { es: 'Camarones al Ajillo, Ensalada y Arroz', en: 'Garlic Shrimp with Rice and Salad' },
    desc: {
      es: 'Camarones salteados al ajillo acompañados de ensalada y arroz.',
      en: 'Shrimp in garlic sauce served with rice and salad.',
    },
  },
  {
    id: 'camarones-empanizados',
    category: 'mains',
    priceCRC: 4500,
    badge: { es: 'Mariscos', en: 'Seafood' },
    name: { es: 'Camarones Empanizados, Ensalada y Arroz', en: 'Breaded Shrimp with White Rice and Salad' },
    desc: {
      es: 'Camarones empanizados crujientes con arroz blanco y ensalada.',
      en: 'Crispy breaded shrimp served with white rice and salad.',
    },
  },
  {
    id: 'gordon-blue-pollo',
    category: 'mains',
    priceCRC: 5000,
    badge: { es: 'Especialidad', en: 'Specialty' },
    name: { es: 'Gordon Blue de Pollo', en: 'Chicken Cordon Bleu' },
    desc: {
      es: 'En salsa blanca acompañado de puré y vegetales.',
      en: 'In white sauce accompanied with mashed potatoes and vegetables.',
    },
  },
  {
    id: 'fajitas-pollo',
    category: 'mains',
    priceCRC: 4000,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Fajitas de Pollo', en: 'Chicken Fajitas' },
    desc: {
      es: 'Acompañadas de papas fritas y ceviche de banano.',
      en: 'Chicken fajitas served with French fries and banana ceviche.',
    },
  },
  {
    id: 'fajitas-pescado',
    category: 'mains',
    priceCRC: 4800,
    badge: { es: 'Platos Fuertes', en: 'Main Dish' },
    name: { es: 'Fajitas de Pescado', en: 'Fish Fajitas' },
    desc: {
      es: 'Acompañadas de papas fritas y ceviche de banano.',
      en: 'Fish fajitas served with French fries and banana ceviche.',
    },
  },
  {
    id: 'arroz-con-camarones',
    category: 'mains',
    priceCRC: 5000,
    badge: { es: 'Arroces', en: 'Rice Dishes' },
    name: { es: 'Arroz con Camarones', en: 'Shrimp Fried Rice' },
    desc: {
      es: 'Acompañado de papas fritas y ensalada.',
      en: 'Shrimp fried rice served with French fries and salad.',
    },
  },
  {
    id: 'camarones-con-arroz',
    category: 'mains',
    priceCRC: 6500,
    badge: { es: 'Mariscos', en: 'Seafood' },
    name: { es: 'Camarones con Arroz', en: 'Premium Shrimp with Rice' },
    desc: {
      es: 'Acompañado de papas fritas y ensalada.',
      en: 'Generous shrimp portion with rice, French fries, and salad.',
    },
  },
  {
    id: 'arroz-con-mariscos',
    category: 'mains',
    priceCRC: 5000,
    badge: { es: 'Arroces', en: 'Rice Dishes' },
    name: { es: 'Arroz con Mariscos', en: 'Seafood Fried Rice' },
    desc: {
      es: 'Acompañado de papas fritas y ensalada.',
      en: 'Seafood fried rice served with French fries and salad.',
    },
  },
  {
    id: 'arroz-cantones',
    category: 'mains',
    priceCRC: 5000,
    badge: { es: 'Arroces', en: 'Rice Dishes' },
    name: { es: 'Arroz Cantonés', en: 'Cantonese Fried Rice' },
    desc: {
      es: 'Acompañado de papas fritas y ensalada.',
      en: 'Cantonese fried rice served with French fries and salad.',
    },
  },
  {
    id: 'arroz-con-pollo',
    category: 'mains',
    priceCRC: 4000,
    badge: { es: 'Tradicional', en: 'Traditional' },
    name: { es: 'Arroz con Pollo', en: 'Chicken Fried Rice' },
    desc: {
      es: 'Con papas fritas y ensalada.',
      en: 'Traditional Costa Rican rice with chicken, French fries, and salad.',
    },
  },
  {
    id: 'arroz-con-cerdo',
    category: 'mains',
    priceCRC: 4000,
    badge: { es: 'Arroces', en: 'Rice Dishes' },
    name: { es: 'Arroz con Cerdo', en: 'Pork Fried Rice' },
    desc: {
      es: 'Acompañado de papas fritas y ensalada.',
      en: 'Pork fried rice served with French fries and salad.',
    },
  },
  {
    id: 'arroz-con-carne-salsa',
    category: 'mains',
    priceCRC: 3500,
    badge: { es: 'Casero', en: 'Homestyle' },
    name: { es: 'Arroz con Carne en Salsa', en: 'Rice with Stewed Beef' },
    desc: {
      es: 'Acompañado de ensalada verde.',
      en: 'Rice topped with tender stewed beef and green house salad.',
    },
  },
  {
    id: 'casados',
    category: 'mains',
    priceCRC: 4000,
    badge: { es: 'Clásico Tico', en: 'Costa Rican Classic' },
    name: { es: 'Casados (Pollo, Bistec, Carne en Salsa, Pescado o Chuleta)', en: 'Traditional Casado (Chicken, Steak, Stewed Beef, Fish or Pork Chop)' },
    desc: {
      es: 'Arroz, frijoles, ensalada, acompañamientos y proteína a elegir.',
      en: 'Complete traditional platter with your choice of protein.',
    },
  },
  {
    id: 'casados-vegetarianos',
    category: 'mains',
    priceCRC: 4000,
    badge: { es: 'Vegetariano', en: 'Vegetarian' },
    name: { es: 'Casados Vegetarianos', en: 'Vegetarian Casado' },
    desc: {
      es: 'Arroz, frijoles, vegetales salteados, plátano y ensalada fresca.',
      en: 'Rice, beans, sautéed vegetables, sweet plantain, and fresh salad.',
    },
  },

  // ================= BEBIDAS CALIENTES / HOT BEVERAGES =================
  {
    id: 'cafe-negro',
    category: 'hot_drinks',
    priceCRC: 800,
    badge: { es: 'Bebida Caliente', en: 'Hot Beverage' },
    name: { es: 'Café Negro', en: 'Black Coffee' },
    desc: { es: 'Café costarricense recién hecho.', en: 'Freshly brewed Costa Rican black coffee.' },
  },
  {
    id: 'cafe-con-leche',
    category: 'hot_drinks',
    priceCRC: 800,
    badge: { es: 'Bebida Caliente', en: 'Hot Beverage' },
    name: { es: 'Café con Leche', en: 'Coffee with Milk' },
    desc: { es: 'Café recién chorreado con leche caliente.', en: 'Fresh coffee with hot milk.' },
  },
  {
    id: 'chocolate-caliente',
    category: 'hot_drinks',
    priceCRC: 1200,
    badge: { es: 'Bebida Caliente', en: 'Hot Beverage' },
    name: { es: 'Chocolate Caliente', en: 'Hot Chocolate' },
    desc: { es: 'Chocolate caliente cremoso.', en: 'Creamy hot chocolate.' },
  },
  {
    id: 'agua-dulce',
    category: 'hot_drinks',
    priceCRC: 800,
    badge: { es: 'Tradicional', en: 'Traditional' },
    name: { es: 'Agua Dulce', en: 'Sugar Cane Tea (Agua Dulce)' },
    desc: { es: 'Bebida caliente tradicional de tapa de dulce.', en: 'Traditional hot Costa Rican raw cane sugar drink.' },
  },
  {
    id: 'agua-dulce-con-leche',
    category: 'hot_drinks',
    priceCRC: 1200,
    badge: { es: 'Tradicional', en: 'Traditional' },
    name: { es: 'Agua Dulce con Leche', en: 'Sugar Cane Tea with Milk' },
    desc: { es: 'Agua dulce de tapa preparada con leche caliente.', en: 'Hot cane sugar drink with milk.' },
  },
  {
    id: 'te-en-agua',
    category: 'hot_drinks',
    priceCRC: 800,
    badge: { es: 'Bebida Caliente', en: 'Hot Beverage' },
    name: { es: 'Té en Agua', en: 'Hot Tea' },
    desc: { es: 'Infusión de té caliente en agua.', en: 'Hot herbal or black tea.' },
  },

  // ================= BEBIDAS FRÍAS / COLD BEVERAGES =================
  {
    id: 'refrescos-naturales',
    category: 'cold_drinks',
    priceCRC: 1000,
    badge: { es: '100% Natural', en: '100% Natural' },
    name: { es: 'Refrescos Naturales', en: 'Natural Fruit Juice' },
    desc: { es: 'Refresco natural de frutas frescas del día en agua.', en: 'Freshly blended natural fruit juice.' },
  },
  {
    id: 'batidos-en-leche',
    category: 'cold_drinks',
    priceCRC: 2000,
    badge: { es: 'Cremoso', en: 'Milkshake' },
    name: { es: 'Batidos en Leche (Fresa, Cocomani, Crema, Papaya o Mora)', en: 'Milkshakes (Strawberry, Coconut-Peanut, Vanilla Cream, Papaya or Blackberry)' },
    desc: { es: 'Elige tu sabor favorito: Fresa, Cocomani, Crema, Papaya o Mora.', en: 'Flavors: Strawberry, Cocomani, Cream, Papaya, or Blackberry.' },
  },
  {
    id: 'gaseosa-desechable',
    category: 'cold_drinks',
    priceCRC: 1400,
    badge: { es: 'Bebida Fría', en: 'Cold Drink' },
    name: { es: 'Gaseosa Desechable', en: 'Soft Drink (Plastic Bottle)' },
    desc: { es: 'Refresco gaseoso en botella plástica.', en: 'Chilled soft drink in plastic bottle.' },
  },
  {
    id: 'gaseosa-vidrio',
    category: 'cold_drinks',
    priceCRC: 1200,
    badge: { es: 'Bebida Fría', en: 'Cold Drink' },
    name: { es: 'Gaseosas de Vidrio', en: 'Soft Drink (Glass Bottle)' },
    desc: { es: 'Refresco gaseoso bien frío en botella de vidrio.', en: 'Ice-cold soft drink in glass bottle.' },
  },
  {
    id: 'tropicales-vidrio',
    category: 'cold_drinks',
    priceCRC: 1200,
    badge: { es: 'Bebida Fría', en: 'Cold Drink' },
    name: { es: 'Tropicales (Vidrio)', en: 'Bottled Tropical Tea/Juice (Glass)' },
    desc: { es: 'Fresco o té Tropical en botella de vidrio.', en: 'Bottled Tropical juice or iced tea (glass).' },
  },
  {
    id: 'tropicales-desechables',
    category: 'cold_drinks',
    priceCRC: 1400,
    badge: { es: 'Bebida Fría', en: 'Cold Drink' },
    name: { es: 'Tropicales Desechables', en: 'Bottled Tropical Tea/Juice (Plastic)' },
    desc: { es: 'Fresco o té Tropical en envase desechable.', en: 'Bottled Tropical juice or iced tea (plastic bottle).' },
  },
  {
    id: 'cerveza',
    category: 'cold_drinks',
    priceCRC: 2000,
    badge: { es: 'Cerveza Fría', en: 'Cold Beer' },
    name: { es: 'Cerveza (Imperial, Pilsen, Rock Ice Limón)', en: 'Cold Beer (Imperial, Pilsen, Rock Ice)' },
    desc: { es: 'Consulta tu marca preferida en las notas del pedido.', en: 'Mention your preferred brand in the order notes.' },
  },
];

/* --------------------------------------------------------------------------
 * 7. CONTROLADOR PRINCIPAL DE LA APLICACIÓN (App)
 * -------------------------------------------------------------------------- */
const App = {
  state: {
    currentView: 'landing', // 'landing' | 'cabin' | 'restaurant'
    lang: localStorage.getItem('lafinca_lang') || 'es',
    currency: localStorage.getItem('lafinca_currency') || 'CRC', // 'CRC' | 'USD'
    theme: localStorage.getItem('lafinca_theme') || 'light',    // 'light' | 'dark'
    activeCategory: 'all',
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
    cart: JSON.parse(localStorage.getItem('lafinca_cart') || '{}'), // { [dishId]: quantity }
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
   * NAVEGACIÓN SPA (Landing / Cabaña / Restaurante)
   * ======================================================================== */
  navigateTo(viewName, updateHash = true) {
    this.state.currentView = viewName;
    if (updateHash) {
      window.history.pushState(null, '', `#${viewName}`);
    }

    const views = ['landing', 'cabin', 'restaurant'];
    views.forEach((v) => {
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

    const navbar = document.getElementById('global-navbar');
    if (navbar) {
      if (viewName === 'landing') {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
    }

    this.updateActiveNavButtons();
    this.updateFloatingCartVisibility();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updateActiveNavButtons() {
    const activeClasses = ['bg-emerald-700', 'text-white', 'shadow-sm'];
    const inactiveClasses = ['text-slate-600', 'dark:text-zinc-300', 'hover:bg-slate-200/60', 'dark:hover:bg-slate-700/60'];

    const pairs = [
      { id: 'nav-btn-cabin', view: 'cabin' },
      { id: 'nav-btn-restaurant', view: 'restaurant' },
      { id: 'mobile-nav-cabin', view: 'cabin' },
      { id: 'mobile-nav-restaurant', view: 'restaurant' },
    ];

    pairs.forEach(({ id, view }) => {
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
   * TEMA CLARO / OSCURO (Paleta slate & zinc de bajo contraste)
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
      if (metaTheme) metaTheme.setAttribute('content', '#065f46');
    }
  },

  /* ========================================================================
   * INTERNACIONALIZACIÓN (i18n: ES / EN)
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

  /* ========================================================================
   * CONVERSOR DE MONEDA (CRC ₡ / USD $)
   * ======================================================================== */
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
      return `$${usdValue.toFixed(2)} USD`;
    }
    const formattedCRC = Math.round(amountCRC).toLocaleString('es-CR');
    return `₡${formattedCRC}`;
  },

  /* ========================================================================
   * RENDERIZADO REACTIVO INTEGRAL
   * ======================================================================== */
  renderAll() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    document.querySelectorAll('.lang-indicator').forEach((el) => {
      el.textContent = this.state.lang.toUpperCase();
    });
    document.querySelectorAll('.currency-symbol-indicator').forEach((el) => {
      el.textContent = this.state.currency === 'CRC' ? '₡' : '$';
    });
    document.querySelectorAll('.currency-code-indicator').forEach((el) => {
      el.textContent = this.state.currency;
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const isSelected = btn.getAttribute('data-lang-btn') === this.state.lang;
      btn.className = isSelected
        ? 'px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 text-white shadow-sm transition-all'
        : 'px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all';
    });

    document.querySelectorAll('[data-curr-btn]').forEach((btn) => {
      const isSelected = btn.getAttribute('data-curr-btn') === this.state.currency;
      btn.className = isSelected
        ? 'px-2.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 text-white shadow-sm transition-all'
        : 'px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-all';
    });

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
          class="absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === this.state.carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }"
        >
          <!-- Fondo ambiental difuminado para fotos verticales (PORTRAIT) de Airbnb -->
          <img
            src="${slide.imageUrl}"
            alt=""
            aria-hidden="true"
            class="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
            loading="${index === 0 ? 'eager' : 'lazy'}"
          />
          <!-- Foto principal oficial de Airbnb -->
          <img
            src="${slide.imageUrl}"
            alt="${slide.caption[this.state.lang]}"
            class="relative z-10 w-full h-full ${
              slide.orientation === 'PORTRAIT' ? 'object-contain' : 'object-cover'
            } object-center"
            loading="${index === 0 ? 'eager' : 'lazy'}"
          />
          <div class="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/85 via-zinc-950/15 to-transparent pointer-events-none"></div>
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 right-6 z-20 text-white pointer-events-none">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600/90 backdrop-blur-sm mb-2" data-slide-tag="${index}">
              ${slide.tag[this.state.lang]}
            </span>
            <p class="font-display text-base sm:text-xl font-semibold text-slate-100 drop-shadow" data-slide-caption="${index}">
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
          aria-label="Ir a foto ${index + 1}"
          class="relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${
            index === this.state.carouselIndex
              ? 'border-emerald-500 ring-2 ring-emerald-500/40 opacity-100 scale-105'
              : 'border-transparent opacity-60 hover:opacity-95'
          }"
        >
          <img
            src="${slide.imageUrl}"
            alt="Miniatura ${index + 1}"
            class="w-full h-full object-cover"
            loading="lazy"
          />
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
      if (i === this.state.carouselIndex) {
        el.classList.remove('opacity-0', 'z-0', 'pointer-events-none');
        el.classList.add('opacity-100', 'z-10');
      } else {
        el.classList.remove('opacity-100', 'z-10');
        el.classList.add('opacity-0', 'z-0', 'pointer-events-none');
      }
    });

    document.querySelectorAll('[data-carousel-dot]').forEach((dot) => {
      const i = Number(dot.getAttribute('data-carousel-dot'));
      const isActive = i === this.state.carouselIndex;
      dot.className = `relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${
        isActive
          ? 'border-emerald-500 ring-2 ring-emerald-500/40 opacity-100 scale-105'
          : 'border-transparent opacity-60 hover:opacity-95'
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
   * COTIZADOR INTERACTIVO DE CABAÑA + CLIMA SIMULADO Y UPSELLING
   * ======================================================================== */
  changeGuestCount(delta) {
    const next = Math.min(
      CONFIG.cabin.maxGuests,
      Math.max(1, this.state.quote.guests + delta)
    );
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
      upsellPriceEl.textContent = `${this.t('weather.availableAt')} ${this.formatMoney(
        linkedDish.priceCRC
      )}`;
    }

    if (dateRangeEl && !isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
      const locale = this.state.lang === 'es' ? 'es-CR' : 'en-US';
      const fmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
      dateRangeEl.textContent = `${fmt.format(startDate)} – ${fmt.format(endDate)} · Peñas Blancas`;
    }
  },

  goToRecommendedMenu() {
    const profile = this.state.quote.weatherProfile;
    if (profile) {
      this.state.activeCategory = profile.recommendedCategory || 'all';
      this.state.highlightedDishId = profile.recommendedDishId || null;
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
      }, 350);
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
   * SECCIÓN DE RESEÑAS (Airbnb & Google Maps Slider)
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
        <article class="snap-start shrink-0 w-[85%] sm:w-[360px] bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="px-3 py-1 rounded-full text-xs font-bold border ${badgeClass}">
                ${rev.platform}
              </span>
              <div class="flex items-center text-amber-400 text-sm" aria-label="5 estrellas">
                ★★★★★
              </div>
            </div>
            <p class="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
              “${rev.text[this.state.lang]}”
            </p>
          </div>
          <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/70 pt-4">
            <div>
              <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">${rev.author}</h4>
              <span class="text-xs text-slate-500 dark:text-zinc-400">${rev.country}</span>
            </div>
            <span class="text-[11px] text-slate-400 dark:text-zinc-400">${rev.date[this.state.lang]}</span>
          </div>
        </article>
      `;
    }).join('');
  },

  scrollReviews(direction) {
    const container = document.getElementById('reviews-slider');
    if (!container) return;
    container.scrollBy({ left: direction * 360, behavior: 'smooth' });
  },

  /* ========================================================================
   * RESTAURANTE LA FINCA: MENÚ DIGITAL OFICIAL Y CARRITO DE PEDIDOS
   * ======================================================================== */
  setCategory(categoryId) {
    this.state.activeCategory = categoryId;
    this.renderMenuCategories();
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
          class="shrink-0 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
            active
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
          }"
        >
          <span>${cat.icon}</span>
          <span>${cat.label[this.state.lang]}</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] ${
            active ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400'
          }">${count}</span>
        </button>
      `;
    }).join('');
  },

  renderMenuGrid() {
    const grid = document.getElementById('restaurant-menu-grid');
    if (!grid) return;

    const filtered =
      this.state.activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === this.state.activeCategory);

    const categoryIcons = {
      fast_food: '🍔',
      soups: '🍲',
      mains: '🍛',
      hot_drinks: '☕',
      cold_drinks: '🥤',
    };

    grid.innerHTML = filtered
      .map((dish) => {
        const qty = this.state.cart[dish.id] || 0;
        const isRecommended =
          this.state.quote.weatherProfile &&
          this.state.quote.weatherProfile.recommendedDishId === dish.id;
        const icon = categoryIcons[dish.category] || '🍽️';

        return `
          <article
            id="dish-card-${dish.id}"
            class="group rounded-3xl bg-white dark:bg-slate-800/90 border ${
              isRecommended
                ? 'border-amber-400 dark:border-amber-400/80 ring-2 ring-amber-400/30'
                : 'border-slate-200/90 dark:border-slate-700/80'
            } p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-4"
          >
            <div>
              <!-- Etiquetas Superiores y Precio -->
              <div class="flex items-center justify-between gap-2 mb-3">
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-stone-100 dark:bg-zinc-900 text-slate-700 dark:text-slate-300 flex items-center gap-1">
                    <span>${icon}</span>
                    <span>${dish.badge[this.state.lang]}</span>
                  </span>
                  ${
                    isRecommended
                      ? `<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-zinc-950">
                          ${this.t('rest.recommendedPill')}
                        </span>`
                      : ''
                  }
                </div>
                <span class="font-display text-lg sm:text-xl font-bold text-emerald-700 dark:text-emerald-400 shrink-0">
                  ${this.formatMoney(dish.priceCRC)}
                </span>
              </div>

              <!-- Nombre y Descripción del Platillo -->
              <h3 class="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug mb-1.5">
                ${dish.name[this.state.lang]}
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                ${dish.desc[this.state.lang]}
              </p>
            </div>

            <!-- Controles de Agregar / Ajustar Cantidad -->
            <div class="pt-1">
              ${
                qty === 0
                  ? `
                    <button
                      type="button"
                      onclick="App.updateCartQty('${dish.id}', 1)"
                      class="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white dark:bg-zinc-900 dark:hover:bg-emerald-600 text-slate-800 dark:text-slate-100 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>+</span>
                      <span>${this.t('rest.addBtn')}</span>
                    </button>
                  `
                  : `
                    <div class="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 rounded-xl p-1.5">
                      <button
                        type="button"
                        onclick="App.updateCartQty('${dish.id}', -1)"
                        class="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-bold shadow-sm hover:bg-slate-100 transition-colors"
                        aria-label="Restar uno"
                      >
                        −
                      </button>
                      <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                        ${qty} ${this.t('rest.inCartLabel')}
                      </span>
                      <button
                        type="button"
                        onclick="App.updateCartQty('${dish.id}', 1)"
                        class="w-9 h-9 rounded-lg bg-emerald-700 text-white font-bold shadow-sm hover:bg-emerald-600 transition-colors"
                        aria-label="Sumar uno"
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
   * LÓGICA DEL CARRITO Y CHECKOUT VÍA WHATSAPP
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
        lines.push({
          dish,
          qty,
          subtotalCRC,
        });
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
        <div class="text-center py-12 px-4 space-y-3">
          <div class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center text-2xl">
            🍽️
          </div>
          <h3 class="font-display text-base font-bold text-slate-800 dark:text-slate-200">
            ${this.t('cart.emptyTitle')}
          </h3>
          <p class="text-xs text-slate-500 dark:text-zinc-400 max-w-xs mx-auto">
            ${this.t('cart.emptyDesc')}
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = lines
      .map(
        ({ dish, qty, subtotalCRC }) => `
          <div class="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-stone-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80">
            <div class="flex-1 min-w-0">
              <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                ${dish.name[this.state.lang]}
              </h4>
              <span class="text-xs text-slate-500 dark:text-zinc-400 block">
                ${this.formatMoney(dish.priceCRC)} c/u
              </span>
              <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                ${this.formatMoney(subtotalCRC)}
              </span>
            </div>
            <div class="flex items-center gap-1.5">
              <button
                type="button"
                onclick="App.updateCartQty('${dish.id}', -1)"
                class="w-7 h-7 rounded-lg bg-white dark:bg-zinc-900 border border-slate-300 dark:border-slate-700 text-xs font-bold"
              >
                −
              </button>
              <span class="w-6 text-center text-xs font-bold">${qty}</span>
              <button
                type="button"
                onclick="App.updateCartQty('${dish.id}', 1)"
                class="w-7 h-7 rounded-lg bg-emerald-700 text-white text-xs font-bold"
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

    let message = '';
    if (this.state.lang === 'es') {
      message =
        `¡Hola Restaurante La Finca! 🍽️ Quisiera realizar el siguiente pedido:\n\n` +
        `${itemLines}\n\n` +
        `💰 *Total (${this.state.currency}):* ${totalFormatted}\n` +
        `📍 *Modalidad:* ${deliveryMode}\n` +
        (customerName ? `👤 *Nombre:* ${customerName}\n` : '') +
        (notes ? `📝 *Notas:* ${notes}\n` : '') +
        `\n¡Muchas gracias!`;
    } else {
      message =
        `Hello Restaurante La Finca! 🍽️ I would like to place the following order:\n\n` +
        `${itemLines}\n\n` +
        `💰 *Total (${this.state.currency}):* ${totalFormatted}\n` +
        `📍 *Order Type:* ${deliveryMode}\n` +
        (customerName ? `👤 *Name:* ${customerName}\n` : '') +
        (notes ? `📝 *Notes:* ${notes}\n` : '') +
        `\nThank you!`;
    }

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  },

  /* ========================================================================
   * REGISTRO DE SERVICE WORKER E INSTALACIÓN PWA
   * ======================================================================== */
  setupPWA() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch((err) => {
          console.warn('Registro de Service Worker omitido en entorno local:', err);
        });
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
