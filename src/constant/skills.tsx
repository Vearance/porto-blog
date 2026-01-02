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

export const SkillsIcons = [
  ...skillIcons
    .filter(icon => icon !== "simple-icons:langfuse" && icon !== "simple-icons:pinecone")
    .map((icon) => (
      <iconify-icon
        icon={icon}
        width="80"
        height="80"
        class="opacity-60 hover:opacity-80 transition-opacity"
      />
    )),
  <img src={langfuseIcon.src} alt="Langfuse" width="80" height="80" class="opacity-60 hover:opacity-90 transition-opacity select-none pointer-events-none" draggable="false" />,
  <img src={pineconeIcon.src} alt="Pinecone" width="80" height="80" class="opacity-70 hover:opacity-100 transition-opacity select-none pointer-events-none" draggable="false" />,
];