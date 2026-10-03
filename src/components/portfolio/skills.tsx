import { skillGroups, techMarquee } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Skills() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="The stack I actually ship with."
        />
        <Reveal>
          <p className="mb-10 max-w-2xl text-base text-muted md:text-lg">
            Core web technologies, CMS platforms, and the AI-assisted workflow I
            use to move faster without skipping review. Comfortable from theme
            work to custom PHP systems and VPS deployment.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <article className="rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)] md:p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-background px-3 py-1.5 text-sm text-foreground shadow-[0_0_0_1px_rgb(255_255_255/0.1)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-line py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track" aria-hidden>
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase"
            >
              {item}
              <span className="ml-10 text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
