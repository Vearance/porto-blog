import { BentoSkeleton, type BentoGridItemProps } from "@/components/BentoGrid";
import { getImage } from "astro:assets";
import {
  FaBrandsGithub,
  FaBrandsTelegram,
  FaSolidBox,
  FaSolidComments,
  FaSolidFire,
  FaSolidFileLines,
} from "solid-icons/fa";
import { FiExternalLink } from "solid-icons/fi";

import itb from "../assets/itb.svg";
import hc from "../assets/homecredit.svg";
import valo from "../assets/valo.svg";
import tunes from "../assets/navidrome.svg";

const itbPng = await getImage({
  src: itb,
  format: "svg",
});
const hcPng = await getImage({
  src: hc,
  format: "svg",
});
const valoPng = await getImage({
  src: valo,
  format: "svg",
});
const tunesPng = await getImage({
  src: tunes,
  format: "png",
});

export const projects: BentoGridItemProps[] = [
 {
    header: (
      <img
        src={valoPng.src}
        alt="Valorant Live Score Browser Extension"
        width={60}
        height={60}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md grayscale"
      />
    ),
    title: "Valorant Live Score Browser Extension",
    icon: (
      <a
        href="https://github.com/Vearance/val-extension"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for VCT Live Score"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Live score browser extension for VCT matches, for Chrome and Firefox.",
    class: "bg-neutral-50 sm:col-span-1",
  },
    {
    header: (
        <img
          src={tunesPng.src}
          alt="Veatunes logo"
          width={64}
          height={64}
          class="m-auto group-hover/bento:rotate-3 transition-all rounded-md select-none pointer-events-none grayscale opacity-75"
        />
    ),
    title: "Navidrome UI",
    icon: (
      <a
        href="https://github.com/Vearance/veatunes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Veatunes"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Modern web music player for Navidrome music server using Subsonic API for streaming and library management.",
    class: "bg-neutral-50 sm:col-span-1",
  },
    {
    header: (
      <FaSolidFileLines class="w-16 h-16 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "AI CV Builder",
    icon: (
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for pocv"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "AI-powered CV builder that generates professional resumes with smart formatting and content suggestions.",
    class: "bg-neutral-50 sm:col-span-1",
  },
  {
    header: (
      <FaBrandsTelegram class="w-18 h-18 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Telegram AI Agent",
    icon: (
      <a
        href="https://github.com/Vearance/gemini-tele"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Telegram AI Agent"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Real-time AI-powered Telegram bot with NLP capabilities for conversational query processing.",
    class: "bg-neutral-50 sm:col-span-1",
  },
  {
    header: (
      <FaSolidComments class="w-18 h-18 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Presidential Debate Sentiment Analysis",
    icon: (
      <a
        href="https://github.com/Vearance/presidential-sentiment-analysis"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Sentiment Analysis"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "NLP sentiment analysis on Twitter discussions about Indonesian election and its presidential candidates in 2024.",
    class: "bg-neutral-50 sm:col-span-1",
  },
  {
    header: (
      <FaSolidFire class="w-18 h-18 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "Fire Detection System",
    icon: (
      <a
        href="https://github.com/Vearance/sic-final"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github repository for Fire Detection System"
      >
        <FaBrandsGithub class="hover:opacity-65 transition-opacity" />
      </a>
    ),
    description:
      "Fire detection with ESP32 sensors and YOLO v8 computer vision, deployed on Streamlit with MongoDB integration.",
    class: "bg-neutral-50 sm:col-span-1",
  },
];

export const openSourceContrib: BentoGridItemProps[] = [
//   {
//     header: (
//       <img
//         src={Png.src}
//         alt="logo"
//         width={96}
//         height={96}
//         class="m-auto group-hover/bento:rotate-3 transition-all rounded-md"
//       />
//     ),
//     title: "",
//     icon: (
//       <a
//         href="https://"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label=""
//       >
//         <FiExternalLink class="hover:opacity-65 transition-opacity" />
//       </a>
//     ),
//     description:
//       "",
//     class: "bg-neutral-50 sm:col-span-2",
//   },
];

export const professionalExperiences: BentoGridItemProps[] = [
//   {
//     header: (
//       <BsPersonBadgeFill class="w-24 h-24 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
//     ),
//     title: "Founder, CTO, Developer @ Piowsee AI",
//     description: (
//       <ul class="list-inside list-disc">
//         <li>
//           {
//             "Built various AI solutions, notably Path.ly and pocv."
//           }
//         </li>
//         <li>
//           {
//             "Full-stack and AI developer."
//           }
//         </li>
//       </ul>
//     ),
//     class: "bg-neutral-50 sm:col-span-2",
//     footer: (
//       <small class="text-xs text-muted-foreground">12/2024 - Present</small>
//     ),
//   },
  {
    header: (
      <FaSolidBox class="w-18 h-18 m-auto opacity-70 group-hover/bento:rotate-3 transition-all" />
    ),
    title: "AI Engineer Intern @ Purple Box (Startup)",
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Developed a Document RAG Question-Answering system using Ollama for LLM inference, Docker, Python, and Pinecone."
          }
        </li>
        <li>
          {
            "Implemented end-to-end pipeline including document ingestion, embedding generation, similarity search, and response generation with context awareness."
          }
        </li>
        <li>
          {
            "Increased customer satisfaction scores by around 20% through improved response accuracy and reduced query resolution time."
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
      <img
        src={itbPng.src}
        alt="ITB logo"
        width={84}
        height={84}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md select-none pointer-events-none"
      />
    ),
    title: "Software Engineer @ ITB Events — IEEE, TEDxITB, OSKM ITB",
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Architected and implemented full-stack solutions for multiple large-scale ITB event websites, handling registration, ticketing, and management systems that collectively served thousands of users."
          }
        </li>
        <li>
          {
            "Backend Stack: Hono, Scalar, TypeScript"
          }
        </li>
        <li>
          {
            "Frontend Stack: Next.js, Shadcn UI"
          }
        </li>
        <li>
          {
            "Database & Services: Prisma, PostgreSQL, Supabase, Posthog"
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
      <img
        src={hcPng.src}
        alt="Home Credit logo"
        width={80}
        height={80}
        class="m-auto group-hover/bento:rotate-3 transition-all rounded-md select-none pointer-events-none grayscale"
      />
    ),
    title: "Data Scientist Intern @ Home Credit Indonesia",
    description: (
      <ul class="list-inside list-disc">
        <li>
          {
            "Developed and optimized multiple machine learning models for loan approval prediction and credit risk assessment, achieving 91% accuracy."
          }
        </li>
        <li>
          {
            "Project-based internship through Rakamin Academy."
          }
        </li>
      </ul>
    ),
    class: "bg-neutral-50",
    footer: (
      <small class="text-xs text-muted-foreground">03/2024 - 04/2024</small>
    ),
  },
];