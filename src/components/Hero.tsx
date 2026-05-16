import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'Mathematics Student',
  'Compiler Engineer',
  'Blockchain Developer',
  'Number Theorist',
  'Open Source Builder',
]

const LINKS = [
  { label: '$ github', href: 'https://github.com/nifemibosun' },
  { label: '$ chess.com', href: 'https://chess.com/member/nifemibosun' },
  { label: '$ x.com', href: 'https://x.com/nifemibosun' },
]

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="hero" aria-label="Introduction">
      {/* whoami */}
      <div className="hero-pre">
        <span className="prompt">$</span>
        <span>whoami</span>
      </div>

      <div className="hero-output">
        <h1 className="hero-name">Nifemi Bosun</h1>
      </div>

      {/* role typewriter */}
      <div className="hero-cmd2">
        <span className="prompt">$</span>
        <span>cat role.txt</span>
      </div>
      <div className="hero-role-line" aria-live="polite">
        {role}
        <span className="hero-role-cursor" aria-hidden="true" />
      </div>

      <p className="hero-tagline">
        Third-year Math student at <span style={{ color: 'var(--green)' }}>LASU</span> building
        compilers, blockchains, and cryptographic systems — while hunting proofs in number theory.
      </p>

      {/* external links */}
      <div className="hero-links">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="hero-link"
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        scroll to explore ↓
      </div>
    </section>
  )
}
