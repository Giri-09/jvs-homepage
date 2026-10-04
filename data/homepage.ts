// All homepage content lives here. Change text, links or images in this file
// and the page updates — no need to touch the components.

export type ImageData = {
  src: string;
  alt: string;
};

export type IconName = "graduation" | "rocket" | "sparkle" | "trending" | "building";

export type BrandName = "Learnix" | "Startix" | "Sparkix" | "Growix" | "JVS Group";

export type Service = {
  title: string;
  description: string;
  tags: string[];
  brand: BrandName;
  image: ImageData;
  items: string[];
};

export type Stage = {
  name: string;
  days: number;
};

const instagram = (handle: string) => `https://www.instagram.com/${handle}/`;

export const contactInfo = {
  phone: "+91 91600 30342",
  phoneLink: "tel:+919160030342",
  email: "jvsacademyofficial@gmail.com",
  emailLink: "mailto:jvsacademyofficial@gmail.com",
  address: "Visakhapatnam, 530022",
  mapLink: "https://maps.google.com/?q=Visakhapatnam+530022",
  website: "www.jvsacademy.com",
  websiteLink: "https://www.jvsacademy.com",
};

export const siteInfo = {
  title: "JVS — Driving Success Through Education, Events & Innovation",
  description: "JVS is a growing business group driven by innovation, vision, and versatility.",
  logoText: "JVS",
  name: "JVS",
  tagline: "Versatile Stability",
  companyName: "Versatile Stability Academy Private Limited",
  copyrightYear: 2026,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Placements", href: "#placement" },
  { label: "Our Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export const placementStages: Stage[] = [
  { name: "Aptitude", days: 30 },
  { name: "Soft Skills", days: 30 },
  { name: "IT / Non-IT", days: 90 },
  { name: "Placement", days: 30 },
];

export const hero = {
  titleHighlight: "Driving success",
  titleLines: ["through education,", "events & innovation"],
  description:
    "JVS is a growing business group driven by innovation, vision, and versatility. We create and develop ventures designed to bring value, opportunity, and lasting growth.",
  primaryButton: { label: "Explore services", href: "#services" },
  secondaryButton: { label: "Contact us", href: "#contact" },
  highlights: ["Career placements", "Company registrations", "Event management"],

  trainingCard: {
    title: "Placement Training",
    subtitle: "JVS Learnix",
    startLabel: "Day 1",
    endLabel: "Day 180",
  },
  partnerBadge: {
    title: "50+ partner companies",
    subtitle: "IT & Non-IT placements",
  },
  quoteCard: {
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=70",
      alt: "Jyoshna Yellapu",
    },
    name: "Jyoshna Yellapu",
    role: "MD, JVS",
    quote: "“I believe in turning ideas into meaningful opportunities.”",
  },
  tiles: [
    {
      tag: "Learnix",
      image: {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=70",
        alt: "Students on campus",
      },
    },
    {
      tag: "Startix",
      image: {
        src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=70",
        alt: "Startup team at work",
      },
    },
    {
      tag: "Sparkix",
      image: {
        src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=70",
        alt: "Celebration with balloons",
      },
    },
    {
      tag: "Growix",
      image: {
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=70",
        alt: "Young professional",
      },
    },
  ],
};

export const brandStrip = {
  boldText: "Placement training",
  text: "— Aptitude, Soft Skills, IT / Non-IT and Placement, step by step",
  link: { label: "See the journey →", href: "#placement" },
  brands: [
    { name: "Learnix", icon: "graduation", url: instagram("jvs_learnix") },
    { name: "Startix", icon: "rocket", url: instagram("startixofficials") },
    { name: "Sparkix", icon: "sparkle", url: instagram("sparkixofficials") },
    { name: "Growix", icon: "trending", url: instagram("growixofficials") },
    { name: "JVS Group", icon: "building", url: instagram("jvs_officials") },
  ] as { name: string; icon: IconName; url: string }[],
};

