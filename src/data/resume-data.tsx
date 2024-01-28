import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Adamu Odiri Teddie",
  initials: "BJ",
  location: "Wolverhampton, United Kingdom, GMT",
  locationLink: "https://www.google.com/maps/place/Wolverhampton",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "Highly accomplished and detail-oriented Frontend Software Engineer with over five years of expertise in crafting visually engaging and user-friendly websites. Proficient in the latest CSS and Javascript frameworks, coupled with a profound understanding of user experience (UX) principles. A proactive learner who continually updates skills to remain at the forefront of frontend technologies.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/41877178?s=400&u=d7ecc6e39db898ebc295d9f00b654c5051b7199b&v=4",
  personalWebsiteUrl: "https://odiriteddie.dev",
  contact: {
    email: "odiriteddie.adamu@gmail.com",
    tel: "+447761392890",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/OdiriTeddie",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/odiri-adamu/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/KingTeddie01",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Univeristy of Wolverhampton, United Kingdom",
      degree: "Master's in Computer Science with Professional Practice",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Atop Web Technologies",
      link: "https://www.atopwebtech.com/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Led cross-functional teams in the development of 15+ visually compelling, responsive websites,  resulting in a 25% increase in client satisfaction scores and repeat business.",
    },
    {
      company: "Webbiit Technologies",
      link: "https://webbiit.com/",
      badges: [""],
      title: "Frontend Developer",
      logo: ClevertechLogo,
      start: "2018",
      end: "2021",
      description:
        "Collaboratively developed and maintained frontend components for 10+ client websites, consistently  meeting or exceeding project timelines.",
    },
    {
      company: "Govic Oil",
      link: "",
      badges: [],
      title: "Manager",
      logo: JojoMobileLogo,
      start: "2015",
      end: "2017",
      description:
        "Collaborated and managed 10+ employees in the distribution and sales of retail and wholesale petroleum product",
    },
  ],
  skills: [
    "HTML5/CSS3",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Express.Js",
    "Nest.Js",
    "GraphQL",
    "Linux",
    "AWS",
    "Docker",
    "SQL",
    "Version Control(Github)",
    "Jest/Playwright",
    "PHP/Wordpress",
  ],
  projects: [
    {
      title: "Wema Stores",
      techStack: [
        "Side Project",
        "React",
        "Vite",
        "Styled Component",
        "Auth0",
        "Stripe",
      ],
      description: "An Ecommerce Platform",
      logo: ConsultlyLogo,
      link: {
        label: "wema-stores.netlify.app",
        href: "https://wema-stores.netlify.app/",
      },
    },
    {
      title: "Job Tracker",
      techStack: [
        "Side Project",
        "React",
        "Styled Component",
        "Vite",
        "Auth0",
        "Redux Toolkit",
      ],
      description: "Job Search Tracker",
      logo: MonitoLogo,
      link: {
        label: "https://react-jobb-tracker.netlify.app/",
        href: "https://react-jobb-tracker.netlify.app/landing",
      },
    },
    {
      title: "odiriteddie.dev",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://www.odiriteddie.dev/",
      },
    },
    {
      title: "React Contentful",
      techStack: ["Side Project", "React", "Contentful", "Vite", "Sass"],
      description: "React sample project using Contenful Headless CMS",
      logo: JarockiMeLogo,
      link: {
        label: "reactcontentful123.netlify.app",
        href: "https://reactcontentful123.netlify.app/",
      },
    },
  ],
} as const;
