import { useCallback, useState } from "react";
import { About } from "./about";
import { Contact } from "./contact";
import { CursorGlow } from "./cursor";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { Projects } from "./projects";
import { Skills } from "./skills";

export function PortfolioPage() {
  const [prefill, setPrefill] = useState("");

  const onRequestDemo = useCallback((message: string) => {
    setPrefill(message);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.getElementById("message")?.focus();
    }, 450);
  }, []);

  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Projects onRequestDemo={onRequestDemo} />
        <About />
        <Skills />
        <Experience />
        <Contact prefill={prefill} />
      </main>
      <Footer />
    </div>
  );
}
