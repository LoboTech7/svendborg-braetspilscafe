/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bastard Cafe inspired minimal modern color palette with warmth
        bastard: {
          // Core neutrals - clean and minimal with warm undertones
          50: '#FAFAF9',    // Warmest lightest gray
          100: '#F5F5F4',   // Warm very light gray
          200: '#E7E5E4',   // Warm light gray
          300: '#D6D3D1',   // Warm gray
          400: '#A8A29E',   // Warm medium gray
          500: '#78716C',   // Warm mid gray
          600: '#57534E',   // Warm dark gray
          700: '#44403C',   // Warm darker gray
          800: '#292524',   // Warm very dark gray
          900: '#1C1917',   // Warm almost black
          950: '#0A0908',   // Warm near black
        },
        primary: {
          // Primary dark button color from Bastard Cafe
          DEFAULT: '#32373c',
          light: '#4a5157',
          dark: '#1f2326',
        },
        accent: {
          // Vibrant accent colors inspired by Bastard Cafe - enhanced warmth
          pink: '#f78da7',
          red: '#cf2e2e',
          orange: '#ff6900',
          cyan: '#0693e3',
          purple: '#9b51e0',
          yellow: '#ffd700',
        },
        neutral: {
          // Additional neutral tones with warmth
          gray: '#abb8c3',
          lightgray: '#faf9f7',
          darkgray: '#2c3e50',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Apple-level typography scale
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        // Extended spacing for Apple-level generous whitespace
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        // Apple-level shadow system with depth
        'minimal': '0 2px 8px 0 rgba(0, 0, 0, 0.08)',
        'minimal-lg': '0 4px 16px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'minimal-xl': '0 8px 24px -4px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.08)',
        'dark': '0 4px 14px 0 rgba(50, 55, 60, 0.15)',
        'dark-lg': '0 10px 25px -3px rgba(50, 55, 60, 0.2)',
        // Premium Apple-style shadows
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(247, 141, 167, 0.5)',
        'glow-lg': '0 0 40px rgba(247, 141, 167, 0.6)',
        'depth': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'depth-lg': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        'depth-xl': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        // Apple's premium cubic-bezier easings
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'apple-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'apple-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'apple-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        // Basic animations
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        // Premium Apple-style animations
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'zoom-in': 'zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'levitate': 'levitate 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(247, 141, 167, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(247, 141, 167, 0.8)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(247, 141, 167, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(247, 141, 167, 0.6)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        levitate: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}