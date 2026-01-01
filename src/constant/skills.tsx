const skillIcons = [
  "simple-icons:astro",
  "simple-icons:css3",
  "simple-icons:html5",
  "simple-icons:graphql",
  "simple-icons:javascript",
  "simple-icons:kubernetes",
  "simple-icons:nextdotjs",
  "simple-icons:nodedotjs",
  "simple-icons:numpy",
  "simple-icons:pandas",
  "simple-icons:postgresql",
  "simple-icons:prisma",
  "simple-icons:pytorch",
  "simple-icons:react",
  "simple-icons:redis",
  "simple-icons:rust",
  "simple-icons:solid",
  "simple-icons:tailwindcss",
  "simple-icons:tensorflow",
  "simple-icons:typescript",
  "simple-icons:langchain",
  "simple-icons:langgraph",
  "simple-icons:docker",
  "simple-icons:go",
  "simple-icons:php",
  "simple-icons:python",
  "simple-icons:git",
];

export const SkillsIcons = skillIcons.map((icon) => (
  <iconify-icon
    icon={icon}
    width="80"
    height="80"
    class="opacity-60 hover:opacity-80 transition-opacity"
  />
));