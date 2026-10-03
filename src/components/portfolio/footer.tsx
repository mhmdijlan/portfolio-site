import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Built for the next role.
        </p>
        <a href="#home" className="text-muted transition-colors duration-150 hover:text-mint">
          Back to top
        </a>
      </div>
    </footer>
  );
}
