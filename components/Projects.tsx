import { HoverEffect } from "./ui/card-hover-effect";
import { FlipWords } from "./ui/flip-words";

export function Projects() {
  const words = ["Projects", "My Works"];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex justify-center items-center pt-8 px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          About
          <FlipWords words={words} /> <br />
        </div>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Hospital Management System",
    tech: "React jS, Firebase, Material UI",
    description:
      "The Hospital Management System is a comprehensive web application designed to streamline and digitize various administrative and operational processes within a hospital environment. It provides tailored dashboards and functionalities for different roles — Patient, Doctor, and Super Admin — ensuring secure, role-based access and efficient management of hospital operations.",
  },
  {
    title: "Anime Talks",
    tech: "Java Swing, Oracle",
    description:
      "The Anime Details project is a desktop-based application designed to provide comprehensive information about various anime series. It allows users to browse, search, and explore key features of anime titles including genre, episodes, ratings, and release details.", 
  },
  {
    title: "College Website",
    tech: "HTML, CSS, JavaScript",
    description:
      "The College Website is a static, responsive website designed to present essential information about a college in a clean and accessible format. It serves as an informational portal for students, faculty, and visitors.",
  },
   {
    title: "Simon Say Game",
    tech: "HTML, CSS, JavaScript",
    description:
      "The Simon Says Game is a fun and interactive memory game where users must replicate a growing sequence of patterns. With each round, the sequence becomes longer, challenging the player’s memory and focus.",
  },
   {
    title: "To Do List",
    tech: "HTML, CSS, JavaScript",
    description:
      "The To-Do App is a simple and efficient task management tool that allows users to keep track of their daily activities and stay organized. It provides a clean interface for creating, viewing, updating, and deleting tasks.",
  },
];
