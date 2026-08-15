import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import usePointerFine from '../hooks/usePointerFine'

// Custom two-part cursor (dot + trailing ring). Only mounts on devices with
// a real mouse; touch devices keep their native behaviour and get nothing
// here (scroll animations still run everywhere).
export default function CustomCursor() {
  const isFine = usePointerFine()
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 })
  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.2 })
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.2 })

  useEffect(() => {
    if (!isFine) {
      document.body.classList.remove('cursor-none')
      return
    }
    document.body.classList.add('cursor-none')

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
    }
    const over = (e) => {
      const el = e.target.closest?.('a, button, input, textarea, [role="button"], h1, h2, h3, h4, .cursor-hover, .magnetic')
      setHovering(!!el)
    }
    const leaveWindow = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leaveWindow)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leaveWindow)
      document.body.classList.remove('cursor-none')
    }
  }, [isFine])

  if (!isFine) return null

  return (
    <>
      <motion.div
        className={`custom-cursor-ring ${hovering ? 'custom-cursor-ring--hover' : ''}`}
        style={{ left: ringX, top: ringY, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className={`custom-cursor-dot ${hovering ? 'custom-cursor-dot--hover' : ''}`}
        style={{ left: dotX, top: dotY, opacity: visible ? 1 : 0 }}
      />
    </>
  )
}
