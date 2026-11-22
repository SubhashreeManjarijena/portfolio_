import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Reveal from './Reveal'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal><h2 className="title">Projects</h2></Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08} className="h-full">
            <article className="card h-full flex flex-col">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-muted text-sm mt-2 flex-1">{p.desc}</p>
              <ul className="flex flex-wrap gap-2 mt-4">{p.tech.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
              <div className="flex gap-3 mt-5">
                <a className="btn !py-2" href={p.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a className="btn !py-2" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
