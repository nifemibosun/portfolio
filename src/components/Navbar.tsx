import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',    label: './about'    },
  { href: '#projects', label: './projects' },
  { href: '#research', label: './research' },
  { href: '#resume',   label: './resume'   },
]

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'research', 'resume']
      const scrollY = window.scrollY + 80

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop) {
          setActive(`#${id}`)
          return
        }
      }
      setActive('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <span style={{ color: 'var(--green)' }}>nifemi</span>
        <span className="at">@</span>
        <span className="host">bosun</span>
        <span className="sep">:</span>
        <span className="path">~</span>
        <span className="dollar">$</span>
        <span className="navbar-cursor" aria-hidden="true" />
      </div>

      <ul className="navbar-links" role="list">
        {LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