export const about = {
  label: "About JVS",
  title: "A growing business group driven by",
  titleHighlight: "innovation, vision, and versatility.",
  description:
    "From learning and career development to business, technology and experiences, we create solutions that move people and businesses forward.",
  mainImage: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=70",
    alt: "Students collaborating on laptops",
  },
  sideImage: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=70",
    alt: "Business consultation",
  },
  lettersTitle: "WHAT JVS STANDS FOR",
  letters: [
    { letter: "J", word: "Jyoshna’s" },
    { letter: "V", word: "Versatile" },
    { letter: "S", word: "Stability" },
  ],
  businessLabel: "Our business spans",
  businessAreas: [
    "Career Placements",
    "Startup Entrepreneurship",
    "Technology Innovation",
    "Event Management",
    "Company Registrations",
    "Hospitality",
  ],
};

export const servicesSection = {
  label: "How we serve",
  title: "Eight ways we move people and",
  titleHighlight: "businesses forward",
  filters: ["All", "Learnix", "Startix", "Sparkix", "Growix"],
  enquireLabel: "Enquire about this →",
};

export const services: Service[] = [
  {
    title: "Education & Training",
    description:
      "Structured programmes that take learners from fundamentals to job-ready skills, including a staged placement-training track.",
    tags: ["Training", "Skills", "Careers"],
    brand: "Learnix",
    image: {
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=70",
      alt: "Classroom training session",
    },
    items: [
      "Skill development courses",
      "Placement training in four stages",
      "Two-month Soft Skills programme",
    ],
  },
  {
    title: "Internships & Projects",
    description:
      "Real-world experience on live projects, with academic project support that builds a portfolio recruiters notice.",
    tags: ["Internships", "Projects", "Portfolio"],
    brand: "Learnix",
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=70",
      alt: "Students working on a project",
    },
    items: [
      "Internships on live projects",
      "Project reports for BA, MA, BBA, MBA, BCA, MCA, BTech & MTech",
      "Live source codes with deployment support",
      "PPTs, research papers & publication support",
    ],
  },
  {
    title: "Career Development",
    description:
      "From resume to job offer: dedicated placement support for freshers and experienced professionals.",
    tags: ["Placements", "Careers", "Interviews"],
    brand: "Growix",
    image: {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=70",
      alt: "Job interview handshake",
    },
    items: [
      "Placement support with 50+ partner companies",
      "One-on-one career counselling",
      "ATS-friendly resume building",
      "Mock interviews — HR, technical & behavioural",
      "LinkedIn profile optimisation",
    ],
  },
  {
    title: "Digital Solutions",
    description: "Visibility and identity for growing brands, planned around a clear growth strategy.",
    tags: ["Marketing", "SEO", "Branding"],
    brand: "Startix",
    image: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70",
      alt: "Marketing analytics on a laptop",
    },
    items: [
      "Search engine optimisation",
      "Social media & ads",
      "Growth strategy",
      "Logo design & brand kits",
    ],
  },
  {
    title: "Business & Consulting",
    description: "Complete support for setting up and protecting a business, across every registration type.",
    tags: ["Startups", "Registration", "Consulting"],
    brand: "Startix",
    image: {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=70",
      alt: "Business consultation",
    },
    items: [
      "Proprietorship, LLP, OPC & Pvt Ltd registration",
      "MSME & GST registration",
      "Trademark & copyright filing",
      "ISBN registration & publishing",
    ],
  },
  {
    title: "Technology & Innovation",
    description: "Modern, responsive digital products for the brands and ventures we work with.",
    tags: ["Web", "Apps", "Software"],
    brand: "Startix",
    image: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=70",
      alt: "Code on a laptop screen",
    },
    items: ["Website design & development", "Application development", "Software solutions"],
  },
  {
    title: "Events & Experiences",
    description:
      "Full-service planning that makes every moment memorable, for individuals and corporates alike.",
    tags: ["Corporate", "Celebrations", "Experiences"],
    brand: "Sparkix",
    image: {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=70",
      alt: "Corporate event",
    },
    items: [
      "Event planning — venue, décor, catering & entertainment",
      "Corporate & themed celebrations",
      "Surprise parties for birthdays & anniversaries",
      "Photo & video shoots",
      "Décor, setup & curated gifting",
    ],
  },
  {
    title: "Growth & Opportunities",
    description:
      "Ventures and partnerships that open new opportunities for people and businesses across sectors.",
    tags: ["Business", "Development", "Growth"],
    brand: "JVS Group",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=70",
      alt: "Team planning session",
    },
    items: ["Business development", "New ventures & collaborations", "Long-term growth planning"],
  },
];

