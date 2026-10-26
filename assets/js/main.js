/* =====================================================================
   Matéo Puertas — Portfolio 2026 · interactions
   (le contenu se modifie dans data.js, pas ici)
   ===================================================================== */
(() => {
  'use strict';

  const D = window.PORTFOLIO || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const html = document.documentElement;
  const isProjectPage = document.body.dataset.page === 'projet';
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);
  const nf = new Intl.NumberFormat('fr-FR');
  const nfc = new Intl.NumberFormat('fr-FR', { notation: 'compact', maximumFractionDigits: 1 });

  if (!hasGsap || reduced) html.classList.add('no-anim');
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------------------------------------------ */
  /* Utilitaires                                                         */
  /* ------------------------------------------------------------------ */
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const arrowSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  const playSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';

  function timecode(seconds, fps = 25) {
    const s = Math.max(0, seconds);
    const f = Math.floor((s % 1) * fps);
    const t = Math.floor(s);
    const p = n => String(n).padStart(2, '0');
    return `${p(Math.floor(t / 3600))}:${p(Math.floor(t / 60) % 60)}:${p(t % 60)}:${p(f)}`;
  }

  // Écran « bientôt en ligne » affiché quand une vidéo n'est pas encore ajoutée
  function placeholder(title, { label = 'Bientôt en ligne', meta = '', glow = '' } = {}) {
    return `<div class="ph"${glow ? ` style="--ph-glow:${glow}"` : ''}>
      <div class="ph__top mono"><span>${esc(label)}</span><span>${esc(meta)}</span></div>
      <p class="ph__title">${title}</p>
      <div class="ph__bottom mono"><span class="ph__bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><span>00:00:00:00</span></div>
    </div>`;
  }

  // Tuile carrée avec le logo d'une marque
  function logoTile(m, size = '') {
    if (!m.logo) return `<span class="logo-tile logo-tile--text ${size ? 'logo-tile--' + size : ''}">${esc(m.nom.slice(0, 2))}</span>`;
    const dark = m.fond && m.fond !== '#ffffff';
    return `<span class="logo-tile ${size ? 'logo-tile--' + size : ''} ${dark ? 'is-full' : ''}" style="background:${esc(m.fond || '#fff')}"><img src="${esc(m.logo)}" alt="${esc(m.nom)}" loading="lazy"></span>`;
  }

  function mediaFor(p) {
    if (p.apercu) return `<video muted loop playsinline preload="none" ${p.poster ? `poster="${esc(p.poster)}"` : ''} data-src="${esc(p.apercu)}" data-hover-play></video>`;
    if (p.poster) return `<img src="${esc(p.poster)}" alt="" loading="lazy">`;
    const words = p.titre.split(' ');
    const title = words.length > 2 ? `${esc(words.slice(0, -1).join(' '))} <em>${esc(words.at(-1))}</em>` : esc(p.titre);
    return placeholder(title, { label: p.statut ? 'En production' : 'Bientôt en ligne', meta: p.duree, glow: p.categorie === 'motion' ? '#ff7a4d' : '#9a7bff' });
  }

  /* ------------------------------------------------------------------ */
  /* Rendu du contenu (data.js)                                          */
  /* ------------------------------------------------------------------ */
  function renderHome() {
    // Marques (défilement infini)
    const mq = $('[data-marquee]');
    if (mq && D.marques) {
      const group = D.marques.map(m => `<span class="brand-item">${logoTile(m)}<span>${esc(m.nom)}</span></span>`).join('');
      mq.innerHTML = `<div class="marquee__group">${group}</div><div class="marquee__group" aria-hidden="true">${group}</div>`;
    }

    // Chiffres
    const ng = $('[data-numbers]');
    if (ng && D.chiffres) {
      ng.innerHTML = D.chiffres.map(c => `
        <div class="num-card" data-reveal>
          <span class="num-card__value"><span data-count="${c.valeur}">0</span>${esc(c.suffixe)}</span>
          <p class="num-card__label">${esc(c.label)}</p>
        </div>`).join('');
    }

    // Projets par catégorie
    $$('[data-projects]').forEach(grid => {
      const list = (D.projets || []).filter(p => p.categorie === grid.dataset.projects);
      grid.innerHTML = list.map((p, i) => {
        const row = Math.floor(i / 2);
        const size = (i % 2 === 0) === (row % 2 === 0) ? 'wide' : 'narrow';
        const badge = p.statut ? `<span class="pcard__badge"><svg class="ring" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#ddd"/><circle cx="10" cy="10" r="8" stroke="#ff8a6b" stroke-dasharray="${(p.progression || 50) / 100 * 50.3} 50.3" transform="rotate(-90 10 10)"/></svg>${esc(p.statut)}</span>` : '';
        const progress = p.progression ? `<div class="pcard__progress"><span style="--p:${p.progression}%"></span></div>` : '';
        return `
          <a class="pcard pcard--${size}" href="projet.html?p=${encodeURIComponent(p.slug)}" data-reveal>
            <div class="pcard__media" style="view-transition-name: media-${esc(p.slug)}">${mediaFor(p)}${badge}${progress}</div>
            <div class="pcard__info">
              <div>
                <h3 class="pcard__title">${esc(p.titre)}</h3>
                <p class="pcard__desc">${esc(p.accroche)}</p>
                <div class="pcard__meta mono"><span>${esc(p.annee)}</span><span>${esc(p.duree)}</span><span>${esc((p.outils || []).join(' · '))}</span></div>
              </div>
              <span class="pcard__arrow">${arrowSvg}</span>
            </div>
          </a>`;
      }).join('');
    });

    // YouTube
    const yt = D.youtube;
    if (yt && $('[data-yt-videos]')) {
      $('[data-yt-subs]').textContent = nfc.format(yt.abonnes);
      renderYtVideos(yt.populaires || [], yt.selection || []);
    }

    // TikTok
    const tt = D.tiktok;
    if (tt && $('[data-phones]')) {
      $('[data-tt-compte]').textContent = tt.compte;
      $('[data-tt-texte]').textContent = tt.texte;
      $('[data-tt-note]').textContent = tt.note;
      $('[data-tt-abonnes]').textContent = tt.abonnes;
      $('[data-tt-vues]').textContent = tt.vues;
      if (tt.jaime && $('[data-tt-jaime]')) $('[data-tt-jaime]').textContent = tt.jaime;
      const brandOf = name => (D.marques || []).find(m => m.nom === name);
      $('[data-phones]').innerHTML = tt.videos.map((v, i) => {
        const media = v.src
          ? `<video muted loop playsinline preload="none" ${v.poster ? `poster="${esc(v.poster)}"` : ''} data-src="${esc(v.apercu || v.src)}" data-hover-play></video>`
          : placeholder(`Vidéo <em>#${i + 1}</em>`, { label: 'Archive TikTok', meta: '9:16', glow: ['#ff7a4d', '#9a7bff', '#ffb38a', '#ff5e8a', '#6c8dff'][i % 5] });
        return `
          <div class="phone${v.format === '16:9' ? ' phone--land' : ''}" ${v.src ? `data-vertical="${esc(v.src)}" data-land="${v.format === '16:9' ? 1 : ''}"` : ''}>
            <div class="phone__screen">
              ${media}
              <div class="phone__ui"><span><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1 8.2 3.3 4.5 7 4.5c2 0 3.5 1.1 5 3 1.5-1.9 3-3 5-3 3.7 0 6 3.7 4.5 7.3C19.5 16.4 12 21 12 21z"/></svg></span><span><svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z"/></svg></span><span><svg viewBox="0 0 24 24"><path d="M14 4l7 7-7 7v-4c-5 0-8 1.5-11 5 1-5 4-10 11-11z"/></svg></span></div>
              <div class="phone__cap"><b>${esc(tt.compte)}</b>${esc(v.legende)}</div>
            </div>
            <div class="phone__label">${v.marque && brandOf(v.marque) ? logoTile(brandOf(v.marque), 'sm') : ''}<span>${esc(v.legende)}</span><span class="mono">${v.vues ? esc(v.vues) + ' vues' : ''}</span></div>
          </div>`;
      }).join('');
    }

    // Collaborations
    const cg = $('[data-collabs]');
    if (cg && D.marques) {
      cg.innerHTML = D.marques.map((m, i) => `
        <div class="collab${i === 0 ? ' collab--hl' : ''}" data-reveal>
          <div class="collab__top">${logoTile(m, 'lg')}<span class="collab__name">${esc(m.nom)}</span></div>
          <p class="collab__result">${esc(m.resultat)}</p>
        </div>`).join('');
    }

    // Témoignage
    const q = $('[data-quote]');
    if (q && D.temoignage) {
      const t = D.temoignage;
      const brand = (D.marques || []).find(m => t.role && t.role.includes(m.nom));
      q.innerHTML = `
        <span class="quote__mark" aria-hidden="true">“</span>
        <blockquote>${esc(t.citation)}</blockquote>
        ${t.traduction ? `<p class="quote__fr">${esc(t.traduction)}</p>` : ''}
        <figcaption>${brand ? logoTile(brand) : ''}<span><b>${esc(t.auteur)}</b>${esc(t.role)}</span></figcaption>`;
    } else if (q) q.remove();

    // Preuves (captures)
    const pg = $('[data-proofs]');
    if (pg && D.preuves) {
      const fig = p => p.src
        ? `<figure class="proof proof--${p.format === 'paysage' ? 'land' : 'port'}" data-reveal data-zoom="${esc(p.src)}"><img src="${esc(p.src)}" alt="${esc(p.legende)}" loading="lazy"><figcaption>${esc(p.legende)}</figcaption></figure>`
        : `<figure class="proof proof--empty" data-reveal><div>${esc(p.legende)}<span>Capture à ajouter</span></div></figure>`;
      const port = D.preuves.filter(p => p.format !== 'paysage');
      const land = D.preuves.filter(p => p.format === 'paysage');
      pg.innerHTML = port.map(fig).join('') + (land.length ? `<div class="proofs__stack">${land.map(fig).join('')}</div>` : '');
    }

    // Showreel
    const sv = $('[data-showreel-video]');
    if (sv && D.showreel) {
      const s = D.showreel;
      sv.src = s.apercu || s.video;
      sv.poster = s.poster || '';
      $('[data-showreel-badge]').textContent = s.badge || 'Showreel';
    }
  }

  function ytCard(v, rank) {
    return `
      <button class="ytv" type="button" data-yt-id="${esc(v.id)}">
        <span class="ytv__thumb">
          <img src="assets/img/yt/${esc(v.id)}.jpg" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg'" alt="" loading="lazy">
          ${rank ? `<span class="ytv__rank mono">#${rank}</span>` : ''}
          <span class="ytv__dur mono">${esc(v.duree || '')}</span>
          <span class="ytv__play"><span>${playSvg}</span></span>
        </span>
        <span>
          <span class="ytv__title" data-yt-title="${esc(v.id)}">${esc(v.titre)}</span>
          <span class="ytv__views" style="display:block"><b data-yt-views="${esc(v.id)}">${nf.format(v.vues || 0)}</b> vues</span>
        </span>
      </button>`;
  }
  function renderYtVideos(top, picks) {
    $('[data-yt-videos]').innerHTML = `
      <div class="yt__group">
        <p class="eyebrow mono">Les plus vues</p>
        <div class="yt__row yt__row--3" data-yt-top>${top.map((v, i) => ytCard(v, i + 1)).join('')}</div>
      </div>
      ${picks.length ? `<div class="yt__group">
        <p class="eyebrow mono">Mes meilleurs montages</p>
        <div class="yt__row yt__row--2">${picks.map(v => ytCard(v)).join('')}</div>
      </div>` : ''}`;
  }

  /* ------------------------------------------------------------------ */
  /* Page projet                                                         */
  /* ------------------------------------------------------------------ */
  function renderProject() {
    const root = $('[data-project-root]');
    const slug = new URLSearchParams(location.search).get('p');
    const list = D.projets || [];
    const i = list.findIndex(p => p.slug === slug);
    if (i < 0) { location.replace('index.html#motion'); return; }
    const p = list[i];
    const next = list[(i + 1) % list.length];
    const catLabel = p.categorie === 'motion' ? 'Motion design' : 'Montage vidéo';
    document.title = `${p.titre} — Matéo Puertas`;

    const words = p.titre.split(' ');
    const titleHtml = words.length > 1 ? `${esc(words.slice(0, -1).join(' '))} <em>${esc(words.at(-1))}</em>` : esc(p.titre);

    const video = p.video
      ? `<video controls playsinline preload="metadata" crossorigin="anonymous" ${p.poster ? `poster="${esc(p.poster)}"` : ''} src="${esc(p.video)}" data-track="video/${esc(p.slug)}">${p.sousTitres ? `<track kind="subtitles" srclang="fr" label="Français" src="${esc(p.sousTitres)}" default>` : ''}</video>`
      : placeholder(titleHtml, { label: p.statut || 'Bientôt en ligne', meta: p.duree });

    const shots = (p.galerie || []).filter(g => g.src);
    const gallery = shots.length ? `
      <div class="gallery container">
        <h2 class="heading-sm gallery__title" data-reveal>Images clés</h2>
        <div class="gallery__grid">
          ${shots.map(g => `<figure class="gallery__item" data-reveal data-zoom="${esc(g.src)}"><img src="${esc(g.src)}" alt="${esc(g.legende)}" loading="lazy"><figcaption>${esc(g.legende)}</figcaption></figure>`).join('')}
        </div>
      </div>` : '';

    root.innerHTML = `
      <section class="project-hero">
        <div class="glow" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
        <div class="container">
          <a href="index.html#${p.categorie}" class="back">← Tous les projets</a>
          <p class="eyebrow mono" style="position:relative">${catLabel}</p>
          <h1 class="display project-hero__title" data-split>${titleHtml}</h1>
          <p class="project-hero__lead" data-hero-fade>${esc(p.accroche)}</p>
        </div>
      </section>
      <section class="project-video">
        <div class="project-video__frame" style="view-transition-name: media-${esc(p.slug)}">${video}</div>
      </section>
      <section class="project-body">
        <div class="container">
          <dl class="project-meta" data-reveal>
            <div><dt>Rôle</dt><dd>${esc(p.role)}</dd></div>
            <div><dt>Durée · format</dt><dd>${esc(p.duree)} · ${esc(p.format)}</dd></div>
            <div><dt>Outils</dt><dd>${esc((p.outils || []).join(', '))}</dd></div>
            <div><dt>Année · cadre</dt><dd>${esc(p.annee)} · ${esc(p.equipe)}</dd></div>
          </dl>
          <div class="project-body__grid">
            ${(p.sections || []).map(s => `<div class="pblock" data-reveal><h2>${esc(s.titre)}</h2><p>${esc(s.texte)}</p></div>`).join('')}
          </div>
        </div>
        ${gallery}
      </section>
      <a class="next section--dark" href="projet.html?p=${encodeURIComponent(next.slug)}">
        <div class="glow glow--dark" aria-hidden="true"><span></span><span></span><span></span></div>
        <div class="container" style="position:relative;z-index:2">
          <p class="eyebrow mono next__label">Projet suivant</p>
          <div class="next__title"><span class="display">${esc(next.titre)}</span>${next.poster ? `<img class="next__thumb" src="${esc(next.poster)}" alt="" loading="lazy">` : ''}<span class="next__arrow">${arrowSvg}</span></div>
        </div>
      </a>`;
  }

  function initLogo() {
    const S = D.site || {};
    const anim = S.logoAnimation, src = S.logo, alt = S.logoSombre;
    if (!src && !anim) return;
    $$('[data-logo]').forEach(el => {
      el.classList.add('has-img');
      if (anim) {
        el.classList.add('is-anim');
        el.innerHTML = '<canvas aria-hidden="true"></canvas>';
      } else {
        if (alt) el.classList.add('has-alt');
        el.innerHTML = `<img class="logo-main" src="${esc(src)}" alt="">${alt ? `<img class="logo-alt" src="${esc(alt)}" alt="">` : ''}`;
      }
    });
    if (!anim) return;
    $$('[data-logo-anim]').forEach(el => { el.innerHTML = '<canvas aria-hidden="true"></canvas>'; });

    // Logo animé : la vidéo (noir sur blanc) est redessinée image par image
    // dans un canvas transparent ; le blanc devient transparent.
    // La couleur (noir ou blanc selon le thème) est gérée en CSS.
    const players = $$('[data-logo] canvas, [data-logo-anim] canvas').map(cv => {
      const v = document.createElement('video');
      Object.assign(v, { src: anim, muted: true, playsInline: true, preload: 'auto' });
      v.setAttribute('playsinline', '');
      v.className = 'logo-src';
      cv.parentNode.appendChild(v);
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      let raf = 0, last = null;
      const draw = () => {
        const w = Math.round(cv.clientWidth * Math.min(2, devicePixelRatio || 1));
        const h = Math.round(cv.clientHeight * Math.min(2, devicePixelRatio || 1));
        if (!w || !h || v.readyState < 2) return;
        if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; last = null; }
        ctx.drawImage(v, 0, 0, w, h);
        const img = ctx.getImageData(0, 0, w, h), d = img.data;
        // Image pas encore décodée (noire) : on garde la précédente
        if (d[0] < 200) { if (last) ctx.putImageData(last, 0, 0); else ctx.clearRect(0, 0, w, h); return; }
        for (let k = 0; k < d.length; k += 4) { d[k + 3] = 255 - d[k]; d[k] = d[k + 1] = d[k + 2] = 0; }
        ctx.putImageData(img, 0, 0);
        last = img;
      };
      const loop = () => { draw(); if (!v.paused && !v.ended) raf = requestAnimationFrame(loop); };
      v.addEventListener('play', () => { cancelAnimationFrame(raf); loop(); });
      v.addEventListener('ended', draw);
      v.addEventListener('seeked', draw);
      const play = () => { try { v.currentTime = 0; const p = v.play(); if (p) p.catch(() => {}); } catch (e) {} };
      const freeze = () => { const end = () => { v.currentTime = Math.max(0, v.duration - 0.05); }; v.readyState >= 1 ? end() : v.addEventListener('loadedmetadata', end, { once: true }); };
      return { cv, play, freeze };
    });

    players.forEach(p => {
      const navLogo = p.cv.closest('[data-logo]');
      if (reduced) return p.freeze();
      if (navLogo) {
        // Attend la fin du fondu d'apparition du menu
        setTimeout(p.play, hasGsap ? 900 : 0);
        (navLogo.closest('a') || navLogo).addEventListener('mouseenter', p.play);
      } else {
        // Grand logo en fin de page : se trace quand il arrive à l'écran
        p.freeze();
        const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { p.play(); io.disconnect(); } }, { threshold: 0.6 });
        io.observe(p.cv);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Thème clair / sombre                                                */
  /* ------------------------------------------------------------------ */
  function initTheme() {
    const btn = $('[data-theme-toggle]');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
      const apply = () => { html.dataset.theme = next; try { sessionStorage.setItem('theme', next); } catch (e) {} };
      if (document.startViewTransition && !reduced) document.startViewTransition(apply); else apply();
    });
  }

  /* ------------------------------------------------------------------ */
  /* Menu mobile                                                         */
  /* ------------------------------------------------------------------ */
  function initMenu() {
    const t = $('[data-menu-toggle]');
    if (!t) return;
    const set = open => {
      document.body.classList.toggle('menu-open', open);
      t.setAttribute('aria-expanded', open);
      $('[data-menu]').setAttribute('aria-hidden', !open);
      if (lenis) open ? lenis.stop() : lenis.start();
    };
    t.addEventListener('click', () => set(!document.body.classList.contains('menu-open')));
    $$('[data-menu] a').forEach(a => a.addEventListener('click', () => set(false)));
  }

  /* ------------------------------------------------------------------ */
  /* Défilement doux (Lenis) + ancres                                    */
  /* ------------------------------------------------------------------ */
  let lenis = null;
  function initScroll() {
    if (window.Lenis && !reduced) {
      lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true, syncTouch: false });
      if (hasGsap) {
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(t => lenis.raf(t * 1000));
        gsap.ticker.lagSmoothing(0);
      } else {
        const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      }
    }
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      const target = id === '#top' ? document.body : $(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(id === '#top' ? 0 : target, { offset: 0, duration: 1.6 });
      else (id === '#top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : target.scrollIntoView({ behavior: 'smooth' }));
    });
    // Arrivée depuis une autre page avec une ancre
    if (location.hash && $(location.hash)) {
      setTimeout(() => lenis ? lenis.scrollTo(location.hash, { immediate: true }) : $(location.hash).scrollIntoView(), 60);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Découpage des titres en mots                                         */
  /* ------------------------------------------------------------------ */
  function splitWords(el) {
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          const parts = child.textContent.split(/(\s+)/);
          const frag = document.createDocumentFragment();
          parts.forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const mask = document.createElement('span');
            mask.className = 'split-mask';
            const w = document.createElement('span');
            w.className = 'split-word';
            w.textContent = part;
            mask.appendChild(w);
            frag.appendChild(mask);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.classList.contains('split-mask')) {
          walk(child);
        }
      });
    };
    walk(el);
    return $$('.split-word', el);
  }

  /* ------------------------------------------------------------------ */
  /* Animations                                                          */
  /* ------------------------------------------------------------------ */
  let heroReady = false;
  function heroIntro() {
    const hv = $('[data-hero-video]');
    heroReady = true;
    if (hv) { const p = hv.play(); if (p) p.catch(() => {}); }
    if (!hasGsap || reduced) return;
    if ($('[data-hero]')) {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.hero__mask .hero__line', { yPercent: 40, opacity: 0, duration: 1.4, stagger: .12 })
        .to('[data-hero-fade]', { opacity: 1, y: 0, duration: 1.1, stagger: .1 }, '-=1.1')
        .from('.nav', { opacity: 0, duration: 1 }, '-=1');
      if (innerWidth > 1000) gsap.from('.hero__ui .artifact', { opacity: 0, y: 70, rotate: i => [-6, 5, 4, -5, 0][i % 5], scale: .9, duration: 1.5, stagger: .09, ease: 'expo.out', delay: .5 });
      return;
    }
    const title = $('.project-hero__title');
    const words = title ? $$('.split-word', title) : [];
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.from(words, { yPercent: 115, rotate: 4, duration: 1.4, stagger: .06 })
      .to('[data-hero-fade]', { opacity: 1, y: 0, duration: 1.2, stagger: .1 }, '-=1.05')
      .from('.nav', { opacity: 0, duration: 1 }, '-=1.2');

    const arts = $$('.artifact');
    if (arts.length && innerWidth > 1000) {
      tl.from(arts, { opacity: 0, y: 80, rotate: (i) => [-6, 5, 4, -5, 0][i % 5], scale: .9, duration: 1.6, stagger: .09 }, '-=1.3');
    }
  }

  function initReveals() {
    if (!hasGsap || reduced) return;

    // Titres de section
    $$('[data-split]').forEach(el => {
      if (el.closest('.hero') || el.closest('.project-hero')) return;
      const words = $$('.split-word', el);
      gsap.from(words, {
        yPercent: 115, rotate: 3, duration: 1.3, ease: 'expo.out', stagger: .045,
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    // Paragraphe « à propos » : les mots s'allument au scroll
    $$('[data-split-lines]').forEach(el => {
      const words = splitWords(el);
      gsap.fromTo(words, { opacity: .14 }, {
        opacity: 1, stagger: .05, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
      });
    });

    // Éléments génériques
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%',
      onEnter: els => gsap.to(els, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: .08, overwrite: true, onStart() { els.forEach(e => e.classList.add('is-inview')); } }),
    });
  }

  function initShowreel() {
    const frame = $('[data-showreel]');
    if (!frame) return;
    frame.addEventListener('click', () => {
      const s = D.showreel || {};
      openLightbox({ type: 'video', src: s.video || s.apercu });
    });
    if (!hasGsap || reduced || innerWidth < 720) return;
    const pin = $('.showreel__pin');
    const head = $('.showreel__head');
    const getScale = () => Math.max(innerWidth / frame.offsetWidth, innerHeight / frame.offsetHeight) * 1.001;
    const tl = gsap.timeline({
      scrollTrigger: { trigger: pin, start: 'top top', end: '+=120%', scrub: 1, pin: true, invalidateOnRefresh: true },
    });
    tl.to(head, { yPercent: -60, opacity: 0, ease: 'none', duration: .4 }, 0)
      .to(frame, { scale: getScale, y: () => -(head.offsetHeight + 48) / 2, borderRadius: 0, ease: 'power2.inOut', duration: 1 }, 0)
      .to({}, { duration: .3 });
  }

  // Le calque masque reprend exactement la mise en page du calque interface
  function buildHeroMask() {
    const ui = $('[data-hero-ui] .hero__inner');
    const maskInner = $('[data-hero-mask] .hero__inner');
    if (!ui || !maskInner) return;
    const h1 = $('.hero__big', maskInner);
    const clone = ui.cloneNode(true);
    [...clone.children].forEach(el => {
      if (el.classList.contains('hero__big')) { el.replaceWith(h1); return; }
      el.removeAttribute('data-hero-fade');
      el.classList.add('ghost');
      el.setAttribute('aria-hidden', 'true');
    });
    $$('a, button', clone).forEach(el => el.setAttribute('tabindex', '-1'));
    maskInner.replaceWith(clone);
  }

  // Au scroll, les lettres grossissent jusqu'à laisser la vidéo plein écran
  function initHeroZoom() {
    const hero = $('[data-hero]');
    if (!hero || !hasGsap || reduced || innerWidth < 720) return;
    gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: '+=110%', scrub: .6, pin: true, anticipatePin: 1 } })
      .to('[data-hero-ui]', { opacity: 0, y: -40, duration: .3, ease: 'power1.in' }, 0)
      .to('[data-hero-mask]', { scale: 9, duration: 1, ease: 'power2.in' }, 0)
      .to('[data-hero-mask]', { opacity: 0, duration: .35, ease: 'none' }, .55);
  }

  function initCounters() {
    const els = $$('[data-count]');
    if (!els.length) return;
    const run = el => {
      const end = +el.dataset.count;
      if (!hasGsap || reduced) { el.textContent = nf.format(end); return; }
      const o = { v: 0 };
      gsap.to(o, { v: end, duration: 2.2, ease: 'expo.out', onUpdate: () => { el.textContent = nf.format(Math.round(o.v)); } });
    };
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: .6 });
    els.forEach(el => io.observe(el));
  }

  function initSteps() {
    const steps = $$('.step');
    if (!steps.length) return;
    steps[0].classList.add('is-active');
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { steps.forEach(s => s.classList.remove('is-active')); e.target.classList.add('is-active'); }
    }), { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(s => io.observe(s));
  }

  /* Cartes flottantes du hero : flottement + parallaxe souris/scroll */
  function initArtifacts() {
    const arts = $$('.artifacts [data-depth]');
    if (!arts.length || !hasGsap || reduced) return;

    arts.forEach((a, i) => {
      gsap.to(a, { y: i % 2 ? 12 : -12, rotation: i % 2 ? .6 : -.6, duration: 3 + i * .4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 2 });
    });

    if (innerWidth <= 1000) return;
    let mx = 0, my = 0, cx = 0, cy = 0;
    addEventListener('mousemove', e => { mx = (e.clientX / innerWidth - .5) * 2; my = (e.clientY / innerHeight - .5) * 2; }, { passive: true });
    let lastKey = '';
    gsap.ticker.add(() => {
      const sy = scrollY;
      if (sy > innerHeight * 1.1) return;
      cx += (mx - cx) * .07; cy += (my - cy) * .07;
      const key = cx.toFixed(3) + cy.toFixed(3) + sy;
      if (key === lastKey) return;
      lastKey = key;
      arts.forEach(a => {
        const d = +a.dataset.depth;
        a.style.translate = `${(-cx * 18 * d).toFixed(1)}px ${(-cy * 14 * d - sy * .25 * d).toFixed(1)}px`;
      });
    });
  }

  /* Les halos ne s'animent que lorsqu'ils sont visibles */
  function initGlows() {
    const io = new IntersectionObserver(entries => entries.forEach(e => e.target.classList.toggle('is-paused', !e.isIntersecting)));
    $$('.glow').forEach(g => io.observe(g));
  }

  /* ------------------------------------------------------------------ */
  /* Navigation : masquage au scroll, fond sombre, lien actif            */
  /* ------------------------------------------------------------------ */
  // Positions des sections, recalculées seulement au redimensionnement
  const layoutCache = { darks: [], sections: [] };
  function measure() {
    const y = scrollY;
    layoutCache.darks = $$('.section--dark').map(el => { const r = el.getBoundingClientRect(); return [r.top + y, r.bottom + y]; });
    layoutCache.max = document.documentElement.scrollHeight - innerHeight;
  }
  const onFrame = (() => {
    const fns = [];
    let queued = false;
    const run = () => { queued = false; fns.forEach(f => f(scrollY)); };
    addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(run); } }, { passive: true });
    return fn => fns.push(fn);
  })();
  const refreshers = [];
  const refreshLayout = () => { measure(); refreshers.forEach(f => f()); };
  addEventListener('resize', refreshLayout);
  addEventListener('load', refreshLayout);

  function initNav() {
    const nav = $('[data-nav]');
    const tl = $('[data-timeline]');
    const links = $$('.nav__links a');
    let sections = [];
    const measureLinks = () => {
      sections = links.map(a => { const el = $(a.getAttribute('href').replace(/^[^#]*/, '')); if (!el) return null; const r = el.getBoundingClientRect(); return [r.top + scrollY, r.bottom + scrollY]; });
    };
    refreshers.push(measureLinks);
    let last = 0, state = {};
    const set = (el, cls, on) => { const k = cls + (el === nav ? 'n' : 't'); if (state[k] !== on) { state[k] = on; el.classList.toggle(cls, on); } };
    const update = y => {
      const vh = innerHeight;
      const inDark = probe => layoutCache.darks.some(([a, b]) => y + probe >= a && y + probe <= b);
      set(nav, 'is-scrolled', y > 40);
      set(nav, 'is-hidden', y > last + 2 && y > 500 && !document.body.classList.contains('menu-open') ? true : (y < last - 2 || y <= 500) ? false : !!state['is-hiddenn']);
      set(nav, 'on-dark', inDark(36));
      if (tl) set(tl, 'on-dark', inDark(vh - 40));
      const mid = y + vh * .4;
      links.forEach((a, i) => { const r = sections[i]; const on = !!r && mid >= r[0] && mid <= r[1]; if (a._on !== on) { a._on = on; a.classList.toggle('is-active', on); } });
      last = y;
    };
    measure(); measureLinks(); update(scrollY);
    onFrame(update);
    if (hasGsap) ScrollTrigger.addEventListener('refresh', refreshLayout);
  }

  /* ------------------------------------------------------------------ */
  /* Vidéos : lecture au survol / à l'écran, timecodes                   */
  /* ------------------------------------------------------------------ */
  function initVideos() {
    const load = v => { if (v.dataset.src && !v.src) v.src = v.dataset.src; };
    const play = v => { load(v); const p = v.play(); if (p) p.catch(() => {}); };

    // Lecture automatique quand la vidéo est visible
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) play(v); else v.pause();
    }), { threshold: .25 });
    $$('video[data-autoplay], [data-showreel-video]').forEach(v => io.observe(v));
    const hv = $('[data-hero-video]');
    if (hv) new IntersectionObserver(([e]) => { if (e.isIntersecting && heroReady) play(hv); else hv.pause(); }).observe(hv);
    // Sur mobile, les aperçus des cartes jouent aussi à l'écran
    $$('video[data-hover-play]').forEach(v => {
      if (!finePointer) { io.observe(v); return; }
      const host = v.closest('.pcard, .phone') || v;
      host.addEventListener('mouseenter', () => play(v));
      host.addEventListener('mouseleave', () => v.pause());
      // Précharge à l'approche
      new IntersectionObserver((en, o) => { if (en[0].isIntersecting) { v.preload = 'metadata'; load(v); o.disconnect(); } }, { rootMargin: '300px' }).observe(v);
    });

    // Timecodes en direct
    const tcs = $$('[data-live-tc]').map(el => ({ el, v: $('video', el.closest('.showreel__frame, [data-hero], .artifact__media') || el.parentElement) }));
    tcs.forEach(({ el, v }) => { if (v) v.addEventListener('timeupdate', () => { el.textContent = timecode(v.currentTime); }); });

    // Vidéos verticales TikTok → lecteur
    $$('[data-vertical]').forEach(el => el.addEventListener('click', () => {
      if ($('[data-phones]').classList.contains('was-dragged')) return;
      openLightbox({ type: 'video', src: el.dataset.vertical, vertical: !el.dataset.land });
    }));
    // Vidéos YouTube → lecteur, captures → zoom
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-yt-id]');
      if (b) openLightbox({ type: 'youtube', id: b.dataset.ytId });
      const z = e.target.closest('[data-zoom]');
      if (z) openLightbox({ type: 'image', src: z.dataset.zoom });
    });
  }

  /* Glisser pour faire défiler les vidéos verticales */
  function initDragScroll() {
    const el = $('[data-phones]');
    if (!el || !finePointer) return;
    let down = false, startX = 0, start = 0, moved = 0;
    el.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = 0; startX = e.clientX; start = el.scrollLeft; el.classList.remove('was-dragged'); });
    addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX; moved = Math.max(moved, Math.abs(dx));
      if (moved > 5) el.classList.add('is-dragging');
      el.scrollLeft = start - dx;
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      el.classList.remove('is-dragging');
      if (moved > 5) { el.classList.add('was-dragged'); setTimeout(() => el.classList.remove('was-dragged'), 50); }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Lecteur plein écran                                                 */
  /* ------------------------------------------------------------------ */
  let lastFocus = null;
  function openLightbox({ type, src, id, vertical }) {
    const lb = $('[data-lightbox]');
    if (!lb) return;
    const stage = $('[data-lightbox-stage]');
    stage.classList.toggle('is-vertical', !!vertical);
    stage.classList.toggle('is-image', type === 'image');
    track(type === 'youtube' ? `youtube/${id}` : type === 'image' ? `capture/${(src || '').split('/').pop()}` : `video/${(src || '').split('/').pop().replace('.mp4', '')}`);
    stage.innerHTML = type === 'youtube'
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0" title="Vidéo YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
      : type === 'image' ? `<img src="${esc(src)}" alt="">`
      : `<video src="${esc(src)}" controls autoplay playsinline></video>`;
    lastFocus = document.activeElement;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    $('[data-lightbox-close]').focus();
    if (lenis) lenis.stop();
  }
  function closeLightbox() {
    const lb = $('[data-lightbox]');
    if (!lb || !lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    setTimeout(() => { $('[data-lightbox-stage]').innerHTML = ''; }, 500);
    if (lenis) lenis.start();
    if (lastFocus) lastFocus.focus();
  }
  function initLightbox() {
    const lb = $('[data-lightbox]');
    if (!lb) return;
    $('[data-lightbox-close]').addEventListener('click', closeLightbox);
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ------------------------------------------------------------------ */
  /* Contact : copie de l'adresse, horloge                               */
  /* ------------------------------------------------------------------ */
  function initContact() {
    const mail = (D.site && D.site.email) || 'puertasmateo.pro@gmail.com';
    $$('[data-mail-text]').forEach(e => { e.textContent = mail; });
    $$('[data-mailto]').forEach(a => { a.href = `mailto:${mail}?subject=${encodeURIComponent('Stage avril–juin 2027')}`; });
    const btn = $('[data-copy-mail]');
    if (btn) btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mail);
        btn.classList.add('is-copied');
        $('[data-copy-label]').textContent = 'Copié ✓';
        setTimeout(() => { btn.classList.remove('is-copied'); $('[data-copy-label]').textContent = 'Copier'; }, 2200);
      } catch (e) { location.href = `mailto:${mail}`; }
    });
    const clock = $('[data-clock]');
    if (clock) {
      const f = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
      const up = () => { clock.textContent = f.format(new Date()); };
      up(); setInterval(up, 15000);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Compteur de visites GoatCounter (sans cookie)                       */
  /* ------------------------------------------------------------------ */
  function track(name) {
    try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: name, title: name, event: true }); } catch (e) {}
  }
  function initStats() {
    const code = D.site && D.site.goatcounter;
    if (!code || location.hostname === 'localhost' || location.protocol === 'file:') return;
    const s = document.createElement('script');
    s.async = true;
    s.dataset.goatcounter = `https://${encodeURIComponent(code)}.goatcounter.com/count`;
    s.src = 'https://gc.zgo.at/count.js';
    document.head.appendChild(s);
    // Ce qui intéresse vraiment : quelles vidéos sont lancées, et qui clique pour te contacter
    document.addEventListener('play', e => {
      const v = e.target;
      if (v.tagName === 'VIDEO' && v.dataset.track && !v.dataset.tracked) { v.dataset.tracked = '1'; track(v.dataset.track); }
    }, true);
    document.addEventListener('click', e => {
      if (e.target.closest('[data-cv]')) { track('cv/telechargement'); return; }
      const a = e.target.closest('a[href^="mailto:"], [data-copy-mail], a[href*="linkedin.com"], a[href*="youtube.com/@"]');
      if (!a) return;
      track(a.matches('[data-copy-mail]') ? 'contact/copie-email' : a.href.startsWith('mailto:') ? 'contact/email' : a.href.includes('linkedin') ? 'contact/linkedin' : 'contact/youtube');
    });
  }

  /* ------------------------------------------------------------------ */
  /* Statistiques YouTube en direct (clé API facultative)                */
  /* ------------------------------------------------------------------ */
  async function initYoutube() {
    const key = D.site && D.site.youtubeApiKey;
    const liveEl = $('[data-yt-live]');
    if (!key || !$('[data-yt-videos]')) { if (liveEl) liveEl.parentElement.style.display = 'none'; return; }
    const api = (path, params) => fetch(`https://www.googleapis.com/youtube/v3/${path}?${new URLSearchParams({ ...params, key })}`).then(r => { if (!r.ok) throw new Error(r.status); return r.json(); });
    try {
      const chan = await api('channels', { part: 'statistics,contentDetails', forHandle: D.site.youtubeChaine });
      const channel = chan.items && chan.items[0];
      // Les 3 vidéos les plus vues de la chaîne (hors Shorts)
      if (channel) {
        // La recherche coûte cher en quota : le classement est gardé 12 h dans le navigateur
        let ids = null;
        try { const c = JSON.parse(localStorage.getItem('yt-top') || 'null'); if (c && Date.now() - c.t < 432e5) ids = c.ids; } catch (e) {}
        if (!ids) {
          const found = await api('search', { part: 'id', channelId: channel.id, order: 'viewCount', type: 'video', maxResults: 15 }).catch(() => null);
          ids = found && found.items ? found.items.map(it => it.id.videoId) : [];
          try { localStorage.setItem('yt-top', JSON.stringify({ t: Date.now(), ids })); } catch (e) {}
        }
        if (ids.length) {
          const det = await api('videos', { part: 'statistics,snippet,contentDetails', id: ids.join(',') });
          const secs = iso => { const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || []; return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0); };
          const fmt = t => (t >= 3600 ? Math.floor(t / 3600) + ':' + String(Math.floor(t / 60) % 60).padStart(2, '0') : Math.floor(t / 60)) + ':' + String(t % 60).padStart(2, '0');
          const top = det.items
            .map(it => ({ id: it.id, titre: it.snippet.title, vues: +it.statistics.viewCount, s: secs(it.contentDetails.duration) }))
            .filter(v => v.s > 90) // exclut les Shorts
            .sort((x, y) => y.vues - x.vues).slice(0, 3)
            .map(v => ({ ...v, duree: fmt(v.s) }));
          if (top.length) $('[data-yt-top]').innerHTML = top.map((v, i) => ytCard(v, i + 1)).join('');
        }
      }
      const pickIds = (D.youtube.selection || []).map(v => v.id).join(',');
      const vids = pickIds ? await api('videos', { part: 'statistics', id: pickIds }) : { items: [] };
      (vids.items || []).forEach(it => {
        const el = $(`[data-yt-views="${it.id}"]`);
        if (el) el.textContent = nf.format(+it.statistics.viewCount);
      });
      const st = channel && channel.statistics;
      if (st) $('[data-yt-subs]').textContent = nfc.format(+st.subscriberCount);
      liveEl.textContent = 'en direct';
      liveEl.parentElement.classList.add('is-live');
    } catch (e) {
      if (liveEl) liveEl.parentElement.style.display = 'none';
    }
  }

  /* ------------------------------------------------------------------ */
  /* Chargement                                                          */
  /* ------------------------------------------------------------------ */
  function runHook(done) {
    const hook = $('[data-hook]');
    let seen = false;
    try { seen = sessionStorage.getItem('seen') === '1'; sessionStorage.setItem('seen', '1'); } catch (e) {}
    if (!hook || !hasGsap || reduced || seen) { if (hook) hook.remove(); done(); return; }

    const video = $('.hook__video', hook);
    const words = $$('.hook__words span', hook);
    const tc = $('[data-hook-tc]', hook);
    if (lenis) lenis.stop();
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      tl.kill();
      // La vidéo du hero reprend exactement là où l'intro s'arrête
      const hv = $('[data-hero-video]');
      if (hv && video.currentTime) { try { hv.currentTime = video.currentTime; } catch (e) {} }
      done();
      if (lenis) lenis.start();
      const big = $('.hero__mask .hero__big');
      const r = big ? big.getBoundingClientRect() : null;
      const clip = r ? `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px round 24px)` : 'inset(50% 50% 50% 50%)';
      gsap.timeline({ onComplete: () => hook.remove() })
        .to(words, { opacity: 0, duration: .2 }, 0)
        .to(hook, { clipPath: clip, duration: .9, ease: 'expo.inOut' }, 0)
        .to(hook, { opacity: 0, duration: .35 }, '-=.3');
    };
    $('[data-hook-skip]', hook).addEventListener('click', finish);
    video.addEventListener('timeupdate', () => { tc.textContent = timecode(video.currentTime); });

    const tl = gsap.timeline({ paused: true, onComplete: finish });
    words.forEach((w, k) => {
      tl.fromTo(w, { opacity: 1, scale: 1.35 }, { scale: 1, duration: .55, ease: 'expo.out', immediateRender: false }, k * .8);
      if (k < words.length - 1) tl.set(w, { opacity: 0 }, k * .8 + .78);
    });
    tl.to({}, { duration: .35 });

    let started = false;
    const start = () => { if (started) return; started = true; video.play().catch(() => {}); tl.play(0); };
    if (video.readyState >= 3) start(); else video.addEventListener('canplay', start, { once: true });
    setTimeout(start, 1200); // si la vidéo tarde, les mots partent quand même
  }

  /* ------------------------------------------------------------------ */
  /* Démarrage                                                           */
  /* ------------------------------------------------------------------ */
  if (isProjectPage) renderProject(); else { renderHome(); buildHeroMask(); }
  $$('[data-split]').forEach(splitWords);
  if (hasGsap && !reduced) {
    gsap.set($$('.project-hero__title .split-word'), { yPercent: 115 });
  }

  initLogo();
  initTheme();
  initScroll();
  initMenu();
  initNav();
  initVideos();
  initDragScroll();
  initLightbox();
  initContact();
  initCounters();
  initSteps();
  initGlows();
  initYoutube();
  initStats();

  runHook(() => {
    if (hasGsap && !reduced) gsap.set($$('.project-hero__title .split-word'), { clearProps: 'transform' });
    heroIntro();
    initReveals();
    initHeroZoom();
    initShowreel();
    initArtifacts();
    if (hasGsap) {
      ScrollTrigger.refresh();
      addEventListener('load', () => ScrollTrigger.refresh());
    }
  });
})();
