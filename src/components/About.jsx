import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from './Reveal'
import { profile, stats } from '../data'

function Counter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix } })
    return () => c.stop()
  }, [inView, value, suffix, decimals])
  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal><h2 className="title">About me</h2></Reveal>
      <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
        <Reveal><img src={profile.photo} alt={`${profile.name} at work`} loading="lazy" className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover object-top border-2 border-a1" style={{ boxShadow: '0 0 40px -12px var(--a1)' }} /></Reveal>
        <Reveal delay={0.1}><div className="space-y-4 text-muted leading-relaxed max-w-2xl">{profile.bio.map((p) => <p key={p}>{p}</p>)}</div></Reveal>
      </div>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card text-center">
              <div className="font-display text-4xl font-extrabold grad"><Counter {...s} /></div>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
