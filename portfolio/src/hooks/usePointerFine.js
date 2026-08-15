import { useEffect, useState } from 'react'

// True only for devices with a real mouse/trackpad (fine pointer + hover
// support). False on touch/coarse-pointer devices, so cursor and magnetic
// effects stay off there and only scroll animations remain active.
export default function usePointerFine() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mq.matches)
    const handler = (e) => setFine(e.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else mq.addListener(handler)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else mq.removeListener(handler)
    }
  }, [])

  return fine
}
