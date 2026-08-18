import { useEffect, useState } from 'react'

// True on small/mobile viewports (same breakpoint used for hero__inner
// stacking in App.css) — used to disable scroll-linked parallax there.
export default function useIsMobile() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 940px)')
    setMobile(mq.matches)
    const handler = (e) => setMobile(e.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  return mobile
}