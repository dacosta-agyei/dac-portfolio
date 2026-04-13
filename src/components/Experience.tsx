'use client'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '@/lib/data'
import { SectionHeader } from './ui/SectionHeader'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Work Experience"
          title="Professional Journey"
          description="Building production systems across AI, fintech, marketplaces, and public sector — remotely and on-site."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[22px] top-2 bottom-2 w-px timeline-line hidden sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="Work history">
            {experience.map((job, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-14"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-5 w-[44px] h-[44px] rounded-xl bg-dark-700 border border-white/10 hidden sm:flex items-center justify-center shadow-card z-10"
                  aria-hidden="true"
                >
                  <Briefcase size={18} className="text-brand-blue" />
                </div>

                {/* Card */}
                <article className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm">
                        <span className="text-brand-blue font-medium">{job.company}</span>
                        {job.note && (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                            {job.note}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="text-brand-blue mt-0.5 shrink-0 font-bold">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-dark-600 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
