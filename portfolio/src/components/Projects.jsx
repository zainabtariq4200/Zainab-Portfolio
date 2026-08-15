import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { projects } from '../data'
import { staggerContainer, staggerItem, viewportOnce } from '../motionVariants'

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))]

export default function Projects({ onSelect }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = tag === 'All' || p.tags.includes(tag)
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      return matchesTag && matchesQuery
    })
  }, [query, tag])

  return (
    <section id="projects" className="section">
      <Reveal className="section__head" y={16}>
        <h3 className="panel__title magnetic-glow"><ArrowUpRight size={16} /> Selected Work</h3>
        <Magnetic as="a" href="#projects" className="link-more magnetic-glow" strength={10}>View All Projects <ArrowRight size={14} /></Magnetic>
      </Reveal>

      <Reveal y={16}>
        <div className="project-toolbar">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search projects"
          />
          <div className="project-toolbar__tags">
            {allTags.map((t) => (
              <button
                key={t}
                type="button"
                className={`project-toolbar__tag ${tag === t ? 'project-toolbar__tag--active' : ''}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
      >
        {filtered.map((p) => (
          <motion.button
            key={p.id}
            layoutId={`card-${p.id}`}
            className="project-card"
            onClick={() => onSelect(p.id)}
            variants={staggerItem}
            whileHover={{ y: -4 }}
            transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.div layoutId={`card-media-${p.id}`} className="project-card__media">
              <img src={p.image} alt={`${p.name} preview`} className="project-card__img" loading="lazy" />
              <span className="project-card__category">{p.category}</span>
            </motion.div>
            <div className="project-card__body">
              <motion.h4 layoutId={`card-title-${p.id}`} className="project-card__name">{p.name}</motion.h4>
              <p className="project-card__desc">{p.tagline}</p>
              <div className="project-card__foot">
                <div className="project-card__tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <span className="project-card__go"><ArrowRight size={15} /></span>
              </div>
            </div>
          </motion.button>
        ))}
        {filtered.length === 0 && (
          <p className="project-grid__empty">No projects match that search — try a different term or tag.</p>
        )}
      </motion.div>
    </section>
  )
}
