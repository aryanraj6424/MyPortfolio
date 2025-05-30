import Image from "next/image";
import HeroSection from "./components/homepage/hero-section";
import About from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Education from "./components/homepage/education";
import ContactSection from "./components/homepage/contact";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Education />
    <ContactSection />
    </>
  );
}

import HomeClient from "./components/HomeClient";

export default function Page() {
  return (
    <main>
      <HomeClient />
    </main>
  );
}

