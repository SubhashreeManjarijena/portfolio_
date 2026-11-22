import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import Reveal from './Reveal'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="certifications" className="section">
      <Reveal><h2 className="title">Education & Certifications</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-5">
        <Reveal className="h-full">
          <div className="card h-full">
            <FaGraduationCap className="text-3xl text-a1" aria-hidden="true" />
            <h3 className="font-bold text-lg mt-3">{education.degree}</h3>
            <p className="text-muted">{education.school}</p>
            <div className="flex gap-2 mt-3"><span className="badge">{education.period}</span><span className="badge">{education.score}</span></div>
          </div>
        </Reveal>
        {certifications.map((c) => (
          <Reveal key={c.name} delay={0.1} className="h-full">
            <div className="card h-full">
              <FaCertificate className="text-3xl text-a2" aria-hidden="true" />
              <h3 className="font-bold text-lg mt-3">{c.name}</h3>
              <p className="text-muted">{c.issuer}</p>
              <span className="badge inline-block mt-3">{c.date}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
