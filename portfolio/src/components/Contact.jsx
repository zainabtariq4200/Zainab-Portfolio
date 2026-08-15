import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { Mail, Briefcase, Camera, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal className="contact-panel">
        <div className="contact-panel__left">
          <h3 className="panel__title magnetic-glow"><Send size={16} /> Let's Build Something Great</h3>
          <p className="panel__text">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="contact-links">
            <Magnetic as="a" href="mailto:zainabtariq4200@gmail.com" className="magnetic-glow" strength={8}>
              <Mail size={15} /> zainabtariq4200@gmail.com
            </Magnetic>
            <Magnetic as="a" href="https://www.linkedin.com/in/zainab-tariq-74082b416" target="_blank" rel="noreferrer" className="magnetic-glow" strength={8}>
              <Briefcase size={15} /> LinkedIn
            </Magnetic>
            <Magnetic as="a" href="https://www.instagram.com/zntq.dev_" target="_blank" rel="noreferrer" className="magnetic-glow" strength={8}>
              <Camera size={15} /> Instagram
            </Magnetic>
            <Magnetic as="span" className="magnetic-glow" strength={6}>
              <MapPin size={15} /> Lahore, Pakistan
            </Magnetic>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.target)
            window.location.href = `mailto:zainabtariq4200@gmail.com?subject=${encodeURIComponent(data.get('subject') || 'Portfolio inquiry')}&body=${encodeURIComponent(`From: ${data.get('name')} (${data.get('email')})\n\n${data.get('message')}`)}`
          }}
        >
          <div className="contact-form__row">
            <input name="name" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
          </div>
          <input name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" rows={4} required />
          <Magnetic as="button" type="submit" className="btn btn--primary" strength={10}>
            Send Message <Send size={15} />
          </Magnetic>
        </form>
      </Reveal>
    </section>
  )
}
