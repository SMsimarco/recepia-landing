"use client";

import { useState, type PointerEvent } from "react";
import { BrandLogo } from "./brand-logo";
import { Icon } from "./icons";

type Channel = "voice" | "whatsapp";

const steps = ["Contacto", "Comprensión", "Agenda", "Confirmado"];

export function HeroVisual() {
  const [channel, setChannel] = useState<Channel>("voice");
  const [stage, setStage] = useState(0);

  const chooseChannel = (next: Channel) => {
    setChannel(next);
    setStage(0);
  };

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    event.currentTarget.style.setProperty("--demo-rx", `${(.5 - y) * 2.4}deg`);
    event.currentTarget.style.setProperty("--demo-ry", `${(x - .5) * 3.2}deg`);
    event.currentTarget.style.setProperty("--demo-light-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--demo-light-y", `${y * 100}%`);
  };

  const reset = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--demo-rx", "0deg");
    event.currentTarget.style.setProperty("--demo-ry", "0deg");
  };

  return (
    <div className="hero-visual view-reveal" onPointerMove={move} onPointerLeave={reset}>
      <div className="reception-demo">
        <div className="reception-topbar">
          <div className="demo-brand"><BrandLogo compact /><span><strong>RecepIA</strong><small>Recepción inteligente</small></span></div>
          <div className="channel-switch" aria-label="Elegir canal">
            <button type="button" aria-pressed={channel === "voice"} className={channel === "voice" ? "active" : ""} onClick={() => chooseChannel("voice")}><Icon name="phone" /> Llamada</button>
            <button type="button" aria-pressed={channel === "whatsapp"} className={channel === "whatsapp" ? "active" : ""} onClick={() => chooseChannel("whatsapp")}><Icon name="message" /> WhatsApp</button>
          </div>
          <span className="demo-online"><i /> EN LÍNEA</span>
        </div>

        <div className="reception-body">
          <aside className="reception-steps" aria-label="Progreso de la atención">
            {steps.map((step, index) => (
              <div className={index === stage ? "active" : index < stage ? "done" : ""} key={step}>
                <span>{index < stage ? "✓" : index + 1}</span><small>{step}</small>
              </div>
            ))}
          </aside>

          <div className="reception-screen" aria-live="polite">
            {stage === 0 ? (
              <div className="incoming-state demo-state">
                <div className={`incoming-orb ${channel}`}><Icon name={channel === "voice" ? "phone" : "message"} /><i /><i /><i /></div>
                <span className="state-kicker">{channel === "voice" ? "LLAMADA ENTRANTE" : "NUEVO MENSAJE"}</span>
                <h3>Paciente entrante</h3>
                <p>{channel === "voice" ? "Contacto anónimo · Nueva consulta" : "Hola, quisiera reservar una consulta"}</p>
                <button className="demo-action accept" onClick={() => setStage(1)}><Icon name={channel === "voice" ? "phone" : "message"} /> {channel === "voice" ? "Atender llamada" : "Abrir conversación"}</button>
                <small className="interaction-hint">Probalo: hacé clic para iniciar</small>
              </div>
            ) : stage === 1 ? (
              <div className="transcript-state demo-state">
                <div className="live-transcript-head"><span><i /> TRANSCRIPCIÓN EN VIVO</span><div className="transcript-wave">{Array.from({ length: 18 }).map((_, index) => <i key={index} />)}</div></div>
                <div className="dialogue patient-dialogue"><span>PX</span><p>Hola, quería sacar un turno con cardiología. Si puede ser por la tarde.</p></div>
                <div className="dialogue ai-dialogue"><BrandLogo compact /><p>Claro. Busco los próximos horarios disponibles para vos.</p></div>
                <div className="intent-row"><span>Cardiología</span><span>Por la tarde</span><strong>98% confianza</strong></div>
                <button className="demo-action" onClick={() => setStage(2)}>Ver disponibilidad <Icon name="arrow" /></button>
              </div>
            ) : stage === 2 ? (
              <div className="slots-state demo-state">
                <div className="slots-heading"><span className="calendar-icon"><Icon name="calendar" /></span><div><small>PRÓXIMOS HORARIOS</small><h3>Cardiología · Profesional disponible</h3></div></div>
                <p>Elegí un horario para completar la simulación.</p>
                <div className="slot-list">
                  <button onClick={() => setStage(3)}><span>HOY</span><strong>16:30</strong><small>Disponible</small></button>
                  <button onClick={() => setStage(3)}><span>MAÑANA</span><strong>15:00</strong><small>Disponible</small></button>
                  <button onClick={() => setStage(3)}><span>VIE 04</span><strong>18:15</strong><small>Disponible</small></button>
                </div>
                <button className="back-action" onClick={() => setStage(1)}>← Volver</button>
              </div>
            ) : (
              <div className="confirmed-state demo-state">
                <div className="confirmation-burst"><span><Icon name="check" /></span><i /><i /><i /></div>
                <span className="state-kicker">RESERVA COMPLETADA</span>
                <h3>Turno confirmado</h3>
                <div className="confirmed-appointment"><Icon name="calendar" /><div><strong>Cardiología · Profesional disponible</strong><small>Hoy, 16:30 · Paciente notificado</small></div><span>CONFIRMADO</span></div>
                <p>RecepIA notificó a la paciente y actualizó la agenda automáticamente.</p>
                <button className="replay-action" onClick={() => setStage(0)}>↻ Repetir experiencia</button>
              </div>
            )}
          </div>
        </div>
        <div className="reception-footer"><span><Icon name="lock" /> Datos protegidos</span><div>{steps.map((_, index) => <i className={index <= stage ? "active" : ""} key={index} />)}</div><span>Tiempo estimado: 8 s</span></div>
      </div>
    </div>
  );
}
