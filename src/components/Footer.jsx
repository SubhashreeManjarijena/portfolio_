import { navLinks, profile } from '../data'
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-4">{navLinks.map((l) => <li key={l}><a className="hover:text-a1" href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
        <a href="#home" className="btn !py-2">Back to top</a>
      </div>
    </footer>
  )
}
