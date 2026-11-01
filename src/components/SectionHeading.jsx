export default function SectionHeading({ number, title, className = '' }) {
  return <header className={`section-heading ${className}`}>
    <span className="section-index">{number}</span>
    <h2>{title}</h2>
  </header>
}
