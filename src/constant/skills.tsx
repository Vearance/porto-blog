import pineconeIcon from "@/assets/pinecone.svg";
import langfuseIcon from "@/assets/langfuse.svg";

const skillIcons = [
  "simple-icons:astro",
  "simple-icons:cplusplus",
  "simple-icons:csharp",
  "simple-icons:css3",
  "simple-icons:docker",
  "simple-icons:drizzle",
  "simple-icons:fastapi",
  "simple-icons:firebase",
  "simple-icons:flask",
  "simple-icons:git",
  "simple-icons:go",
  "simple-icons:graphql",
  "simple-icons:html5",
  "simple-icons:hono",
  "devicon-plain:java",
  "simple-icons:javascript",
  "simple-icons:jest",
  "simple-icons:keras",
  "simple-icons:kubernetes",
  "simple-icons:langchain",
  "simple-icons:langfuse",
  "simple-icons:langgraph",
  "simple-icons:mlflow",
  "simple-icons:mongodb",
  "simple-icons:nextdotjs",
  "simple-icons:nodedotjs",
  "simple-icons:numpy",
  "simple-icons:ollama",
  "simple-icons:pandas",
  "simple-icons:php",
  "simple-icons:pinecone",
  "simple-icons:posthog",
  "simple-icons:postgresql",
  "simple-icons:prisma",
  "simple-icons:pydantic",
  "simple-icons:pytorch",
  "simple-icons:python",
  "simple-icons:react",
  "simple-icons:redis",
  "simple-icons:rust",
  "simple-icons:solid",
  "simple-icons:scalar",
  "simple-icons:stripe",
  "simple-icons:supabase",
  "simple-icons:tailwindcss",
  "simple-icons:tensorflow",
  "simple-icons:typescript",
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
    tailwindcss: "Tailwind CSS",
    solid: "SolidJS",
  };

  if (nameMap[name]) return nameMap[name];

  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
};

export const SkillsIcons = [
  ...skillIcons
    .filter(icon => icon !== "simple-icons:langfuse" && icon !== "simple-icons:pinecone")
    .map((icon) => (
      <span title={parseSkillName(icon)} class="cursor-pointer">
        <iconify-icon
          icon={icon}
          width="80"
          height="80"
          class="opacity-60 hover:opacity-80 transition-opacity"
        />
      </span>
    )),
  <span title="Langfuse" class="cursor-pointer">
    <img src={langfuseIcon.src} alt="Langfuse" width="80" height="80" class="opacity-60 hover:opacity-90 transition-opacity select-none" draggable="false" />
  </span>,
  <span title="Pinecone" class="cursor-pointer">
    <img src={pineconeIcon.src} alt="Pinecone" width="80" height="80" class="opacity-70 hover:opacity-100 transition-opacity select-none" draggable="false" />
  </span>,
];