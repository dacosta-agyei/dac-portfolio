# DaCosta Agyei — Portfolio Website

A stunning, SEO-optimised portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← SEO metadata, fonts, JSON-LD
│   ├── page.tsx            ← Page assembly
│   ├── globals.css         ← Design system (orbs, glass, animations)
│   ├── opengraph-image.tsx ← Auto-generated OG image for social sharing
│   ├── sitemap.ts          ← Dynamic sitemap for Google
│   └── robots.ts           ← Search engine crawl rules
├── components/
│   ├── Navbar.tsx          ← Sticky glass navbar
│   ├── Hero.tsx            ← Animated hero + typewriter
│   ├── About.tsx           ← Bio, stats, availability
│   ├── Skills.tsx          ← Skill category grid
│   ├── Experience.tsx      ← Timeline
│   ├── Projects.tsx        ← Filterable project grid
│   ├── Certificates.tsx    ← Credential cards
│   ├── Contact.tsx         ← Contact form
│   ├── Footer.tsx          ← Footer with sitemap links
│   └── ui/
│       └── SectionHeader.tsx ← Reusable animated header
└── lib/
    └── data.ts             ← ALL content lives here (edit this!)
```

---

## ✏️ How to Update Your Content

**Everything is in `src/lib/data.ts`**. You never need to touch the components.

### Update your info
```ts
export const person = {
  name:      'DaCosta Agyei',
  email:     'ohenebadac@gmail.com',
  linkedin:  'https://linkedin.com/in/YOUR-ACTUAL-HANDLE',
  github:    'https://github.com/YOUR-ACTUAL-HANDLE',
  // ...
}
```

### Add a certificate verification link
```ts
// Find the cert in certifications array and update:
{
  name: 'Deep Learning Specialization',
  issuer: 'DeepLearning.AI',
  url: 'https://www.coursera.org/verify/YOUR_CERT_ID',  // ← add here
}
```

### Add a new project
```ts
export const projects = [
  {
    slug:        'my-new-project',
    title:       'Project Name',
    subtitle:    'Short tagline',
    description: 'What it does...',
    category:    'AI/ML',  // All | AI/ML | Full-Stack | Mobile | Fintech
    tags:        ['Python', 'React'],
    status:      'Production',
    highlights:  ['Key metric 1', 'Key metric 2'],
    gradient:    'from-blue-600 to-violet-600',
    icon:        '🤖',
  },
  // ...
]
```

---

## 📬 Setting Up the Contact Form

The form uses **Formspree** (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your **Form ID** (e.g. `xpzvqkbd`)
3. Open `src/components/Contact.tsx` and replace:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
   with your actual ID:
   ```
   https://formspree.io/f/xpzvqkbd
   ```

Without this step the form falls back to opening the user's email client — still works, just not as seamless.

---

## 🌐 Deploying to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts — your site will be live in ~60 seconds
```

Or push to GitHub and connect at [vercel.com](https://vercel.com) for automatic deploys on every push.

---

## 🔍 SEO Checklist (do these before launching)

- [ ] Update `SITE_URL` in `src/lib/data.ts` to your actual domain
- [ ] Update your LinkedIn and GitHub URLs in `person` object
- [ ] Add your **Google Search Console verification code** in `src/app/layout.tsx`
- [ ] Submit your sitemap to Google: `https://search.google.com/search-console` → Sitemaps → Add `yourdomain.com/sitemap.xml`
- [ ] Add your certificate verification links in `certifications` array
- [ ] Add a real profile photo (see below)
- [ ] Add your Formspree form ID in `Contact.tsx`
- [ ] Consider upgrading domain to `dacostaagyei.com` or `dacosta.dev`

---

## 🖼️ Adding Your Profile Photo

1. Add your photo as `public/profile.jpg` (recommended: 400×400px, square, good lighting)
2. Open `src/components/About.tsx` and add:
```tsx
import Image from 'next/image'

// Inside the component, replace the icon block with:
<Image
  src="/profile.jpg"
  alt="DaCosta Agyei — AI Engineer and Full-Stack Developer"
  width={400}
  height={400}
  className="rounded-2xl w-full object-cover"
  priority
/>
```

---

## 📊 Adding Google Analytics

Open `src/app/layout.tsx` and add inside `<head>`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer=window.dataLayer||[];
      function gtag(){dataLayer.push(arguments);}
      gtag('js',new Date());
      gtag('config','G-XXXXXXXXXX');
    `
  }}
/>
```

---

## 🎨 Design Customisation

All design tokens are in `tailwind.config.ts` under `colors.brand`:
```ts
brand: {
  blue:   '#3B82F6',  ← primary accent
  violet: '#8B5CF6',  ← secondary
  cyan:   '#06B6D4',  ← tertiary
  green:  '#10B981',  ← availability indicator
}
```

Background orb styles are in `src/app/globals.css` under `.orb-1`, `.orb-2`, `.orb-3`.

---

## 📦 Build for Production

```bash
npm run build   # compiles and optimises
npm run start   # starts production server
```

---

Built with ❤️ by DaCosta Agyei
