import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../motionVariants'

// Reusable scroll-triggered reveal wrapper — fade + slight upward motion,
// triggers once as the element enters the viewport. Use `variants` to
// override (e.g. fadeLeft/fadeRight/scaleIn) and `as` for the wrapper tag.
export default function ScrollReveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = 'div',
  ...rest
}) {
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
