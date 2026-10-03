import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Contact({ prefill }: { prefill: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (prefill) {
      setMessage(prefill);
      setSent(false);
    }
  }, [prefill]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" title="Let's build the next one." />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="max-w-md text-base text-muted md:text-lg">
              Hiring for a Web Developer, need a WordPress or Shopify build, or
              want a demo login for the POS system? Send a note — I typically
              reply the same day.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 text-foreground transition-colors duration-150 hover:text-mint"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                    <Phone className="size-4" />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-foreground transition-colors duration-150 hover:text-mint"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                    <Mail className="size-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]">
                  <MapPin className="size-4" />
                </span>
                {site.location}
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
              <Social href={site.linkedin} label="LinkedIn" />
              <Social href={site.github} label="GitHub" />
              <Social href={site.whatsapp} label="WhatsApp" />
              <Social href={site.x} label="X" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={onSubmit}
              className="rounded-xl bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)] md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="field-input"
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="field-input"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field label="Message" htmlFor="message" className="mt-4">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="field-input min-h-36 resize-y"
                  placeholder="Role, project, or POS demo request…"
                />
              </Field>
              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96] sm:w-auto sm:px-8"
              >
                Send message
              </button>
              {sent ? (
                <p className="mt-3 text-sm text-mint">
                  Opening your email client. If it doesn't appear, write me at{" "}
                  {site.email} or WhatsApp.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={className} htmlFor={htmlFor}>
      <span className="mb-2 block text-xs font-medium tracking-[0.14em] text-muted uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-150 hover:text-mint"
    >
      {label}
      <ArrowUpRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
