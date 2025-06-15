import React from "react";
import { FlipWords } from "./ui/flip-words";

const AboutMe = () => {
  const words = ["me", "Gaganpreet"];
  return (
    <div className="p-4 text-justify">
      <div className="h-[6rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          About
          <FlipWords words={words} /> <br />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="p-8 border-2 border-neutral-300 rounded-xl bg-white shadow-md dark:bg-neutral-900 dark:border-neutral-700 transition-all max-w-3/4 leading-loose">
          <p>
            Hi! I&apos;m <strong>Gaganpreet Kaur</strong>, and I&apos;ve always been drawn
            to the world of technology. It&apos;s really fascinating that how much we can build
            and solve just by writing code. Whether it&apos;s developing websites or
            understanding how software works behind the scenes, I enjoy figuring
            out how everything connects and functions.
          </p>
          <p>
            I especially like working with <strong>Java</strong>—it&apos;s helped me
            grasp the logic behind programs and made me more confident with
            structured thinking. I also really enjoy
            <strong>
              problem-solving in Data Structures and Algorithms (DSA)
            </strong>
          </p>
          <p>
            Lately, I&apos;ve been diving into <strong>Web development</strong>, and
            I find it both creative and rewarding.
            <strong>JavaScript</strong> has become one of my favorite tools—it&apos;s
            powerful, flexible, and full of little surprises that keep things
            interesting.
          </p>
          <ul>
            Beyond the screen, I enjoy:
            <li>
              ♟ Playing chess - it sharpens my thinking and strategic skills
            </li>
            <li>🎨 Painting - my creative outlet and stress-buster</li>
            <li>📚 Reading books - to learn and reflect</li>
            <li>
              🎶 Listening to music & watching anime - my way to relax and
              recharge
            </li>
          </ul>
          I&apos;m always eager to explore more technologies, deepen my
          understanding of problem-solving, and grow into a well-rounded
          developer and future data scientist.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
