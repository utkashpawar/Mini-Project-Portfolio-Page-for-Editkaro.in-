# Editkaro.in — Portfolio Website

An interactive, responsive portfolio site built for **Editkaro.in**, a social media marketing & video editing agency. Showcases their work across nine formats — short-form, long-form, gaming, football edits, eCommerce ads, documentary, color grading, anime, and ads.

🔗 **Live demo:** [add your deployed link here]

## Features

- 🎬 Category-based filtering (timeline-style filter bar)
- 🖱️ Lightbox video previews with keyboard support (Esc to close, focus trapping)
- 📱 Fully responsive — mobile, tablet, and desktop
- ♿ Accessible — visible keyboard focus states, `prefers-reduced-motion` respected
- ✨ Custom color-grading inspired UI (orange/teal split-tone palette)
- ⚡ Zero dependencies — pure HTML, CSS, and JavaScript

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Fonts: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Inter](https://fonts.google.com/specimen/Inter), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

## Project Structure

```
editkaro-portfolio/
├── index.html      # Page structure & content
├── style.css       # Design system, layout, responsiveness
├── script.js       # Filtering, lightbox, nav, project data
└── README.md
```

## Getting Started

1. Clone the repo
   ```bash
   git clone https://github.com/your-username/editkaro-portfolio.git
   cd editkaro-portfolio
   ```
2. Open `index.html` in your browser — no build step required.
   - Tip: use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for auto-reload while editing.

## Adding Real Client Content

Open `script.js` and edit the `PROJECTS` array:
- Replace `gradient` with a real thumbnail image URL.
- Set `embedSrc` to a real video/YouTube embed URL to make the lightbox playable.
- Update `title`, `meta`, and `desc` for each project.

## Deployment

Deployed with [Netlify](https://app.netlify.com/drop) / [GitHub Pages](https://pages.github.com/) — drag-and-drop the project folder or connect the repo directly.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built as part of a VaultofCodes internship mini-project.
