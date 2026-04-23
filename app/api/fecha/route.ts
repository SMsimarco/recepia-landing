import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const local = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Madrid" }));

  const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

  const texto = `Hoy es ${dias[local.getDay()]} ${local.getDate()} de ${meses[local.getMonth()]}, ${String(local.getHours()).padStart(2,"0")}:${String(local.getMinutes()).padStart(2,"0")} hs`;

  return NextResponse.json({ result: texto });
}

export async function POST() {
  return GET();
}
