export interface NavigationItem {
  readonly label: string;
  readonly target: string;
}

export interface ContactLinks {
  readonly whatsapp: string | null;
  readonly linkedin: string | null;
  readonly facebook: string | null;
  readonly instagram: string | null;
  readonly auditLanding: string | null;
}

export type ServiceTone = 'light' | 'brand';

export interface ServiceItem {
  readonly id: string;
  readonly kicker: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly description2: string | null;
  readonly bullets: readonly string[];
  readonly icon: string;
  readonly iconAlt: string;
  readonly tone: ServiceTone;
  readonly showLandingAction?: boolean;
}

export interface SiteContent {
  readonly navigation: readonly NavigationItem[];
  readonly contactLinks: ContactLinks;
  readonly services: readonly ServiceItem[];
}

export const SITE_CONTENT: SiteContent = {
  navigation: [
    { label: 'Nosotras', target: 'nosotras' },
    { label: 'Servicios', target: 'servicios' },
    { label: 'Testimonios', target: 'testimonios' },
    { label: 'ONGs', target: 'ongs' }
  ],
  contactLinks: {
    whatsapp: 'https://www.instagram.com/link.comunicacion/',
    linkedin: 'https://www.linkedin.com/company/linkcomunicacion/?viewAsMember=true',
    facebook: 'https://www.facebook.com/LinkComunicacion',
    instagram: 'https://www.instagram.com/link.comunicacion/',
    auditLanding: 'https://horse-governor-1d5.notion.site/Auditor-a-del-sistema-de-ventas-de-tu-negocio-11f6fd568c098098b8eaf9eab4a766c0'
  },
  services: [
    {
      id: 'anuncios',
      kicker: 'Publicidad digital',
      title: 'Gestión de anuncios en Meta Ads y Google Ads',
      shortTitle: 'Gestión de anuncios en Meta Ads y Google Ads',
      description:
        `Este servicio está pensado para negocios que ya invierten en publicidad y buscan optimizar sus resultados, escalar su inversión, delegar la gestión de sus campañas pero a la vez sentirse acompañados y asesorados por un equipo de profesionales`,
      description2: 'Nuestro objetivo es que puedas enfocarte en hacer crecer tu negocio, mientras nosotras nos ocupamos de que tu publicidad genere resultados.',
      bullets: [
        'Nos enfocamos en construir campañas alineadas con los objetivos de cada negocio, optimizando la inversión publicitaria y tomando decisiones basadas en datos.',
        'Acompañamiento constante, con comunicación semanal, seguimiento de resultados, propuestas de mejora y un trabajo colaborativo con cada negocio.',
        'No buscamos ser un proveedor más. Queremos convertirnos en parte de tu equipo.'
      ],
      icon: 'assets/icons/megaphone.svg',
      iconAlt: 'Megáfono',
      tone: 'light'
    },
    {
      id: 'auditoria',
      kicker: 'Una mirada integral',
      title: 'Auditoría del sistema de ventas de tu negocio',
      shortTitle: 'Auditoría del sistema de ventas de tu negocio',
      description:
        'Sesiones online personalizadas de 90 minutos para analizar cada etapa del proceso de ventas de tu negocio con el fin de identificar oportunidades de mejora y ayudarte a tomar decisiones estratégicas con mayor claridad.',
      description2: 'Revisamos la estrategia de marketing, las campañas publicitarias, la comunicación, el recorrido del cliente y los procesos de venta para detectar qué está funcionando, qué puede optimizarse y cuáles deberían ser los próximos pasos.',
      bullets: [
        'Diagnóstico de anuncios y canales',
        'Revisión del proceso comercial',
        'Plan de acción claro y priorizado'
      ],
      icon: 'assets/icons/target.svg',
      iconAlt: 'Objetivo con flecha',
      tone: 'brand',
      showLandingAction: true
    },
    {
      id: 'capacitaciones',
      kicker: 'Conocimiento que se activa',
      title: 'Capacitaciones para empresas',
      shortTitle: 'Capacitaciones para empresas',
      description:
        'Diseñamos capacitaciones personalizadas para empresas que buscan fortalecer las habilidades de sus equipos de marketing. Cada encuentro se adapta a los objetivos, el nivel de experiencia y los desafíos específicos de cada negocio.',
      description2: 'Combinamos el funcionamiento de las plataformas con una mirada estratégica, para que los equipos comprendan cómo planificar campañas, interpretar métricas, optimizar la inversión y tomar decisiones con mayor seguridad.',
      bullets: [
        'Modalidad presencial o virtual',
        'Casos reales y situaciones concretas de cada equipo de trabajo',
        'Aprendizaje práctico y aplicable desde el primer encuentro'
      ],
      icon: 'assets/icons/training.svg',
      iconAlt: 'Personas capacitándose',
      tone: 'light'
    }
  ]
};
