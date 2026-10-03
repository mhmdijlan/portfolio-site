import { about, highlights } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="Building sites that earn their keep." />

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm md:mx-0">
              <div className="absolute -inset-3 rounded-xl bg-primary/20 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-xl bg-card p-2 shadow-[0_0_0_1px_rgb(61_90_254/0.35)]">
                <img
                  src="/images/profile.jpg"
                  alt="Mohomed Ijilaan"
                  className="img-frame aspect-[4/5] w-full rounded-lg object-cover object-top"
                />
              </div>
              <p className="mt-4 text-sm text-muted">
                First Class Software Engineering · Kandy, Sri Lanka
              </p>
            </div>
          </Reveal>

          <div>
            <div className="space-y-4 text-base text-muted md:text-lg">
              {about.paragraphs.map((p) => (
                <Reveal key={p.slice(0, 24)}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {about.facts.map((fact, i) => (
                <Reveal key={fact.label} delay={i * 60}>
                  <div className="rounded-lg bg-card p-4 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                    <p className="text-[0.7rem] font-medium tracking-[0.16em] text-mint uppercase">
                      {fact.label}
                    </p>
                    <p className="mt-2 font-display text-sm font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="h-full rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
