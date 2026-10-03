import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p className="mb-3 font-sans text-xs font-medium tracking-[0.22em] text-mint uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
