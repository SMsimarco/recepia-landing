# RecepIA — Landing

Landing page de marketing/ventas de **RecepIA**, un producto de automatización con WhatsApp + IA para negocios con sistema de turnos (clínicas, barberías, canchas, etc.).

Este repo **solo contiene la landing**. El producto en sí (los flows de n8n que hacen la automatización real) vive en otro repo separado: `RecepIA---n8n`.

## Qué incluye

- Landing en `app/page.tsx` (contenido bilingüe ES/EN en el mismo archivo).
- `app/api/fecha`: endpoint que devuelve la fecha/hora actual en español hablado (zona horaria `Europe/Madrid`), pensado como tool para el agente de voz de Vapi (Julieta).
- Link de agenda de demo vía Cal.com (`CAL_LINK` en `app/page.tsx`).
- `privacidad.html`: página estática de política de privacidad (fuera del App Router, se sirve directo).

## Stack

- Next.js 14.2.5 (App Router) + React 18 + TypeScript
- Tailwind CSS 3
- Sin base de datos ni backend propio — solo el endpoint `/api/fecha`, sin variables de entorno necesarias (`.gitignore` contempla `.env*` pero no hay ninguno en el repo).

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build     # build de producción
npm run start     # levanta el build
```

## Deploy

No hay `vercel.json` en el repo (config default de Vercel para Next.js). El deploy es manual/automático vía integración de Vercel con el repo de GitHub (`SMsimarco/recepia-landing`), sin pasos de configuración adicionales.
