export interface NavigationItem {
  readonly label: string;
  readonly target: string;
}

export interface ContactLinks {
  readonly whatsapp: string | null;
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
    { label: 'Nosotros', target: 'nosotros' },
    { label: 'Servicios', target: 'servicios' },
    { label: 'Testimonios', target: 'testimonios' },
    { label: 'ONGs', target: 'ongs' }
  ],
  contactLinks: {
    whatsapp: null,
    facebook: null,
    instagram: null,
    auditLanding: null
  },
  services: [
    {
      id: 'anuncios',
      kicker: 'Publicidad digital',
      title: 'Gestión de anuncios en Meta Ads y Google Ads',
      shortTitle: 'Gestión de anuncios en Meta Ads y Google Ads',
      description:
        'Creamos campañas pensadas para atraer a las personas correctas y convertir la inversión publicitaria en oportunidades reales de venta.',
      bullets: [
        'Planificación y estrategia de campañas',
        'Optimización continua basada en datos',
        'Reportes claros y acompañamiento cercano'
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
        'Revisamos el recorrido completo de tus clientes para detectar fricciones, ordenar procesos y encontrar oportunidades de crecimiento.',
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
        'Diseñamos encuentros prácticos para que tu equipo comprenda la estrategia digital y pueda tomar mejores decisiones comerciales.',
      bullets: [
        'Contenidos adaptados a cada equipo',
        'Modalidad presencial o remota',
        'Herramientas aplicables desde el primer día'
      ],
      icon: 'assets/icons/training.svg',
      iconAlt: 'Personas capacitándose',
      tone: 'light'
    }
  ]
};
