import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { profile } from '../data'
export default function FloatingContact() {
  const base = 'w-12 h-12 rounded-full grid place-items-center text-white text-2xl shadow-lg hover:scale-110 transition'
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className={base} style={{ background: '#25d366' }}><FaWhatsapp /></a>
      <a href={profile.phoneTel} aria-label="Call Subhashree" className={base} style={{ background: 'var(--a1)' }}><FaPhone className="text-xl" /></a>
    </div>
  )
}
