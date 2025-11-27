// ===============================================
// KBCC Website JavaScript - Clean Modern Design
// ===============================================

document.addEventListener("DOMContentLoaded", function () {
  // ===============================================
  // Mobile Navigation Toggle
  // ===============================================
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Change icon
      const icon = mobileToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      });
    });
  }

  // ===============================================
  // Gallery Functionality
  // ===============================================
  const galleryGrid = document.getElementById("galleryGrid");

  if (galleryGrid) {
    // Generate gallery items (32 images numbered 1-32)
    const totalImages = 32;
    let galleryHTML = "";

    for (let i = 1; i <= totalImages; i++) {
      galleryHTML += `
                <div class="gallery-item" data-index="${i}">
                    <img src="images/${i}.jpeg" alt="KBCC Gallery Image ${i}" loading="lazy">
                </div>
            `;
    }

    galleryGrid.innerHTML = galleryHTML;

    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 1;

    // Open lightbox when clicking gallery item
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        currentIndex = parseInt(this.getAttribute("data-index"));
        openLightbox(currentIndex);
      });
    });

    function openLightbox(index) {
      lightbox.classList.add("active");
      lightboxImg.src = `images/${index}.jpeg`;
      currentIndex = index;
      document.body.style.overflow = "hidden";
    }

    function closeLightboxFunc() {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto";
    }

    // Close lightbox
    closeLightbox.addEventListener("click", closeLightboxFunc);

    // Close on background click
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightboxFunc();
      }
    });

    // Previous image
    prevBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentIndex--;
      if (currentIndex < 1) {
        currentIndex = totalImages;
      }
      lightboxImg.src = `images/${currentIndex}.jpeg`;
    });

    // Next image
    nextBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      currentIndex++;
      if (currentIndex > totalImages) {
        currentIndex = 1;
      }
      lightboxImg.src = `images/${currentIndex}.jpeg`;
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;

      if (e.key === "Escape") {
        closeLightboxFunc();
      } else if (e.key === "ArrowLeft") {
        prevBtn.click();
      } else if (e.key === "ArrowRight") {
        nextBtn.click();
      }
    });
  }

  // ===============================================
  // Contact Form Handling
  // ===============================================
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !subject || !message) {
        showFormMessage("Please fill in all required fields.", "error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormMessage("Please enter a valid email address.", "error");
        return;
      }

      // Simulate form submission
      showFormMessage(
        "Thank you for your message! We will get back to you soon.",
        "success"
      );
      contactForm.reset();
    });
  }

  function showFormMessage(message, type) {
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
      formMessage.style.display = "block";

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);
    }
  }

  // ===============================================
  // Smooth Scroll for Anchor Links
  // ===============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // ===============================================
  // Scroll to Top Button
  // ===============================================
  const scrollButton = document.createElement("button");
  scrollButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollButton.className = "scroll-to-top";
  scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #D4AF37;
        color: white;
        border: 2px solid #D4AF37;
        border-radius: 4px;
        font-size: 1.25rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s;
    `;
  document.body.appendChild(scrollButton);

  // Show/hide scroll button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // Scroll to top when clicked
  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollButton.addEventListener("mouseenter", function () {
    this.style.background = "white";
    this.style.color = "#D4AF37";
    this.style.transform = "translateY(-3px)";
  });

  scrollButton.addEventListener("mouseleave", function () {
    this.style.background = "#D4AF37";
    this.style.color = "white";
    this.style.transform = "translateY(0)";
  });

  // ===============================================
  // Fade-in Animation on Scroll
  // ===============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  const animateElements = document.querySelectorAll(
    ".service-card, .sermon-card, .event-card, .value-card, .social-card, .gallery-item"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  console.log("KBCC Website loaded successfully!");
});
