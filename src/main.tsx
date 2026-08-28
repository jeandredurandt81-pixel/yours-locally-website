import React, { useState } from 'react'
import { ArrowRight, Check, Clock3, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const images = {
  exterior: '/images/Screenshot_2026-08-28_110543.png',
  interior: '/images/Screenshot_2026-08-28_110836.png',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 3200)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="top-note"><span>Private offices & flexible workspaces</span><span className="top-note-dot">•</span><span>11 Westbourne Road, Gqeberha</span></div>
      <header className="header">
        <a className="brand" href="#top" aria-label="The Co-Op home"><span className="brand-mark">+</span><span><strong>the co-op</strong><small>Your space for good business</small></span></a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#spaces" onClick={closeMenu}>Spaces</a>
          <a href="#why" onClick={closeMenu}>Why The Co-Op</a>
          <a href="#location" onClick={closeMenu}>Location</a>
          <a className="nav-cta" href="#enquire" onClick={closeMenu}>Book a viewing <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Work well. Together.</p>
            <h1>A considered place for <em>good business.</em></h1>
            <p className="hero-text">The Co-Op is a characterful office space in the heart of Gqeberha — made for focused work, meaningful meetings and businesses with somewhere to go.</p>
            <div className="hero-buttons"><a className="button button-dark" href="#spaces">Explore the spaces <ArrowRight size={16} /></a><a className="text-link" href="#enquire">Arrange a viewing <span>↗</span></a></div>
            <div className="hero-details"><span><Check size={15} /> Ready-to-work offices</span><span><Check size={15} /> Central location</span></div>
          </div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src={images.exterior} alt="The Co-Op office building at 11 Westbourne Road" /><div className="hero-badge"><span>Est.</span><strong>GQ</strong><small>Good work<br />starts here</small></div></div><div className="hero-caption"><span>11 Westbourne Road</span><span>Gqeberha Central</span></div></div>
        </section>

        <section className="marquee" aria-label="The Co-Op highlights"><div className="marquee-track"><span>Room to think</span><b>•</b><span>Space to grow</span><b>•</b><span>People to meet</span><b>•</b><span>Room to think</span><b>•</b><span>Space to grow</span><b>•</b></div></section>

        <section className="spaces section-pad" id="spaces">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> Find your fit</p><h2>Space that<br /><em>works for you.</em></h2></div><p className="section-intro">A professional address with the warmth of a shared space. Choose the setup that suits your next chapter.</p></div>
          <div className="space-grid"><article className="space-card featured"><div className="space-number">01</div><h3>Private offices</h3><p>Quiet, beautifully appointed rooms for teams who need focus, privacy and a place to make things happen.</p><a href="#enquire" className="card-link">Find your office <ArrowRight size={16} /></a></article><article className="space-card"><div className="space-number">02</div><h3>Meeting rooms</h3><p>Polished, welcoming spaces for client meetings, workshops and those conversations that deserve a little more room.</p><a href="#enquire" className="card-link">Book a room <ArrowRight size={16} /></a></article><article className="space-card"><div className="space-number">03</div><h3>Flexible desks</h3><p>A professional base when you need it, with the freedom to work your way and meet people doing the same.</p><a href="#enquire" className="card-link">Ask about availability <ArrowRight size={16} /></a></article></div>
        </section>

        <section className="why section-pad" id="why"><div className="why-image"><img src={images.interior} alt="Warm, light-filled shared office interior at The Co-Op" /><div className="image-note">A place to do<br /><em>your best work.</em></div></div><div className="why-copy"><p className="eyebrow"><span className="eyebrow-line" /> More than four walls</p><h2>Professional,<br /><em>with personality.</em></h2><p>The Co-Op brings together the things that make a workday better: a calm, characterful setting, practical spaces and a community of thoughtful people.</p><p>Come for the address. Stay for the energy, the connections and the feeling that your business belongs here.</p><a className="text-link" href="#enquire">Get to know The Co-Op <span>↗</span></a><div className="quote"><span>“</span><p>It's not just an office. It's a place where good things get done.</p></div></div></section>

        <section className="location section-pad" id="location"><div className="location-copy"><p className="eyebrow"><span className="eyebrow-line" /> Come by</p><h2>Find your<br /><em>way here.</em></h2><p>At 11 Westbourne Road in Gqeberha Central, The Co-Op is easy to reach and ready to welcome you.</p><div className="location-details"><div><MapPin size={18} /><span>11 Westbourne Rd<br />Gqeberha Central, 6001</span></div><div><Phone size={18} /><a href="tel:0418112478">041 811 2478</a></div><div><Clock3 size={18} /><span>Mon–Fri, 8am–4:30pm<br />Closed weekends</span></div></div><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=11+Westbourne+Road+Gqeberha+Central" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="location-panel"><span className="panel-label">THE CO-OP / 01</span><div className="panel-cross">+</div><p>Good work<br /><em>has a home.</em></p><span>Westbourne Road<br />Gqeberha Central</span></div></section>

        <section className="enquire" id="enquire"><div><p className="eyebrow"><span className="eyebrow-line" /> Start a conversation</p><h2>Ready to find<br /><em>your space?</em></h2></div><div className="enquire-form"><p>Tell us a little about what you need and we’ll get back to arrange a viewing.</p><form onSubmit={handleSubmit}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit" aria-label="Send enquiry"><Mail size={18} /></button></form><small>Or call us on <a href="tel:0418112478">041 811 2478</a></small></div></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">+</span><span><strong>the co-op</strong><small>Your space for good business</small></span></a><p>A better place to work.</p><div className="footer-links"><a href="#spaces">Spaces</a><a href="#why">Why The Co-Op</a><a href="#location">Location</a></div><span className="copyright">© 2026 The Co-Op</span></footer>
      {showToast && <div className="toast"><Check size={16} /> Thanks — we’ll be in touch soon.</div>}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
