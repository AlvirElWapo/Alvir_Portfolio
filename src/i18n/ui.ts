// Single source of truth for all UI + marketing copy, keyed by language.
// Spanish ("es") is the default and lives at the site root; English ("en")
// is mirrored under /en/. Sections read from `ui` (flat strings) and
// `content` (structured lists). Contact details live in CONTACT.

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";

// ---------------------------------------------------------------------------
// Contact details — TODO(Andrés): replace the WhatsApp number with your real
// one (country code 52 + 10 digits, no spaces) and add LinkedIn if you want it.
// ---------------------------------------------------------------------------
export const CONTACT = {
  whatsapp: "https://wa.me/52XXXXXXXXXX",
  email: "andresalvir13@gmail.com",
  github: "https://github.com/AlvirElWapo/",
  linkedin: "", // e.g. "https://www.linkedin.com/in/tu-usuario"
};

// ---------------------------------------------------------------------------
// Flat UI strings
// ---------------------------------------------------------------------------
export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    "meta.home.title": "Andrés Alvir — Software a la medida para tu negocio",
    "meta.home.description":
      "Desarrollo de software a la medida y automatizaciones simples para negocios y restaurantes locales en Metepec. Tu puente hacia la tecnología.",
    "meta.services.title": "Servicios — Andrés Alvir",
    "meta.services.description":
      "Sitios web, menús con QR, automatización de pedidos y sistemas a la medida para negocios y restaurantes locales.",
    "meta.cv.title": "Currículum — Andrés Alvir",
    "meta.blog.title": "Blog — Andrés Alvir",

    "hero.greeting": "Hola 👋, soy",
    "hero.name": "Andrés Alvir",
    "hero.tagline": "Tu puente hacia la tecnología.",
    "hero.valueProp":
      "Ayudo a negocios y restaurantes locales a ahorrar tiempo y vender más con software a la medida y automatizaciones simples — sin tecnicismos y sin complicarte la vida.",
    "hero.ctaPrimary": "Hablemos de tu negocio",
    "hero.ctaSecondary": "Ver servicios",

    "process.title": "¿Cómo trabajo?",

    "services.title": "Servicios",
    "services.subtitle":
      "Soluciones pensadas para negocios y restaurantes locales. Tú me cuentas el problema; yo lo traduzco a tecnología.",
    "services.ctaText":
      "¿No ves exactamente lo que necesitas? Cuéntame tu problema y lo resolvemos juntos.",
    "services.ctaButton": "Escríbeme por WhatsApp",

    "proof.title": "Lo que he construido",
    "proof.intro": "Algo de mi experiencia real desarrollando software:",

    "cv.resumeTitle": "Currículum",
    "cv.profileTitle": "Perfil",
    "cv.educationTitle": "Educación",
    "cv.experienceTitle": "Experiencia",
    "cv.certsTitle": "Certificaciones",
    "cv.skillsTitle": "Habilidades",
    "cv.langsLabel": "Lenguajes de programación",
    "cv.backendLabel": "Frameworks (Backend)",
    "cv.frontendLabel": "Frameworks (Frontend)",
    "cv.dbLabel": "Administración de bases de datos",
    "cv.sysadminLabel": "Administración de sistemas",
    "cv.sysadmin1":
      "Manejo, gestión y administración de sistemas operativos basados en GNU/Linux.",
    "cv.sysadmin2":
      "Operación básica de plataformas en la nube (AWS, Linode, Google Cloud).",
    "cv.sysadmin3": "Administración y operación de tecnologías de virtualización.",

    "blog.title": "Blog",
    "blog.latestTitle": "Lo último del blog",
    "blog.emptyTitle": "¡Lo siento!",
    "blog.emptyBody": "Por ahora no hay publicaciones. ¡Vuelve pronto!",
    "blog.recent": "Publicaciones recientes",
    "blog.older": "Publicaciones anteriores",
    "blog.updatedOn": "Última actualización:",

    "footer.tagline": "Software a la medida para negocios que quieren crecer.",

    "notfound.message": "La página que buscas no existe.",
    "notfound.home": "Inicio",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.cv": "CV",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "meta.home.title": "Andrés Alvir — Tailor-made software for your business",
    "meta.home.description":
      "Tailor-made software and simple automations for local businesses and restaurants in Metepec. Your bridge to technology.",
    "meta.services.title": "Services — Andrés Alvir",
    "meta.services.description":
      "Websites, QR menus, order automation and custom systems for local businesses and restaurants.",
    "meta.cv.title": "Resume — Andrés Alvir",
    "meta.blog.title": "Blog — Andrés Alvir",

    "hero.greeting": "Hi 👋, I'm",
    "hero.name": "Andrés Alvir",
    "hero.tagline": "Your bridge to technology.",
    "hero.valueProp":
      "I help local businesses and restaurants save time and sell more with tailor-made software and simple automations — no jargon, no headaches.",
    "hero.ctaPrimary": "Let's talk about your business",
    "hero.ctaSecondary": "See services",

    "process.title": "How I work",

    "services.title": "Services",
    "services.subtitle":
      "Solutions built for local businesses and restaurants. You tell me the problem; I translate it into technology.",
    "services.ctaText":
      "Don't see exactly what you need? Tell me your problem and we'll solve it together.",
    "services.ctaButton": "Message me on WhatsApp",

    "proof.title": "What I've built",
    "proof.intro": "A bit of my real experience building software:",

    "cv.resumeTitle": "Resume",
    "cv.profileTitle": "Profile",
    "cv.educationTitle": "Education",
    "cv.experienceTitle": "Experience",
    "cv.certsTitle": "Certifications",
    "cv.skillsTitle": "Skills",
    "cv.langsLabel": "Programming Languages",
    "cv.backendLabel": "Frameworks (Backend)",
    "cv.frontendLabel": "Frameworks (Frontend)",
    "cv.dbLabel": "Database Administration",
    "cv.sysadminLabel": "System Administration",
    "cv.sysadmin1":
      "Manipulation, management, and administration of GNU/Linux-based operating systems.",
    "cv.sysadmin2":
      "Basic operation of cloud platforms (AWS, Linode, Google Cloud).",
    "cv.sysadmin3":
      "Administration and operation of virtualization technologies.",

    "blog.title": "Blog",
    "blog.latestTitle": "Latest from blog",
    "blog.emptyTitle": "Sorry!",
    "blog.emptyBody":
      "There are no blog posts to show at the moment. Check back later!",
    "blog.recent": "Recent posts",
    "blog.older": "Older posts",
    "blog.updatedOn": "Last updated on",

    "footer.tagline": "Tailor-made software for businesses that want to grow.",

    "notfound.message": "The page you're looking for couldn't be found.",
    "notfound.home": "Home",
  },
} as const;

