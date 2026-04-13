import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { person, SITE_URL } from '@/lib/data'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
]

const serviceLinks = [
  { label: 'Machine Learning Engineering', href: '#skills' },
  { label: 'AI Systems Integration',       href: '#projects' },
  { label: 'Full-Stack Development',       href: '#projects' },
  { label: 'Flutter Mobile Apps',          href: '#projects' },
  { label: 'Remote Consulting',            href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t border-white/5 pt-14 pb-8 px-6"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-baseline gap-1 mb-4">
              <span className="font-display font-black text-2xl text-white">{person.firstName}</span>
              <span className="font-display font-black text-2xl gradient-text">{person.lastName}</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              AI Engineer &amp; Full-Stack Developer building intelligent, scalable products.
              Based in Accra, Ghana — available for remote work worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={person.github}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/40 transition-all hover:scale-110 border border-white/5"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={person.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/40 transition-all hover:scale-110 border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${person.email}`}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-blue/40 transition-all hover:scale-110 border border-white/5"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-blue transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services (SEO: keyword-rich links) */}
          <nav aria-label="Services">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-blue transition-colors flex items-start gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors mt-1.5 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span>© {year} {person.name}. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{SITE_URL}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
              Available for remote work
            </span>
            {/* Back to top */}
            <a
              href="#hero"
              className="w-8 h-8 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-500 hover:text-brand-blue hover:border-brand-blue/30 transition-all hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
