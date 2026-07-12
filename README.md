# Bramha Vinayak Gulavani - Portfolio Website

A modern portfolio web app built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- PostCSS + Autoprefixer

## Features

- Responsive, modern UI with custom Tailwind theme tokens
- Animated hero and section transitions
- Redesigned About section with developer-identity style presentation
- Skills section with symbols/icons per skill
- Gallery cards and project showcases, including the latest event photo update
- Contact section and profile links
- Welcome toast message on page load
- Downloadable resume from the portfolio header

## Recent Updates This Week

- Updated the resume file at `public/assets/BramhaResume.pdf`
- Added a new gallery image for the EDI presentation: `public/gallery/DrAmarPanchal1.jpeg`
- Updated the portfolio gallery in `src/App.jsx` to show the new event photo

## Local Development

This project is configured to run on port `3173`.

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3173
```

If port `3173` is already in use, stop the process using that port and run again.

## Build

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```text
My Portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.cjs
├── public/
│   ├── assets/
│   └── gallery/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── config/
│       └── assets.js
└── README.md
```

## Customization Guide

### Update profile image and resume

Edit `src/config/assets.js`:

```js
export const assets = {
  profileImage: '/assets/Bramha.png',
  resumeFile: '/assets/BramhaResume.pdf',
};
```

### Update content

- Main sections: `src/App.jsx`
- Global styles and Tailwind layers: `src/styles.css`
- Theme extensions: `tailwind.config.js`

## Contact

- LinkedIn: https://www.linkedin.com/in/bramha-vinayak-gulavani-31302a30b
- GitHub: https://github.com/bramhagulavani
- Location: Pune, Maharashtra, India

---

Built with React and Tailwind CSS.
