/* KBCC Website - Vanilla JS
   - Mobile navigation toggle
   - Homepage carousel (auto + arrows + dots + swipe)
   - Media gallery grid + lightbox
   - About page accordion enhancement (optional single-open behavior)
   - Contact form UX validation (client-side only)
*/

const TELEGRAM_LINK = "https://t.me/TheAnswerNation";

// Images are numeric in /images and already exist in this repo as .jpeg.
// Keep this list as the single source of truth for:
// - homepage slider
// - media gallery grid
const galleryImages = Array.from({ length: 32 }, (_, i) => `images/${i + 1}.jpeg`);

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function initActiveNav() {
  const path = (location.pathname || "").split("/").pop() || "index.html";
  qsa('[data-nav-link="true"]').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const hrefFile = href.split("/").pop();
    if (hrefFile === path) a.setAttribute("aria-current", "page");
  });
}

function initMobileNav() {
  const toggle = qs("[data-nav-toggle]");
  const menu = qs("[data-nav-menu]");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    setOpen(open);
  });

  // Close on link click (mobile)
  menu.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    setOpen(false);
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  // Close if clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    if (e.target.closest("[data-nav]")) return;
    setOpen(false);
  });
}

function initCarousel() {
  const root = qs("[data-carousel]");
  if (!root) return;

  const track = qs("[data-carousel-track]", root);
  const dots = qs("[data-carousel-dots]", root);
  const prevBtn = qs("[data-carousel-prev]", root);
  const nextBtn = qs("[data-carousel-next]", root);

  if (!track || !dots || !prevBtn || !nextBtn) return;

  const images = galleryImages;
  if (!images.length) return;

  let index = 0;
  let timer = null;
  let touchStartX = null;
  let touchDeltaX = 0;
  const intervalMs = 5000; // 4–6 seconds requirement

  const slides = images.map((src, i) => {
    const slide = document.createElement("div");
    slide.className = "carousel__slide" + (i === 0 ? " is-active" : "");
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-roledescription", "slide");
    slide.setAttribute("aria-label", `${i + 1} of ${images.length}`);

    const img = document.createElement("img");
    img.loading = i === 0 ? "eager" : "lazy";
    img.decoding = "async";
    img.alt = "KBCC media highlight";
    img.src = src;

    slide.appendChild(img);
    track.appendChild(slide);
    return slide;
  });

  const dotButtons = images.map((_, i) => {
    const b = document.createElement("button");
    b.className = "carousel__dot";
    b.type = "button";
    b.setAttribute("aria-label", `Go to slide ${i + 1}`);
    b.setAttribute("aria-current", i === 0 ? "true" : "false");
    b.addEventListener("click", () => goTo(i, true));
    dots.appendChild(b);
    return b;
  });

  function render() {
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    dotButtons.forEach((d, i) => d.setAttribute("aria-current", i === index ? "true" : "false"));
  }

  function goTo(nextIndex, userInitiated = false) {
    index = (nextIndex + images.length) % images.length;
    render();
    if (userInitiated) restart();
  }

  function next(userInitiated = false) {
    goTo(index + 1, userInitiated);
  }

  function prev(userInitiated = false) {
    goTo(index - 1, userInitiated);
  }

  function start() {
    stop();
    timer = window.setInterval(() => next(false), intervalMs);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function restart() {
    start();
  }

  prevBtn.addEventListener("click", () => prev(true));
  nextBtn.addEventListener("click", () => next(true));

  // Swipe (touch)
  const viewport = qs("[data-carousel-viewport]", root);
  if (viewport) {
    viewport.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0]?.clientX ?? null;
        touchDeltaX = 0;
      },
      { passive: true }
    );
    viewport.addEventListener(
      "touchmove",
      (e) => {
        if (touchStartX == null) return;
        const x = e.touches[0]?.clientX ?? touchStartX;
        touchDeltaX = x - touchStartX;
      },
      { passive: true }
    );
    viewport.addEventListener(
      "touchend",
      () => {
        if (touchStartX == null) return;
        const threshold = 40;
        if (Math.abs(touchDeltaX) > threshold) {
          if (touchDeltaX < 0) next(true);
          else prev(true);
        }
        touchStartX = null;
        touchDeltaX = 0;
      },
      { passive: true }
    );
  }

  // Pause when tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  render();
  start();
}

function initGallery() {
  const grid = qs("[data-gallery-grid]");
  if (!grid) return;

  const lightbox = qs("[data-lightbox]");
  const lbImg = qs("[data-lightbox-img]");
  const lbClose = qs("[data-lightbox-close]");
  const lbPrev = qs("[data-lightbox-prev]");
  const lbNext = qs("[data-lightbox-next]");
  const lbCount = qs("[data-lightbox-count]");

  if (!lightbox || !lbImg || !lbClose || !lbPrev || !lbNext || !lbCount) return;

  const images = galleryImages;
  let index = 0;

  function openAt(i) {
    index = clamp(i, 0, images.length - 1);
    lbImg.src = images[index];
    lbImg.alt = `KBCC gallery image ${index + 1}`;
    lbCount.textContent = `${index + 1} / ${images.length}`;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function next() {
    openAt((index + 1) % images.length);
  }

  function prev() {
    openAt((index - 1 + images.length) % images.length);
  }

  // Build grid in numeric order
  images.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-item";
    btn.setAttribute("aria-label", `Open image ${i + 1}`);
    btn.addEventListener("click", () => openAt(i));

    const img = document.createElement("img");
    img.src = src;
    img.alt = `KBCC gallery thumbnail ${i + 1}`;
    img.loading = "lazy";
    img.decoding = "async";

    btn.appendChild(img);
    grid.appendChild(btn);
  });

  lbClose.addEventListener("click", close);
  lbNext.addEventListener("click", next);
  lbPrev.addEventListener("click", prev);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

function initAccordionSingleOpen() {
  const accordion = qs("[data-accordion]");
  if (!accordion) return;
  const detailsEls = qsa("details", accordion);
  detailsEls.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (!d.open) return;
      detailsEls.forEach((other) => {
        if (other !== d) other.open = false;
      });
    });
  });
}

function initContactForm() {
  const form = qs("[data-contact-form]");
  const toast = qs("[data-form-toast]");
  if (!form || !toast) return;

  const name = qs('input[name="name"]', form);
  const email = qs('input[name="email"]', form);
  const message = qs('textarea[name="message"]', form);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = (name?.value || "").trim();
    const em = (email?.value || "").trim();
    const msg = (message?.value || "").trim();

    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
    if (!n || !okEmail || !msg) {
      toast.textContent = "Please fill in your name, a valid email, and your message.";
      toast.classList.add("is-visible");
      return;
    }

    // Client-side only: show a success message.
    toast.textContent =
      "Thank you. Your message has been received. Someone from KBCC will get back to you shortly.";
    toast.classList.add("is-visible");
    form.reset();
  });
}

function initTelegramButtons() {
  qsa("[data-telegram]").forEach((a) => {
    a.setAttribute("href", TELEGRAM_LINK);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initActiveNav();
  initMobileNav();
  initTelegramButtons();
  initCarousel();
  initGallery();
  initAccordionSingleOpen();
  initContactForm();
});


