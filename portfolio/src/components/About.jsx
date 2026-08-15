import { motion } from 'framer-motion'
import { User, MapPin, Mail, CircleDot, ArrowRight } from 'lucide-react'
import { skills } from '../data'
import ScrollReveal from './ScrollReveal'
import Magnetic from './Magnetic'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '../motionVariants'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="split-grid">
        <ScrollReveal className="panel" variants={fadeLeft}>
          <h3 className="panel__title magnetic-glow"><User size={16} /> About Me</h3>
          <p className="panel__text">
            I'm a Software Engineering graduate focused on building fast, functional
            websites by directing AI-assisted development — I design the structure,
            guide implementation, and manually test every feature before it ships.
          </p>
          <div className="about-grid">
            <div>
              <span className="about-grid__label">Name</span>
              <Magnetic as="span" className="about-grid__value magnetic-glow" strength={4}>Zainab Tariq</Magnetic>
            </div>
            <div>
              <span className="about-grid__label"><MapPin size={12} /> Location</span>
              <Magnetic as="span" className="about-grid__value magnetic-glow" strength={4}>Lahore, Pakistan</Magnetic>
            </div>
            <div>
              <span className="about-grid__label"><Mail size={12} /> Email</span>
              <Magnetic as="span" className="about-grid__value magnetic-glow" strength={4}>zainabtariq4200@gmail.com</Magnetic>
            </div>
            <div>
              <span className="about-grid__label"><CircleDot size={12} /> Availability</span>
              <Magnetic as="span" className="about-grid__value about-grid__value--accent magnetic-glow" strength={4}>Open to Work</Magnetic>
            </div>
          </div>
          <Magnetic as="a" href="#contact" className="link-more magnetic-glow" strength={10}>
            More About Me <ArrowRight size={14} />
          </Magnetic>
        </ScrollReveal>

        <ScrollReveal className="panel" variants={fadeRight} delay={0.1}>
          <h3 className="panel__title magnetic-glow"><span className="panel__code">{'</>'}</span> My Expertise</h3>
          <motion.div
            className="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2, margin: '-60px' }}
            variants={staggerContainer(0.1, 0.1)}
          >
            {skills.map((s) => (
              <motion.div className="skill-row" key={s.name} variants={fadeUp}>
                {/* Magnetic nested inside — outer motion.div keeps the scroll
                    stagger/slide-up entrance, inner Magnetic owns the hover drift
                    on just the label so the two transforms never fight. */}
                <div className="skill-row__top">
                  <Magnetic as="span" className="magnetic-glow" strength={5}>{s.name}</Magnetic>
                  <span className="skill-row__pct">{s.level}%</span>
                </div>
                <div className="skill-row__track">
                  <motion.div
                    className="skill-row__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
