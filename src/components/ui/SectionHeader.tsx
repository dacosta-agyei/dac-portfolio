'use client'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

// ── SectionHeader ──────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label:        string
  title:        string
  description?: string
  center?:      boolean
}

export function SectionHeader({ label, title, description, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={clsx('mb-14', center && 'text-center')}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

// ── AnimatedSection ────────────────────────────────────────────────────────
interface AnimatedSectionProps {
  children:  React.ReactNode
  delay?:    number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function AnimatedSection({
  children, delay = 0, className = '', direction = 'up',
}: AnimatedSectionProps) {
  const variants = {
    up:    { initial: { opacity: 0, y: 40 },     animate: { opacity: 1, y: 0 } },
    left:  { initial: { opacity: 0, x: -40 },    animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 40 },     animate: { opacity: 1, x: 0 } },
    none:  { initial: { opacity: 0 },             animate: { opacity: 1 } },
  }
  const { initial, animate } = variants[direction]

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
