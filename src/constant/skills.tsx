import pineconeIcon from "@/assets/pinecone.svg";
import langfuseIcon from "@/assets/langfuse.svg";
import type { JSX } from "solid-js";

const aiMLSkills = [
  "simple-icons:langchain",
  "simple-icons:langgraph",
  "simple-icons:langfuse",
  "simple-icons:ollama",
  "simple-icons:mlflow",
  "simple-icons:pinecone",
  "simple-icons:pytorch",
  "simple-icons:tensorflow",
  "simple-icons:keras",
  "simple-icons:numpy",
  "simple-icons:pandas",
  "simple-icons:pydantic",
];

const webDevSkills = [
  "simple-icons:react",
  "simple-icons:nextdotjs",
  "simple-icons:astro",
  "simple-icons:solid",
  "simple-icons:javascript",
  "simple-icons:typescript",
  "simple-icons:html5",
  "simple-icons:css3",
  "simple-icons:tailwindcss",
  "simple-icons:nodedotjs",
  "simple-icons:hono",
  "simple-icons:fastapi",
  "simple-icons:flask",
  "simple-icons:php",
  "simple-icons:python",
  "simple-icons:go",
  "simple-icons:rust",
  "devicon-plain:java",
  "simple-icons:cplusplus",
  "simple-icons:csharp",
  "simple-icons:graphql",
  "simple-icons:stripe",
  "simple-icons:posthog",
  "simple-icons:scalar",
  "simple-icons:firebase",
  "simple-icons:jest",
  "simple-icons:bun",
  "simple-icons:bruno",
  "simple-icons:reactquery",
];

const databaseInfraSkills = [
  "simple-icons:postgresql",
  "simple-icons:mongodb",
  "simple-icons:redis",
  "simple-icons:supabase",
  "simple-icons:drizzle",
  "simple-icons:prisma",
  "simple-icons:docker",
  "simple-icons:kubernetes",
  "simple-icons:git",
];

const parseSkillName = (icon: string): string => {
  const name = icon.split(":")[1] || icon;
  
  const nameMap: Record<string, string> = {
    cplusplus: "C++",
    csharp: "C#",
    css3: "CSS",
    html5: "HTML",
    nextdotjs: "Next.js",
    nodedotjs: "Node.js",
    mlflow: "MLflow",
    tailwindcss: "Tailwind CSS",
    solid: "SolidJS",
    reactquery: "TanStack Query",
  };

  if (nameMap[name]) return nameMap[name];

  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
};

const createSkillIcon = (icon: string): JSX.Element => {
  if (icon === "simple-icons:langfuse") {
    return (
      <span title="Langfuse" class="cursor-pointer">
        <img src={langfuseIcon.src} alt="Langfuse" width="80" height="80" class="opacity-60 hover:opacity-90 transition-opacity select-none" draggable="false" />
      </span>
    );
  }
  
  if (icon === "simple-icons:pinecone") {
    return (
      <span title="Pinecone" class="cursor-pointer">
        <img src={pineconeIcon.src} alt="Pinecone" width="80" height="80" class="opacity-70 hover:opacity-100 transition-opacity select-none" draggable="false" />
      </span>
    );
  }

  return (
    <span title={parseSkillName(icon)} class="cursor-pointer">
      <iconify-icon
        icon={icon}
        width="80"
        height="80"
        class="opacity-60 hover:opacity-80 transition-opacity"
      />
    </span>
  );
};

export const skillCategories = [
  {
    title: "AI/ML & Data Science",
    skills: aiMLSkills.map(createSkillIcon),
  },
  {
    title: "Web Development & Programming",
    skills: webDevSkills.map(createSkillIcon),
  },
  {
    title: "Databases & Infrastructure",
    skills: databaseInfraSkills.map(createSkillIcon),
  },
];

export const SkillsIcons = [
  ...aiMLSkills.map(createSkillIcon),
  ...webDevSkills.map(createSkillIcon),
  ...databaseInfraSkills.map(createSkillIcon),
];