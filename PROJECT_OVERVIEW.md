# KBCC Website - Project Overview

> A simple guide explaining what's in this website project.

---

## What We Built

A 7-page church website for Kingdom of Believers Christian Centre (KBCC).

**The 7 Pages:**

1. Home page (index.html)
2. About Us (about.html)
3. Leadership (leadership.html)
4. Sermons (sermons.html)
5. Events (events.html)
6. Gallery (gallery.html)
7. Contact (contact.html)

**Built With:**

- HTML (for page structure)
- CSS (for colors and layout)
- JavaScript (for interactive features)

---

## Colors Used

**Royal Blue:** #002366

- Used for: Main headings, navigation text, main titles

**Gold:** #D4AF37

- Used for: Buttons, accents, icons, highlights
- This color comes from the church logo

**White:** #ffffff

- Used for: Main background, button text

**Light Grey:** #f5f7fa

- Used for: Alternate section backgrounds

**Medium Grey:** #e1e8ed

- Used for: Borders around cards and buttons

**Dark Grey:** #4a5568

- Used for: Body text, paragraphs

---

## Fonts Used

**Oswald** (for headings)

- Where it comes from: Google Fonts
- How it looks: Bold, uppercase, sans-serif
- Used for: All titles, headings, labels, buttons

**Lora** (for body text)

- Where it comes from: Google Fonts
- How it looks: Clean serif font, easy to read
- Used for: All paragraphs, descriptions, longer text

---

## Images

**Church Logo:**

- File: `images/logo.jpg`
- Used on: Every page (navigation and homepage hero)

**Gallery Images:**

- Files: `images/1.jpeg` through `images/32.jpeg`
- Total: 32 photos
- Displayed on: Gallery page in a grid

---

## External Services We Use

**Font Awesome**

- What it is: A collection of icons
- What we use it for: Church icons, calendar icons, social media icons, arrow icons
- Where it loads from: cdnjs.cloudflare.com

**Google Fonts**

- What it is: A font hosting service
- What we use it for: Oswald and Lora fonts
- Where it loads from: fonts.googleapis.com

**Google Maps**

- What it is: An embedded interactive map
- What we use it for: Showing church location on contact page
- Where it loads from: google.com/maps

---

## Design Details

**Borders:**

- Thickness: 2px
- Style: Solid lines
- Color: Medium grey (changes to gold when you hover)
- Used on: All cards, buttons, input fields

**Spacing:**

- Padding inside sections: 80px top and bottom
- Padding inside cards: 40px all around
- Space between cards: 32px
- Space between buttons: 10px

**Card Design:**

- Shape: Rectangle with rounded corners (4px radius)
- Border: 2px solid line
- Background: White or light grey
- Shadow: None (we use borders instead)

**Button Design:**

- Three types: Gold (primary), Blue (secondary), Outline
- Padding: 16px top/bottom, 32px left/right
- Border: 2px solid
- Text: Uppercase, bold

---

## Page Layout

**Navigation Bar:**

- Position: Top of every page
- Logo: Left side
- Menu links: Right side
- On mobile: Hamburger menu (three lines) that opens/closes

**Footer:**

- Position: Bottom of every page
- Contains: Quick links, contact info, service times
- Background: Royal blue
- Text: White

**Homepage Layout:**

- Hero section (welcome message + logo image)
- Service times (3 cards)
- Latest sermons (3 cards)
- Welcome message from pastor
- Featured events (3 cards)
- Social media links (3 cards)

---

## Interactive Features

**Mobile Menu**

- What it does: Shows/hides the navigation menu on small screens
- How it works: Click the hamburger icon (☰)
- Icon changes to X when open

**Gallery Lightbox**

- What it does: Shows images full-screen when clicked
- Controls: Next/Previous buttons, or use arrow keys
- Close: Click X button or press ESC key

**Contact Form**

