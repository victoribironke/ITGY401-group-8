# KBCC Website - Quick Reference Sheet

## 🎨 Design Tokens (Copy & Paste)

### Colors

```css
Royal Blue: #002366
Gold: #d4af37
White: #ffffff
Light Grey: #f5f7fa
Medium Grey: #e1e8ed
Text Grey: #4a5568
```

### Fonts

```css
Headings: 'Oswald', sans-serif (bold, uppercase)
Body: 'Lora', serif (readable, elegant)
```

### Borders

```css
Standard: 2px solid #e1e8ed
Accent: 4px solid #d4af37
Hover: 2px solid #d4af37
```

### Spacing

```css
Section Padding: 80px 0
Card Padding: 40px
Gap Between Cards: 32px
Button Padding: 16px 32px
```

---

## 📄 Page Structure Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title - KBCC</title>
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Copy navigation from index.html -->

    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Page Title</h1>
        <p>Page description</p>
      </div>
    </section>

    <!-- Your content here -->

    <!-- Copy footer from index.html -->
    <script src="script.js"></script>
  </body>
</html>
```

---

## 🧩 Common Components

### Button (Primary - Gold)

```html
<a href="link.html" class="btn btn-primary">
  <span>Button Text</span>
  <i class="fas fa-arrow-right"></i>
</a>
```

### Button (Secondary - Blue)

```html
<a href="link.html" class="btn btn-secondary">
  <span>Button Text</span>
  <i class="fas fa-play"></i>
</a>
```

### Button (Outline)

```html
<a href="link.html" class="btn btn-outline"> Button Text </a>
```

### Service Card

```html
<div class="service-card">
  <div class="service-icon">
    <i class="fas fa-church"></i>
  </div>
  <h3>Card Title</h3>
  <p class="service-name">Subtitle</p>
  <p class="service-day">Schedule</p>
  <p class="service-time">Time</p>
</div>
```

### Event Card

```html
<div class="event-card">
  <div class="event-date">
    <span class="event-day">28</span>
    <span class="event-month">NOV</span>
  </div>
  <h3>Event Name</h3>
  <p class="event-theme">Theme</p>
  <p class="event-details"><i class="fas fa-clock"></i> Time</p>
  <p class="event-details"><i class="fas fa-map-marker-alt"></i> Location</p>
</div>
```

### Sermon Card

```html
<div class="sermon-card">
  <div class="sermon-thumbnail">
    <div class="sermon-placeholder">
      <i class="fas fa-play-circle"></i>
    </div>
  </div>
  <div class="sermon-card-content">
    <span class="sermon-badge">NEW</span>
    <h3>Sermon Title</h3>
    <p class="sermon-author">Speaker Name</p>
    <p class="sermon-excerpt">Short description...</p>
    <a href="sermons.html" class="btn btn-secondary btn-small">
      <span>Watch</span>
      <i class="fas fa-play"></i>
    </a>
  </div>
</div>
```

---

## 📝 Content Update Cheatsheet

### Update Service Times

**Files to edit**: `index.html`, footer in ALL pages
**Find**: `6:00 PM`, `8:00 AM`, `10:00 AM`
**Replace**: with new times

### Add New Event

**Files to edit**: `events.html`, `index.html`
**Where**: Inside `<div class="event-card-grid">` or `<div class="events-list">`
**Template**: Copy existing event card and modify

### Update Contact Info

**Files to edit**: `contact.html`, footer in ALL pages
**Find**: `kbccmails2015@gmail.com`, `4, Alhaji Yusuf`
**Replace**: with new contact details

### Change Church Address

**Files to edit**: Footer in ALL 7 pages
**Search**: "4, Alhaji Yusuf Adebayo Street"

### Update Social Media

**Files to edit**: `index.html`, `contact.html`, footer in ALL pages
**Find URLs**:

- Facebook: `https://www.facebook.com/kingdomofbelieversministry`
- YouTube: `https://youtube.com/@kingdomofbelieverschristia7222`
- Instagram: `https://www.instagram.com/kbcc_headquarters`

---

## 🎯 Icon Reference (Font Awesome)

### Common Icons Used

