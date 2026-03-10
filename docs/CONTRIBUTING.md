# Guía de Contribución — cv-cluciani

## Flujo de trabajo Git

**Regla absoluta:** nunca trabajar directamente en `main`.

```
claude/[tema]   ← ramas de Claude
cursor/[tema]   ← ramas de Cursor / IDE agents
```

Ejemplo:
```bash
git checkout -b claude/fix-foto-perfil
# ... editar ...
git add .
git commit -m "fix: foto perfil circular con fallback"
git push origin claude/fix-foto-perfil
# → abrir PR para que Christian revise y haga merge
```

## Estructura del proyecto

```
cv-cluciani/
├── index.html          ← ARCHIVO DESPLEGADO (GitHub Pages lo sirve)
├── build.sh            ← Ensambla src/ → index.html (opcional)
├── README.md
├── ESTADO.md           ← Estado actual y próximo paso por proyecto
├── assets/
│   ├── images/         ← Fotos propias (christian-luciani.jpg, etc.)
│   └── gallery/        ← Fotos para las galerías de sala
├── docs/
│   ├── CONTRIBUTING.md ← Este archivo
│   └── STYLE_GUIDE.md  ← Sistema de diseño completo
└── src/                ← FUENTES MODULARES (referencia + edición)
    ├── styles/         ← CSS por sección
    ├── js/             ← JS por módulo funcional
    └── sections/       ← HTML por sala (partials)
```

## Editar el CV

### Opción A — editar index.html directamente
El `index.html` tiene comentarios claros que delimitan cada sección.
Busca `SALA 01`, `SALA 02`, etc. para navegar.
Después de editar: `git commit` y `git push` → GitHub Pages actualiza en ~1min.

### Opción B — editar en src/ y reconstruir
1. Edita el archivo relevante en `src/styles/`, `src/js/` o `src/sections/`
2. Ejecuta `bash build.sh` para regenerar `index.html`
3. Revisa el resultado en el navegador
4. Commit y push

## Añadir fotos a la galería

1. Copia la imagen a `assets/gallery/nombre-descriptivo.jpg`
2. En `index.html`, dentro de la sala correspondiente, busca `.gallery-slot`
3. Descomenta `<img src="assets/gallery/nombre-descriptivo.jpg">`
4. El placeholder desaparece automáticamente

## Convención de commits

```
feat:  nueva funcionalidad
fix:   corrección de bug o dato incorrecto
style: cambio visual sin lógica nueva
docs:  README, CONTRIBUTING, ESTADO
chore: limpieza, refactoring sin cambio funcional
```
