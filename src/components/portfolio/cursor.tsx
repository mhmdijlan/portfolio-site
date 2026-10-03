import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setOn(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!on) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(180_200_255/0.22),transparent_70%)] md:block"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
