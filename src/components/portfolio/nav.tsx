import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200",
        scrolled || open
          ? "bg-background/80 shadow-[0_0_0_1px_rgb(255_255_255/0.06)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="section-shell flex h-16 items-center justify-between md:h-[4.25rem]">


        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150",
                active === item.href
                  ? "text-mint"
                  : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-blue-500 px-4 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96] md:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            Curriculum Vitae
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-line transition-[max-height,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-lg font-medium text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.cv}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-500 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600"
          >
            <Download className="size-4" aria-hidden />
            Download Curriculum Vitae
          </a>
        </nav>
      </div>
    </header>
  );
}