export const placementSection = {
  label: "Placement training · JVS Learnix",
  titleStart: "From fundamentals to",
  titleHighlight: "job-ready",
  titleEnd: ", in four stages",
  note: "Also offered: a standalone two-month Soft Skills programme, and placement support with 50+ partner companies through JVS Growix.",
};

export const brandsSection = {
  label: "The JVS ecosystem",
  title: "Four focused brands, one group",
  description:
    "Learnix, Startix, Sparkix and Growix are brands of Versatile Stability Academy Private Limited.",
  brands: [
    {
      name: "Learnix",
      focus: "Academics & skills",
      handle: "jvs_learnix",
      image: {
        src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=70",
        alt: "Learnix",
      },
      items: ["Project reports", "Live source codes", "PPTs & research", "Placement training"],
    },
    {
      name: "Startix",
      focus: "Business services",
      handle: "startixofficials",
      image: {
        src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=70",
        alt: "Startix",
      },
      items: ["Registrations", "Web development", "Logo & branding", "Digital marketing"],
    },
    {
      name: "Sparkix",
      focus: "Celebrations",
      handle: "sparkixofficials",
      image: {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=70",
        alt: "Sparkix",
      },
      items: ["Event planning", "Surprise parties", "Photo & video", "Unique gifting"],
    },
    {
      name: "Growix",
      focus: "Career growth",
      handle: "growixofficials",
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=70",
        alt: "Growix",
      },
      items: ["Placement support", "Career counselling", "Resume building", "Mock interviews"],
    },
  ].map((brand) => ({ ...brand, url: instagram(brand.handle) })),
};

export const quotes = [
  {
    text: "I believe in turning ideas into meaningful opportunities, creating with purpose, and building a vision that grows beyond today.",
    name: "Jyoshna Yellapu",
    role: "Managing Director of JVS",
    initials: "JY",
    dark: true,
  },
  {
    text: "True growth begins with strong ideas, meaningful collaboration, and the courage to turn possibilities into something valuable, impactful, and lasting for the future.",
    name: "Vahid Shaik",
    role: "Managing Director of VexoBiz",
    initials: "VS",
    dark: false,
  },
];

export const contactSection = {
  title: "Let’s build what’s next, together.",
  description:
    "Tell us whether it’s training, a registration, a website or an event. The JVS team will get back to you.",
  links: [
    { label: "Call", value: contactInfo.phone, href: contactInfo.phoneLink, external: false },
    { label: "Email", value: contactInfo.email, href: contactInfo.emailLink, external: false },
    { label: "Visit", value: contactInfo.address, href: contactInfo.mapLink, external: true },
  ],
  form: {
    title: "Send an enquiry",
    submitLabel: "Send enquiry",
    resetLabel: "Send another",
  },
};

export const footer = {
  about: "Jyoshna’s Versatile Stability. Driving Success Through Education, Events & Innovation.",
  exploreLinks: navLinks.filter((link) => link.href !== "#contact"),
  socialHandles: [
    "jvs_officials",
    "jvs_learnix",
    "startixofficials",
    "sparkixofficials",
    "growixofficials",
  ].map((handle) => ({ handle, url: instagram(handle) })),
};
