import { motion, useScroll, useTransform } from 'framer-motion'
import profile from '../assets/profile.jpg'
import { Briefcase, Camera, Mail, Code2 } from 'lucide-react'
import Magnetic from './Magnetic'
import useIsMobile from '../hooks/useIsMobile'

const badges = [
  { value: '3', label: 'Live Projects' },
  { value: '20+', label: 'Screens Built' },
  { value: 'AI', label: 'Directed Workflow' },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const isMobile = useIsMobile()
  const visualY = useTransform(scrollY, [0, 600], isMobile ? [0, 0] : [0, 90])
  const visualOpacity = useTransform(scrollY, [0, 500], isMobile ? [1, 1] : [1, 0.35])
  const copyY = useTransform(scrollY, [0, 600], isMobile ? [0, 0] : [0, 40])
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__copy"
          style={{ y: copyY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow"><span className="eyebrow__dot" /> AI Web Designer</span>
          <Magnetic as="h1" className="hero__title magnetic-glow" strength={8}>
            I turn ideas into
            <span className="hero__title--accent"> websites</span>
            <br />
            with agentic AI.
          </Magnetic>
          <p className="hero__desc">
            I'm Zainab Tariq, a Software Engineering graduate who builds fast, polished,
            fully-functional websites for e-commerce, landing pages, and portfolios —
            directing the build with AI, testing every feature myself, and shipping real
            working sites without the agency price tag or the weeks-long wait.
          </p>
          <div className="hero__actions">
            <Magnetic as="a" href="#projects" className="btn btn--primary" strength={12}>View My Work</Magnetic>
            <Magnetic as="a" href="#contact" className="btn btn--ghost" strength={12}>Let's Talk</Magnetic>
          </div>
          <div className="hero__social">
            <a href="https://www.linkedin.com/in/zainab-tariq-74082b416" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={17} /></a>
            <a href="https://www.instagram.com/zntq.dev_" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera size={17} /></a>
            <a href="mailto:zainabtariq4200@gmail.com" aria-label="Email"><Mail size={17} /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          style={{ y: visualY, opacity: visualOpacity }}
          initial={{ scale: 0.94 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero__glow" />
          <Magnetic as="img" src={profile} alt="Portrait of Zainab Tariq" className="hero__photo magnetic-glow-box" strength={8} />

          <Magnetic as="div" className="hero__tagpanel magnetic-glow-box" strength={6}>
            <Code2 size={15} />
            <div>
              <div>Clean Code</div>
              <div>Scalable Solutions</div>
              <div>Pixel Perfect</div>
            </div>
          </Magnetic>

          <div className="hero__badges">
            {badges.map((b, i) => (
              <Magnetic
                key={b.label}
                as="div"
                className="hero__badge magnetic-glow-box"
                strength={7}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              >
                <span className="hero__badge-value">{b.value}</span>
                <span className="hero__badge-label">{b.label}</span>
              </Magnetic>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}