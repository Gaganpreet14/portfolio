import { NavbarDemo } from "@/components/ui/Navbar";
import { HeroHighlightDemo } from "../components/Hero";
import AboutMe from "@/components/AboutMe";
import { Projects } from "../components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-10xl w-full">
        <NavbarDemo />
        <HeroHighlightDemo />
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
         <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}
