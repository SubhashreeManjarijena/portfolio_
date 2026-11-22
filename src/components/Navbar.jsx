import { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { navLinks, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-line" style={{ background: 'color-mix(in srgb, var(--bg) 80%, transparent)' }}>
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display font-bold text-xl grad">Shree</a>
        <ul className="hidden lg:flex gap-6 text-sm">
          {navLinks.map((l) => <li key={l}><a className="text-muted hover:text-fg transition" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.resume} download className="btn btn-primary hidden sm:inline-flex"><FaDownload /> Download Resume</a>
          <button className="btn !px-3" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <FaSun /> : <FaMoon />}</button>
          <button className="btn !px-3 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </nav>
      {open && (
        <ul className="lg:hidden px-5 pb-4 grid gap-3 border-t border-line pt-3">
          {navLinks.map((l) => <li key={l}><a onClick={() => setOpen(false)} className="block py-1" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          <li><a href={profile.resume} download className="btn btn-primary"><FaDownload /> Download Resume</a></li>
        </ul>
      )}
    </header>
  )
}
