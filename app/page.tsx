import { BrandLogo } from "./components/brand-logo";
import { BentoGrid } from "./components/bento-grid";
import { HeroVisual } from "./components/hero-visual";
import { Icon } from "./components/icons";
import { Navigation } from "./components/navigation";

const CAL_LINK = "https://cal.com/simon-marconi-c1nu1d/demo-recepia-15-min";
const integrations = ["WhatsApp", "Twilio", "Google Calendar", "Calendly", "Sheets", "HubSpot"];

export default function Home() {
  return (
    <main>
      <Navigation bookingUrl={CAL_LINK} />
      <section className="hero hero-standalone shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow reveal reveal-one"><span className="status-dot" /> Agente clínico operativo 24/7</div>
          <h1 className="hero-title reveal reveal-two">Cada consulta atendida. <span>Cada turno, conectado.</span></h1>
          <p className="hero-lead reveal reveal-three">RecepIA atiende WhatsApp y llamadas, entiende a cada paciente y gestiona tu agenda con la precisión de un equipo que nunca se desconecta.</p>
          <div className="hero-actions reveal reveal-four">
            <a className="button button-primary" href={CAL_LINK} target="_blank" rel="noreferrer">Agendar una demo <Icon name="arrow" /></a>
            <a className="button button-ghost" href="#como-funciona"><span className="play-icon"><Icon name="play" /></span> Probar cómo funciona</a>
          </div>
          <div className="hero-note reveal reveal-four">
            <div className="avatar-stack" aria-hidden="true"><span>WA</span><span>VZ</span><span>AG</span></div>
            <div><strong>+2.400 conversaciones</strong><small>resueltas esta semana</small></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Integraciones">
        <div className="shell trust-inner"><p>Conectado con las herramientas que ya usás</p><div className="integration-row">{integrations.map((name) => <span key={name}>{name}</span>)}</div></div>
      </section>

      <section className="section shell experience-section" id="como-funciona">
        <div className="section-heading centered">
          <span className="kicker">Probalo en vivo</span>
          <h2>Así atiende RecepIA, <span>paso a paso.</span></h2>
          <p>Elegí un canal y completá una atención realista, desde el primer contacto hasta el turno confirmado.</p>
        </div>
        <HeroVisual />
      </section>

      <section className="section shell" id="plataforma">
        <div className="section-heading centered"><span className="kicker">Después de atender, todo conectado</span><h2>De la conversación a una clínica <span>que funciona mejor.</span></h2><p>RecepIA no solo responde: organiza cada paso posterior sin sumar trabajo a tu equipo.</p></div>
        <BentoGrid />
      </section>

      <section className="section shell architecture" id="seguridad">
        <div className="architecture-copy">
          <span className="kicker">Infraestructura confiable</span><h2>Inteligencia que se integra. <span>Control que permanece.</span></h2>
          <p>RecepIA se adapta a tus procesos y mantiene a tu equipo al mando, con trazabilidad completa y escalamiento humano cuando hace falta.</p>
          <ul className="check-list"><li><Icon name="check" /> Cifrado en tránsito y en reposo</li><li><Icon name="check" /> Historial y trazabilidad de cada interacción</li><li><Icon name="check" /> Derivación inmediata a una persona</li></ul>
        </div>
        <div className="system-card" aria-label="Arquitectura de integraciones RecepIA">
          <div className="system-status"><span className="status-dot" /> Sistemas operativos</div>
          <div className="system-map">
            <div className="system-node channel-node"><Icon name="message" /><span>Canales</span><small>Voz + WhatsApp</small></div>
            <div className="system-lines" aria-hidden="true"><i /><i /><i /></div>
            <div className="system-node core-node"><BrandLogo compact /><strong>RecepIA</strong><small>Motor de IA</small></div>
            <div className="system-lines reverse" aria-hidden="true"><i /><i /><i /></div>
            <div className="system-node calendar-node"><Icon name="calendar" /><span>Tu agenda</span><small>Sincronizada</small></div>
          </div>
          <div className="system-footer"><span>Latencia promedio</span><strong>620 ms</strong><span className="secure-pill"><Icon name="lock" /> Conexión segura</span></div>
        </div>
      </section>

      <section className="section shell quote-section"><div className="quote-mark">“</div><blockquote>RecepIA no reemplaza a la recepción. Le devuelve tiempo para cuidar mejor a cada paciente.</blockquote><div className="quote-author"><span>DM</span><div><strong>Dirección médica</strong><small>Clínica privada · Caso de implementación</small></div></div></section>

      <section className="shell final-cta" id="contacto">
        <div className="cta-glow" aria-hidden="true" /><span className="kicker">El próximo turno ya está esperando</span><h2>Tu recepción puede empezar a funcionar <span>mejor desde hoy.</span></h2><p>Conocé en 15 minutos cómo RecepIA se adapta a tu clínica.</p><a className="button button-primary" href={CAL_LINK} target="_blank" rel="noreferrer">Agendar una demo <Icon name="arrow" /></a><small>Sin compromiso · Configuración acompañada · Integración a medida</small>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#inicio"><BrandLogo compact /><span>Recep<span>IA</span></span></a><p>Agentes inteligentes para negocios que cuidan personas.</p><div><a href="/privacidad/">Privacidad</a><a href={CAL_LINK}>Contacto</a><span>© 2026 RecepIA</span></div>
      </footer>
    </main>
  );
}
