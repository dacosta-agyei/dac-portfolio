'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, ChevronDown } from 'lucide-react'
import { person, resumeVersions } from '@/lib/data'
import { clsx } from 'clsx'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('')
  const [cvOpen, setCvOpen]         = useState(false)
  const cvRef                       = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close CV dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Intersection observer for active section highlighting
  useEffect(() => {
    const ids = links.map(l => l.href.replace('#', ''))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive('#' + id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass border-b border-white/5 shadow-card'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group" aria-label="Home">
            <span className="font-display font-bold text-lg text-white group-hover:gradient-text transition-all">
              {person.firstName}
              <span className="gradient-text"> {person.lastName}</span>
            </span>
            {person.available && (
              <span className="hidden sm:flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
                Available
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'nav-link px-3 py-1.5 text-sm font-medium rounded-lg transition-colors',
                  activeSection === link.href
                    ? 'text-white active'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Download CV Dropdown */}
            <div className="relative" ref={cvRef}>
              <button
                onClick={() => setCvOpen(v => !v)}
                className="btn-outline px-4 py-2 rounded-lg text-sm font-semibold text-slate-200 flex items-center gap-2"
                aria-expanded={cvOpen}
                aria-haspopup="true"
                aria-label="Download CV or Resume"
              >
                <Download size={14} />
                Download CV
                <ChevronDown
                  size={14}
                  className={clsx('transition-transform duration-200', cvOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 mt-2 w-64 glass rounded-xl border border-white/10 shadow-xl overflow-hidden"
                  >
                    <div className="p-1.5">
                      {resumeVersions.map((cv) => (
                        <a
                          key={cv.label}
                          href={cv.file}
                          download
                          onClick={() => setCvOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors group"
                        >
                          <span className="text-lg" aria-hidden="true">{cv.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium group-hover:text-brand-blue transition-colors">{cv.label}</div>
                            <div className="text-xs text-slate-500">{cv.description}</div>
                          </div>
                          <Download size={12} className="text-slate-600 group-hover:text-brand-blue shrink-0 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="mailto:ohenebadac@gmail.com"
              className="btn-primary px-4 py-2 rounded-lg text-sm font-semibold text-white flex items-center gap-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/5 md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    activeSection === link.href
                      ? 'bg-brand-blue/10 text-brand-blue'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CV Downloads */}
              <div className="mt-2 pt-2 border-t border-white/5">
                <div className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-slate-500">
                  Download CV / Resume
                </div>
                {resumeVersions.map((cv) => (
                  <a
                    key={cv.label}
                    href={cv.file}
                    download
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    <span className="text-base" aria-hidden="true">{cv.icon}</span>
                    <span className="flex-1">{cv.label}</span>
                    <Download size={12} className="text-slate-600" />
                  </a>
                ))}
              </div>

              <a
                href="mailto:ohenebadac@gmail.com"
                className="btn-primary mt-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white text-center"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
