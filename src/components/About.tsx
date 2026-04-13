'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Clock, GraduationCap, Briefcase } from 'lucide-react'
import { person, education } from '@/lib/data'
import { SectionHeader, AnimatedSection } from './ui/SectionHeader'

function StatCard({ value, label, icon, delay }: {
  value: string; label: string; icon: string; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass glass-hover rounded-2xl p-6 text-center"
    >
      <div className="text-3xl mb-2" aria-hidden="true">{icon}</div>
      <div className="font-display text-4xl font-black gradient-text">{value}</div>
      <div className="text-slate-400 text-sm mt-1 font-medium">{label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Remote AI & Full-Stack Engineer"
          description="Based in Ghana — building for the world"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <AnimatedSection direction="left">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center mb-6"
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-brand-blue/30 ring-offset-4 ring-offset-dark-950">
                <Image
                  src="/profile.png"
                  alt="DaCosta Agyei"
                  fill
                  sizes="144px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <div className="glass rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={14} className="text-brand-blue" />
                <span>Accra, Ghana</span>
                <Clock size={14} className="text-brand-blue ml-2" />
                <span>UTC+0 — flexible hours</span>
              </div>

              {person.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-300 leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-2 flex flex-wrap gap-2">
                {['Remote-first', 'Async-friendly', 'UTC+0', 'Available Now'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-brand-blue/10 text-brand-blue border border-brand-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-6 space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <GraduationCap size={14} className="text-brand-violet" />
                Education
              </h3>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="glass rounded-xl p-4 flex items-start gap-4 glass-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-brand-violet" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{edu.degree}</div>
                    <div className="text-slate-400 text-sm">{edu.school}</div>
                    {edu.note && (
                      <div className="text-brand-cyan text-xs mt-1 font-medium">{edu.note}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Stats + availability */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {person.stats.map((stat, i) => (
                <StatCard key={i} {...stat} icon={
                  stat.icon === 'calendar' ? '📅' :
                  stat.icon === 'rocket'   ? '🚀' :
                  stat.icon === 'brain'    ? '🧠' : '🏅'
                } delay={i * 0.1} />
              ))}
            </div>

            {/* Availability card */}
            <AnimatedSection delay={0.4}>
              <div className="glass rounded-2xl p-6 border border-brand-green/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green" />
                  </div>
                  <span className="text-brand-green font-semibold">Currently Available for Remote Work</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;m actively seeking full-time or contract remote opportunities worldwide.
                  I&apos;m flexible across US, EU, and APAC time zones and responsive within 24 hours.
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="mailto:ohenebadac@gmail.com"
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-semibold text-white"
                  >
                    Get in Touch
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank" rel="noopener noreferrer"
                    className="btn-outline px-4 py-2 rounded-lg text-sm font-semibold text-slate-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* What I offer */}
            <AnimatedSection delay={0.5}>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <Briefcase size={14} className="text-brand-cyan" />
                  What I bring to your team
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'End-to-end AI pipeline design and deployment',
                    'Full-stack web + mobile product delivery',
                    'Team leadership and async remote collaboration',
                    'Strong communication with non-technical stakeholders',
                    'Consistent code quality and documentation',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-brand-blue mt-0.5 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
