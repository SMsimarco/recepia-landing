import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RecepIA — Tu recepcionista con IA que nunca descansa",
  description:
    "Automatizá confirmaciones de turnos, respuestas por WhatsApp, reseñas y reactivación de clientes con inteligencia artificial. Para clínicas, barberías, canchas y cualquier negocio con turnos.",
  keywords: "automatización turnos, WhatsApp bot, recordatorio turnos, IA clínica, gestión turnos",
  openGraph: {
    title: "RecepIA — Tu recepcionista con IA",
    description: "Automatizá tu negocio con turnos. Confirmaciones, reseñas y reactivación por WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="facebook-domain-verification" content="nsdmqnpg90gihztyqcmgrexvjslfxx" />
      </head>
      <body>{children}</body>
    </html>
  )
}
