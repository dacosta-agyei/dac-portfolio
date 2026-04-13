'use client'
import { motion } from 'framer-motion'
import { ExternalLink, ShieldCheck, Clock } from 'lucide-react'
import { certifications } from '@/lib/data'
import { SectionHeader } from './ui/SectionHeader'

const colorMap: Record<string, { ring: string; icon: string; badge: string }> = {
  blue:   { ring: 'border-blue-500/30',   icon: 'bg-blue-500/10 text-blue-400',   badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  violet: { ring: 'border-violet-500/30', icon: 'bg-violet-500/10 text-violet-400',badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
  cyan:   { ring: 'border-cyan-500/30',   icon: 'bg-cyan-500/10 text-cyan-400',   badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  pink:   { ring: 'border-pink-500/30',   icon: 'bg-pink-500/10 text-pink-400',   badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  green:  { ring: 'border-emerald-500/30',icon: 'bg-emerald-500/10 text-emerald-400',badge:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'},
  orange: { ring: 'border-orange-500/30', icon: 'bg-orange-500/10 text-orange-400',badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  teal:   { ring: 'border-teal-500/30',   icon: 'bg-teal-500/10 text-teal-400',   badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-24 px-6"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Credentials & Certificates"
          description="Verified qualifications from globally recognised institutions — from Andrew Ng's DeepLearning.AI to Google, Duke, and Michigan."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.blue
            const isVerified = !!cert.url

            return (
              <motion.article
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`cert-card glass rounded-2xl p-5 flex flex-col gap-4 border ${c.ring}`}
                aria-label={`${cert.name} from ${cert.issuer}`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center text-xl shrink-0`}>
                    {cert.icon}
                  </div>
                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${isVerified ? c.badge : 'bg-slate-700/50 text-slate-400 border-slate-600/30'}`}>
                    {isVerified
                      ? <><ShieldCheck size={10} /> Verified</>
                      : <><Clock size={10} /> Pending</>
                    }
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm leading-snug">{cert.name}</h3>
                  <p className="text-slate-400 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-slate-600 text-xs mt-0.5 font-mono">{cert.year}</p>
                </div>

                {/* CTA */}
                <div className="pt-3 border-t border-white/5">
                  {isVerified ? (
                    <a
                      href={cert.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-brand-blue hover:text-blue-300 transition-colors group"
                      aria-label={`Verify ${cert.name} credential`}
                    >
                      <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Verify Credential
                    </a>
                  ) : (
                    <span className="text-xs text-slate-600 italic">
                      {cert.note}
                    </span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-600 text-sm mt-10 font-mono"
        >
          * All certificates are available for verification upon request.
        </motion.p>
      </div>
    </section>
  )
}
