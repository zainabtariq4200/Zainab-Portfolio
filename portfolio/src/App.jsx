import { useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Process from './components/Process'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

export default function App() {
  const [selected, setSelected] = useState(null)
  const { scrollYProgress, scrollY } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 })
  const blobY1 = useTransform(scrollY, [0, 2000], [0, 260])
  const blobY2 = useTransform(scrollY, [0, 2000], [0, -180])

  return (
    <div className="app">
      <CustomCursor />
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      {/* Ambient background blobs — subtle depth behind the glass elements, drifting at their own scroll speed */}
      <motion.div className="ambient-blob" style={{ width: 480, height: 480, top: -120, right: -140, y: blobY1, background: 'radial-gradient(circle, rgba(77,141,251,.35), transparent 70%)' }} />
      <motion.div className="ambient-blob" style={{ width: 420, height: 420, bottom: -160, left: -140, y: blobY2, background: 'radial-gradient(circle, rgba(31,63,115,.4), transparent 70%)' }} />

      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects onSelect={setSelected} />
        <Process />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <AnimatePresence>
        {selected && <ProjectDetail id={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}
