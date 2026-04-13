import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import Skills        from '@/components/Skills'
import Experience    from '@/components/Experience'
import Projects      from '@/components/Projects'
import Certificates  from '@/components/Certificates'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import BackToTop     from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="relative dot-grid min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Certificates />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
