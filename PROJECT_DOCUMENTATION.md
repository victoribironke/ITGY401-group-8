# KBCC Website - Project Documentation

## 📋 Project Overview

This is a clean, modern, and professional church website for **Kingdom of Believers Christian Centre (KBCC)**. The site is built with vanilla HTML, CSS, and JavaScript - no frameworks or build tools required.

**Core Philosophy**: Clean, trustworthy, and beginner-friendly design with thick borders and plenty of whitespace.

---

## 🎨 Design System

### Color Palette

```css
--royal-blue: #002366    /* Deep blue for headers and primary text */
--gold: #d4af37         /* Accent color for buttons and highlights */
--white: #ffffff        /* Main background */
--light-grey: #f5f7fa   /* Section backgrounds for contrast */
--medium-grey: #e1e8ed  /* Borders */
--text-grey: #4a5568    /* Body text */
```

**Why These Colors?**

- **Royal Blue**: Conveys trust, stability, and spirituality
- **Gold**: Represents glory, excellence, and divine presence (from the logo)
- **Light backgrounds**: Creates a bright, welcoming, and modern feel
- **High contrast**: Ensures readability and accessibility

### Typography

**Heading Font: Oswald**

```css
font-family: "Oswald", sans-serif;
```

- **Why**: Bold, heavy sans-serif that looks strong and authoritative
- **Weight**: 400-700 (regular to bold)
- **Usage**: All headings (h1-h6), labels, buttons
- **Characteristics**: Uppercase, letter-spacing for readability

**Body Font: Lora**

```css
font-family: "Lora", serif;
```

- **Why**: Clean, readable serif that pairs well with Oswald
- **Weight**: 400-700
- **Usage**: All body text, paragraphs, descriptions
- **Characteristics**: Excellent readability for longer text blocks

**Font Loading**

```html
<link
  href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

- Loaded from Google Fonts CDN
- Preconnected for performance optimization

---

## 📁 File Structure

```
itgy-401/
├── index.html          # Homepage with hero, services, sermons
├── about.html          # Vision, mission, values, statement of faith
├── leadership.html     # Pastor profiles and bios
├── sermons.html        # Sermon details and media access
├── events.html         # All upcoming events
├── gallery.html        # Photo gallery (32 images)
├── contact.html        # Contact form, info, and map
├── styles.css          # Complete stylesheet (1289 lines)
├── script.js           # All JavaScript functionality
├── README.md           # Project setup and overview
├── REQUIREMENTS.md     # Original content requirements
└── images/
    ├── logo.jpg        # Church logo
    └── 1.jpeg - 32.jpeg # Gallery images
```

---

## 🔧 External Dependencies

### Font Awesome (Icons)

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
```

- **Purpose**: Icons for navigation, social media, and visual elements
- **Version**: 6.0.0
- **Usage**: `<i class="fas fa-icon-name"></i>`

### Google Fonts

```html
<link
  href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

- **Fonts**: Oswald (headings) + Lora (body)
- **Loading**: Optimized with `display=swap` for performance

### Google Maps (Contact Page)

```html
<iframe src="https://www.google.com/maps/embed?..."></iframe>
```

- **Purpose**: Embedded map showing church location
- **Lazy loading**: Enabled for better performance

**That's It!** No npm packages, no build process, no complicated setup.

---

## 🎯 Key Design Features

### 1. Thick Borders (2px)

```css
border: 2px solid var(--medium-grey);
```

- **Philosophy**: Creates an "engineered" look that feels intentional
- **Usage**: All cards, buttons, inputs, and major sections
- **Hover Effect**: Border color changes to gold on hover

### 2. Split Hero Section

```html
<div class="hero-split-content">
  <div class="hero-left"><!-- Text content --></div>
  <div class="hero-right"><!-- Image --></div>
