"use client";

import { useState } from "react";

const CAL_LINK = "https://cal.com/simon-marconi-c1nu1d/demo-recepia-15-min";

const t = {
  es: {
    nav: { features: "Funciones", how: "Cómo funciona", faq: "FAQ", cta: "Agendá una llamada" },
    badge: "WhatsApp · IA · Automatización",
    h1: ["El recepcionista", "que nunca", "duerme."],
    sub: ["Confirmaciones de turnos, respuestas por WhatsApp, reseñas y reactivación de clientes —", " todo automático con IA. Sin que toques nada."],
    ctaPrimary: "Agendá una llamada de 15 min →",
    ctaSecondary: "Ver funciones",
    ctaSmall: "Sin contratos · Instalación en 45 min · Cancelás cuando querés",
    stats: [
      { n: "80%", label: "de turnos confirmados", sub: "vs 40% sin automatizar" },
      { n: "3×",  label: "más reseñas en Google",  sub: "desde el primer mes" },
      { n: "2hs", label: "menos admin por día",    sub: "recuperadas para tu negocio" },
    ],
    painLabel: "¿Te suena familiar?",
    pain: [
      { icon: "📵", title: "Turnos sin confirmar",   desc: "No podés reasignarlos a tiempo y perdés plata cada semana." },
      { icon: "⏰", title: "Recordatorios a mano",   desc: "Horas perdidas escribiendo por WhatsApp todos los días." },
      { icon: "😶", title: "Cero reseñas en Google", desc: "Clientes de años que nunca dejaron una opinión." },
    ],
    howLabel: "Proceso",
    howTitle: ["Así de simple", "funciona."],
    steps: [
      { n: "01", icon: "📋", title: "Cargás el turno",          desc: "En Google Sheets. Sin apps nuevas ni cambiar tu flujo actual." },
      { n: "02", icon: "⚡", title: "RecepIA trabaja solo",      desc: "Manda recordatorios, responde mensajes, pide reseñas y reactiva clientes." },
      { n: "03", icon: "📈", title: "Vos seguís con tu negocio", desc: "Recibís el resumen semanal y un dashboard con todas las métricas." },
    ],
    featLabel: "Automatizaciones",
    featTitle: ["Todo lo que hace", "RecepIA."],
    features: [
      { n: "01", title: "Recordatorio automático",    desc: "El día anterior al turno, RecepIA escribe al cliente por WhatsApp con los detalles y pide confirmación.", accent: "rgba(14,165,233,0.07)" },
      { n: "02", title: "Respuestas con IA",           desc: "Entiende CONFIRMO, CANCELO, CAMBIAR y cualquier mensaje libre. Responde solo, en segundos.", accent: "rgba(34,211,238,0.07)" },
      { n: "03", title: "Reviews post-turno",          desc: "Esa noche le pide opinión a quien vino. Si es positiva, manda el link de Google Maps directo.", accent: "rgba(251,191,36,0.06)" },
      { n: "04", title: "Reactivación de clientes",    desc: "Escribe a clientes inactivos hace 90 días con un mensaje personalizado. Recupera turnos perdidos.", accent: "rgba(167,139,250,0.07)" },
      { n: "05", title: "Resumen semanal",             desc: "Cada viernes a las 19hs recibís por WhatsApp las métricas: confirmados, cancelados, reseñas.", accent: "rgba(52,211,153,0.07)" },
      { n: "06", title: "Claude AI incluido",          desc: "Entiende lenguaje natural, detecta intenciones y genera respuestas que suenan como una persona real.", accent: "rgba(14,165,233,0.07)" },
    ],
    testiLabel: "Testimonios",
    testiTitle: ["Lo que dicen", "los clientes."],
    testimonials: [
      { quote: "Antes perdía 30 minutos por día mandando recordatorios a mano. Ahora tengo 85% de confirmaciones sin tocar nada.", name: "Lucía M.", role: "Psicóloga · Buenos Aires", initials: "LM", from: "#0EA5E9", to: "#0284C7" },
      { quote: "Pasé de 12 a 47 reseñas en Google en dos meses. Mis clientes las dejan solos, sin que yo se los pida.", name: "Rodrigo P.", role: "Barbería · Rosario", initials: "RP", from: "#22D3EE", to: "#0891B2" },
      { quote: "La reactivación de clientes me sorprendió. Volví a tener turnos de gente que no venía hace meses.", name: "Valeria C.", role: "Kinesióloga · Córdoba", initials: "VC", from: "#818CF8", to: "#4F46E5" },
    ],
    forLabel: "Funciona para",
    forSub: "Cualquier negocio que trabaje con turnos.",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes.",
    faqs: [
      { q: "¿Necesito cambiar mi sistema de turnos actual?",         a: "No. RecepIA lee los turnos de una planilla de Google Sheets. Podés seguir usando tu sistema y volcar los datos ahí." },
      { q: "¿Cuánto tarda la instalación?",                          a: "45 minutos. Nos encargamos de toda la configuración técnica. Vos solo completás un formulario con los datos de tu negocio." },
      { q: "¿Qué pasa si el cliente manda algo que no se entiende?", a: "Claude AI interpreta lenguaje natural. Si el mensaje es ambiguo, le avisa al cliente y te notifica a vos." },
      { q: "¿Para qué tipo de negocios funciona?",                   a: "Para cualquier negocio con turnos: clínicas, dentistas, barberías, canchas, psicólogos, veterinarias, tatuadores y más." },
      { q: "¿Puedo cancelar cuando quiero?",                         a: "Sí. Sin contratos ni penalidades." },
    ],
    ctaLabel: "Empezá hoy",
    ctaTitle: ["¿Querés verlo en", "tu negocio?"],
    ctaBody: "Agendá una llamada de 15 minutos. Sin compromiso. Te mostramos exactamente cómo funciona para tu rubro.",
    ctaFinal: "Agendá una llamada de 15 min →",
    ctaFootnote: "Instalación en 45 min · Sin contratos · Cancelás cuando querés",
    footerRight: "Contacto →",
    floatingBtn: "Agendá una llamada",
    chat: [
      { from: "bot",  text: "Hola Martín 👋 Mañana tenés turno a las 10:00hs con la Dra. González. ¿Lo confirmás?" },
      { from: "user", text: "Sí, confirmo" },
      { from: "bot",  text: "Perfecto, te esperamos mañana a las 10hs 🙌" },
      { from: "bot",  text: "¿Cómo te fue con la consulta? Si podés dejarnos una reseña nos ayuda mucho ⭐" },
      { from: "user", text: "Muy bien! Ya la dejé 😊" },
    ],
    online: "en línea",
    msgPlaceholder: "Mensaje",
  },

  en: {
    nav: { features: "Features", how: "How it works", faq: "FAQ", cta: "Book a call" },
    badge: "WhatsApp · AI · Automation",
    h1: ["The receptionist", "that never", "sleeps."],
    sub: ["Appointment confirmations, WhatsApp replies, reviews and client reactivation —", " all automated with AI. Without you lifting a finger."],
    ctaPrimary: "Book a 15-min call →",
    ctaSecondary: "See features",
    ctaSmall: "No contracts · Setup in 45 min · Cancel anytime",
    stats: [
      { n: "80%", label: "appointments confirmed",   sub: "vs 40% without automation" },
      { n: "3×",  label: "more Google reviews",       sub: "from the first month" },
      { n: "2hrs", label: "less admin per day",       sub: "back in your pocket" },
    ],
    painLabel: "Sound familiar?",
    pain: [
      { icon: "📵", title: "Unconfirmed appointments", desc: "You can't reassign them in time and lose money every week." },
      { icon: "⏰", title: "Manual reminders",          desc: "Hours lost writing WhatsApp messages every single day." },
      { icon: "😶", title: "Zero Google reviews",       desc: "Long-time clients who never left a single review." },
    ],
    howLabel: "Process",
    howTitle: ["This simple.", "Really."],
    steps: [
      { n: "01", icon: "📋", title: "Add the appointment",       desc: "In Google Sheets. No new apps, no changing your current workflow." },
      { n: "02", icon: "⚡", title: "RecepIA works on its own",  desc: "Sends reminders, replies to messages, asks for reviews, reactivates clients." },
      { n: "03", icon: "📈", title: "You focus on your business", desc: "Get a weekly summary and a dashboard with all your metrics." },
    ],
    featLabel: "Automations",
    featTitle: ["Everything", "RecepIA does."],
    features: [
      { n: "01", title: "Automatic reminders",     desc: "The day before the appointment, RecepIA texts the client on WhatsApp with details and asks for confirmation.", accent: "rgba(14,165,233,0.07)" },
      { n: "02", title: "AI-powered replies",       desc: "Understands CONFIRM, CANCEL, RESCHEDULE and any free-text message. Replies instantly, on its own.", accent: "rgba(34,211,238,0.07)" },
      { n: "03", title: "Post-visit reviews",       desc: "That evening it asks clients for feedback. If positive, sends the Google Maps link right away.", accent: "rgba(251,191,36,0.06)" },
      { n: "04", title: "Client reactivation",      desc: "Texts clients inactive for 90+ days with a personalized message. Wins back lost appointments.", accent: "rgba(167,139,250,0.07)" },
      { n: "05", title: "Weekly summary",           desc: "Every Friday at 7pm you get a WhatsApp report: confirmed, cancelled, and reviews.", accent: "rgba(52,211,153,0.07)" },
      { n: "06", title: "Claude AI included",       desc: "Understands natural language, detects intent and generates responses that sound like a real person.", accent: "rgba(14,165,233,0.07)" },
    ],
    testiLabel: "Testimonials",
    testiTitle: ["What our", "clients say."],
    testimonials: [
      { quote: "I used to waste 30 minutes a day sending reminders manually. Now I have 85% confirmation rate without touching anything.", name: "Lucía M.", role: "Psychologist · Buenos Aires", initials: "LM", from: "#0EA5E9", to: "#0284C7" },
      { quote: "I went from 12 to 47 Google reviews in two months. My clients leave them on their own, without me asking.", name: "Rodrigo P.", role: "Barbershop · Rosario", initials: "RP", from: "#22D3EE", to: "#0891B2" },
      { quote: "The client reactivation blew me away. I started getting bookings from people who hadn't visited in months.", name: "Valeria C.", role: "Physiotherapist · Córdoba", initials: "VC", from: "#818CF8", to: "#4F46E5" },
    ],
    forLabel: "Works for",
    forSub: "Any business that runs on appointments.",
    faqLabel: "FAQ",
    faqTitle: "Frequently asked questions.",
    faqs: [
      { q: "Do I need to change my current scheduling system?",    a: "No. RecepIA reads appointments from a Google Sheet. Keep using your current system and just copy the data over." },
      { q: "How long does setup take?",                            a: "45 minutes. We handle all the technical configuration. You just fill out a form with your business details." },
      { q: "What if a client sends something confusing?",          a: "Claude AI understands natural language. If a message is too ambiguous, it tells the client you'll follow up and notifies you." },
      { q: "What types of businesses does it work for?",           a: "Any appointment-based business: clinics, dentists, barbershops, sports courts, therapists, vets, tattoo studios and more." },
      { q: "Can I cancel at any time?",                            a: "Yes. No contracts, no penalties." },
    ],
    ctaLabel: "Get started today",
    ctaTitle: ["Want to see it in", "your business?"],
    ctaBody: "Book a 15-minute call. No commitment. We'll show you exactly how it works for your industry.",
    ctaFinal: "Book a 15-min call →",
    ctaFootnote: "Setup in 45 min · No contracts · Cancel anytime",
    footerRight: "Contact →",
    floatingBtn: "Book a call",
    chat: [
      { from: "bot",  text: "Hi Martin 👋 Tomorrow you have an appointment at 10:00am with Dr. González. Can you confirm?" },
      { from: "user", text: "Yes, confirmed" },
      { from: "bot",  text: "Perfect, see you tomorrow at 10am 🙌" },
      { from: "bot",  text: "How did your visit go? Leaving us a review would help us a lot ⭐" },
      { from: "user", text: "Great! Just left one 😊" },
    ],
    online: "online",
    msgPlaceholder: "Message",
  },
} as const;

