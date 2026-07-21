/* =========================================================
   EDITKARO.IN — Portfolio interactivity
   Replace THUMBNAIL gradients with real poster images and
   plug real video/embed URLs into `embedSrc` when client
   footage is available. Everything else keeps working as-is.
   ========================================================= */

// ---- 1. PORTFOLIO DATA -----------------------------------------------
// gradient: fake "thumbnail" until real footage/poster art is dropped in
// embedSrc: leave null for placeholder preview, or set to a real
//           video URL / YouTube embed URL to make the lightbox playable
const PROJECTS = [
  { id:1,  cat:'short-form',    tag:'Short-Form',    title:'Reel Hook — 0.8s Cut',     meta:'Instagram Reels · 0:24',
    thumb:'reel-hook.jpg', desc:'Fast-paced vertical edit built for a sub-1-second scroll-stopping hook, cut to trending audio.', embedSrc:null },
  { id:2,  cat:'short-form',    tag:'Short-Form',    title:'Behind the Counter',        meta:'TikTok · 0:31',
    thumb:'legend-wallpaper.jpg', desc:'Day-in-the-life style short-form edit for a D2C food brand, captioned and platform-native.', embedSrc:null },
  { id:3,  cat:'long-form',     tag:'Long-Form',     title:'Founder Story — Ep. 03',    meta:'YouTube · 11:42',
    gradient:'linear-gradient(160deg,#2dd4bf,#0e5c53)', desc:'Long-form narrative edit with multi-cam sync, lower-thirds, and pacing built for retention graphs.', embedSrc:null },
  { id:4,  cat:'long-form',     tag:'Long-Form',     title:'Studio Tour, Unfiltered',   meta:'YouTube · 18:05',
    gradient:'linear-gradient(160deg,#3ee4c8,#136b60)', desc:'Vlog-style long-form cut with A/B roll layering and a custom lower-third system.', embedSrc:null },
  { id:5,  cat:'gaming',        tag:'Gaming',        title:'Clutch Round Montage',      meta:'YouTube Shorts · 0:45',
    gradient:'linear-gradient(160deg,#a855f7,#3b0f6b)', desc:'Kill-cam montage synced to beat drops with screen-shake accents and HUD overlays.', embedSrc:null },
  { id:6,  cat:'gaming',        tag:'Gaming',        title:'Season Recap Trailer',      meta:'YouTube · 2:10',
    gradient:'linear-gradient(160deg,#c084fc,#4c1d95)', desc:'Trailer-style recap edit with match highlights, motion graphics, and a custom title sequence.', embedSrc:null },
  { id:7,  cat:'football',      tag:'Football Edits', title:'Derby Day Highlights',    meta:'Instagram · 0:52',
    gradient:'linear-gradient(160deg,#22c55e,#08401f)', desc:'Match highlight reel with goal replays, slow-mo impact frames, and crowd-noise mix.', embedSrc:null },
  { id:8,  cat:'football',      tag:'Football Edits', title:'Player Signing Hype',     meta:'TikTok · 0:28',
    gradient:'linear-gradient(160deg,#4ade80,#14532d)', desc:'Announcement-style hype edit built to launch a new signing across club social channels.', embedSrc:null },
  { id:9,  cat:'ecommerce',     tag:'eCommerce Ads', title:'Unboxing → Add to Cart',   meta:'Meta Ads · 0:15',
    gradient:'linear-gradient(160deg,#facc15,#7c5c07)', desc:'Direct-response product ad optimized for a 15-second placement with an on-screen CTA.', embedSrc:null },
  { id:10, cat:'ecommerce',     tag:'eCommerce Ads', title:'UGC Testimonial Cut',      meta:'Meta Ads · 0:22',
    gradient:'linear-gradient(160deg,#fde047,#8a6d0a)', desc:'UGC-style testimonial edit with captions, product cutaways, and a performance-tested hook.', embedSrc:null },
  { id:11, cat:'documentary',   tag:'Documentary',   title:'The Last Workshop',        meta:'Short Doc · 6:30',
    gradient:'linear-gradient(160deg,#94a3b8,#1f2937)', desc:'Observational documentary edit with natural pacing, ambient sound design, and archival inserts.', embedSrc:null },
  { id:12, cat:'documentary',   tag:'Documentary',   title:'Voices of the Market',     meta:'Short Doc · 9:12',
    gradient:'linear-gradient(160deg,#cbd5e1,#334155)', desc:'Interview-driven documentary cut balancing talking heads with observational B-roll.', embedSrc:null },
  { id:13, cat:'color-grading', tag:'Color Grading', title:'Golden Hour Grade',        meta:'Grading Demo · 1:04',
    gradient:'linear-gradient(160deg,#ff5a36 0%,#2dd4bf 100%)', desc:'Split-tone grade pushing warm highlights against teal shadows for a cinematic look.', embedSrc:null },
  { id:14, cat:'color-grading', tag:'Color Grading', title:'Night Neon Grade',         meta:'Grading Demo · 0:48',
    gradient:'linear-gradient(160deg,#7c3aed 0%,#22d3ee 100%)', desc:'Moody neon grade built for a nightlife brand, matched across mixed lighting sources.', embedSrc:null },
  { id:15, cat:'anime',         tag:'Anime',         title:'AMV — Fall Arc',            meta:'YouTube · 3:20',
    gradient:'linear-gradient(160deg,#ec4899,#5b1436)', desc:'Beat-synced anime music video with motion-tracked effects and impact-frame timing.', embedSrc:null },
  { id:16, cat:'anime',         tag:'Anime',         title:'Character Reveal Edit',     meta:'TikTok · 0:19',
    gradient:'linear-gradient(160deg,#f472b6,#831843)', desc:'Reveal-style edit built around a single beat drop, formatted for fan-community reposting.', embedSrc:null },
  { id:17, cat:'ads',           tag:'Ads',            title:'App Launch Spot',          meta:'YouTube Ads · 0:30',
    gradient:'linear-gradient(160deg,#38bdf8,#0c4a6e)', desc:'Broadcast-style app launch spot with kinetic typography and a scored soundbed.', embedSrc:null },
  { id:18, cat:'ads',           tag:'Ads',            title:'Brand Anthem',             meta:'YouTube Ads · 1:00',
    gradient:'linear-gradient(160deg,#60a5fa,#1e3a8a)', desc:'Emotive brand anthem cut mixing scripted VO with real customer footage.', embedSrc:null },
];

