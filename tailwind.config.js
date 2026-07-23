/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          'surface-subtle': 'var(--color-surface-subtle)',
          border: 'var(--color-border)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          accent: 'var(--color-accent)',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 30px -10px rgba(16, 185, 129, 0.15), 0 8px 15px -6px rgba(15, 23, 42, 0.06)',
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'emerald-ring': '0 0 0 4px rgba(16, 185, 129, 0.15)',
        nav: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        toastIn: {
          '0%': { opacity: '0', transform: 'translateY(-24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        progress: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        reveal: 'reveal 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 30s linear infinite',
        toastIn: 'toastIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both',
        progress: 'progress 4.8s linear forwards',
      },
    },
  },
  plugins: [],
};