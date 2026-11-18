# Dashboard del Clima

Dashboard del clima construido con React, TypeScript y MUI, que consume la API de pronóstico de [Open-Meteo](https://open-meteo.com/) para mostrar el clima actual, un pronóstico por hora (gráfico y tabla) y alertas, con selección de ciudad (Guayaquil, Quito, Manta, Cuenca).

## Antes de desplegar

1. Reemplaza `TU_USUARIO_GITHUB` en `package.json` (`homepage`) por tu usuario real de GitHub.
2. Si el nombre del repositorio en GitHub no es `dashboard`, ajusta también `base` en `vite.config.ts` y la `homepage` en `package.json`.

## Scripts

- `npm install` — instala las dependencias.
- `npm run dev` — levanta el servidor de desarrollo.
- `npm run build` — genera la carpeta `dist/`.
- `npm run deploy` — publica `dist/` en GitHub Pages (rama `gh-pages`).