// ---------------------------------------------------------------------------
// Structured content (lists used by the section components)
// ---------------------------------------------------------------------------
type Step = { title: string; desc: string };
type Service = { title: string; desc: string };
type Proof = { title: string; desc: string };
type Education = { title: string; subtitle: string };
type Experience = { title: string; subtitle: string; bullets: string[] };
type Cert = { name: string; score: string };

type LangContent = {
  process: Step[];
  services: Service[];
  proof: Proof[];
  cvProfile: string[];
  education: Education[];
  experience: Experience[];
  certs: Cert[];
};

export const content: Record<Lang, LangContent> = {
  es: {
    process: [
      {
        title: "Platicamos",
        desc: "Me cuentas qué te quita tiempo o dinero en tu negocio. En español claro, sin tecnicismos.",
      },
      {
        title: "Te propongo una solución",
        desc: "Diseño algo a la medida de tu negocio y tu presupuesto, y te explico exactamente qué hace.",
      },
      {
        title: "Lo construyo y te acompaño",
        desc: "Desarrollo la herramienta, la pongo a funcionar y te enseño a usarla. Sigo cerca por si algo surge.",
      },
    ],
    services: [
      {
        title: "Presencia digital + menú con QR",
        desc: "Un sitio web sencillo y un menú digital con código QR para que te encuentren en Google y tus clientes pidan con solo escanear.",
      },
      {
        title: "Automatización de pedidos y WhatsApp",
        desc: "Recibe, organiza y da seguimiento a tus pedidos sin caos. Menos mensajes perdidos, menos errores, más ventas.",
      },
      {
        title: "Sistema a la medida",
        desc: "Inventario, citas, reservaciones o control de ventas hechos para tu negocio. Deja atrás las hojas de Excel y el cuaderno.",
      },
      {
        title: "Digitalización de procesos",
        desc: "Convierte esas tareas manuales y repetitivas en algo automático, para que tú y tu equipo dediquen tiempo a lo que importa.",
      },
    ],
    proof: [
      {
        title: "Unificación de aplicaciones en Bosch",
        desc: "Lideré un proyecto que juntó varias aplicaciones de solicitudes en una sola plataforma, reduciendo de forma importante los tiempos de proceso y el mantenimiento en toda la planta.",
      },
      {
        title: "Servidor en la nube (Oracle Cloud + Docker)",
        desc: "Monté y administré servidores en la nube con Docker — desde hosting de páginas hasta servicios siempre disponibles, sin depender de una computadora encendida en casa.",
      },
    ],
    cvProfile: [
      "Desarrollador de software con más de 3 años de experiencia creando aplicaciones web con tecnologías como Node.js, Docker, Vue.js y MySQL, entre otras.",
      "Me especializo en traducir problemas del mundo real en soluciones de software. He liderado proyectos enfocados en la gestión de negocios y la digitalización de procesos, reduciendo de forma importante el tiempo necesario para completar tareas.",
      "Hoy trabajo de manera independiente ayudando a negocios y restaurantes locales en Metepec a dar el salto a la tecnología — sin tecnicismos y a su ritmo. Tengo un nivel avanzado de inglés y me siento cómodo colaborando en equipos multiculturales.",
    ],
    education: [
      {
        title: "Ingeniería en Software",
        subtitle: "Titulado en 2025 — UAEMex, Toluca, Estado de México",
      },
    ],
    experience: [
      {
        title: "Desarrollador independiente / Freelance",
        subtitle: "2025 – Presente · Metepec, Estado de México",
        bullets: [
          "Desarrollo de software a la medida y automatizaciones para negocios y restaurantes locales.",
          "Acompañamiento cercano a clientes no técnicos: del problema a una solución funcionando.",
        ],
      },
      {
        title: "Desarrollador Web",
        subtitle: "Febrero 2024 – Enero 2025 · Bosch, Toluca, Estado de México",
        bullets: [
          "Contribuí al mantenimiento y actualización continua de varias aplicaciones de la planta, mejorando la calidad y eficiencia de procesos críticos para la gestión de calidad y el monitoreo de producción.",
          "Tuve un papel clave en un nuevo proyecto para unificar múltiples aplicaciones de solicitudes en una sola plataforma, reduciendo de forma importante los tiempos de proceso y el mantenimiento de los sistemas de la planta.",
        ],
      },
    ],
    certs: [
      {
        name: "First Certificate in English (Cambridge University)",
        score: "Puntaje: 181 (C1)",
      },
      {
        name: "Test of English for International Communication (TOEIC)",
        score: "Puntaje: 925 (C1)",
      },
    ],
  },
  en: {
    process: [
      {
        title: "We talk",
        desc: "You tell me what's costing you time or money in your business. Plain language, zero jargon.",
      },
      {
        title: "I propose a solution",
        desc: "I design something tailored to your business and budget, and explain exactly what it does.",
      },
      {
        title: "I build it and stick around",
        desc: "I develop the tool, get it running, and show you how to use it — and stay close in case anything comes up.",
      },
    ],
    services: [
      {
        title: "Digital presence + QR menu",
        desc: "A simple website and a digital menu with a QR code so people find you on Google and your customers order with a single scan.",
      },
      {
        title: "Order & WhatsApp automation",
        desc: "Receive, organize and follow up on your orders without the chaos. Fewer lost messages, fewer mistakes, more sales.",
      },
      {
        title: "Custom-built system",
        desc: "Inventory, appointments, reservations or sales tracking built for your business. Leave the spreadsheets and the notebook behind.",
      },
      {
        title: "Process digitization",
        desc: "Turn those manual, repetitive tasks into something automatic, so you and your team spend time on what matters.",
      },
    ],
    proof: [
      {
        title: "App unification at Bosch",
        desc: "I led a project that merged several request applications into a single platform, significantly cutting processing times and maintenance across the whole plant.",
      },
      {
        title: "Cloud server (Oracle Cloud + Docker)",
        desc: "I set up and managed cloud servers with Docker — from hosting web pages to always-on services, without depending on a computer left running at home.",
      },
    ],
    cvProfile: [
      "Software developer with over 3 years of experience building web applications with technologies such as Node.js, Docker, Vue.js and MySQL, among others.",
      "I specialize in turning real-world problems into software solutions. I've led projects focused on business management and process digitization, significantly reducing the time needed to complete tasks.",
      "Today I work independently, helping local businesses and restaurants in Metepec make the leap into technology — jargon-free and at their own pace. I have an advanced level of English and I'm comfortable collaborating in multicultural teams.",
    ],
    education: [
      {
        title: "Bachelor's Degree in Software Engineering",
        subtitle: "Graduated 2025 — UAEMex, Toluca, Estado de México",
      },
    ],
    experience: [
      {
        title: "Independent / Freelance Developer",
        subtitle: "2025 – Present · Metepec, Estado de México",
        bullets: [
          "Tailor-made software development and automations for local businesses and restaurants.",
          "Close support for non-technical clients: from the problem to a working solution.",
        ],
      },
      {
        title: "Web Developer",
        subtitle: "February 2024 – January 2025 · Bosch, Toluca, Estado de México",
        bullets: [
          "Contributed to the continuous maintenance and updates of various plant applications, enhancing the quality and efficiency of processes critical to quality management and production monitoring.",
          "Played a key role in a new project to unify multiple request applications into a single platform, significantly reducing processing times and streamlining maintenance across the plant's systems.",
        ],
      },
    ],
    certs: [
      {
        name: "First Certificate in English (Cambridge University)",
        score: "Test Score: 181 (C1)",
      },
      {
        name: "Test of English for International Communication (TOEIC)",
        score: "Test Score: 925 (C1)",
      },
    ],
  },
};
