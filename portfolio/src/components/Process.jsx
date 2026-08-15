import { motion } from 'framer-motion'
import { Workflow } from 'lucide-react'
import { processSteps } from '../data'
import ScrollReveal from './ScrollReveal'
import Magnetic from './Magnetic'
import { fadeUp, staggerContainer } from '../motionVariants'

export default function Process() {
  return (
    <section id="process" className="section">
      <ScrollReveal as="h3" className="panel__title magnetic-glow"><Workflow size={16} /> My Work Process</ScrollReveal>
      <motion.div
        className="process"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15, margin: '-60px' }}
        variants={staggerContainer(0.1)}
      >
        <div className="process__line" />
        {processSteps.map((s) => (
          <motion.div className="process__step" key={s.num} variants={fadeUp}>
            {/* Nested Magnetic: outer motion.div owns the stagger entrance,
                inner Magnetic owns the hover drift/glow on the circle itself. */}
            <Magnetic as="div" className="process__circle magnetic-glow-box" strength={10}>{s.num}</Magnetic>
            <Magnetic as="h4" className="magnetic-glow" strength={5}>{s.title}</Magnetic>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
