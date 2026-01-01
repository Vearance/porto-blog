import { BentoSkeleton, type BentoGridItemProps } from "@/components/BentoGrid";
import { getImage } from "astro:assets";
import { BsPersonBadgeFill } from "solid-icons/bs";
import {
  FaBrandsGithub,
  FaBrandsTiktok,
  FaSolidMoneyBill,
} from "solid-icons/fa";
import { FiExternalLink } from "solid-icons/fi";
import { ImLibrary } from "solid-icons/im";
// import rustScript from "../assets/RustScript.png";

// const rustScriptPng = await getImage({
//   src: rustScript,
//   format: "webp",
// });


export const projects: BentoGridItemProps[] = [
//   {
//     header: (
//       <FaSolidMoneyBill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
//     ),
//     title: "Expense Tracker iOS App",
//     icon: (
//       <a
//         href="https://github.com/wxiaoyun/expense-tracker"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Github repository for Expense Tracker"
//       >
//         <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "A desktop and iOS expense tracking application built with Tauri and SolidJS. Features include transaction management, recurring payments, financial analytics with interactive charts, automated processing via clipboard commands, and local SQLite storage with backup/restore functionality.",
//     class: "bg-neutral-50 sm:col-span-2",
//   },
//   {
//     header: (
//       <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
//     ),
//     title: "Portfolio",
//     icon: (
//       <a
//         href="https://github.com/wxiaoyun/wxiaoyun.github.io"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Github repository for portfolio"
//       >
//         <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "The current portfolio you are viewing. A minimalist design with a focus on responsive UI.  Built with Astro, Solidjs and Shadcn UI.",
//     class: "bg-neutral-50",
//   },
//   BentoSkeleton,
//   {
//     header: (
//       <img
//         src={rustScriptPng.src}
//         alt="Rustscript logo"
//         width={96}
//         height={96}
//         class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
//       />
//     ),
//     title: "Rustscript",
//     icon: (
//       <a
//         href="https://github.com/crabscript/rustscript"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Github repository for Rustscript"
//       >
//         <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "Developed a statically typed, compiled programming language combining Rust's syntax with the simplicity of TypeScript and Go with core features including primitive data types, higher-order functions, type checking, concurrency and garbage collector. The language to compile code into bytecode, akin to Java, followed by execution on a virtual machine.",
//     class: "bg-neutral-50 sm:col-span-2",
//   },
//   {
//     header: (
//       <ImLibrary class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
//     ),
//     title: "Cambodia Community Library",
//     icon: (
//       <a
//         href="https://github.com/wxiaoyun/lms-backend"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Github repository for Cambodia Community Library"
//       >
//         <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "Solo built a full stack Library Management System with role based access control for a village located at Cambodia. It is a two year school project aimed to improve literacy level in Ou Ruessei, a village located at Cambodia.",
//     class: "bg-neutral-50 sm:col-span-2",
//   },
  BentoSkeleton,
];

export const openSourceContrib: BentoGridItemProps[] = [
//   {
//     header: (
//       <img
//         src={nusModsPng.src}
//         alt="NUSMods logo"
//         width={96}
//         height={96}
//         class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
//       />
//     ),
//     title: "NUSMods Raycast Extension",
//     icon: (
//       <a
//         href="https://www.raycast.com/wxiaoyun/nusmods"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="NUSMods Raycast Extension"
//       >
//         <FiExternalLink class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "Developed a Raycast extension for NUSMods, enabling NUS students to quickly access their class schedules and module information directly from the Raycast interface.",
//     class: "bg-neutral-50 sm:col-span-2",
//   },
//   {
//     header: (
//       <img
//         src={rspackSvg.src}
//         alt="Rspack logo"
//         width={96}
//         height={96}
//         class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
//       />
//     ),
//     title: "Rspack",
//     icon: (
//       <a
//         href="https://www.rspack.dev/"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Rspack website"
//       >
//         <FiExternalLink class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "Made contribution to Webpack alignments and Javascript to Typescript migrations.",
//     class: "bg-neutral-50",
//   },
];

export const professionalExperiences: BentoGridItemProps[] = [
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Founder, CTO, Developer @ Piowsee AI",
    icon: (
      <a
        href="https://vearance.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Piowsee AI"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Built various AI solutions, notably Path.ly and pocv."
          }
        </li>
        <li>
          {
            "Full-stack and AI developer."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">12/2024 - Present</small>
    ),
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "AI Engineer Intern @ Purple Box",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Purple Box"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Developed a RAG-based QA system using Ollama, Docker, Python, and Pinecone."
          }
        </li>
        <li>
          {
            "Increased customer satisfaction by around 20%."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50",
    footer: (
      <small class="text-xs text-muted-foreground">01/2025 - 03/2025</small>
    ),
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Software Engineer @ ITB Events",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ITB Events"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Worked on frontend and backend systems for several large-scale ITB event websites (Sandbox 2.0 IEEE, TEDxITB, OSKM ITB 2025), reaching thousands of users."
          }
        </li>
        <li>
          {
            "Used Typescript, Next.js, Shadcn UI, Prisma, PostgreSQL, Supabase, Posthog."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50",
    footer: (
      <small class="text-xs text-muted-foreground">11/2024 - 09/2025</small>
    ),
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "AI and IoT Resident @ Samsung Innovation Campus",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Samsung Innovation Campus"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Reached the top 20 teams out of more than 5,000 participants."
          }
        </li>
        <li>
          {
            "Developed a fire detection system utilizing ESP32 sensors and computer vision with YOLO v8. Deployed on Streamlit with MongoDB integration."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50 sm:col-span-2",
    footer: (
      <small class="text-xs text-muted-foreground">02/2024 - 09/2024</small>
    ),
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Data Scientist Intern @ Home Credit Indonesia",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Home Credit Indonesia"
      >
        <FiExternalLink />
      </a>
    ),
    description:
      "Developed ML models for loan prediction, best model achieved 91% accuracy. Project-based virtual internship with Rakamin Academy.",
    class: "bg-neutral-50",
    footer: (
      <small class="text-xs text-muted-foreground">03/2024 - 04/2024</small>
    ),
  },
  {
    header: (
      <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Data Science and ML Member @ Google Developer Student Club ITB",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GDSC ITB"
      >
        <FiExternalLink />
      </a>
    ),
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Won an internal competition for predicting sales based on features."
          }
        </li>
        <li>
          {
            "Developed deep learning classification models and conducted tweet sentiment analysis using the Twitter API with both pretrained and non-pretrained models."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50",
    footer: (
      <small class="text-xs text-muted-foreground">10/2023 - 07/2024</small>
    ),
  },
];