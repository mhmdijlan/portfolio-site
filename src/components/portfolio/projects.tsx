import { ArrowUpRight, KeyRound } from "lucide-react";
import { posDemoMessage, projects, type Project } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects({ onRequestDemo }: { onRequestDemo: (message: string) => void }) {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Selected work" title="Production sites and systems." />

        {featured ? <FeaturedProject project={featured} onRequestDemo={onRequestDemo} /> : null}

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onRequestDemo={onRequestDemo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({
  project,
  onRequestDemo,
}: {
  project: Project;
  onRequestDemo: (message: string) => void;
}) {
  return (
    <Reveal>
      <article className="shine grid overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[0_0_0_1px_rgb(61_90_254/0.5),0_24px_50px_-28px_rgb(61_90_254/0.5)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-56 overflow-hidden bg-background md:min-h-[22rem]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="img-frame project-shot transition-transform duration-500 ease-out hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 rounded-md bg-background/80 px-2.5 py-1 font-display text-xs font-semibold tracking-widest text-mint backdrop-blur-sm">
            {project.number}
          </span>
        </div>
        <div className="flex flex-col p-6 md:p-8">
          <p className="text-xs font-medium tracking-[0.18em] text-mint uppercase">
            {project.kicker}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-muted md:text-base">{project.summary}</p>
          <ul className="mt-5 space-y-2 text-sm text-muted">
            {project.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <TechRow tech={project.tech} />
          <ProjectCta project={project} onRequestDemo={onRequestDemo} />
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({
  project,
  onRequestDemo,
}: {
  project: Project;
  onRequestDemo: (message: string) => void;
}) {
  return (
    <article className="shine flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgb(61_90_254/0.5),0_24px_50px_-28px_rgb(61_90_254/0.5)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <img
          src={project.image}
          alt={project.imageAlt}
            className="img-frame project-shot transition-transform duration-500 ease-out hover:scale-[1.05]"
        />
        <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 font-display text-[0.7rem] font-semibold tracking-widest text-mint backdrop-blur-sm">
          {project.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.7rem] font-medium tracking-[0.16em] text-mint uppercase">
          {project.kicker}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-4 text-sm text-muted">{project.summary}</p>
        <TechRow tech={project.tech} />
        <div className="mt-auto">
          <ProjectCta project={project} onRequestDemo={onRequestDemo} />
        </div>
      </div>
    </article>
  );
}

function TechRow({ tech }: { tech: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {tech.map((tag) => (
        <span
          key={tag}
          className="rounded-full px-2.5 py-1 text-[0.7rem] font-medium text-muted shadow-[0_0_0_1px_rgb(255_255_255/0.1)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectCta({
  project,
  onRequestDemo,
}: {
  project: Project;
  onRequestDemo: (message: string) => void;
}) {
  if (project.demoRequest) {
    return (
      <button
        type="button"
        onClick={() => onRequestDemo(posDemoMessage)}
        className="mt-6 inline-flex h-11 items-center gap-2 self-start rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.96]"
      >
        <KeyRound className="size-4" aria-hidden />
        {project.cta}
      </button>
    );
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex h-11 items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors duration-150 hover:text-mint"
    >
      {project.cta}
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  );
}