type Lang = keyof typeof t;

const industries = {
  es: ["Clínicas", "Dentistas", "Psicólogos", "Kinesiólogos", "Nutricionistas", "Veterinarias", "Barberías", "Peluquerías", "Canchas de pádel", "Fútbol 5", "Tatuadores", "Estética", "Fonoaudiólogos", "Oftalmólogos", "Pilates", "Yoga"],
  en: ["Clinics", "Dentists", "Therapists", "Physiotherapists", "Nutritionists", "Vets", "Barbershops", "Hair Salons", "Padel Courts", "5-a-side Football", "Tattoo Studios", "Aesthetics", "Speech Therapists", "Ophthalmologists", "Pilates", "Yoga"],
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const c = t[lang];
  const ind = industries[lang];

  return (
    <main className="min-h-screen bg-[#08090E] text-[#F1F5F9] overflow-x-hidden">

      {/* ── AMBIENT ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: "radial-gradient(circle, #0EA5E9, transparent)" }} />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px]"
          style={{ background: "radial-gradient(circle, #22D3EE, transparent)" }} />
        <div className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "radial-gradient(circle, #818CF8, transparent)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#08090E]/75 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[#0EA5E9] flex items-center justify-center glow-pulse">
              <span className="text-white text-xs font-black">R</span>
            </div>
            <span className="font-display font-700 tracking-tight text-[17px]">RecepIA</span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-[13px] text-[#475569] font-display font-semibold tracking-wide">
            <a href="#funciones" className="hover:text-white transition-colors">{c.nav.features}</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">{c.nav.how}</a>
            <a href="#faq" className="hover:text-white transition-colors">{c.nav.faq}</a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {/* Lang toggle */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center bg-white/[0.04] border border-white/[0.08] rounded-lg overflow-hidden font-display"
              title="Switch language"
            >
              <span className={`px-3.5 py-1.5 text-[12px] font-700 tracking-wide transition-all duration-200 ${lang === "es" ? "bg-[#0EA5E9] text-white" : "text-[#334155] hover:text-[#94A3B8]"}`}>
                Español
              </span>
              <span className="text-[#1E293B] text-[11px] select-none">·</span>
              <span className={`px-3.5 py-1.5 text-[12px] font-700 tracking-wide transition-all duration-200 ${lang === "en" ? "bg-[#0EA5E9] text-white" : "text-[#334155] hover:text-[#94A3B8]"}`}>
                English
              </span>
            </button>

            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-[#0EA5E9] hover:bg-[#38BDF8] text-white text-[13px] font-semibold px-4 py-2 rounded-lg glow-btn hidden sm:block font-display tracking-wide">
              {c.nav.cta}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative z-10 pt-36 pb-28 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_320px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-[#0EA5E9]/[0.08] border border-[#0EA5E9]/20 text-[#38BDF8] text-[11px] font-bold px-4 py-2 rounded-full mb-8 tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full blink" />
              {c.badge}
            </div>

            <h1 className="text-[52px] md:text-[72px] font-black leading-[0.92] tracking-[-0.03em] mb-8">
              <span className="gradient-hero">{c.h1[0]}</span><br />
              <span className="gradient-hero">{c.h1[1]}</span><br />
              <span className="text-[#0EA5E9]" style={{ textShadow: "0 0 40px rgba(14,165,233,0.4)" }}>{c.h1[2]}</span>
            </h1>

            <p className="text-[#64748B] text-lg leading-relaxed max-w-md mb-10">
              {c.sub[0]}<span className="text-[#94A3B8]">{c.sub[1]}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
                className="bg-[#0EA5E9] hover:bg-[#38BDF8] text-white font-bold px-7 py-3.5 rounded-xl text-[15px] glow-btn text-center font-display tracking-wide">
                {c.ctaPrimary}
              </a>
              <a href="#funciones"
                className="border border-white/[0.08] hover:border-white/20 text-[#64748B] hover:text-white font-medium px-7 py-3.5 rounded-xl text-[15px] transition-all text-center font-display tracking-wide">
                {c.ctaSecondary}
              </a>
            </div>
            <p className="text-[#1E293B] text-xs">{c.ctaSmall}</p>
          </div>

          {/* Phone */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative float">
              <div className="absolute -inset-6 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, #0EA5E9, transparent)" }} />
              <div className="relative w-64 rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-2xl bg-[#111B21]">
                <div className="flex justify-center pt-3 pb-1 bg-[#111B21]">
                  <div className="w-16 h-1 rounded-full bg-white/10" />
                </div>
                <div className="bg-[#1F2C34] px-3 py-2.5 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-[10px] font-bold shrink-0">RA</div>
                  <div>
                    <p className="text-white text-[12px] font-semibold leading-tight">RecepIA</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full blink" />
                      <p className="text-[#8696A0] text-[10px]">{c.online}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0B141A] px-3 py-3 space-y-2" style={{ minHeight: 260 }}>
                  {c.chat.map((m, i) => (
                    <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[90%] px-3 py-1.5 text-[11px] leading-relaxed rounded-2xl ${
                        m.from === "user" ? "bg-[#005C4B] text-white rounded-br-sm" : "bg-[#1F2C34] text-[#E9EDEF] rounded-bl-sm"
                      }`}>{m.text}</div>
                    </div>
                  ))}
                  <div className="flex justify-start">
                    <div className="bg-[#1F2C34] px-3 py-2.5 rounded-2xl rounded-bl-sm flex gap-1">
                      {[0,150,300].map((d,i) => <span key={i} className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay:`${d}ms` }} />)}
                    </div>
                  </div>
                </div>
                <div className="bg-[#1F2C34] px-3 py-2.5 flex items-center gap-2">
                  <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1.5 text-[10px] text-[#8696A0]">{c.msgPlaceholder}</div>
                  <div className="w-6 h-6 bg-[#0EA5E9] rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-4 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="shimmer-line mb-px" />
          <div className="bg-[#0B0C14] border border-white/[0.06] rounded-2xl p-8 grid grid-cols-3 gap-8 text-center">
            {c.stats.map((s, i) => (
              <div key={i} className={i < 2 ? "border-r border-white/[0.06]" : ""}>
                <p className="text-4xl md:text-5xl font-black tracking-tight text-[#0EA5E9]"
                  style={{ textShadow: "0 0 30px rgba(14,165,233,0.35)" }}>{s.n}</p>
                <p className="text-[#94A3B8] text-sm font-medium mt-2">{s.label}</p>
                <p className="text-[#334155] text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="section-label text-center block">{c.painLabel}</span>
          <div className="grid md:grid-cols-3 gap-4">
            {c.pain.map((item, i) => (
              <div key={i} className="card p-6 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xl mb-5
                  group-hover:border-[#0EA5E9]/20 group-hover:bg-[#0EA5E9]/[0.05] transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[#F1F5F9] font-bold text-[15px] mb-2">{item.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.05]" id="como-funciona">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="section-label">{c.howLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
              {c.howTitle[0]}<br />{c.howTitle[1]}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.steps.map((s, i) => (
              <div key={i} className="card p-8 group cursor-default relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15), transparent)", transform: "translate(30%,-30%)" }} />
                <div className="w-12 h-12 rounded-2xl bg-[#0EA5E9]/[0.08] border border-[#0EA5E9]/20 flex items-center justify-center text-2xl mb-6
                  group-hover:bg-[#0EA5E9]/[0.15] group-hover:border-[#0EA5E9]/40 transition-all duration-300">
                  {s.icon}
                </div>
                <p className="text-[#0EA5E9] text-xs font-bold tracking-[0.2em] mb-3">{s.n}</p>
                <h3 className="text-[#F1F5F9] font-bold text-base mb-2">{s.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.05]" id="funciones">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="section-label">{c.featLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
              {c.featTitle[0]}<br />{c.featTitle[1]}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {c.features.map((f, i) => (
              <div key={i} className="card p-6 group cursor-default relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${f.accent}, transparent 70%)` }} />
                <div className="relative flex items-start gap-4">
                  <span className="text-[#0EA5E9] text-xs font-black tracking-[0.2em] shrink-0 mt-0.5 w-8">{f.n}</span>
                  <div>
                    <h3 className="text-[#F1F5F9] font-semibold text-[15px] mb-1.5">{f.title}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="section-label">{c.testiLabel}</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
              {c.testiTitle[0]}<br />{c.testiTitle[1]}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {c.testimonials.map((t, i) => (
              <div key={i} className="card p-6 group cursor-default flex flex-col gap-5 relative overflow-hidden">
                <div className="absolute top-0 left-4 right-4 h-px rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.from}, transparent)` }} />
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="#0EA5E9" className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#F1F5F9] text-[13px] font-semibold">{t.name}</p>
                    <p className="text-[#334155] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES MARQUEE ── */}
      <section className="relative z-10 py-20 border-t border-white/[0.05] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 mb-10 text-center">
          <span className="section-label">{c.forLabel}</span>
          <p className="text-[#334155] text-sm">{c.forSub}</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #08090E, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #08090E, transparent)" }} />
          <div className="flex mb-3">
            <div className="marquee flex gap-3 shrink-0">
              {[...ind, ...ind].map((item, i) => <span key={i} className="chip">{item}</span>)}
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-3 shrink-0" style={{ animation: "marquee 25s linear infinite reverse" }}>
              {[...ind.slice(4), ...ind, ...ind.slice(0,4), ...ind].map((item, i) => <span key={i} className="chip">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/[0.05]" id="faq">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <span className="section-label">{c.faqLabel}</span>
            <h2 className="text-4xl font-black tracking-tight">{c.faqTitle}</h2>
          </div>
          <div className="space-y-2">
            {c.faqs.map((faq, i) => (
              <div key={i} className="card p-6 group cursor-default">
                <div className="flex items-start gap-3">
                  <span className="text-[#0EA5E9] text-xs font-black mt-0.5 shrink-0 tracking-wider">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <h3 className="text-[#F1F5F9] font-semibold text-[14px] mb-2">{faq.q}</h3>
                    <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative z-10 py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />
          <div className="relative">
            <span className="section-label block text-center mb-8">{c.ctaLabel}</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[0.92] mb-8">
              <span className="gradient-hero">{c.ctaTitle[0]}</span><br />
              <span className="gradient-hero">{c.ctaTitle[1]}</span>
            </h2>
            <p className="text-[#475569] text-lg mb-10 max-w-md mx-auto leading-relaxed">{c.ctaBody}</p>
            <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#0EA5E9] hover:bg-[#38BDF8] text-white font-bold px-10 py-4 rounded-xl text-base glow-btn font-display tracking-wide">
              {c.ctaFinal}
            </a>
            <p className="text-[#1E293B] text-xs mt-6">{c.ctaFootnote}</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#0EA5E9] flex items-center justify-center">
              <span className="text-white text-[10px] font-black">R</span>
            </div>
            <span className="text-[#334155] text-sm font-semibold">RecepIA</span>
          </div>
          <p className="text-[#1E293B] text-xs">© {new Date().getFullYear()} RecepIA · WhatsApp AI Automation</p>
          <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
            className="text-[#334155] hover:text-[#94A3B8] text-xs transition-colors">{c.footerRight}</a>
        </div>
      </footer>

      {/* ── FLOATING CTA ── */}
      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#0EA5E9] hover:bg-[#38BDF8] text-white px-5 py-3 rounded-full flex items-center gap-2 font-semibold text-[13px] glow-btn shadow-xl font-display tracking-wide">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/>
        </svg>
        {c.floatingBtn}
      </a>

    </main>
  );
}
