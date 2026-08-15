import { motion } from 'framer-motion'
import { X, ExternalLink, CheckCircle2 } from 'lucide-react'
import { projects } from '../data'
import Magnetic from './Magnetic'

export default function ProjectDetail({ id, onClose }) {
  const p = projects.find((proj) => proj.id === id)
  if (!p) return null

  return (
    <motion.div
      className="detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${p.id}`}
        className="detail-card"
        onClick={(e) => e.stopPropagation()}
        transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      >
        <motion.div layoutId={`card-media-${p.id}`} className="detail-card__media">
          <img src={p.image} alt={`${p.name} preview`} className="project-card__img" loading="lazy" />
          <span className="project-card__category">{p.category}</span>
          <button className="detail-card__close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </motion.div>

        <motion.div
          className="detail-card__body"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.h3 layoutId={`card-title-${p.id}`} className="detail-card__name">{p.name}</motion.h3>
          <p className="detail-card__tagline">{p.tagline}</p>

          <div className="detail-card__tags">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>

          <p className="detail-card__overview">{p.overview}</p>

          <div className="detail-card__role">
            <span className="about-grid__label">Role</span>
            <p>{p.role}</p>
          </div>

          <ul className="detail-card__features">
            {p.features.map((f) => (
              <li key={f}><CheckCircle2 size={15} /> {f}</li>
            ))}
          </ul>

          <Magnetic as="a" href={p.link} target="_blank" rel="noreferrer" className="btn btn--primary" strength={10}>
            Visit Live Site <ExternalLink size={15} />
          </Magnetic>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
