/* =============================================================
   Renders the whole page from the SITE object in data.js and
   wires up the preloader, rotating hero title, scroll-reveal,
   and category scroll-spy. Content edits go in data.js.
   ============================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};
const prefersReducedMotion =
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Category name -> URL-safe id, e.g. "AR & 3D" -> "ar-3d".
function slugify(name) {
  return String(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/* ---------- Preloader ---------- */
function runPreloader() {
  const overlay = $("#preloader");
  const fill = $("#preloader-fill");
  const count = $("#preloader-count");
  if (!overlay) return;

  const done = () => {
    overlay.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    setTimeout(() => overlay.remove(), 700);
  };

  if (prefersReducedMotion) {
    if (fill) fill.style.width = "100%";
    if (count) count.textContent = "100";
    done();
    return;
  }

  document.body.classList.add("is-loading");
  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.floor(Math.random() * 8) + 3;
    if (pct >= 100) {
      pct = 100;
      clearInterval(timer);
      setTimeout(done, 350);
    }
    if (fill) fill.style.width = pct + "%";
    if (count) count.textContent = String(pct);
  }, 90);
}

/* ---------- Rotating hero title + marquee ---------- */
function setupHero() {
  const nameEl = $("#hero-name");
  if (nameEl) nameEl.textContent = SITE.name;
  const brand = $("#brand");
  const pInitials = $("#preloader-initials");
  if (brand) brand.textContent = SITE.initials;
  if (pInitials) pInitials.textContent = SITE.initials;

  const rotate = $("#hero-rotate");
  const titles = SITE.titles || [];
  if (rotate && titles.length) {
    rotate.textContent = titles[0];
    if (!prefersReducedMotion && titles.length > 1) {
      let i = 0;
      setInterval(() => {
        rotate.classList.add("swap");
        setTimeout(() => {
          i = (i + 1) % titles.length;
          rotate.textContent = titles[i];
          rotate.classList.remove("swap");
        }, 300);
      }, 2600);
    }
  }

  // Marquee strip repeats the titles.
  const track = $("#marquee-track");
  if (track) {
    const phrase = titles.join("  •  ") + "  •  ";
    const line = phrase.repeat(4);
    const a = el("span", "marquee-seg", line);
    const b = el("span", "marquee-seg", line);
    track.appendChild(a);
    track.appendChild(b);
  }
}

/* ---------- About ---------- */
function renderAbout() {
  const text = $("#about-text");
  if (text) text.textContent = SITE.about;
  const stats = $("#about-stats");
  if (stats && SITE.aboutStats) {
    SITE.aboutStats.forEach((s) => {
      const card = el("div", "stat");
      card.appendChild(el("div", "stat-value", s.value));
      card.appendChild(el("div", "stat-label", s.label));
      stats.appendChild(card);
    });
  }
}

/* ---------- What I Do ---------- */
function renderWhatIDo() {
  const grid = $("#what-grid");
  if (!grid) return;
  (SITE.whatIDo || []).forEach((item) => {
    const card = el("article", "what-card reveal");
    card.appendChild(el("h3", "what-title", item.title));
    card.appendChild(el("p", "what-blurb", item.blurb));
    const chips = el("div", "chips");
    (item.chips || []).forEach((c) => chips.appendChild(el("span", "chip", c)));
    card.appendChild(chips);
    grid.appendChild(card);
  });
}

/* ---------- Experience timeline ---------- */
function renderTimeline() {
  const tl = $("#timeline");
  if (!tl) return;
  (SITE.experience || []).forEach((job) => {
    const item = el("div", "tl-item reveal" + (job.isEducation ? " tl-edu" : ""));
    item.appendChild(el("span", "tl-dot"));
    const body = el("div", "tl-body");
    body.appendChild(el("span", "tl-period", job.period));
    const head = el("h3", "tl-role");
    head.appendChild(document.createTextNode(job.role + " "));
    const org = el("span", "tl-org", "· " + job.org);
    head.appendChild(org);
    body.appendChild(head);
    if (job.blurb && job.blurb !== "Education.") body.appendChild(el("p", "tl-blurb", job.blurb));
    item.appendChild(body);
    tl.appendChild(item);
  });
}

