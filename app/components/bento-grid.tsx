import { Icon } from "./icons";
import { SpotlightCard } from "./spotlight-card";

export function BentoGrid() {
  return <div className="bento-grid">
    <SpotlightCard className="bento-card bento-voice">
      <div className="card-icon cyan"><Icon name="phone" /></div><span className="card-tag">VOZ NATURAL</span><h3>Atiende cada llamada como parte de tu equipo.</h3><p>Voz fluida, respuestas precisas y disponibilidad total, incluso cuando la clínica está cerrada.</p>
      <div className="wave-display"><div className="wave-bars">{Array.from({length: 24}).map((_, i) => <i key={i}/>)}</div><span><i/> Llamada en curso</span><strong>01:42</strong></div>
    </SpotlightCard>
    <SpotlightCard className="bento-card bento-speed"><div className="metric-orbit"><span aria-label="Menos de dos segundos">&lt;&nbsp;2<small aria-hidden="true">s</small></span></div><div><span className="card-tag">RESPUESTA INMEDIATA</span><h3>La espera dejó de existir.</h3><p>Cada paciente recibe una respuesta útil en segundos.</p></div></SpotlightCard>
    <SpotlightCard className="bento-card bento-always"><div className="card-icon violet"><Icon name="clock" /></div><span className="card-tag">DISPONIBILIDAD</span><h3>Tu recepción, siempre encendida.</h3><div className="availability"><strong>24/7</strong><div><i/><span>Lunes a domingo</span><small>Sin interrupciones</small></div></div></SpotlightCard>
    <SpotlightCard className="bento-card bento-agenda"><div><div className="card-icon blue"><Icon name="calendar" /></div><span className="card-tag">AGENDA CONECTADA</span><h3>Turnos sincronizados, sin esfuerzo.</h3><p>Reserva, reprograma y cancela sin duplicados ni cruces.</p></div><div className="mini-calendar"><header><strong>Octubre</strong><span>‹ &nbsp; ›</span></header><div className="calendar-grid"><b>L</b><b>M</b><b>X</b><b>J</b><b>V</b>{[12,13,14,15,16,19,20,21,22,23].map(n => <span className={n === 22 ? "selected" : ""} key={n}>{n}</span>)}</div><div className="calendar-event"><i/><span><strong>Consulta · Paciente</strong><small>16:30 — Confirmado</small></span></div></div></SpotlightCard>
    <SpotlightCard className="bento-card bento-data"><div className="card-icon green"><Icon name="chart" /></div><span className="card-tag">VISIBILIDAD TOTAL</span><h3>Decisiones con datos, no con intuición.</h3><div className="spark-chart" aria-hidden="true"><span>94%<small>resolución automática</small></span><svg viewBox="0 0 320 90" preserveAspectRatio="none"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#2dd4bf" stopOpacity=".35"/><stop offset="1" stopColor="#2dd4bf" stopOpacity="0"/></linearGradient></defs><path className="fill" d="M0 75 C40 70 42 52 78 58 S130 37 164 45 S210 12 242 26 S278 18 320 5 V90 H0Z"/><path className="line" d="M0 75 C40 70 42 52 78 58 S130 37 164 45 S210 12 242 26 S278 18 320 5"/></svg></div></SpotlightCard>
  </div>;
}
