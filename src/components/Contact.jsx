import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import Reveal from './Reveal'
import { profile } from '../data'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

export default function Contact() {
  const [status, setStatus] = useState('')
  async function onSubmit(e) {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.target))
    if (!FORM_ID) { // mailto fallback
      const body = encodeURIComponent(`${f.message}\n\n${f.name} (${f.email})`)
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject || 'Portfolio enquiry')}&body=${body}`
      return setStatus('Opening your email app…')
    }
    setStatus('Sending…')
    try {
      const r = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
      if (!r.ok) throw new Error()
      e.target.reset(); setStatus('Message sent. I will reply soon.')
    } catch { setStatus(`Could not send. Please email ${profile.email} directly.`) }
  }
  const info = [[FaEnvelope, profile.email, `mailto:${profile.email}`], [FaPhone, `${profile.phone} (call or WhatsApp)`, profile.phoneTel], [FaMapMarkerAlt, profile.location, profile.mapUrl]]
  return (
    <section id="contact" className="section">
      <Reveal><h2 className="title">Contact</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-8">
        <Reveal>
          <p className="text-muted mb-6 max-w-md">Have a project, role or question? Send a message and I will get back to you.</p>
          <ul className="space-y-4">
            {info.map(([Icon, text, href]) => (
              <li key={text} className="flex items-center gap-3"><Icon className="text-a1" aria-hidden="true" />{href ? <a className="hover:text-a1" href={href}>{text}</a> : text}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={profile.phoneTel} className="btn btn-primary"><FaPhone /> Call me</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="btn" style={{ background: '#25d366', color: '#fff', borderColor: 'transparent' }}><FaWhatsapp /> WhatsApp</a>
          </div>
          <div className="flex gap-4 text-2xl mt-6">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-a1"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-a1"><FaLinkedin /></a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card space-y-4">
            <label className="block text-sm">Name<input name="name" required className="input mt-1" autoComplete="name" /></label>
            <label className="block text-sm">Email<input name="email" type="email" required className="input mt-1" autoComplete="email" /></label>
            <label className="block text-sm">Subject<input name="subject" className="input mt-1" /></label>
            <label className="block text-sm">Message<textarea name="message" rows="4" required className="input mt-1" /></label>
            <button className="btn btn-primary" type="submit">Send message</button>
            <p role="status" className="text-sm text-muted">{status}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
