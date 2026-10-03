import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { site, hero } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-center pt-16">
      <div className="section-shell px-[10px] md:px-12 lg:px-24 grid w-full items-end gap-10 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 md:py-24">
        <div>
          <p className="hero-in hero-d1 mb-5 font-sans text-sm font-medium tracking-[0.18em] text-mint uppercase">
            {hero.greeting}
          </p>
          <h1 className="hero-in hero-d2 hero-name font-display font-extrabold tracking-tight text-foreground">
            {hero.name}
          </h1>
          <p className="hero-in hero-d3 mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-medium text-foreground md:text-2xl">
            <span>{hero.title}</span>
            <span className="text-primary" aria-hidden>
              /
            </span>
            <span className="text-muted">{site.location}</span>
          </p>
          <p className="hero-in hero-d4 mt-6 max-w-xl text-base text-muted md:text-lg">
            {hero.lede}
          </p>
          <div className="hero-in hero-d5 mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-blue-500 px-5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96]"
            >
              View selected work
              <ArrowDownRight className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-semibold text-foreground shadow-[0_0_0_1px_rgb(255_255_255/0.14)] transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-foreground/5 hover:shadow-[0_0_0_1px_rgb(100_255_218/0.45)] active:scale-[0.96]"
            >
              Get in touch
            </a>
          </div>
          <div className="hero-in hero-d6 mt-10 flex flex-col gap-3 md:hidden">
            <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
              {site.availability}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted hover:text-mint"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted hover:text-mint"
              >
                GitHub
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted hover:text-mint"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <aside className="hero-in hero-d6 hidden w-56 flex-col gap-5 md:flex">
          <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
            {site.availability}
          </p>
          <div className="h-px bg-line" />
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint"
          >
            LinkedIn
            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint"
          >
            GitHub
            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint"
          >
            WhatsApp
            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </aside>
      </div>
    </section>
  );
}
