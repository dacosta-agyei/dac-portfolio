'use client'
import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Zap } from 'lucide-react'
import { projects, projectCategories } from '@/lib/data'
import { SectionHeader } from './ui/SectionHeader'
import { clsx } from 'clsx'

const ProjectCard = forwardRef<HTMLElement, { project: typeof projects[0]; index: number }>(function ProjectCard({ project, index }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{   opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
      aria-label={`Project: ${project.title}`}
    >
      {/* Visual header */}
      <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <span className="text-5xl" aria-hidden="true">{project.icon}</span>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={clsx(
            'px-2 py-0.5 rounded-full text-xs font-medium',
            project.status === 'Production'
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
          )}>
            {project.status}
          </span>
        </div>
        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-black/40 text-white/80">
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-lg leading-tight">{project.title}</h3>
        <p className="text-brand-blue text-sm font-medium mt-0.5">{project.subtitle}</p>
        <p className="text-slate-400 text-sm mt-3 leading-relaxed flex-1">{project.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.highlights.map(h => (
            <span key={h} className="flex items-center gap-1 text-xs text-slate-400">
              <Zap size={10} className="text-brand-blue shrink-0" />
              {h}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-mono bg-dark-600 text-slate-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
})

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section
      id="projects"
      className="relative py-24 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Featured Projects"
          title="Work I've Shipped"
          description="Production systems across AI, fintech, marketplaces, and mobile — built end-to-end."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Project category filter">
          {projectCategories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat)}
              className={clsx(
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                active === cat
                  ? 'btn-primary text-white'
                  : 'glass text-slate-400 hover:text-white hover:border-brand-blue/30 border border-transparent'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/dacosta-agyei"
            target="_blank" rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200"
          >
            <Github size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
