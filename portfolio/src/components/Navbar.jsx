import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic'

const LINKS = ['Home', 'About', 'Skills', 'Projects', 'Process', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Magnetic as="a" href="#home" className="navbar__brand magnetic-glow" strength={10}>
          <span className="navbar__mark">ZT</span>
          Zainab Tariq
        </Magnetic>
        <nav className="navbar__links">
          {LINKS.map((l) => (
            <Magnetic
              as="a"
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`navbar__link magnetic-glow ${active === l ? 'navbar__link--active' : ''}`}
              strength={10}
              onClick={() => setActive(l)}
            >
              {l}
            </Magnetic>
          ))}
        </nav>
        <Magnetic as="a" href="#contact" className="navbar__cta magnetic-glow" strength={10}>
          <motion.span whileHover={{ x: 2 }}>Let's Talk</motion.span>
        </Magnetic>
      </div>
    </header>
  )
}
