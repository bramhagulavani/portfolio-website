# Bramha Vinayak Gulavani - Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and vanilla JavaScript.

## 🎨 Features

- **Modern Design**: Clean, professional dark theme with emerald green accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll-based animations and interactive hover effects
- **Sections Included**:
  - Hero with profile card and call-to-action buttons
  - About Me with quick info grid
  - Education timeline
  - Skills categorized by domain
  - Featured projects with tech stacks
  - Experience & Activities (clubs, hackathons)
  - Achievements & Certifications
  - Contact form with social links

## 🚀 How to Run

### Option 1: Direct Opening
Simply open the `index.html` file in any modern web browser:
1. Navigate to the project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Using Live Server (Recommended for Development)
If you have VS Code with Live Server extension:
1. Open the project folder in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open at `http://localhost:5500` (or similar)

### Option 3: Using Python HTTP Server
```bash
# Navigate to the project directory
cd portfolio-website

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 4: Using Node.js HTTP Server
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd portfolio-website

# Start the server
http-server

# Open the URL shown in terminal (usually http://localhost:8080)
```

## 📁 Project Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with custom design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #10b981;          /* Main accent color */
    --primary-dark: #059669;     /* Darker shade */
    --primary-light: #34d399;    /* Lighter shade */
    /* ... other colors ... */
}
```

### Adding Your Photo
Replace the SVG placeholder in `index.html` with your actual image:
```html
<div class="profile-image-wrapper">
    <img src="your-photo.jpg" alt="Bramha Vinayak Gulavani" class="profile-placeholder">
</div>
```

### Updating Contact Links
Update the social media links in the contact section:
- LinkedIn: Already linked to your profile
- GitHub: Replace `https://github.com/your-username` with your actual GitHub URL
- LeetCode/Codeforces: Add your profile URLs

### Adding Resume
Upload your resume PDF and update the link in the hero section:
```html
<a href="path/to/your-resume.pdf" class="btn btn-primary">
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, Animations
- **JavaScript**: Vanilla JS for interactions
- **Google Fonts**: Space Mono & Outfit

## 📱 Responsive Breakpoints

- Desktop: 968px and above
- Tablet: 640px - 968px
- Mobile: Below 640px

## ✨ Key Features Explained

1. **Sticky Navigation**: Navigation bar sticks to the top when scrolling
2. **Active Section Highlighting**: Navigation links highlight based on scroll position
3. **Smooth Scrolling**: Clicking navigation links smoothly scrolls to sections
4. **Mobile Menu**: Hamburger menu for mobile devices
5. **Scroll Animations**: Sections fade in as you scroll
6. **Card Parallax**: Hover effects on project and experience cards
7. **Contact Form**: Frontend validation (note: backend integration needed for actual sending)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The contact form is frontend-only. To make it functional, integrate with a backend service or email API
- All project links currently point to `#`. Update them with your actual GitHub repository URLs
- The resume link is a placeholder. Upload your resume and update the path
- Social media links need to be updated with your actual profiles

## 🎯 Future Enhancements

Consider adding:
- Dark/Light theme toggle
- Blog section
- Project filtering by technology
- Backend for contact form
- Analytics integration
- SEO optimization
- PWA capabilities

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Bramha Vinayak Gulavani**
- LinkedIn: [bramha-vinayak-gulavani](https://www.linkedin.com/in/bramha-vinayak-gulavani-31302a30b)
- GitHub: [your-username](https://github.com/your-username)
- Location: Pune, Maharashtra, India

---

**Built with ❤️ using HTML, CSS, and JavaScript**
