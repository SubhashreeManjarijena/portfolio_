import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><h2 className="title">Skills</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.08}>
            <div className="card h-full">
              <h3 className="font-bold text-lg mb-4">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map(([name, Icon]) => (
                  <li key={name} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-line text-sm hover:border-a1 hover:text-a1 hover:-translate-y-0.5 transition">
                    <Icon aria-hidden="true" className="text-base text-a1" /> {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
