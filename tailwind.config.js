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
        base: {
          950: '#060a0f',
          900: '#0c1118',
          850: '#111827',
          800: '#1b2433',
          700: '#2a3648',
        },
        accent: {
          300: '#6fffd2',
          400: '#33f0b1',
          500: '#18d99d',
          600: '#10b981',
          700: '#079568',
        },
      },
      boxShadow: {
        halo: '0 0 0 1px rgba(24, 217, 157, 0.35), 0 20px 60px rgba(0, 0, 0, 0.35)',
        card: '0 22px 50px rgba(6, 10, 15, 0.45)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 12% 22%, rgba(24,217,157,0.22), transparent 45%), radial-gradient(circle at 85% 10%, rgba(106,255,220,0.18), transparent 42%), radial-gradient(circle at 78% 75%, rgba(39,122,255,0.18), transparent 36%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
        reveal: 'reveal 600ms ease-out both',
        toastIn: 'toastIn 420ms cubic-bezier(0.16, 1, 0.3, 1) both',
        progress: 'progress 4.8s linear forwards',
      },
    },
  },
  plugins: [],
};
