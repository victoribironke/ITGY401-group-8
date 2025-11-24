# Kingdom of Believers Christian Centre (KBCC) Website

A clean, professional church website built with HTML, CSS, and JavaScript.

## 📁 File Structure

```
├── index.html          # Home page
├── about.html          # About us page
├── leadership.html     # Leadership team
├── sermons.html        # Sermons and messages
├── events.html         # Upcoming events
├── gallery.html        # Photo gallery
├── contact.html        # Contact page
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript functionality
└── images/             # All images (logo + 32 gallery images)
```

## 🎨 Color Scheme

Based on the KBCC logo:
- **Primary Blue**: #1e3a8a (Deep blue from sky)
- **Secondary Blue**: #2563eb (Lighter blue)
- **Gold**: #d4af37 (From logo text)
- **White**: #ffffff
- **Gray**: #6b7280

## ✨ Features

### Navigation
- Sticky navigation bar
- Mobile-responsive hamburger menu
- Active page highlighting

### Home Page
- Hero section with welcome message
- Service times and location
- Pastor's welcome message
- Latest sermon preview
- Featured upcoming events
- Social media links

### About Page
- Vision and mission statements
- 10 core values with icons
- Complete statement of faith (12 points)
- Church history timeline

### Leadership Page
- Pastor Gbenga Olusanya (PGO) profile
- Pastor Yemisi Olusanya (PYO) profile
- Detailed bios and qualifications

### Sermons Page
- Featured sermon: "The Name of Jesus (Part 1)"
- Links to Telegram, YouTube, and Facebook
- Sermon series showcase

### Events Page
- 9 upcoming events listed
- Featured events highlighted
- Event dates, times, and locations
- Special themes displayed

### Gallery Page
- Grid layout with all 32 images
- Lightbox viewer for full-size images
- Keyboard navigation (arrow keys, ESC)
- Previous/Next buttons in lightbox

### Contact Page
- Contact form with validation
- Contact information
- Office hours
- Google Maps embed
- Social media links

## 🚀 Features & Functionality

### JavaScript Features
- **Mobile Navigation**: Toggle menu for mobile devices
- **Gallery Lightbox**: Click any image to view full size
- **Form Validation**: Contact form with email validation
- **Smooth Scrolling**: Smooth scroll for anchor links
- **Scroll to Top Button**: Appears when scrolling down
- **Fade-in Animations**: Elements animate as you scroll
- **Keyboard Navigation**: Navigate gallery with arrow keys

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly navigation
- Optimized images with lazy loading

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Usage

1. Open `index.html` in your web browser
2. Navigate through the site using the menu
3. All links and functionality work offline
4. To deploy, upload all files to your web hosting

## 🔧 Customization

### To Update Content:
1. Edit the HTML files directly
2. Content is clearly structured with comments
3. Update service times, events, or messages as needed

### To Change Colors:
1. Open `styles.css`
2. Modify CSS variables in the `:root` section
3. Changes will apply site-wide

### To Add/Remove Gallery Images:
1. Add images to the `images/` folder
2. Update the `totalImages` variable in `script.js` (line 73)
3. Images should be numbered sequentially (1.jpeg, 2.jpeg, etc.)

## 📧 Contact Form

The contact form currently shows a success message client-side. To make it functional:

1. Set up a backend endpoint (PHP, Node.js, etc.)
2. Uncomment the fetch code in `script.js` (lines 171-191)
3. Update the endpoint URL to your server
4. Add server-side email handling

## 🙏 Credits

**Kingdom of Believers Christian Centre**
- Est. 2003
- Lead Pastor: Pastor Gbenga Olusanya (PGO)
- Co-Lead Pastor: Pastor Yemisi Olusanya (PYO)

**Vision**: Raising men and women who will be Answers in the society.

## 📱 Social Media

- Facebook: https://www.facebook.com/kingdomofbelieversministry
- YouTube: https://youtube.com/@kingdomofbelieverschristia7222
- Instagram: https://www.instagram.com/kbcc_headquarters

---

Built with ❤️ for KBCC

