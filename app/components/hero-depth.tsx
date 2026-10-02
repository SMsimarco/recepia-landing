"use client";

import { useEffect, useRef } from "react";
import { Icon } from "./icons";

export function HeroDepth() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!scene || reducedMotion.matches) return;

    let frame = 0;
    const updatePointer = (event: PointerEvent) => {
      if (window.innerWidth < 1080 || event.pointerType === "touch") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        scene.style.setProperty("--hero-x", ((event.clientX / window.innerWidth) - .5).toFixed(3));
        scene.style.setProperty("--hero-y", ((event.clientY / window.innerHeight) - .5).toFixed(3));
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return <div className="hero-depth" ref={sceneRef} aria-hidden="true">
    <div className="hero-depth-grid" />
    <div className="depth-ring depth-ring-outer"><i /><i /><i /></div>
    <div className="depth-ring depth-ring-inner"><i /><i /></div>

    <div className="depth-node depth-node-voice">
      <span><Icon name="phone" /></span><div><strong>VOZ</strong><small>Canal activo</small></div><i />
    </div>
    <div className="depth-node depth-node-agenda">
      <span><Icon name="calendar" /></span><div><strong>AGENDA</strong><small>Sincronizada</small></div><i />
    </div>
    <div className="depth-node depth-node-message">
      <span><Icon name="message" /></span><div><strong>WHATSAPP</strong><small>En línea</small></div><i />
    </div>
  </div>;
}
