import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, AtSign, ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react'
import './styles.css'

const images = {
  hero: '/images/Screenshot_2026-08-28_100902.png',
  ceramics: '/images/Screenshot_2026-08-28_100958.png',
  store: '/images/Screenshot_2026-08-28_101105.png',
  gift: '/images/Screenshot_2026-08-28_101204.png',
  wrapping: 'https://images.pexels.com/photos/6333158/pexels-photo-6333158.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  flatlay: 'https://images.pexels.com/photos/34972177/pexels-photo-34972177.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleGiftClick = () => {
    setShowToast(true)
    window.setTimeout(() => setShowToast(false), 3200)
  }

  return (
    <div className="site-shell">
      <div className="top-note"><span>Free local pickup in Gqeberha</span><span className="top-note-dot">✦</span><span>Open today until 4:30pm</span></div>
      <header className="header">
        <a className="brand" href="#top" aria-label="Locally Yours home"><img className="brand-logo" src="/mprg.png" alt="Locally Yours" /></a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop <ChevronDown size={14} /></a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#visit" onClick={() => setMenuOpen(false)}>Visit us</a>
        </nav>
        <div className="header-actions"><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Thoughtful things, found locally</p>
            <h1>Give a little<br /><em>more joy.</em></h1>
            <p className="hero-text">A happy little gift shop in the heart of Gqeberha, filled with beautiful finds, good stories and gifts that feel just right.</p>
            <div className="hero-buttons"><a className="button button-dark" href="#shop">Take a look around <ArrowRight size={16} /></a><a className="text-link" href="#visit">Come say hello <span>↗</span></a></div>
            <div className="hero-rating"><div className="stars">★★★★★</div><span>4.9 from 37 happy customers</span></div>
          </div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src={images.hero} alt="Colorful gifts and ceramics displayed in a gift shop" /><div className="hero-sticker">Made<br /><span>with</span><br />feeling <b>✦</b></div></div><div className="hero-caption"><span>Shop 7, Moffett Retail Park</span><span>Eastern Cape, SA</span></div></div>
        </section>

        <section className="marquee" aria-label="Shop highlights"><div className="marquee-track"><span>Gifts with a story</span><b>✦</b><span>Small joys, big smiles</span><b>✦</b><span>Locally loved</span><b>✦</b><span>Gifts with a story</span><b>✦</b><span>Small joys, big smiles</span><b>✦</b></div></section>

        <section className="gallery section-pad" id="shop">
          <div className="section-heading"><div><p className="eyebrow"><span className="eyebrow-line" /> A little look around</p><h2>Come peek<br /><em>inside.</em></h2></div><p className="section-intro">A glimpse of the lovely things you'll find on our shelves — ceramics, little treasures and gifts waiting to be discovered.</p></div>
          <div className="gallery-grid"><figure className="gallery-item gallery-item-tall"><img src={images.ceramics} alt="Handmade ceramic vases on display" /></figure><figure className="gallery-item"><img src={images.gift} alt="A beautifully wrapped gift box" /></figure><figure className="gallery-item"><img src={images.flatlay} alt="Cheerful gift card and treats" /></figure></div>
        </section>

        <section className="story section-pad" id="story"><div className="story-image"><img src={images.store} alt="Warm and eclectic gift shop interior" /><div className="image-note">A place for<br /><em>little discoveries.</em></div></div><div className="story-copy"><p className="eyebrow"><span className="eyebrow-line" /> About Locally Yours</p><h2>Good gifts.<br /><em>Good people.</em></h2><p>We believe the best gifts are the ones that say, “I saw this and thought of you.” So we fill our shelves with clever, beautiful and joyfully unexpected things from makers near and far.</p><p>Pop in for a browse, stay for the good energy. We’ll help you find something lovely — even if you’re not quite sure what you’re looking for yet.</p><a className="text-link" href="#visit">Read our story <span>↗</span></a><div className="story-signature">L<span>Y</span></div></div></section>

        <section className="visit section-pad" id="visit"><div className="visit-copy"><p className="eyebrow"><span className="eyebrow-line" /> Come find us</p><h2>See you<br /><em>soon?</em></h2><p>We’re tucked inside Moffett Retail Park, waiting with a smile and plenty of lovely things.</p><div className="visit-details"><div><MapPin size={18} /><span>Shop 7, Moffett Retail Park<br />William Moffett Expy, Fairview<br />Gqeberha, 6070</span></div><div><Phone size={18} /><a href="tel:0827854118">082 785 4118</a></div></div><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Locally+Yours+Shop+7+Moffett+Retail+Park+Gqeberha" target="_blank" rel="noreferrer">Get directions <ArrowRight size={16} /></a></div><div className="visit-photo"><img src={images.wrapping} alt="A gift being carefully wrapped" /><div className="open-pill"><span className="open-dot" /> Open today <b>·</b> Closes 4:30pm</div></div></section>

        <section className="newsletter"><div><p className="eyebrow"><span className="eyebrow-line" /> A little note from us</p><h2>Good things are<br /><em>worth sharing.</em></h2></div><div className="newsletter-form"><p>Join our happy mail for new finds, gifting ideas and the occasional surprise.</p><form onSubmit={(event) => { event.preventDefault(); handleGiftClick() }}><input type="email" placeholder="Your email address" aria-label="Your email address" required /><button type="submit" aria-label="Join newsletter"><ArrowRight size={19} /></button></form><small>We’ll only send the good stuff. Promise.</small></div></section>
      </main>

      <footer className="footer"><a className="brand footer-brand" href="#top"><img className="brand-logo" src="/mprg.png" alt="Locally Yours" /></a><p>Small joys, found locally.</p><div className="footer-links"><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#visit">Visit</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><AtSign size={17} /></a></div><span className="copyright">© 2026 Locally Yours Shop</span></footer>
      {showToast && <div className="toast"><span>✦</span> You’re on the lovely list.</div>}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
