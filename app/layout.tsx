import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://recepia.lat"),
  title: "RecepIA — Recepción inteligente para clínicas",
  description: "Agente de IA para WhatsApp y llamadas que atiende pacientes, responde consultas y gestiona turnos 24/7.",
  keywords: ["recepcionista IA", "WhatsApp para clínicas", "agenda médica", "IA de voz", "automatización de turnos"],
  openGraph: { title: "RecepIA — Cada consulta atendida. Cada turno, conectado.", description: "Recepción inteligente por WhatsApp y voz para clínicas y negocios de servicios.", url: "https://recepia.lat", siteName: "RecepIA", locale: "es_AR", type: "website" },
  twitter: { card: "summary_large_image", title: "RecepIA — Recepción inteligente para clínicas" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#030712" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={inter.variable}><head><meta name="facebook-domain-verification" content="nsdmqnpg90gihztyqcmgrexvjslfxx" /></head><body>{children}</body></html>;
}