</div>
```

- **Layout**: 50/50 split on desktop, stacks on mobile
- **Left**: Welcome text + CTA button
- **Right**: Circular logo image with gold border

### 3. Sermon Card Grid

```css
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
```

- **Not** a list - proper card grid as requested
- Each card has: thumbnail, badge, title, author, excerpt, "Watch" button
- Responsive: 3 columns → 2 columns → 1 column

### 4. Consistent Spacing

```css
padding: 80px 0; /* Section padding */
gap: 32px; /* Card gaps */
margin-bottom: 1rem; /* Paragraph spacing */
```

- **Plenty of whitespace**: No cramped elements
- **No overlapping**: Everything has clear boundaries

---

## 💻 JavaScript Functionality

### 1. Mobile Navigation (lines 7-41)

```javascript
mobileToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  // Change hamburger icon to X
});
```

- **Desktop**: Horizontal menu
- **Mobile**: Hamburger menu with smooth slide-down
- **Icon toggle**: Bars → X when open

### 2. Gallery & Lightbox (lines 43-132)

```javascript
// Dynamically generate 32 gallery items
for (let i = 1; i <= totalImages; i++) {
  galleryHTML += `<div class="gallery-item">...</div>`;
}
```

- **Auto-generation**: Creates gallery items from `images/1.jpeg` to `images/32.jpeg`
- **Lightbox**: Click any image to view full-size
- **Navigation**: Previous/Next buttons + Arrow keys + ESC to close
- **Prevents scroll**: Body scroll locked when lightbox is open

### 3. Contact Form Validation (lines 134-176)

```javascript
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Validate required fields
  // Validate email format with regex
  // Show success/error message
});
```

- **Client-side validation**: Checks all required fields
- **Email validation**: Regex pattern matching
- **User feedback**: Success/error messages with auto-hide (5 seconds)
- **Note**: Currently simulated - needs backend integration for real emails

### 4. Smooth Scroll (lines 178-192)

```javascript
anchor.addEventListener("click", function (e) {
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
```

- **Smooth scrolling**: For all anchor links (`#section`)
- **Native implementation**: Uses browser's `scrollIntoView()` API

### 5. Scroll-to-Top Button (lines 194-235)

```javascript
// Dynamically create button
const scrollButton = document.createElement("button");
// Show/hide based on scroll position
if (window.pageYOffset > 300) {
  scrollButton.style.display = "block";
}
```

- **Appears**: After scrolling 300px down
- **Styling**: Gold background with white icon
- **Hover effect**: Inverts colors (white bg, gold icon)
- **Animation**: Smooth scroll to top on click

### 6. Fade-in Animations (lines 237-259)

```javascript
const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});
```

- **Uses**: Intersection Observer API (modern, performant)
- **Target elements**: All cards (service, sermon, event, value, social, gallery)
- **Effect**: Fade in + slide up when entering viewport
- **Performance**: Only observes once, then stops tracking

---

## 📱 Responsive Design

### Breakpoints

```css
@media (max-width: 1024px) {
  /* Tablets */
}
@media (max-width: 768px) {
  /* Mobile */
}
@media (max-width: 480px) {
  /* Small phones */
}
```

### Mobile Adaptations

**Navigation**

- Desktop: Horizontal menu
- Mobile: Hamburger menu with slide-down effect

**Grid Layouts**

```css
/* Desktop: 3 columns */
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
/* Mobile: 1 column (automatic) */
```

**Hero Section**

```css
/* Desktop: Side-by-side */
grid-template-columns: 1fr 1fr;
/* Mobile: Stacked */
grid-template-columns: 1fr;
```

**Typography**

```css
/* Desktop */
h1 {
  font-size: 4rem;
}
/* Mobile */
h1 {
  font-size: 2rem;
}
```

**Buttons**

```css
/* Mobile: Full width */
.btn {
  width: 100%;
  justify-content: center;
}
```

---

## 🎨 CSS Architecture

### CSS Custom Properties (Variables)

```css
:root {
  --royal-blue: #002366;
  --gold: #d4af37;
  /* ... more variables */
}
```

- **Benefit**: Change colors site-wide from one location
- **Usage**: `color: var(--royal-blue);`

### Naming Convention

```css
.section          /* Top-level section */
/* Top-level section */
/* Top-level section */
/* Top-level section */
.section-header   /* Section header within section */
.section-title    /* Title within header */
.section-label; /* Small label above title */
```

- **Pattern**: Component-based naming
- **Descriptive**: Names describe purpose, not appearance

### Component Structure

```css
/* 1. Base component */
.card {
}

/* 2. Component variants */
.card-large {
}
.card-small {
}

/* 3. Component states */
.card:hover {
}
.card.active {
}

/* 4. Component children */
.card-header {
}
.card-body {
}
.card-footer {
}
```

---

## 🛠️ How to Customize

### Change Colors

**Location**: `styles.css` (lines 7-16)

```css
:root {
  --royal-blue: #YOUR_COLOR;
  --gold: #YOUR_COLOR;
}
```

- Change once, applies everywhere

### Add New Pages

1. **Copy** an existing page (e.g., `about.html`)
2. **Update** the navigation active class:
   ```html
   <li><a href="new-page.html" class="active">New Page</a></li>
   ```
3. **Update** all navigation menus across all pages
4. **Customize** content between nav and footer

### Modify Fonts

**Location**: All HTML files (in `<head>`)

```html
<!-- Replace Google Fonts link -->
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap"
  rel="stylesheet"
/>
```

**Then update CSS**:

```css
:root {
  --heading-font: "YourHeadingFont", sans-serif;
  --body-font: "YourBodyFont", serif;
}
```

### Add Gallery Images

1. **Add images** to `images/` folder
2. **Name them**: `33.jpeg`, `34.jpeg`, etc. (sequential)
3. **Update** `script.js` line 73:
   ```javascript
   const totalImages = 32; // Change to your total count
   ```

### Connect Contact Form

**Location**: `script.js` (lines 134-176)

**Current**: Simulated submission

```javascript
showFormMessage("Thank you...", "success");
contactForm.reset();
```

**Replace with**:

```javascript
fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: name,
    email: email,
    subject: subject,
    message: message,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    showFormMessage("Thank you...", "success");
    contactForm.reset();
  })
  .catch((error) => {
    showFormMessage("Error. Please try again.", "error");
  });
```

---

## 🚀 Deployment

### Option 1: Traditional Hosting

1. Upload all files via FTP/cPanel
2. Ensure `index.html` is in the root directory
3. Verify `images/` folder uploads correctly

### Option 2: GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main) → Save
4. Access at: `https://username.github.io/repo-name`

### Option 3: Netlify/Vercel

1. Create account
2. Drag and drop project folder
3. Auto-deployed with custom domain support

**No build process required!** Just upload the files.

---

## 🔍 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Modern features used**:

- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- `scrollIntoView` with smooth behavior

---

## 📊 Performance Considerations

### Optimizations Applied

1. **Lazy Loading Images**

   ```html
   <img loading="lazy" src="..." />
   ```

2. **Font Display Swap**

   ```css
   ?display=swap
   ```

   Prevents text invisibility while fonts load

3. **Preconnect to External Resources**

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   ```

4. **Efficient Animations**

   - Uses `transform` and `opacity` (GPU-accelerated)
   - Intersection Observer (better than scroll events)

5. **Single CSS File**
   - All styles in one file = one HTTP request
   - No critical CSS complexity needed

### Performance Metrics Target

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

---

## 🐛 Common Issues & Solutions

### Issue 1: Fonts Not Loading

**Symptom**: Default system fonts appear
**Solution**: Check internet connection; fonts load from Google CDN

### Issue 2: Images Not Showing

**Symptom**: Broken image icons
**Solution**:

- Verify image paths are correct (`images/1.jpeg`)
- Check file names match exactly (case-sensitive)
- Ensure images folder uploaded to server

### Issue 3: Gallery Not Generating

**Symptom**: Empty gallery page
**Solution**:

- Check browser console for errors
- Verify `galleryGrid` element exists: `<div id="galleryGrid">`
- Ensure `script.js` loads correctly

### Issue 4: Mobile Menu Not Working

**Symptom**: Hamburger icon doesn't toggle menu
**Solution**:

- Check `mobileToggle` and `navMenu` IDs exist
- Verify JavaScript loads: `<script src="script.js"></script>`
- Clear browser cache

### Issue 5: Contact Form Not Submitting

**Symptom**: Form doesn't show success message
**Solution**:

- Check `contactForm` and `formMessage` IDs exist
- Open browser console to see validation errors
- Remember: currently simulated, needs backend for real emails

---

## 📝 Content Update Guide

### Update Service Times

**File**: `index.html`, `about.html`, `events.html`, footer in all files
**Search for**: "6:00 PM" or "8:00 AM"

### Update Church Address

**File**: Footer in all HTML files
**Search for**: "4, Alhaji Yusuf Adebayo Street"

### Update Social Media Links

**File**: `index.html` (social section), all footers
**Search for**: Facebook, YouTube, Instagram URLs

### Add New Events

**File**: `events.html` and `index.html`
**Copy this structure**:

```html
<div class="event-card">
  <div class="event-date">
    <span class="event-day">28</span>
    <span class="event-month">NOV</span>
  </div>
  <h3>Event Name</h3>
  <p class="event-theme">Theme Name</p>
  <p class="event-details"><i class="fas fa-clock"></i> Time</p>
  <p class="event-details"><i class="fas fa-map-marker-alt"></i> Location</p>
</div>
```

---

## 🎓 Learning Resources

### Understanding the Code

**HTML Concepts Used**:

- Semantic HTML5 (`<header>`, `<section>`, `<footer>`)
- Form elements (`<input>`, `<textarea>`, `<button>`)
- Accessibility attributes (`alt`, `title`, `aria-*`)

**CSS Concepts Used**:

- CSS Grid & Flexbox for layouts
- CSS Custom Properties (variables)
- Media queries for responsive design
- Pseudo-classes (`:hover`, `:focus`, `:active`)
- Transitions & transforms for animations

**JavaScript Concepts Used**:

- Event listeners (`addEventListener`)
- DOM manipulation (`querySelector`, `createElement`)
- Template literals (`` `...` ``)
- Intersection Observer API
- Form validation
- Local Storage (not used, but easy to add)

### Recommended Learning Path

1. **Beginners**: Focus on HTML structure and CSS basics
2. **Intermediate**: Study CSS Grid/Flexbox and media queries
3. **Advanced**: Dive into JavaScript event handling and APIs

---

## 🤝 Team Workflow

### Making Changes

1. **Test Locally**: Open `index.html` in browser
2. **Check All Pages**: Navigate through all 7 pages
3. **Test Responsive**: Use browser dev tools (F12) → Device toolbar
4. **Verify Forms**: Test contact form validation
5. **Check Gallery**: Ensure lightbox works

### Version Control (Git)

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update service times on homepage"

# Push to remote
git push origin main
```

### Code Style Guidelines

1. **Indentation**: 2 spaces (not tabs)
2. **Naming**: Use kebab-case for classes (`.event-card`)
3. **Comments**: Add comments for complex logic
4. **Consistency**: Follow existing patterns in the code

---

## 📞 Support & Maintenance

### Regular Maintenance Tasks

- [ ] Update event information monthly
- [ ] Add new sermon cards when published
- [ ] Update gallery images quarterly
- [ ] Check and update contact information
- [ ] Test forms and interactive features
- [ ] Monitor page load times
- [ ] Backup website files regularly

### Quick Reference Commands

```bash
# No build commands needed!
# Just open index.html in a browser

# Optional: Run a local server (Python)
python -m http.server 8000

# Optional: Run a local server (Node.js)
npx http-server
```

---

## 📄 File Size Reference

- `index.html`: ~11 KB
- `styles.css`: ~35 KB
- `script.js`: ~8 KB
- **Total page weight**: ~54 KB (excluding images)
- **Images**: Variable (optimize to < 500KB each)

---

## ✅ Checklist for New Team Members

- [ ] Read this documentation
- [ ] Open `index.html` in browser to see the site
- [ ] Review `styles.css` to understand the design system
- [ ] Read through `script.js` to understand functionality
- [ ] Test the mobile navigation on a small screen
- [ ] Try the gallery lightbox feature
- [ ] Submit the contact form to see validation
- [ ] Check all 7 pages of the site
- [ ] Review the responsive breakpoints

---

## 🎉 Quick Wins for New Contributors

Easy tasks to get started:

1. Update church address in footer
2. Add a new event to `events.html`
3. Change the hero section welcome text
4. Add your own images to the gallery
5. Update social media links
6. Change the color scheme (just update CSS variables)

---

**Last Updated**: November 2025
**Version**: 1.0
**Maintainer**: Development Team

For questions or issues, contact the web development team.
