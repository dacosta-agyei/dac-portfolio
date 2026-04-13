'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react'
import { person, tickerSkills, resumeVersions } from '@/lib/data'

// ── Typewriter hook ────────────────────────────────────────────────────────
function useTypewriter(phrases: string[], speed = 80, pause = 2000) {
  const [display, setDisplay]   = useState('')
  const [phase, setPhase]       = useState<'typing' | 'pausing' | 'deleting'>('typing')
  const [index, setIndex]       = useState(0)
  const [charIdx, setCharIdx]   = useState(0)

  useEffect(() => {
    const current = phrases[index]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, speed)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 100)
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, speed / 2)
      } else {
        setIndex(i => (i + 1) % phrases.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, charIdx, index, phrases, speed, pause])

  return display
}

// ── Ticker row ────────────────────────────────────────────────────────────
function SkillTicker() {
  const skills = [...tickerSkills, ...tickerSkills] // duplicate for seamless loop
  return (
    <div className="relative overflow-hidden py-3" aria-hidden="true">
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #020817, transparent)' }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #020817, transparent)' }}
      />
      <div className="ticker-track">
        {skills.map((s, i) => (
          <span
            key={i}
            className="mx-4 whitespace-nowrap text-sm font-mono text-slate-500 hover:text-brand-blue transition-colors flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-brand-blue/40 inline-block" />
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Main Hero ─────────────────────────────────────────────────────────────
export default function Hero() {
  const role = useTypewriter(person.roles, 70, 2200)

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-20 pb-10"
      aria-label="Hero — DaCosta Agyei"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Available badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
          <span className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-green/30 text-brand-green text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            Open to Remote Work · UTC+0
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-black leading-none tracking-tight"
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
            {person.firstName}
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl gradient-text mt-1">
            {person.lastName}
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div variants={item} className="mt-6 h-10 flex items-center justify-center">
          <span className="font-mono text-xl md:text-2xl text-brand-blue">
            {role}
            <span className="cursor-blink text-brand-violet">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Building intelligent systems at the intersection of{' '}
          <span className="text-slate-200 font-medium">machine learning</span> and{' '}
          <span className="text-slate-200 font-medium">full-stack engineering</span>.
          Based in Ghana — available everywhere.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="btn-primary px-7 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Explore My Work
            <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            className="btn-outline px-7 py-3.5 rounded-xl text-base font-semibold text-slate-200 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Hire Me
            <Mail size={16} />
          </a>
          <a
            href={resumeVersions[0].file}
            download
            className="px-7 py-3.5 rounded-xl text-base font-semibold text-slate-400 hover:text-white flex items-center gap-2 w-full sm:w-auto justify-center border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-5">
          <a
            href={person.github}
            target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
            aria-label="GitHub profile of DaCosta Agyei"
          >
            <Github size={20} />
          </a>
          <a
            href={person.linkedin}
            target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
            aria-label="LinkedIn profile of DaCosta Agyei"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${person.email}`}
            className="p-2.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all hover:scale-110"
            aria-label="Email DaCosta Agyei"
          >
            <Mail size={20} />
          </a>
          <div className="h-4 w-px bg-slate-700" aria-hidden="true" />
          <span className="text-xs font-mono text-slate-600">{person.location}</span>
        </motion.div>
      </motion.div>

      {/* Skill ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full max-w-5xl mx-auto mt-16"
      >
        <SkillTicker />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-slate-600 hover:text-brand-blue transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  )
}
