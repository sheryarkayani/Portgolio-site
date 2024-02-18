import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
 
  {
    title: "CTO",
    companyName: "Avenue5 International",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Served as the visionary Chief Technology Officer at Avenue5 International, orchestrating technological excellence to revolutionize the real estate landscape.",
"Engineered and deployed a cutting-edge CRM system, tailoring it meticulously to the unique needs of Avenue5 International, amplifying operational efficiency and client engagement.",
"Pioneered the development of a dynamic live inventory management system, empowering the organization with real-time insights and strategic decision-making capabilities.",
    ],
  },
  {
    title: "Technical Lead",
    companyName: "Bin Sadiq Group",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Led the technological advancements at Bin Sadiq Group as the Tech Lead, driving innovation and growth in the real estate market.",
"Developed and implemented sophisticated technologies to enhance the company's competitive edge, with a focus on creating customized solutions tailored to the real estate industry.",
"Designed and implemented a state-of-the-art CRM system, streamlining internal processes and optimizing customer relationship management for increased efficiency.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sheryar proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sheryar does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sheryar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, track, and manage  live real estate Inventory , Chaning Real Esatate Dynamics",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/sheryarkayani/Live-Real-Estate-Inventory-Tracking",
  },
  {
    name: "Smart ERP",
    description:
      "Web application that manage and tracks whole company resources and show real-time report on the Asthethic Dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/sheryarkayani/RealEstateDashboard",
  },
  {
    name: "Real Estate CRM",
    description:
      "A comprehensive  and Customized  CRM platform that allows user to assign and manage leads , track and report meetings.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/sheryarkayani/RealEstateDashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
