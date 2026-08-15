import Magnetic from './Magnetic'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Magnetic as="a" href="#home" className="navbar__brand magnetic-glow" strength={10}>
          <span className="navbar__mark">ZT</span>
          Zainab Tariq
        </Magnetic>
        <p className="footer__copy">© 2026 Zainab Tariq. All rights reserved.</p>
        <nav className="footer__links">
          <Magnetic as="a" href="#home" className="magnetic-glow" strength={8}>Home</Magnetic>
          <Magnetic as="a" href="#about" className="magnetic-glow" strength={8}>About</Magnetic>
          <Magnetic as="a" href="#projects" className="magnetic-glow" strength={8}>Projects</Magnetic>
          <Magnetic as="a" href="#contact" className="magnetic-glow" strength={8}>Contact</Magnetic>
        </nav>
      </div>
    </footer>
  )
}
