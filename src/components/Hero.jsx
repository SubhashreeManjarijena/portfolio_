import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { profile } from '../data'

function useTyping(text) {
  const [n, setN] = useState(0)
  const [del, setDel] = useState(false)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return setN(text.length)
    const t = setTimeout(() => {
      if (!del && n === text.length) return setDel(true)
      if (del && n === 0) return setDel(false)
      setN(n + (del ? -1 : 1))
    }, !del && n === text.length ? 1800 : del ? 25 : 60)
    return () => clearTimeout(t)
  }, [n, del, text])
  return text.slice(0, n)
}

export default function Hero() {
  const typed = useTyping(profile.typing)
  const socials = [[FaGithub, profile.github, 'GitHub'], [FaLinkedin, profile.linkedin, 'LinkedIn'], [FaEnvelope, `mailto:${profile.email}`, 'Email']]
  return (
    <section id="home" className="hero-bg pt-16">
      <div className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-muted mb-2">Hi, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"><span className="grad">{profile.name}</span></h1>
          <p className="mt-5 text-lg sm:text-xl font-medium min-h-[2lh]" aria-label={profile.typing}>
            <span aria-hidden="true">{typed}<span className="animate-pulse text-a1">|</span></span>
          </p>
          <p className="mt-4 text-muted max-w-xl">{profile.pitch}</p>
          <a href={profile.mapUrl} target="_blank" rel="noreferrer" className="badge inline-flex items-center gap-2 mt-4 !text-sm !px-3 !py-1 hover:text-a1"><FaMapMarkerAlt className="text-a1" aria-hidden="true" /> {profile.locationShort}</a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
          </div>
          <div className="mt-8 flex gap-4 text-2xl">
            {socials.map(([Icon, href, label]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label} className="text-muted hover:text-a1 transition"><Icon /></a>
            ))}
          </div>
        </motion.div>
        <motion.div className="justify-self-center" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="ring">
            {["Django","React","AWS","Docker"].map((t,i)=><span key={t} className={`chip c${i+1}`} style={{animationDelay:`${-i}s`}}>{t}</span>)}
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover object-top border-4 border-bg" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
