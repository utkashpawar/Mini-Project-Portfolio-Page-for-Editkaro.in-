# Editkaro.in — Portfolio Website

An interactive, responsive portfolio site built for **Editkaro.in**, a social media marketing & video editing agency. Showcases their work across nine formats — short-form, long-form, gaming, football edits, eCommerce ads, documentary, color grading, anime, and ads.

🔗 **Live demo (GitHub Pages):** https://utkashpawar.github.io/Mini-Project-Portfolio-Page-for-Editkaro.in-/
🔗 **Live demo (Netlify):** https://lively-bubblegum-873369.netlify.app/

## Note on media used

This portfolio was built to demonstrate the required functionality — category-based filtering, responsive design, interactive lightbox previews, and creative UI elements — as outlined in the project brief. Since actual client footage from Editkaro.in was not provided for this exercise, the video thumbnails and clips currently shown are AI-generated sample thumbnails and royalty-free/reference video content used purely for demonstration purposes. The site is fully structured to accept real client footage — thumbnails and video links can be swapped in directly via the `PROJECTS` array in `script.js` without any changes to the design or layout.

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
   git clone https://github.com/utkashpawar/Mini-Project-Portfolio-Page-for-Editkaro.in-.git
   cd Mini-Project-Portfolio-Page-for-Editkaro.in-
   ```
2. Open `index.html` in your browser — no build step required.
   - Tip: use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension for auto-reload while editing.

## Adding Real Client Content

Open `script.js` and edit the `PROJECTS` array:
- Replace `thumb` with a real thumbnail image URL (or `gradient` if no image is set).
- Set `embedSrc` to a real video/YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`) to make the lightbox playable.
- Update `title`, `meta`, and `desc` for each project.

## Deployment

Deployed with:
- [GitHub Pages](https://pages.github.com/) — auto-deploys from the `main` branch
- [Netlify](https://www.netlify.com/) — connected to this repo, auto-redeploys on every commit

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built as part of a VaultofCodes internship mini-project.