// ---- 2. ICONS ----------------------------------------------------------
const PLAY_ICON = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

// ---- 3. RENDER CARDS -----------------------------------------------
const grid = document.getElementById('workGrid');
const emptyMsg = document.getElementById('workEmpty');

function timecodeFor(id){
  const s = (id * 7) % 60, m = (id * 3) % 60, h = id % 24;
  const pad = n => String(n).padStart(2,'0');
  return `00:${pad(h)}:${pad(m)}:${pad(s)}`;
}

function renderCards(){
  grid.innerHTML = PROJECTS.map(p => `
    <article class="card" data-cat="${p.cat}" data-id="${p.id}" tabindex="0" role="button"
      aria-label="Open preview: ${p.title}">
      <div class="card__thumb">
       <div class="card__thumb-bg" style="background:${p.thumb ? `url('${p.thumb}') center/cover` : p.gradient}"></div>
        <span class="card__timecode mono">${timecodeFor(p.id)}</span>
        <span class="card__tag">${p.tag}</span>
        <div class="card__play">${PLAY_ICON}</div>
      </div>
      <div class="card__body">
        <p class="card__title">${p.title}</p>
        <p class="card__meta">${p.meta}</p>
      </div>
    </article>
  `).join('');
}
renderCards();

// ---- 4. FILTERING -----------------------------------------------
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    const cards = document.querySelectorAll('.card');
    let visibleCount = 0;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.style.display = match ? '' : 'none';
      if (match) visibleCount++;
    });
    emptyMsg.hidden = visibleCount !== 0;
  });
});

// ---- 5. LIGHTBOX -----------------------------------------------
const lightbox = document.getElementById('lightbox');
const lbFrame = document.getElementById('lightboxFrame');
const lbTag = document.getElementById('lightboxTag');
const lbTitle = document.getElementById('lightboxTitle');
const lbDesc = document.getElementById('lightboxDesc');
let lastFocused = null;

function openLightbox(project){
  lastFocused = document.activeElement;
  lbTag.textContent = project.tag.toUpperCase();
  lbTitle.textContent = project.title;
  lbDesc.textContent = project.desc;

  lbFrame.innerHTML = project.embedSrc
    ? `<iframe src="${project.embedSrc}" style="width:100%;height:100%;border:0" allow="autoplay; fullscreen" allowfullscreen title="${project.title}"></iframe>`
    : `<div style="width:100%;height:100%;background:${project.gradient};display:flex;align-items:center;justify-content:center;">
         <div class="card__play" style="opacity:1;scale:1;position:static;">${PLAY_ICON}</div>
       </div>`;

  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox__close').focus();
}

function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  lbFrame.innerHTML = '';
  if (lastFocused) lastFocused.focus();
}

grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card) return;
  const project = PROJECTS.find(p => p.id === Number(card.dataset.id));
  if (project) openLightbox(project);
});

grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')){
    e.preventDefault();
    e.target.click();
  }
});

lightbox.addEventListener('click', e => {
  if (e.target.hasAttribute('data-close')) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});

// ---- 6. NAV: mobile burger -----------------------------------------------
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  burger.setAttribute('aria-expanded','false');
}));

// ---- 7. HERO: live timecode readout -----------------------------------------------
const heroTC = document.getElementById('heroTimecode');
let frame = 0;
function tickTimecode(){
  frame++;
  const totalSeconds = Math.floor(frame / 24);
  const f = frame % 24;
  const s = totalSeconds % 60;
  const m = Math.floor(totalSeconds / 60) % 60;
  const h = Math.floor(totalSeconds / 3600);
  const pad = n => String(n).padStart(2,'0');
  heroTC.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
  requestAnimationFrame(tickTimecode);
}
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  requestAnimationFrame(tickTimecode);
}

// ---- 8. FOOTER: year -----------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();
