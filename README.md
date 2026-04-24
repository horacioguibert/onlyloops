<div align="center">

# OnlyLoops

**Sequencer de progresiones armónicas con Color Engine paramétrico**

Un tributo a la precisión de Steve Jobs aplicado al lenguaje de los acordes.

[🌐 onlyloops.app](https://onlyloops.app) &nbsp;·&nbsp; Progressive Web App &nbsp;·&nbsp; Hi-Fi 24-bit &nbsp;·&nbsp; Cero latencia

</div>

---

## Qué es OnlyLoops

OnlyLoops es el primer módulo liberado de la suite **Only Guitars**: una herramienta musical profesional diseñada con rigor arquitectónico para músicos que toman en serio la armonía.

No es un sequencer más. Es un instrumento de composición donde **cada píxel tiene una razón de ser**, cada click fue evaluado, y cada transición fue medida. Construido siguiendo las cuatro reglas de oro del proyecto:

1. **Minimizar clicks** — nunca gastes un click de más
2. **Salidas rápidas tipo estadio** — cada panel es un estadio, muchas salidas
3. **Botones que hablan** — la iconografía comunica qué pasa al tocar
4. **El plano es la ley** — fidelidad 1:1 al diseño arquitectónico

---

## Features

### Color Engine paramétrico
> "Elegí un color. OnlyLoops diseña el resto."

Rueda HSL 220×220 para el fondo + barra vertical arcoíris 28×220 para las fonts. Slider día/noche invertido que aplica sobre el último picker tocado. Toda la aplicación se re-tematiza en tiempo real sin un solo click de "aplicar".

### 10 presets visuales
5 presets fijos más 5 slots custom guardables:

| Preset | Identidad visual |
|---|---|
| **HUESO** | Claro, cálido, papel antiguo |
| **MOISES** | Azul profundo, místico |
| **NOCHE** | Oscuro puro, contraste alto |
| **CORAL** | Tierra cálida, salmón |
| **PAPEL** | Gris claro, editorial |

Cada preset guarda color base, accent de fonts y familia tipográfica. Tap en `+` guarda el estado actual. Long-press elimina.

### Motor de audio profesional
- **Tone.js + Salamander Piano** como motor base
- **24-bit, cero latencia**
- Estructuras JSON documentadas para bibliotecas de acordes y drum-sheets
- Tres patrones rítmicos: BOSSA, JAZZ, SWING

### Tipografía como protagonista
Stack de tres familias curadas:

- **Cormorant Garamond** — títulos editoriales y acordes grandes
- **SF Pro** — UI y labels, con kerning Apple
- **DM Mono** — números, BPM y labels técnicas

Dieciséis familias disponibles en el Color Engine para elegir el look tipográfico global.

### Grilla modular 18×26
Plano maestro inviolable. Toda la UI se alinea. Cada dispositivo y orientación tiene su propio plano: iPhone V/H, iPad V/H, PC V/H. Sin re-escalados automáticos genéricos.

---

## Suite Only Guitars

OnlyLoops forma parte de una suite musical en construcción:

```
Only Guitars
├── OnlyChords       Biblioteca y explorador de acordes
├── OnlyScales       Escalas, modos e intervalos
├── OnlyLoops        ← Sequencer de progresiones  (este repo)
└── OnlySongs        Composición y arreglos de canciones
```

Cada módulo comparte el mismo lenguaje visual, la misma grilla maestra y la misma filosofía de interacción.

---

## Stack técnico

- **HTML5** · Canvas 2D para el sequencer
- **CSS3** · Custom properties (variables) para todo el theming
- **Vanilla JavaScript** · sin frameworks, sin build step
- **Tone.js** · motor de audio Web Audio API
- **Salamander Piano** · samples Hi-Fi 24-bit
- **PWA** · Progressive Web App con service worker, instalable en iOS/Android/Desktop

Sin dependencias de build. Un solo `index.html` de ~9.200 líneas, autoexplicativo y auditable.

---

## Arquitectura

### Tres capas separadas

```
┌──────────────────────────────────┐
│  Canvas    sequencer de clips    │
├──────────────────────────────────┤
│  Fonts     tipografía dinámica   │
├──────────────────────────────────┤
│  HTML      UI con var(--tokens)  │
└──────────────────────────────────┘
```

### CSS Variables centrales

```css
--bg      /* fondo principal */
--bg2     /* fondo de botones y cards */
--card    /* fondo de panel editor */
--rule    /* borde sutil */
--acc     /* accent (color de fonts activo) */
--ink     /* texto principal */
```

**Regla absoluta:** todo color en código pasa por `var()`. Nunca hardcoded.

### Parser universal de color

`_parseColorToRGB()` acepta cuatro formatos: `#rgb`, `#rrggbb`, `rgb()`, `hsl()`, `hsla()`. Crítico para que el canvas se mantenga en sincro con el Color Engine.

---

## Versionado

Formato incremental sin excepciones:

```
index_v13_N.html
```

Cada cambio aprobado bumpea `N`. Versión actual en producción: **v13.105**.

Las versiones previas se preservan en histórico. Nunca se reescriben.

---

## Deploy

La app se sirve desde Vercel con deploy continuo desde `main`:

```
GitHub main → Vercel → onlyloops.app
```

Un push a main dispara un redeploy automático. Cache busting vía service worker. El iPhone detecta la nueva versión en ~10 segundos y refresca la PWA sola.

---

## Author

**Horacio Guibert** — Arquitecto, Músico y MBA.

Combinación de visión estética de Director Creativo con rigor de Auditor de Proyectos. El diseño de OnlyLoops refleja esa dualidad: precisión técnica al servicio de la emoción musical.

---

## License

To be defined.

---

<div align="center">

*"Un buen constructor lee el plano, toma medidas, ejecuta fiel, verifica.*
*Si hay dudas, le pregunta al plano."*

</div>