/* ---------- Work: category nav + project cards ---------- */
function createVideoFrame(driveFileId) {
  const wrap = el("div", "video");
  const hasId = driveFileId && driveFileId !== "PASTE_FILE_ID_HERE";
  if (!hasId) {
    wrap.classList.add("video--empty");
    wrap.textContent = "Add this video's Google Drive FILE_ID in data.js to show it here.";
    return wrap;
  }
  const iframe = document.createElement("iframe");
  iframe.src = "https://drive.google.com/file/d/" + driveFileId + "/preview";
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");
  iframe.title = "Project video";
  wrap.appendChild(iframe);
  return wrap;
}

function createCard(video, number) {
  const card = el("article", "card reveal");
  card.appendChild(createVideoFrame(video.driveFileId));
  const body = el("div", "card-body");
  const head = el("div", "card-head");
  head.appendChild(el("span", "card-num", String(number).padStart(2, "0")));
  head.appendChild(el("h4", "card-title", video.title));
  body.appendChild(head);
  body.appendChild(el("p", "card-desc", video.description));
  card.appendChild(body);
  return card;
}

function renderWork() {
  const container = $("#projects");
  const nav = $("#category-nav");
  if (!container) return;

  (SITE.categories || []).forEach((category) => {
    const id = slugify(category.name);

    if (nav) {
      const li = el("li");
      const link = el("a", "nav-btn", category.name);
      link.href = "#" + id;
      link.dataset.target = id;
      li.appendChild(link);
      nav.appendChild(li);
    }

    const section = el("section", "category");
    section.id = id;

    const header = el("div", "category-head reveal");
    const heading = el("h3", "category-title", category.name);
    header.appendChild(heading);
    if (category.tag) header.appendChild(el("span", "category-tag", category.tag));
    section.appendChild(header);

    if (category.tech && category.tech.length) {
      const tech = el("div", "chips category-tech reveal");
      category.tech.forEach((t) => tech.appendChild(el("span", "chip chip-sm", t)));
      section.appendChild(tech);
    }

    const grid = el("div", "grid");
    (category.videos || []).forEach((v, i) => grid.appendChild(createCard(v, i + 1)));
    section.appendChild(grid);

    container.appendChild(section);
  });
}

/* ---------- Tech stack pills ---------- */
function renderStack() {
  const grid = $("#pill-grid");
  if (!grid) return;
  (SITE.techStack || []).forEach((t) => grid.appendChild(el("span", "pill", t)));
}

/* ---------- Contact ---------- */
function renderContact() {
  const grid = $("#contact-grid");
  if (!grid) return;
  const c = SITE.contact || {};

  const make = (label, value, href) => {
    const item = el("div", "contact-item reveal");
    item.appendChild(el("div", "contact-label", label));
    if (href) {
      const a = el("a", "contact-value", value);
      a.href = href;
      if (href.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      item.appendChild(a);
    } else {
      item.appendChild(el("div", "contact-value", value));
    }
    return item;
  };

  if (c.email) grid.appendChild(make("Email", c.email, "mailto:" + c.email));
  if (c.phone) grid.appendChild(make("Phone", c.phone, "tel:" + c.phone.replace(/\s+/g, "")));
  if (c.location) grid.appendChild(make("Location", c.location, null));

  const social = el("div", "contact-item reveal");
  social.appendChild(el("div", "contact-label", "Social"));
  const links = el("div", "socials");
  if (c.github) {
    const g = el("a", "social-link", "GitHub");
    g.href = c.github; g.target = "_blank"; g.rel = "noopener";
    links.appendChild(g);
  }
  if (c.linkedin) {
    const l = el("a", "social-link", "LinkedIn");
    l.href = c.linkedin; l.target = "_blank"; l.rel = "noopener";
    links.appendChild(l);
  }
  social.appendChild(links);
  grid.appendChild(social);
}

/* ---------- Scroll-reveal ---------- */
function setupReveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  items.forEach((i) => observer.observe(i));
}

/* ---------- Category scroll-spy ---------- */
function setupScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-btn"));
  if (!links.length || !("IntersectionObserver" in window)) return;
  const byId = {};
  links.forEach((l) => (byId[l.dataset.target] = l));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          const active = byId[entry.target.id];
          if (active) active.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  document.querySelectorAll(".category").forEach((sec) => observer.observe(sec));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  setupHero();
  renderAbout();
  renderWhatIDo();
  renderTimeline();
  renderWork();
  renderStack();
  renderContact();
  setupReveal();
  setupScrollSpy();
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  runPreloader();
});
