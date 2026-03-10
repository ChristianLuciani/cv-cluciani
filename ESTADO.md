# ESTADO — cv-cluciani

> Archivo de re-entrada rápida. Actualizar al final de cada sesión.
> Última actualización: 2026-03-10

## Estado actual

**Desplegado en:** https://christianluciani.github.io/cv-cluciani

### ✅ Completado
- Estructura de 8 salas con ilusiones ópticas por canvas
- Fractal Koch animado (3 copos anidados, rotación diferencial) → minimiza como logo
- Foto de perfil circular (enero 2023) con fallback automático
- Botón descarga CV + versión imprimible A4
- Logo Drahma desde repo público DRAHMAN-ORG
- Galería con placeholders en 3 sub-secciones
- WhatsApp, LinkedIn, ResearchGate, X, Instagram
- Necker BG full-width en Sala 01
- Sala 03 Proyectos: CLAPPS.AI, NOOS, Kontablo, Drahma repo
- Manual de estilo embebido en comentario HTML
- Estructura modular en src/ (docs de referencia)

### 🔜 Próximo paso
1. **Fotos galería** — añadir imágenes reales a `assets/gallery/`
   - Drahma en campo amazónico (3 slots)
   - Lab STEM USFQ (4 slots)
   - Casa Abierta / difractómetro (2 slots)
2. **Revisar repos GitHub** — actualizar sección proyectos con info real
   - cluciani-angel/synapse-arc → ¿qué es Synapse Arc?
   - Neuroversality/Neuroversality → descripción
   - DRAHMAN-USFQ/webpage → estado actual
3. **Ecosistema digital** — coherencia LinkedIn / ResearchGate / X con este CV

### 💡 Ideas pendientes
- Generar SVGs de mayor calidad para ilusiones (prompts en comentarios HTML)
- Variante del CV para ERP/Zoho consulting
- Variante académica con publicaciones expandidas

## Notas técnicas
- Single HTML file · sin build step obligatorio
- GitHub Pages: push a main → deploy automático
- Fractal: 3 copos Koch anidados rotando a velocidades distintas (−fractalAngle*1.3, fractalAngle*2)
- Foto: URL Google Photos con onerror fallback → si expira, poner foto local en assets/images/
