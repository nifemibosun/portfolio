import { useState } from 'react'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id))

  return (
    <section id="projects" aria-label="Projects">
      <div className="section-header fade-in">
        <div className="section-cmd">
          <span className="prompt">$</span>
          <span className="cmd">ls -la ~/projects</span>
        </div>
        <div className="section-divider" />
      </div>

      <p className="projects-ls-header fade-in">
        total {PROJECTS.length} &nbsp;·&nbsp; click any entry to expand
      </p>

      <div className="projects-grid fade-in">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className={`project-card${open === p.id ? ' open' : ''}`}
            onClick={() => toggle(p.id)}
            role="button"
            aria-expanded={open === p.id}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggle(p.id)}
          >
            <div className="project-card-top">
              <span className="project-icon" aria-hidden="true">
                {open === p.id ? '▾' : '▸'}
              </span>
              <span className="project-name">{p.name}/</span>
              <span className="project-lang">{p.lang}</span>
              <span className={`project-status ${p.status}`}>{p.status}</span>
            </div>

            <div className="project-card-body" aria-hidden={open !== p.id}>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
