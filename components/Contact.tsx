"use client";
import { cn } from "@/lib/utils";
import { FlipWords } from "./ui/flip-words";
import Link from "next/link";

const Contact = () => {
  const words = ["me", "Gaganpreet"];
  return (
    <div className=" flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900">

      <div className="h-[6rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Contact
          <FlipWords words={words} /> <br />
        </div>
      </div>

      {/* Contact Card */}
      <div className="relative bg-white/10 dark:bg-white/5 border border-neutral-300/30 dark:border-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 max-w-md w-full transition-all hover:scale-[1.02] hover:shadow-2xl">
        <div className="flex flex-col items-start space-y-4">
          <p className="text-md text-gray-200">
            📧 Email:{" "}
            <a
              href="mailto:gaganpreetkaur1409@gmail.com"
              className="underline hover:text-purple-400"
            >
              gaganpreetkaur1409@gmail.com
            </a>
          </p>
          <p className="text-md text-gray-200">
            🔗 LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/gaganpreet-kaur1"
              target="_blank"
              className="underline hover:text-purple-400"
            >
              gaganpreet-kaur1
            </Link>
          </p>
          <p className="text-md text-gray-200">
            💻 GitHub:{" "}
            <Link
              href="https://github.com/Gaganpreet14"
              target="_blank"
              className="underline hover:text-purple-400"
            >
              Gaganpreet14
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
