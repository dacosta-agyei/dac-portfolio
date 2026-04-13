'use client'
import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import { SectionHeader, AnimatedSection } from './ui/SectionHeader'

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   dot: 'bg-blue-500' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', dot: 'bg-violet-500' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   dot: 'bg-cyan-500' },
  pink:   { bg: 'bg-pink-500/10',   border: 'border-pink-500/20',   text: 'text-pink-400',   dot: 'bg-pink-500' },
  green:  { bg: 'bg-emerald-500/10',border: 'border-emerald-500/20',text: 'text-emerald-400',dot: 'bg-emerald-500' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400', dot: 'bg-orange-500' },
  teal:   { bg: 'bg-teal-500/10',   border: 'border-teal-500/20',   text: 'text-teal-400',   dot: 'bg-teal-500' },
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Technical Skills"
          title="Technologies & Expertise"
          description="A comprehensive toolkit built over 6+ years of shipping production software — from AI models to mobile apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => {
            const c = colorMap[cat.color] || colorMap.blue
            return (
              <motion.article
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="glass glass-hover rounded-2xl p-5"
                aria-label={`${cat.name} skills`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center text-lg shrink-0`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-semibold text-sm ${c.text}`}>{cat.name}</h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className={`skill-tag px-2.5 py-1 rounded-lg text-xs font-medium
                        ${c.bg} ${c.border} border ${c.text} cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="text-slate-500 text-sm font-mono">
            + Always learning. Currently exploring{' '}
            <span className="text-brand-cyan">LangChain</span>,{' '}
            <span className="text-brand-violet">LLM fine-tuning</span>, and{' '}
            <span className="text-brand-blue">MLOps pipelines</span>.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
