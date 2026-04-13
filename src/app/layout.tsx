import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { getJsonLd, SITE_URL, person } from '@/lib/data'

// ── Fonts ──────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DaCosta Agyei | AI Engineer & Full-Stack Developer | Open to Remote',
    template: '%s | DaCosta Agyei',
  },
  description:
    'DaCosta Agyei is an AI Engineer and Full-Stack Developer from Accra, Ghana. Expert in Machine Learning, Computer Vision, NLP, React, Flutter, and FastAPI. 6+ years experience. Open to remote work globally.',
  keywords: [
    'DaCosta Agyei',
    'Dacosta Agyei portfolio',
    'AI Engineer remote hire',
    'Machine Learning Engineer Ghana',
    'Full-Stack Developer remote',
    'hire Flutter developer remote',
    'React developer Africa remote',
    'Python ML engineer remote work',
    'NLP engineer hire',
    'Computer Vision engineer remote',
    'AI engineer UTC+0 remote',
    'FastAPI developer hire',
    'Next.js developer remote Ghana',
    'mobile app developer Flutter hire',
    'senior full stack engineer remote',
    'deep learning engineer remote hire',
    'PyTorch engineer',
    'remote software engineer Ghana',
  ],
  authors: [{ name: 'DaCosta Agyei', url: SITE_URL }],
  creator:   'DaCosta Agyei',
  publisher: 'DaCosta Agyei',
  category:  'technology',

  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         SITE_URL,
    title:       'DaCosta Agyei | AI Engineer & Full-Stack Developer',
    description: 'AI Engineer & Full-Stack Developer from Ghana. ML · Computer Vision · NLP · React · Flutter. 6+ years. Open to remote work worldwide.',
    siteName:    'DaCosta Agyei Portfolio',
  },

  twitter: {
    card:        'summary_large_image',
    title:       'DaCosta Agyei | AI Engineer & Full-Stack Developer',
    description: 'AI Engineer & Full-Stack Developer. ML · Computer Vision · React · Flutter. Open to remote work globally.',
  },

  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-video-preview':  -1,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    // Add your Google Search Console verification code here:
    // google: 'your-verification-code',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor:       '#020817',
  colorScheme:      'dark',
  width:            'device-width',
  initialScale:     1,
  maximumScale:     5,
}

// ── Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd()) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans bg-dark-950 text-slate-100 antialiased">
        {/* Fixed ambient background */}
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
