# Christian Luciani — Museo de una Trayectoria

CV interactivo diseñado como recorrido museográfico, con ilusiones ópticas animadas y scroll cinematográfico.

**[→ Ver en vivo](https://christianluciani.github.io/cv-cluciani)**

## Estructura

```
cv-cluciani/
├── index.html          ← Archivo desplegado (GitHub Pages)
├── build.sh            ← Ensamblador (opcional)
├── ESTADO.md           ← Estado actual y próximos pasos
├── assets/
│   ├── images/         ← Fotos propias
│   └── gallery/        ← Fotos para galerías de sala
├── docs/
│   ├── CONTRIBUTING.md ← Flujo de trabajo Git
│   └── STYLE_GUIDE.md  ← Sistema de diseño completo
└── src/
    ├── styles/         ← CSS por sección (referencia)
    ├── js/             ← JS por módulo (referencia)
    └── sections/       ← HTML por sala (referencia)
```

## Stack

HTML · CSS · Canvas API · Vanilla JS · Google Fonts  
Sin frameworks. Sin dependencias. Un solo archivo desplegado.

## Salas y sus ilusiones

| Sala | Contenido | Ilusión óptica |
|------|-----------|----------------|
| 01 · Perfil | Formación + perfil | Cubo de Necker (grid BG + frame) |
| 02 · Drahma | Proyecto IA educativa | Escalera de Penrose |
| 03 · Proyectos | CLAPPS / NOOS / Kontablo | Campo de Mandelbrot |
| 04 · Experiencia | Trayectoria 2003–presente | Interferencia de doble fuente |
| 05 · Galería | Fotografías y evidencias | — |
| 06 · Física | Publicaciones arbitradas | Serpientes Rotantes + Triángulo Penrose |
| 07 · Competencias | Skills e idiomas | Sierpinski |
| 08 · Contacto | Links y salida | — |

## Flujo de trabajo

```bash
# Editar en rama dedicada
git checkout -b claude/descripcion-del-cambio

# Editar index.html (buscar "SALA 0X" para navegar)
# O editar src/ y ejecutar bash build.sh

git add .
git commit -m "feat: descripcion"
git push origin claude/descripcion-del-cambio
# → abrir PR → Christian hace merge → GitHub Pages actualiza
```

Ver `docs/CONTRIBUTING.md` para detalles y `docs/STYLE_GUIDE.md` para el sistema de diseño.

## Contacto

cluciani@gmail.com · [LinkedIn](https://www.linkedin.com/in/christian-luciani) · [ResearchGate](https://www.researchgate.net/profile/Christian-Luciani) · [X @cluciani_ve](https://x.com/cluciani_ve)
