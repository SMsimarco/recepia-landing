"use client";

import type { PointerEvent, ReactNode } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const move = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--spot-x", `${x}px`);
    event.currentTarget.style.setProperty("--spot-y", `${y}px`);
    event.currentTarget.style.setProperty("--card-rx", `${((y / rect.height) - .5) * -3}deg`);
    event.currentTarget.style.setProperty("--card-ry", `${((x / rect.width) - .5) * 3}deg`);
  };
  const reset = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--card-rx", "0deg");
    event.currentTarget.style.setProperty("--card-ry", "0deg");
  };
  return <article className={`spotlight-card view-reveal ${className}`} onPointerMove={move} onPointerLeave={reset}>{children}</article>;
}