```html
<i class="fas fa-church"></i>
<!-- Church -->
<i class="fas fa-calendar"></i>
<!-- Calendar -->
<i class="fas fa-clock"></i>
<!-- Time -->
<i class="fas fa-map-marker-alt"></i>
<!-- Location -->
<i class="fas fa-envelope"></i>
<!-- Email -->
<i class="fas fa-play-circle"></i>
<!-- Play button -->
<i class="fas fa-arrow-right"></i>
<!-- Arrow -->
<i class="fab fa-facebook-f"></i>
<!-- Facebook -->
<i class="fab fa-youtube"></i>
<!-- YouTube -->
<i class="fab fa-instagram"></i>
<!-- Instagram -->
```

**Find more icons**: https://fontawesome.com/icons

---

## 🔧 Quick Fixes

### Problem: Mobile Menu Not Opening

**Check**: Make sure IDs match

```html
<button id="mobileToggle">...</button>
<ul id="navMenu">
  ...
</ul>
```

### Problem: Gallery Images Not Loading

**Check**:

1. Images are named `1.jpeg` to `32.jpeg` (not `1.jpg`)
2. Files are in `images/` folder
3. Update `totalImages` in `script.js` if different count

### Problem: Buttons Look Wrong

**Check**: Proper class names

```html
<!-- Correct -->
<a href="#" class="btn btn-primary">Text</a>

<!-- Wrong -->
<a href="#" class="button primary">Text</a>
```

### Problem: Cards Not Aligned

**Check**: Parent container has grid

```html
<div class="service-grid">
  <!-- Not .service-container -->
  <div class="service-card">...</div>
</div>
```

---

## 📱 Testing Checklist

Before deploying changes:

- [ ] Test on Chrome/Edge
- [ ] Test on Firefox
- [ ] Test on Safari (if available)
- [ ] Test mobile menu (resize browser to < 768px)
- [ ] Click through all 7 pages
- [ ] Test gallery lightbox
- [ ] Submit contact form (check validation)
- [ ] Test all navigation links
- [ ] Check social media links open in new tabs
- [ ] Verify all images load
- [ ] Check footer on all pages

---

## 🚀 Deployment Quick Steps

### Using FTP/cPanel

1. Connect to hosting via FTP
2. Upload ALL files to `public_html/` or `www/`
3. Keep folder structure intact
4. Visit your domain

### Using GitHub Pages

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then enable Pages in repo settings.

---

## 🎨 CSS Class Quick Reference

### Layout

```css
.container          /* Max-width 1200px, centered */
/* Max-width 1200px, centered */
.section            /* Standard section (80px padding) */
.section-grey       /* Grey background section */
.text-center; /* Center align text */
```

### Grid Layouts

```css
.service-grid       /* 3-column service cards */
/* 3-column service cards */
.sermon-card-grid   /* 3-column sermon cards */
.event-card-grid    /* 3-column event cards */
.social-grid        /* 3-column social cards */
.values-grid        /* Multi-column value cards */
.gallery-grid; /* Auto-fill gallery grid */
```

### Text Styles

```css
.section-label      /* Small gold uppercase label */
/* Small gold uppercase label */
.section-title      /* Large heading */
.intro-text; /* Larger intro paragraph */
```

### State Classes

```css
.active             /* Active nav item */
/* Active nav item */
.featured-event     /* Highlighted event */
.form-message; /* Form feedback */
```

---

## 💡 Pro Tips

1. **Copy Components**: Don't write from scratch. Copy existing cards and modify.

2. **Use Browser DevTools**:

   - F12 → Inspect element
   - See computed styles
   - Test mobile view

3. **Consistent Naming**: Follow existing patterns

   - Card containers: `.something-grid`
   - Individual cards: `.something-card`
   - Card content: `.something-card-content`

4. **Color Changes**: Only edit CSS variables, never hardcode colors

5. **Image Optimization**: Compress images before uploading (aim for < 500KB each)

6. **Alt Text**: Always add descriptive alt text for images

---

## 📞 Need Help?

### Common Questions

**Q: How do I change the color scheme?**
A: Edit CSS variables in `styles.css` (lines 7-16)

**Q: Can I add more pages?**
A: Yes! Copy an existing page and update the navigation.

**Q: How do I make the contact form actually send emails?**
A: You need a backend (PHP, Node.js, or third-party service). See `script.js` lines 134-176.

**Q: The gallery shows 32 images. I only have 20. What do I do?**
A: Change `totalImages = 32` to `totalImages = 20` in `script.js` line 73.

**Q: Can I use a different logo?**
A: Yes! Replace `images/logo.jpg` with your logo (keep same filename or update all references).

---

**Print this sheet and keep it handy!** 📌

For detailed explanations, see `PROJECT_DOCUMENTATION.md`