- Fields: Name, email, phone, subject, message
- Validation: Checks if required fields are filled, checks if email is valid
- Current status: Shows success message (doesn't actually send emails yet)

**Smooth Scrolling**

- What it does: Page scrolls smoothly instead of jumping
- When it happens: Clicking anchor links

**Scroll-to-Top Button**

- What it does: Returns you to top of page
- When it appears: After scrolling down 300px
- Location: Bottom-right corner

**Fade-In Animations**

- What it does: Cards fade in as you scroll down
- Applies to: Service cards, event cards, sermon cards, gallery images

---

## Responsive Design (Mobile, Tablet, Desktop)

**On Small Phones (under 480px wide):**

- All cards stack vertically (one per row)
- Buttons stretch full width
- Text sizes reduce slightly

**On Tablets (under 768px wide):**

- Navigation changes to hamburger menu
- Two columns become one column
- Hero section stacks vertically

**On Laptops/Desktops (over 768px wide):**

- Full horizontal navigation menu
- Three columns for cards
- Hero section side-by-side (text left, image right)
- Maximum width: 1200px (content doesn't stretch too wide)

---

## File Organization

```
Project folder (itgy-401)
├── HTML files (7 pages)
│   ├── index.html
│   ├── about.html
│   ├── leadership.html
│   ├── sermons.html
│   ├── events.html
│   ├── gallery.html
│   └── contact.html
│
├── CSS file (1 file)
│   └── styles.css (all styling)
│
├── JavaScript file (1 file)
│   └── script.js (all interactivity)
│
├── Images folder
│   ├── logo.jpg
│   └── 1.jpeg through 32.jpeg
│
└── Documentation (3 files)
    ├── PROJECT_DOCUMENTATION.md (detailed technical info)
    ├── QUICK_REFERENCE.md (code snippets)
    └── PROJECT_OVERVIEW.md (this file)
```

---

## Content Overview

**About Page Contains:**

- Vision statement: "Raising men and women who will be Answers in the society"
- Mission statement
- 10 core values (Righteousness, Discipleship, Love, Faith, etc.)
- Statement of faith (12 beliefs)
- Church history timeline (2013-present)

**Leadership Page Contains:**

- Pastor Gbenga Olusanya (PGO) - Lead Pastor
- Pastor Yemisi Olusanya (PYO) - Co-Lead Pastor
- Photos (placeholders with icons)
- Biographies
- Qualifications

**Sermons Page Contains:**

- Featured sermon: "The Name of Jesus (Part 1)"
- Access options: Telegram, YouTube, Facebook
- Sermon series list

**Events Page Contains:**

- Fire Power Night (November 28)
- Children's Christmas Party (December 6)
- Family Thanksgiving Service (December 7)
- Pre-BCM Service (December 14)
- Believers Camp Meeting (December 18-20) - Featured
- Christmas Service (December 25)
- WatchNight Service (December 31) - Featured
- 21 Days Fast (January 12 - February 1)
- Kingdom Life Conference (March 11-15) - Featured

**Contact Page Contains:**

- Contact form (name, email, phone, subject, message)
- Church address: 4, Alhaji Yusuf Adebayo Street, Olodi Apapa, Lagos
- Email: kbccmails2015@gmail.com
- Office hours: Tuesday-Saturday, 9am-5pm
- Service times: Wednesday 6pm, Sunday 8am & 10am
- Embedded Google Map
- Social media links

---

## Service Times

**Wednesday:**

- Time: 6:00 PM
- Name: Spirit Communion Service

**Sunday:**

- Times: 8:00 AM and 10:00 AM
- Name: Service of Grace & Glory

---

## Social Media Links

**Facebook:**

- Link: facebook.com/kingdomofbelieversministry
- Used for: Live services, sermon videos

**YouTube:**

- Link: youtube.com/@kingdomofbelieverschristia7222
- Used for: Video messages, live streams

**Instagram:**

- Link: instagram.com/kbcc_headquarters
- Used for: Community photos, announcements

---

## Browser Compatibility

Works on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari (Mac/iPhone)
- Mobile browsers (all)

---

## What Makes This Design Special

1. **Clean & Professional:** No clutter, lots of white space
2. **Thick Borders:** 2px borders everywhere create structure
3. **Bold Typography:** Large, uppercase headings get attention
4. **Simple Color Scheme:** Just blue, gold, and grey
5. **No Frameworks:** Pure HTML/CSS/JavaScript (easier to understand)
6. **Mobile-Friendly:** Works great on phones
7. **Fast Loading:** Small file sizes, optimized images
8. **Beginner-Friendly:** Clear code, easy to read

---

## Common Updates You Might Make

**Change Service Times:**

- Edit: Homepage, footer on all pages
- Find: "6:00 PM" or "8:00 AM"

**Add New Event:**

- Edit: events.html and index.html
- Copy existing event card structure

**Update Contact Email:**

- Edit: Footer on all 7 pages, contact page
- Find: kbccmails2015@gmail.com

**Change Church Address:**

- Edit: Footer on all 7 pages, contact page
- Find: "4, Alhaji Yusuf Adebayo Street"

**Add Gallery Photos:**

- Add images to images folder
- Name them: 33.jpeg, 34.jpeg, etc.
- Update number in script.js

**Change Colors:**

- Edit: Top of styles.css file
- Change the color codes in the variables section

---

## What's NOT Included

- ❌ No login/authentication system
- ❌ No online giving/donations
- ❌ No event registration
- ❌ No member database
- ❌ No content management system (CMS)
- ❌ No blog
- ❌ Contact form doesn't send real emails (yet)

These can be added later if needed.

---

## Quick Facts

- **Total HTML files:** 7
- **Total CSS files:** 1 (styles.css)
- **Total JavaScript files:** 1 (script.js)
- **Total images:** 33 (1 logo + 32 gallery photos)
- **Total lines of CSS:** ~1,878
- **Total lines of JavaScript:** ~259
- **External dependencies:** 3 (Font Awesome, Google Fonts, Google Maps)
- **Pages with forms:** 1 (contact page)
- **Interactive features:** 6 (mobile menu, gallery, form validation, smooth scroll, scroll button, animations)

---

**Last Updated:** November 2025  
**Project Name:** KBCC Website  
**Church Name:** Kingdom of Believers Christian Centre  
**Also Known As:** The Answer City

---

## Need More Details?

- **For code examples:** See QUICK_REFERENCE.md
- **For technical details:** See PROJECT_DOCUMENTATION.md
- **For learning concepts:** See TEAM_STUDY_GUIDE.md
