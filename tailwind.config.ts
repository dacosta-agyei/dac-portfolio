import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#020817',
          900: '#060F1E',
          800: '#0A1628',
          700: '#0F1F3D',
          600: '#1E293B',
          500: '#334155',
        },
        brand: {
          blue:   '#3B82F6',
          violet: '#8B5CF6',
          cyan:   '#06B6D4',
          pink:   '#EC4899',
          green:  '#10B981',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero':   'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #06B6D4 100%)',
        'gradient-card':   'linear-gradient(145deg, rgba(30,41,59,0.8) 0%, rgba(15,31,61,0.6) 100%)',
      },
      boxShadow: {
        'glow-blue':   '0 0 30px rgba(59,130,246,0.35)',
        'glow-violet': '0 0 30px rgba(139,92,246,0.35)',
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.35)',
        'card':        '0 4px 32px rgba(0,0,0,0.4)',
      },
      animation: {
        'orb-1':     'float-1 14s ease-in-out infinite',
        'orb-2':     'float-2 18s ease-in-out infinite',
        'orb-3':     'float-3 22s ease-in-out infinite',
        'ticker':    'ticker 30s linear infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'shimmer':   'shimmer 2.5s linear infinite',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        'float-1': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%':     { transform: 'translate(60px,-80px) scale(1.05)' },
          '66%':     { transform: 'translate(-40px,60px) scale(0.97)' },
        },
        'float-2': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%':     { transform: 'translate(-80px,100px) scale(1.08)' },
        },
        'float-3': {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '40%':     { transform: 'translate(80px,-60px) scale(0.95)' },
          '80%':     { transform: 'translate(-30px,80px) scale(1.03)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.8)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
