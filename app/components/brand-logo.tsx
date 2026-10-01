import Image from "next/image";

export function BrandLogo({ compact = false, priority = false }: { compact?: boolean; priority?: boolean }) {
  return <span className={compact ? "brand-logo compact" : "brand-logo"}>
    <Image src="/logo-recepia-transparent.png" alt="" width={96} height={96} sizes="40px" priority={priority} />
  </span>;
}
