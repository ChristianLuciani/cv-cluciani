# Playbook — Migración incremental de ilusiones a TypeScript

Objetivo: mover cada canvas/ilusión del `<script>` inline en `index.html` a un módulo TypeScript independiente, **uno a uno**, sin romper el resto del sitio.

## Contrato de cada módulo

Cada ilusión debe exponer:

- **`id`**: string con el `id` del canvas en el DOM (ej. `"c-necker"`, `"fractal-logo"`).
- **`mount(canvas: HTMLCanvasElement, opts?: MountOptions) => { stop(): void }`**: inicia la animación y devuelve un handle para detenerla.
- **Lógica pura exportada**: funciones deterministas (ej. `kochSegments()`, `escapeTime()`) para testear sin DOM.

## Checklist por ilusión

Antes de dar por cerrada la migración de una ilusión:

1. [ ] Tests unitarios escritos primero (TDD): funciones puras sin DOM.
2. [ ] Módulo TS en `src/ts/illusions/<nombre>.ts` o `src/ts/fractals/<nombre>.ts`.
3. [ ] Registro en `src/main.ts`: llamar a `mount()` solo si `document.getElementById(id)` existe.
4. [ ] Código inline apagado en `index.html`: comentar o eliminar el bloque correspondiente a ese canvas (evitar doble animación).
5. [ ] `npm test` pasa.
6. [ ] `npm run build` + `npm run preview` sin errores en consola.
7. [ ] Verificación visual en navegador (comparar antes/después).

## Registro en `src/main.ts` (patrón)

```ts
const CANVAS_MODULES = [
  { id: "fractal-logo", mount: mountKochLogo },
  { id: "c-necker", mount: mountNeckerBg }
];

function init() {
  for (const { id, mount } of CANVAS_MODULES) {
    const el = document.getElementById(id);
    if (el instanceof HTMLCanvasElement) mount(el);
  }
}
```

## Orden sugerido de migración

1. `fractal-logo` (Koch) — loader/logo
2. `c-necker` (BG Sala 01)
3. `c-stairs` / `c-stairs-ill` (Drahma)
4. `c-proyectos` (Mandelbrot field)
5. Resto por prioridad visual/impacto.

