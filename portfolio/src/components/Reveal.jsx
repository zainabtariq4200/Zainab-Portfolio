import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-linked reveal: opacity/translate driven continuously by scroll
// progress through the viewport, not a discrete fade-on-mount trigger.
export default function Reveal({ children, className, y = 36, as = 'div' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.5'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0])

  const Comp = motion[as]
  return (
    <Comp ref={ref} className={className} style={{ opacity, y: translateY }}>
      {children}
    </Comp>
  )
}
