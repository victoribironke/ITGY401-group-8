/* ============================================
   KBCC Church Website - Main JavaScript
   Contemporary Minimal Design
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all modules
  initNavigation();
  initHeroSlider();
  initScrollAnimations();
  initAccordion();
  initGalleryLightbox();
  initContactForm();
  initScrollToTop();
});

/* ============================================
   1. NAVIGATION
   ============================================ */
function initNavigation() {
  const navWrapper = document.querySelector(".nav-wrapper");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll handler for navbar background
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navWrapper?.classList.add("scrolled");
    } else {
      navWrapper?.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile menu toggle
  const toggleMenu = () => {
    navToggle?.classList.toggle("active");
    navMenu?.classList.toggle("active");
    mobileOverlay?.classList.toggle("active");
    document.body.style.overflow = navMenu?.classList.contains("active")
      ? "hidden"
      : "";
  };

  navToggle?.addEventListener("click", toggleMenu);
  mobileOverlay?.addEventListener("click", toggleMenu);

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu?.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu?.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Set active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ============================================
   2. HERO IMAGE SLIDER
   ============================================ */
function initHeroSlider() {
  const slider = document.querySelector(".hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dotsContainer = document.querySelector(".hero-controls");
  const prevBtn = document.querySelector(".slider-arrow.prev");
  const nextBtn = document.querySelector(".slider-arrow.next");

  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoPlayInterval;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Create dots if container exists
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `hero-dot ${index === 0 ? "active" : ""}`;
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  const dots = dotsContainer?.querySelectorAll(".hero-dot");

  function goToSlide(index) {
    if (isTransitioning || index === currentIndex) return;
    isTransitioning = true;

    slides[currentIndex].classList.remove("active");
    dots?.[currentIndex]?.classList.remove("active");

    currentIndex = index;
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add("active");
    dots?.[currentIndex]?.classList.add("active");

    setTimeout(() => {
      isTransitioning = false;
    }, 1000);

    resetAutoPlay();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 6000);
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Arrow navigation
  prevBtn?.addEventListener("click", prevSlide);
  nextBtn?.addEventListener("click", nextSlide);

  // Touch/Swipe support
  slider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  slider.addEventListener(
    "touchmove",
    (e) => {
      touchEndX = e.touches[0].clientX;
    },
    { passive: true }
  );

  slider.addEventListener("touchend", () => {
    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  // Pause on hover (optional)
  slider.addEventListener("mouseenter", () => clearInterval(autoPlayInterval));
  slider.addEventListener("mouseleave", startAutoPlay);

  // Start autoplay
  startAutoPlay();

  // Respect reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    clearInterval(autoPlayInterval);
  }
}

/* ============================================
   3. SCROLL ANIMATIONS (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".fade-in");

  if (animatedElements.length === 0) return;

  // Respect reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animatedElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((el) => observer.observe(el));
}

/* ============================================
   4. ACCORDION (Statement of Faith)
   ============================================ */
function initAccordion() {
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (accordionItems.length === 0) return;

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    if (!header || !content) return;

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle("active");

      if (!isActive) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });

    // Keyboard accessibility
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        header.click();
      }
    });
  });
}

/* ============================================
   5. GALLERY LIGHTBOX
   ============================================ */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const lightboxClose = lightbox?.querySelector(".lightbox-close");
  const lightboxPrev = lightbox?.querySelector(".lightbox-prev");
  const lightboxNext = lightbox?.querySelector(".lightbox-next");

  if (!lightbox || galleryItems.length === 0) return;

  let currentImageIndex = 0;
  const images = Array.from(galleryItems)
    .map((item) => item.querySelector("img")?.src)
    .filter(Boolean);

  function openLightbox(index) {
    currentImageIndex = index;
    if (lightboxImg && images[index]) {
      lightboxImg.src = images[index];
      lightboxImg.alt = `Gallery image ${index + 1}`;
    }
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function showImage(index) {
    if (index >= images.length) index = 0;
    if (index < 0) index = images.length - 1;
    currentImageIndex = index;
    if (lightboxImg && images[index]) {
      lightboxImg.src = images[index];
      lightboxImg.alt = `Gallery image ${index + 1}`;
    }
  }

  function nextImage() {
    showImage(currentImageIndex + 1);
  }

  function prevImage() {
    showImage(currentImageIndex - 1);
  }

  // Event listeners
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `View gallery image ${index + 1}`);
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", prevImage);
  lightboxNext?.addEventListener("click", nextImage);

  // Close on background click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  // Touch/swipe support in lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true }
  );

  lightbox.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  });
}

/* ============================================
   6. CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.querySelector(".contact-form form");
  const successMessage = document.querySelector(".form-success");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.innerHTML;
    if (submitBtn) {
      submitBtn.innerHTML = '<span class="loading"></span> Sending...';
      submitBtn.disabled = true;
    }

    // Simulate form submission (replace with actual backend)
    setTimeout(() => {
      form.reset();
      if (successMessage) {
        successMessage.classList.add("show");
        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 5000);
      }
      if (submitBtn) {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    }, 1500);

    // Actual form submission would look like:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle success
    // })
    // .catch(error => {
    //   // Handle error
    // });
  });
}

/* ============================================
   7. SCROLL TO TOP BUTTON
   ============================================ */
function initScrollToTop() {
  const scrollTopBtn = document.querySelector(".scroll-top");

  if (!scrollTopBtn) return;

  // Show/hide button based on scroll position
  const toggleButton = () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", toggleButton, { passive: true });

  // Scroll to top on click
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* ============================================
   8. UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait = 100) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit = 100) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Smooth scroll to element
function smoothScrollTo(element) {
  if (!element) return;

  const offset = 100; // Account for fixed header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Handle smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      smoothScrollTo(target);
    }
  });
});
