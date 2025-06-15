"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

const skills = [
  {
    name: "HTML",
    icon: "/icons/html.jpg",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It defines the structure of content on the web."
  },
  {
    name: "CSS",
    icon: "/icons/css.jpeg",
    description:
      "CSS (Cascading Style Sheets) is used to style HTML content. It controls layout, colors, fonts, and visual effects in websites."
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.jpeg",
    description:
      "JavaScript is the scripting language of the web, allowing developers to build dynamic and interactive web applications."
  },
  {
    name: "Java",
    icon: "/icons/java.png",
    description:
      "Java is a versatile, object-oriented programming language used for building cross-platform applications, from mobile to enterprise systems."
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.png",
    description:
      "MySQL is a popular open-source relational database management system used for storing and managing structured data."
  },
  {
    name: "React.js",
    icon: "/icons/react.png",
    description:
      "React.js is a JavaScript library for building user interfaces. It's known for its component-based architecture and efficient rendering."
  },
  {
    name: "Node.js",
    icon: "/icons/nodejs.png",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows for building scalable server-side and networking applications."
  },
  {
    name: "Material UI",
    icon: "/icons/materialui.png",
    description:
      "Material UI is a popular React UI framework that implements Google's Material Design, offering reusable components and design consistency."
  },
  {
    name: "Bootstrap",
    icon: "/icons/bootstrap.png",
    description:
      "Bootstrap is a powerful CSS framework for developing responsive and mobile-first websites with prebuilt design components."
  }
];


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const words = ["Skills"];

  return (
    <>
          <div className="h-[6rem] flex justify-center items-center px-4">
                <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                  About
                  <FlipWords words={words} /> <br />
                </div>
                </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`cursor-pointer border rounded-xl p-3 bg-neutral-800 hover:bg-neutral-700 transition-all flex justify-center items-center ${
              selectedSkill.name === skill.name ? "ring-2 ring-purple-500" : ""
            }`}
            onClick={() => setSelectedSkill(skill)}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 text-white shadow-md">
        <div className="flex flex-col items-center text-center">
          <Image
            src={selectedSkill.icon}
            alt={selectedSkill.name}
            width={80}
            height={80}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedSkill.name}</h2>
          <p className="text-gray-300 leading-relaxed">
            {selectedSkill.description}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
