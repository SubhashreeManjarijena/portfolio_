import { motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

export default function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress, transformOrigin: '0 0', background: 'linear-gradient(90deg,var(--a1),var(--a2))' }} className="fixed top-0 inset-x-0 h-[3px] z-[60]" />
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] btn btn-primary">Skip to content</a>
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Experience /><Projects /><Education /><Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
