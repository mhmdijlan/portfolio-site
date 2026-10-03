export const site = {
  name: "Mohomed Ijilaan",
  role: "Website Developer",
  location: "Kandy, Sri Lanka",
  email: "mhmdijlan77@gmail.com",
  phoneDisplay: "+94 77 677 8795",
  phoneHref: "tel:+94776778795",
  whatsapp: "https://wa.me/94776778795",
  linkedin: "https://www.linkedin.com/in/mohomed-ijilan",
  github: "https://github.com/mhmdijlan",
  x: "https://x.com/iamijlan",
  instagram: "https://www.instagram.com/iamijlan",
  cv: "/assets/Mohomed-Ijilaan-CV.pdf",
  availability: "Open to Web Developer roles",
} as const;

export const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const hero = {
  greeting: "Hey, I'm",
  name: "Mohomed Ijilaan",
  title: "Website Developer",
  lede: "I ship fast, conversion-focused websites and custom web systems — WordPress, Shopify, and PHP — with a First Class Software Engineering background and AI-assisted delivery that still gets a human review before it goes live.",
};

export const about = {
  paragraphs: [
    "I'm a results-driven Website Developer based in Kandy, Sri Lanka, with a First Class BSc (Hons) in Computer Science in Software Engineering from Kingston University (ESOFT Metro Campus) and a Distinction in BTEC HND Computing.",
    "At BuildaStore I design and customize WordPress sites, Shopify themes, and custom-built solutions — then take them through deployment, VPS management, SEO, and QA. I use AI coding agents to explore code and debug faster, and I review every change before it ships.",
    "The work I care about loads quickly, ranks well, and converts: WhatsApp checkout on an e-commerce store, a full POS with ERP and bookkeeping on a VPS, or a marketing site that actually generates leads.",
  ],
  facts: [
    { label: "Degree", value: "First Class BSc" },
    { label: "HND", value: "Overall Distinction" },
    { label: "Focus", value: "Website · SEO · CMS" },
    { label: "Languages", value: "English · Tamil · Sinhala" },
  ],
};

export const highlights = [
  {
    title: "Custom WordPress & Shopify",
    body: "Themes, page builders, WooCommerce, and store features shaped around the brand — not a generic template dump.",
  },
  {
    title: "PHP systems that run a business",
    body: "POS, billing, inventory, role-based access, and bookkeeping hosted on a VPS with real uptime expectations.",
  },
  {
    title: "AI-assisted, human-reviewed",
    body: "Cursor and Claude Code speed up exploration and debugging. Nothing reaches production without a pass from me.",
  },
  {
    title: "Launch, host, and keep it fast",
    body: "Domain, cPanel, VPS, SEO, and ongoing maintenance so the site still performs after the handover.",
  },
] as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  href?: string;
  cta: string;
  demoRequest?: boolean;
};

export const posDemoMessage =
  "Hi Ijilaan — I'd like a demo of the POS / ERP & bookkeeping system. Please share the link and login details.";

export const projects: Project[] = [
  {
    id: "pos",
    number: "01",
    title: "POS System with ERP & Bookkeeping",
    kicker: "Custom web app · VPS hosted",
    summary:
      "A full web-based Point of Sale platform with ERP and bookkeeping modules — built to run sales, inventory, and finances in one place. Hosted on a VPS for reliable, always-on access. A live demo is available on request (link + login).",
    points: [
      "Billing, sales processing, and invoice generation",
      "Inventory, expenses, and financial records in one platform",
      "Role-based access for staff and admin",
      "Responsive interface, deployed on a VPS",
      "Built with an AI coding agent, then reviewed for production",
    ],
    tech: ["HTML5", "CSS3", "PHP", "MySQL", "Bootstrap"],
    image: "/images/Pos.png",
    imageAlt: "POS, ERP and bookkeeping dashboard",
    cta: "Request demo & login",
    demoRequest: true,
  },
  {
    id: "ipremier",
    number: "02",
    title: "iPremier.lk",
    kicker: "E-commerce · WooCommerce",
    summary:
      "A live online store for brand-new and pre-owned Apple devices and accessories. Custom WordPress/WooCommerce theme with WhatsApp checkout, SEO, and a mobile-first shopping flow for customers across Sri Lanka.",
    points: [
      "Custom WordPress + WooCommerce theme",
      "WhatsApp checkout for faster conversions",
      "Product pages, category filters, and secure checkout",
      "SEO and mobile performance pass",
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    image: "/images/ipremier.png",
    imageAlt: "iPremier.lk online Apple store",
    href: "https://ipremier.lk/",
    cta: "Visit live site",
  },
  {
    id: "anowart",
    number: "03",
    title: "Anowart.com",
    kicker: "Digital marketing agency",
    summary:
      "A lead-focused website for a Sri Lankan digital marketing agency covering SEO, Google Ads, social, branding, and web development. Built to explain services clearly and convert visitors into enquiries.",
    points: [
      "Service-led information architecture",
      "SEO-friendly, responsive layouts",
      "Clear calls to action and contact paths",
      "Built to support paid and organic campaigns",
    ],
    tech: ["WordPress", "PHP", "CSS", "SEO"],
    image: "/images/anowart.png",
    imageAlt: "Anowart digital marketing website",
    href: "https://www.anowart.com/",
    cta: "Visit live site",
  },
  {
    id: "derdium",
    number: "04",
    title: "Derdium.com",
    kicker: "Company website",
    summary:
      "Corporate site for a digital solutions company — websites, apps, software, POS, and marketing. Custom WordPress theme with intuitive navigation, contact flows, and SEO so the brand reads as credible and easy to hire.",
    points: [
      "Custom WordPress theme tailored to the brand",
      "Service, product, and contact page structure",
      "Mobile-responsive and cross-browser tested",
      "Fast loading with on-page SEO",
    ],
    tech: ["WordPress", "PHP", "CSS", "Page builder"],
    image: "/images/derdium.png",
    imageAlt: "Derdium digital solutions company website",
    href: "https://derdium.com/",
    cta: "Visit live site",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["PHP", "Node.js", "MySQL", "REST APIs"],
  },
  {
    title: "Platforms",
    items: ["WordPress", "Shopify", "WooCommerce", "Elementor", "Divi"],
  },
  {
    title: "Delivery",
    items: [
      "AI coding agents",
      "Cursor",
      "Claude Code",
      "GitHub",
      "VPS",
      "cPanel",
      "SEO",
      "QA",
    ],
  },
] as const;

export const techMarquee = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "MySQL",
  "Bootstrap",
  "React.js",
  "Node.js",
  "WordPress",
  "Shopify",
  "WooCommerce",
  "REST APIs",
  "AI coding agents",
  "VPS",
  "SEO",
] as const;

export const experience = [
  {
    period: "Apr 2026 — Present",
    role: "Website Developer",
    org: "BuildaStore",
    bullets: [
      "Develop and customize WordPress websites, including custom-built solutions tailored to the brief.",
      "Customize Shopify themes and implement features that improve functionality and UX.",
      "Assist with server management, website deployment, maintenance, and troubleshooting.",
      "Use AI coding agents for exploration and debugging, then review changes before they go live.",
    ],
  },
] as const;

export const education = [
  {
    period: "Jan 2024 — Jan 2025",
    title: "BSc (Hons) Computer Science in Software Engineering",
    org: "ESOFT Metro Campus, Kandy · Kingston University",
    note: "First Class",
  },
  {
    period: "Feb 2022 — Jan 2024",
    title: "BTEC HND in Computing in Software Engineering",
    org: "ESOFT Metro Campus, Kandy · Pearson",
    note: "Overall Distinction",
  },
] as const;
