"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Spotlight />
        Hii Everyone! I&apos;m <br />
        <Highlight className="text-black dark:text-white">
          Gaganpreet Kaur
        </Highlight>
        <br />
      </motion.h1>

      <div className="flex justify-center">
        <div className="max-w-89vw text-center">
          <TextGenerateEffect className="text-center pt-5 text-purple-600 sm:text-xs md:text-xs lg:text-2xl max-w-96" words="An Aspiring Web Developer looking for more opportunities to learn and grow..." />
        </div>
      </div>
    </HeroHighlight>
  );
}
