import { education, experience } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Path" title="Experience and education." />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <h3 className="mb-6 text-xs font-medium tracking-[0.2em] text-muted uppercase">
              Work
            </h3>
            {experience.map((job) => (
              <Reveal key={job.org}>
                <article className="relative border-l border-line pl-6">
                  <span
                    className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-primary shadow-[0_0_0_4px_rgb(61_90_254/0.2)]"
                    aria-hidden
                  />
                  <p className="text-xs font-medium tracking-[0.14em] text-mint uppercase">
                    {job.period}
                  </p>
                  <h4 className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {job.role}
                  </h4>
                  <p className="mt-1 text-sm text-muted">{job.org}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted md:text-base">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-mint" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium tracking-[0.2em] text-muted uppercase">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
                        {item.period}
                      </p>
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-mint uppercase">
                        {item.note}
                      </span>
                    </div>
                    <h4 className="mt-3 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{item.org}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
