import { Icon } from "./icons";
import { BrandLogo } from "./brand-logo";

export function Navigation({ bookingUrl }: { bookingUrl: string }) {
  return <header className="nav-wrap"><nav className="nav shell" aria-label="Navegación principal">
    <a className="brand" href="#inicio"><BrandLogo priority /><span>Recep<span>IA</span></span></a>
    <div className="nav-links"><a href="#como-funciona">Cómo funciona</a><a href="#plataforma">Capacidades</a><a href="#seguridad">Seguridad</a></div>
    <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer">Agendar demo <Icon name="arrow" /></a>
  </nav></header>;
}
