import { useState } from 'react'
import { siteContent } from '../data/siteContent.js'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Elite Fitness home"><img src="/images/elite-logo.jpg" alt="" />ELITE<span>Â®</span></a>
    <button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
      <span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
    </button>
    <nav id="site-nav" className={open ? 'is-open' : ''} aria-label="Primary navigation">
      {siteContent.navigation.map((item, index) => <a key={item.href} href={item.href} onClick={close}><sup>0{index + 1}</sup>{item.label}</a>)}
      <a className="nav-call" href={`tel:${siteContent.phone}`} onClick={close}>Call now <span>â†—</span></a>
      <a className="nav-cta" href={`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(siteContent.whatsappMessage)}`} target="_blank" rel="noreferrer" onClick={close}>WhatsApp <span>â†—</span></a>
    </nav>
  </header>
}
