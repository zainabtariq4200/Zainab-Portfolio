import { motion } from 'framer-motion'
import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { Quote, BarChart3 } from 'lucide-react'
import { stats } from '../data'

export default function Stats() {
  return (
    <section className="section">
      <div className="split-grid split-grid--uneven">
        <Reveal className="panel">
          <h3 className="panel__title magnetic-glow"><Quote size={16} /> My Approach</h3>
          <Magnetic as="blockquote" className="quote magnetic-glow" strength={4}>
            "I believe the future of web design is human direction plus AI execution —
            faster delivery without cutting corners on quality. I design the structure,
            direct the build, and personally test every feature before it ships."
          </Magnetic>
          <div className="quote__author">
            <Magnetic as="span" className="quote__author-name magnetic-glow" strength={6}>Zainab Tariq</Magnetic>
            <span className="quote__author-role">AI Web Designer</span>
          </div>
        </Reveal>

        <Reveal className="panel" y={44}>
          <h3 className="panel__title magnetic-glow"><BarChart3 size={16} /> By The Numbers</h3>
          <div className="stat-grid">
            {stats.map((s, i) => (
              <motion.div
                className="stat-grid__item"
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Outer motion.div owns the entrance fade/slide (and the CSS
                    hover glow via .stat-grid__item); inner Magnetic owns the
                    number's hover drift so the two never fight over transform. */}
                <Magnetic as="span" className="stat-grid__value magnetic-glow" strength={6}>{s.value}</Magnetic>
                <span className="stat-grid__label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
