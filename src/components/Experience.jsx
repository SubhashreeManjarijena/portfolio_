import Reveal from './Reveal'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal><h2 className="title">Experience</h2></Reveal>
      <ol className="relative border-l-2 border-line ml-3 space-y-10">
        {experience.map((e) => (
          <li key={e.title} className="pl-8 relative">
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-a1 ring-4 ring-bg" aria-hidden="true" />
            <Reveal>
              <div className="card">
                <div className="flex flex-wrap justify-between gap-2">
                  <h3 className="font-bold text-xl">{e.title}</h3>
                  <span className="badge">{e.period}</span>
                </div>
                <p className="text-a1 font-medium mt-1">{e.company} · {e.place}</p>
                <ul className="mt-4 space-y-2 text-muted list-disc pl-5">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
