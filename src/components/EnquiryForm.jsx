import { useState } from 'react'
import { siteContent } from '../data/siteContent.js'

const initial = { name: '', email: '', interest: '', message: '' }
export default function EnquiryForm() {
  const [values, setValues] = useState(initial)
  const [notice, setNotice] = useState('')
  function submit(event) {
    event.preventDefault()
    if (!values.name || !values.email) return setNotice('Please complete your name and email address.')
    const message = `Hi ELITE FITNESS, my name is ${values.name}.%0AEmail: ${values.email}%0AInterest: ${values.interest || 'Membership'}%0AMessage: ${values.message || 'I would like to know more.'}`
    window.open(`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setNotice('Opening WhatsApp with your enquiry. No information is stored on this website.')
  }
  return <form className="enquiry-form" onSubmit={submit} noValidate>
    <div className="form-note"><span>Information</span> This form opens WhatsApp with your enquiry. No data is stored on this website.</div>
    <label>Your name <input required value={values.name} onChange={e => setValues({...values, name: e.target.value})} placeholder="Name" /></label>
    <label>Email address <input required type="email" value={values.email} onChange={e => setValues({...values, email: e.target.value})} placeholder="you@example.com" /></label>
    <label>Interested in
      <select value={values.interest} onChange={e => setValues({...values, interest: e.target.value})}>
        <option value="">Choose an option</option><option>Membership</option><option>Training</option><option>Visiting the space</option><option>Other</option>
      </select>
    </label>
    <label className="message-label">Your message <textarea value={values.message} onChange={e => setValues({...values, message: e.target.value})} placeholder="What are you working towards?" rows="3" /></label>
    <div className="form-action"><button className="arrow-button" type="submit">Continue to WhatsApp <span>â†—</span></button>{notice && <p role="status">{notice}</p>}</div>
  </form>
}
