import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import usePointerFine from '../hooks/usePointerFine'

// Wraps text/buttons/headings so they drift gently toward the cursor on
// hover (magnetic feel) and pick up a soft glow via the `magnetic` CSS
// class. No-ops on touch/coarse-pointer devices — only real mice trigger it.
export default function Magnetic({ children, as = 'div', strength = 16, className = '', ...rest }) {
  const ref = useRef(null)
  const isFine = usePointerFine()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 240, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 240, damping: 20, mass: 0.4 })

  const handleMove = (e) => {
    if (!isFine) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / (rect.width / 2)) * strength)
    y.set((relY / (rect.height / 2)) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp = motion[as] || motion.div

  return (
    <Comp
      ref={ref}
      className={`magnetic ${className}`}
      style={isFine ? { x: springX, y: springY } : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Comp>
  )
}
