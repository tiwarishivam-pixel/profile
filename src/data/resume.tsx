import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Solidity } from "@/components/ui/svgs/solidity";
import { Foundry } from "@/components/ui/svgs/foundry";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Shivam Tiwari",
  initials: "ST",
  url: "https://shivam-dev-profile.vercel.app/",
  location: "Mumbai, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "Full Stack AI & Web3 Developer focused on building scalable, production-grade applications. Experienced in delivering high-quality software with strong system design and a commitment to reliability, performance, and on-time execution. Open to freelance and contract opportunities.",

  summary:
    "I am a Full Stack AI and Web3 Developer with hands-on experience in designing and delivering industry-level applications. I specialize in building end-to-end systems, from intuitive frontend interfaces to robust backend architectures and smart contract integrations. With a strong foundation in system design, distributed systems, and modern development practices, I focus on creating scalable, efficient, and production-ready solutions. I have worked across multiple domains including AI-powered platforms, SaaS products, and decentralized applications, consistently delivering projects with a professional approach and a strong emphasis on quality, performance, and deadlines.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "MongoDB", icon: MongoDB },
    { name: "C++", icon: Csharp },
    { name: "Solidity", icon: Solidity },
    { name: "Foundry", icon: Foundry },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shivam810414@gmail.com",
    tel: "+91 8104148608",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tiwarishivam-pixel",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shivam-tiwari-ai",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_shivamtiwari9",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shivam810414@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  education: [
    {
      school: "Shree L.R Tiwari College of Engineering",
      href: "https://slrtce.in/",
      degree: "Bachelor of Engineering in Computer Science",
      logoUrl: "/college-logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  // work: [
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  // ],
  work: [
    {
      company: "Personal Projects",
      href: "https://your-portfolio-link.com",
      badges: ["Project"],
      location: "Remote",
      title: "Full Stack / AI / Smart Contract Developer",
      logoUrl: "",
      start: "2023",
      end: "Present",
      description:
        "Built multiple applications spanning blockchain, full-stack, and AI—including Senri (AI career platform), EchoTube (YouTube summarizer), and an environmental restoration dashboard—using React, TypeScript, Node.js, smart contracts, and modern AI tooling. Currently focused on building decentralized applications and blockchain-based systems.Built multiple full-stack and AI-based applications including Senri (AI career platform), EchoTube (YouTube summarizer), and an environmental restoration dashboard using React, TypeScript, Node.js, and AI tooling.",
    },
  ],
  projects: [
    {
      title: "TalentOS - AI Placement and Career Coach",
      href: "https://placement-ai-chi.vercel.app/",
      dates: "September 2025 - Feb 2026",
      active: true,
      description:
        "Developed TalentOs, an AI-powered placement and career development platform that helps students prepare for jobs through smart assessments, resume analysis, interview practice, and personalized learning insights.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Gemini API",
        "Twilio",
      ],
      links: [
        {
          type: "Website",
          href: "https://placement-ai-chi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/talentos.png",
      video: "",
    },
    {
      title: "Aawaaz - Decentralized Journalism Platform",
      href: "https://aawaz-neon.vercel.app/",
      dates: "january 2026 - Present",
      active: true,
      description:
        "Aawaaz is a decentralized journalism platform using blockchain, decentralized identity, and zero-knowledge proofs to enable secure, anonymous reporting with verifiable ownership, censorship resistance, and trustless monetization.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
        "foundry",
        "solidity",
        "Cloudflare Workers",
        "Monad",
      ],
      links: [
        {
          type: "Website",
          href: "https://aawaz-neon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/aawaz.png",
      video: "",
    },
    {
      title: "Launch Labs",
      href: "https://launch-lab-v2.vercel.app/",
      dates: "August 2024 - September 2024",
      active: true,
      description: `An advanced "Text-to-App" platform that transforms natural language prompts into functional, production-ready React interfaces. Inspired by industry leaders like v0 and Lovable, LaunchLab features an iterative editing engine that allows users to generate, preview, and refine complex UI components in real-time.`,
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Razorpay",
        "Cloudflare Workers",
        "Anthropic API",
      ],
      links: [
        {
          type: "Website",
          href: "https://launch-lab-v2.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/launchlabs.png",
      video: "",
    },
    {
      title: "Royale Rumble",
      href: "",
      dates: "2025",
      active: true,
      description:
        "A decentralized poker dApp designed to eliminate centralized control, hidden platform fees, and fund custody risks. Royale Rumble enables trustless gameplay using smart contracts, ensuring transparency, fairness, and secure on-chain transactions. The platform addresses real-world issues like downtime, fund lock-in, and lack of trust in traditional poker systems by leveraging blockchain technology.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Ethers.js",
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Wallet Integration",
        "Smart Contracts",
        "Web3",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/tiwarishivam-pixel/royale-rumble",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/royale-rumble.png",
      video: "",
    },
    {
      title: "Environmental Restoration Dashboard",
      href: "https://v0-restoration-project-app.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an environmental restoration dashboard that allows users to track and manage multiple restoration projects, monitor carbon credits issued, visualize environmental impact metrics (like total carbon credits, area restored, and project progress), and view detailed project and partner data in an intuitive platform.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://v0-restoration-project-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/carbon-credit.png",
      video: "",
    },
    {
      title: "Rolly-Polly",
      href: "",
      dates: "2025",
      active: true,
      description:
        "A decentralized AI-powered prediction market platform that allows users to create and deploy custom on-chain AI agents. These agents analyze market trends, user behavior, and historical data to provide intelligent insights and predictions. Rolly-Polly combines blockchain transparency with AI-driven decision-making, enabling trustless, personalized financial guidance and automated strategies.",
      technologies: [
        "Solidity",
        "Ethereum",
        "Ethers.js",
        "React",
        "Next.js",
        "Node.js",
        "AI APIs",
        "Smart Contracts",
        "Web3",
        "TailwindCSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/tiwarishivam-pixel/Rolly-Polly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rolly-polly.png",
      video: "",
    },
    {
      title: "More Projects & Open Source",
      href: "https://github.com/tiwarishivam-pixel",
      dates: "2023 - Present",
      active: true,
      description:
        "While the projects above represent my featured full-stack and AI work, I have 14+ additional repositories ranging from Blockchain Smart Contracts (Solidity/Foundry) to Python-based automation tools and DSA implementations. Explore my full coding journey and open-source contributions on GitHub.",
      technologies: [
        "GitHub",
        "Open Source",
        "Solidity",
        "Foundry",
        "Python",
        "FastAPI",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/tiwarishivam-pixel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/github-overview.png",
      video: "",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Error404 Hackathon",
      href: "",
      dates: "December 10th - 11th, 2025",
      location: "Mumbai, Churchgate",
      description:
        "Built Senri, an AI-powered career development platform that helps students prepare for jobs through smart assessments, resume analysis, interview practice, and personalized learning insights.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/658dc168e8fac_festival_banner.png?d=1280x371",
      mlh: "",
      links: [
        {
          title: "Unstop",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://unstop.com/hackathons",
        },
      ],
    },
    {
      title: "TechCrafters Hackathon",
      href: "",
      dates: "2025",
      location: "Mumbai, Mira Road",
      description:
        "Won TechCrafters Hackathon by building an innovative full stack solution under competitive constraints. Led development of a scalable application integrating modern technologies, focusing on performance, user experience, and real-world problem solving.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/63b6f0b49c4d2_hackathon_banner.png?d=1280x371",
      mlh: "",
      links: [
        {
          title: "Event Platform",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Mumbai Hacks",
      href: "",
      dates: "October 29, 2025",
      location: "Mumbai, Bandra",
      description:
        "Built a multi-agent AI platform that simulates expert investors to guide new investors in making informed decisions in the stock market.",
      image:
        "https://erp.adgully.com/artical_image/9f49d2619647ac858680e801eb7e31ad.jpeg",
      mlh: "",
      links: [
        {
          title: "Unstop",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://unstop.com/hackathons",
        },
      ],
    },
  ],
} as const;
