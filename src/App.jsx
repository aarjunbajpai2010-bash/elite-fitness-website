import Navigation from './components/Navigation.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import EnquiryForm from './components/EnquiryForm.jsx'
import { siteContent } from './data/siteContent.js'

const heroImage = "url('/images/gym-hero.jpg'), url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=90')"
const membershipImage = "url('/images/gym-membership.jpg'), url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1600&q=85')"

function Photo({ src, fallback, alt, ...props }) {
  return <img src={src} alt={alt} onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = fallback }} {...props} />
}

function App() {
  return <main id="top">
    <Navigation />
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" style={{ backgroundImage: heroImage }} role="img" aria-label="ELITE FITNESS gym interior" />
      <div className="hero-rule" />
      <p className="hero-kicker">EST. [YEAR TO BE VERIFIED] <span>â€¢</span> [CITY TO BE VERIFIED]</p>
      <h1 id="hero-title"><span>Train hard.</span><span>Be <em>elite.</em></span></h1>
      <div className="hero-bottom"><a href="#enquire" className="round-cta">Begin<br />your work <b>â†˜</b></a><p>Discipline isnâ€™t a mood.<br />Itâ€™s a practice.</p></div>
      <span className="hero-side">ELITE FITNESS / 01</span>
    </section>

    <section className="intro section-shell" id="about">
      <div className="intro-meta"><span>01</span><span>Our standard</span></div>
      <div className="intro-copy"><p className="display-copy">A <i>serious</i> room for people who take their training seriously.</p><p className="body-copy">No spectacle. No shortcuts. Just the space, the tools and the standard to show up again tomorrow.</p></div>
      <div className="intro-stamp">ELITE<br /><span>TRAINING<br />STANDARD</span></div>
    </section>

    <section className="facilities" id="facilities">
      <div className="section-shell"><SectionHeading number="02" title={<>The <i>space</i></>} /><p className="section-lede">Purpose-built for focused training. Every surface has a job to do.</p></div>
      <div className="facility-grid">
        {siteContent.facilities.map((facility, i) => <article className={`facility facility-${i + 1}`} key={facility.title}>
          <Photo src={facility.image} fallback={facility.fallback} alt="ELITE FITNESS gym interior" loading="lazy" />
          <div className="facility-content"><span>{facility.eyebrow}</span><h3>{facility.title}</h3><p>{facility.description}</p></div>
        </article>)}
        <div className="steel-callout"><span>Training conditions</span><strong>ALL<br />GAS.<br />NO<br />NOISE.</strong><small>Replaceable photography<br />and unverified details.</small></div>
      </div>
    </section>

    <section className="programmes section-shell" id="programmes"><SectionHeading number="03" title={<>Find your <i>edge</i></>} />
      <div className="programme-list">{siteContent.programmes.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#enquire" aria-label={`Enquire about ${title}`}>â†—</a></article>)}</div>
    </section>

    <section className="membership" id="membership"><div className="membership-image" style={{ backgroundImage: membershipImage }} role="img" aria-label="ELITE FITNESS training floor"><div className="red-square" /></div><div className="membership-copy"><span>04 / Membership</span><h2>Make a<br /><i>commitment.</i></h2><p>Simple membership. Serious training.</p><div className="rates-list">{siteContent.rates.map(([duration, price]) => <div key={duration}><span>{duration}</span><strong>{price}</strong></div>)}</div><a className="membership-whatsapp" href={`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(siteContent.whatsappMessage)}`} target="_blank" rel="noreferrer">Ask on WhatsApp <b>â†—</b></a></div></section>

    <section className="team section-shell" id="team"><SectionHeading number="05" title={<>The <i>people</i></>} /><div className="team-grid"><article className="owner-card"><div className="portrait-placeholder"><span>Owner photo<br />to be added</span></div><div><span>Owner / Founder</span><h3>Profile coming soon.</h3><p>Owner biography, qualifications and training experience will be added after approval.</p><a href={siteContent.socials.ownerInstagram} target="_blank" rel="noreferrer">Follow the owner on Instagram â†—</a></div></article><article className="trainer-template"><span>Trainer profile template</span><h3>Your coach.<br /><i>Your standard.</i></h3><dl><div><dt>Photo</dt><dd>To be added</dd></div><div><dt>Name & role</dt><dd>To be confirmed</dd></div><div><dt>Qualifications</dt><dd>To be confirmed</dd></div><div><dt>Experience</dt><dd>To be confirmed</dd></div></dl></article></div></section>

    <section className="enquiry-band section-shell" id="enquire"><div><span>06 / Enquiries</span><h2>Start the<br /><i>conversation.</i></h2></div><EnquiryForm /></section>

    <section className="gallery section-shell" id="gallery"><SectionHeading number="07" title={<>The <i>space</i></>} /><p className="gallery-caption">The ELITE FITNESS training floor. Add supplied gym photos to <code>public/images</code> using the names listed in the handoff notes.</p><div className="gallery-grid">{siteContent.gallery.map((image, i) => <figure key={image.src} className={`gallery-${i + 1}`}><Photo src={image.src} fallback={image.fallback} alt={image.alt} loading="lazy" /></figure>)}</div></section>

    <section className="contact" id="contact"><div className="contact-map"><iframe title="ELITE FITNESS location" src={siteContent.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="directions-button" href={siteContent.directionsUrl} target="_blank" rel="noreferrer">Get directions <b>â†—</b></a></div><div className="contact-details"><span>08 / Find us</span><h2>Come in.<br /><i>Clock on.</i></h2><dl><div><dt>Address</dt><dd>{siteContent.contact.address}</dd></div><div><dt>Hours</dt><dd>{siteContent.contact.hours}</dd></div><div><dt>Call</dt><dd><a href={`tel:${siteContent.phone}`}>{siteContent.contact.phone}</a></dd></div><div><dt>WhatsApp</dt><dd><a href={`https://wa.me/${siteContent.whatsapp}`} target="_blank" rel="noreferrer">Chat with ELITE FITNESS â†—</a></dd></div></dl></div></section>
    <footer><a className="brand" href="#top">ELITE<span>Â®</span></a><p>TRAIN HARD. BE ELITE.</p><a className="footer-instagram" href={siteContent.socials.instagram} target="_blank" rel="noreferrer">Instagram â†—</a><span>Â© {new Date().getFullYear()} ELITE FITNESS.</span><a href="#top" aria-label="Back to top">â†‘</a></footer>
  </main>
}
export default App
