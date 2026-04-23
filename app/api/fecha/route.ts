import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const local = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));

  const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const aniosLetras: Record<number, string> = { 2025: "dos mil veinticinco", 2026: "dos mil veintiséis", 2027: "dos mil veintisiete", 2028: "dos mil veintiocho" };
  const anioTexto = aniosLetras[local.getFullYear()] ?? local.getFullYear().toString();

  const texto = `Hoy es ${dias[local.getDay()]} ${local.getDate()} de ${meses[local.getMonth()]} de ${anioTexto}, ${String(local.getHours()).padStart(2,"0")}:${String(local.getMinutes()).padStart(2,"0")} hs`;

  return NextResponse.json({ result: texto });
}

export async function POST() {
  return GET();
}
