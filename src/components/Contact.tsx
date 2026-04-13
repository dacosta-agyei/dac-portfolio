'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'
import { person } from '@/lib/data'
import { SectionHeader, AnimatedSection } from './ui/SectionHeader'

type Status = 'idle' | 'sending' | 'success' | 'error'

const contactDetails = [
  { icon: Mail,          label: 'Email',     value: person.email,    href: `mailto:${person.email}` },
  { icon: Phone,         label: 'Phone',     value: person.phone,    href: `tel:${person.phone.replace(/\s/g,'')}` },
  { icon: MessageCircle, label: 'WhatsApp',  value: 'Chat on WhatsApp', href: person.whatsapp },
  { icon: Linkedin,      label: 'LinkedIn',  value: 'dacosta-agyei', href: person.linkedin },
  { icon: Github,        label: 'GitHub',    value: 'dacosta-agyei', href: person.github },
]

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)

    try {
      // Using Formspree — replace YOUR_FORM_ID with your actual Formspree form ID
      // Sign up free at https://formspree.io to get an ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      // Fallback: open mail client
      const name    = data.get('name')
      const message = data.get('message')
      window.open(`mailto:${person.email}?subject=Hire Inquiry from ${name}&body=${message}`)
      setStatus('success')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Hire Me"
          title="Let's Work Together"
          description="Looking for an AI Engineer or Full-Stack Developer for your remote team? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — info */}
          <AnimatedSection direction="left">
            {/* Availability */}
            <div className="glass rounded-2xl p-6 border border-brand-green/20 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green" />
                </div>
                <span className="text-brand-green font-semibold">Available for Remote Work</span>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-brand-blue shrink-0" />
                  Based in Accra, Ghana (UTC+0)
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-brand-blue shrink-0" />
                  Flexible across US, EU &amp; APAC time zones
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-brand-blue shrink-0" />
                  Response within 24 hours
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3 mb-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 glass-hover group"
                  aria-label={`${label}: ${value}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-brand-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-mono">{label}</div>
                    <div className="text-slate-200 text-sm font-medium truncate group-hover:text-brand-blue transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* What I'm looking for */}
            <div className="glass rounded-2xl p-5">
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-3">
                Open to
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-time Remote',
                  'Contract / Freelance',
                  'Consulting / Advisory',
                  'AI / ML Roles',
                  'Full-Stack Roles',
                  'Team Lead Roles',
                ].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-brand-violet/10 text-brand-violet border border-brand-violet/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right — form */}
          <AnimatedSection direction="right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 space-y-5"
              aria-label="Contact form"
              noValidate
            >
              <h3 className="font-display font-bold text-white text-xl">Send a Message</h3>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Your Name <span className="text-brand-blue">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600
                    focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email Address <span className="text-brand-blue">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600
                    focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300
                    focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                >
                  <option value="Full-time Opportunity">Full-time Opportunity</option>
                  <option value="Contract / Freelance">Contract / Freelance</option>
                  <option value="Consulting">Consulting / Advisory</option>
                  <option value="AI/ML Project">AI/ML Project</option>
                  <option value="Full-Stack Project">Full-Stack Project</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Message <span className="text-brand-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role, project, or opportunity..."
                  className="w-full bg-dark-700 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 resize-none
                    focus:outline-none focus:border-brand-blue/60 focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                />
              </div>

              {/* Status message */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-brand-green">
                  <CheckCircle size={16} />
                  Message sent! I&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle size={16} />
                  Something went wrong. Please email me directly.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-slate-600 text-center">
                Or email directly:{' '}
                <a href={`mailto:${person.email}`} className="text-brand-blue hover:underline">
                  {person.email}
                </a>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
