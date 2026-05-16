import { PAPERS } from '../data/portfolio'

export default function Research() {
  return (
    <section id="research" aria-label="Research">
      <div className="section-header fade-in">
        <div className="section-cmd">
          <span className="prompt">$</span>
          <span className="cmd">ls ~/research/papers</span>
        </div>
        <div className="section-divider" />
      </div>

      <div className="research-list">
        {PAPERS.map((p, i) => (
          <article
            key={p.id}
            className="research-item fade-in"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="research-meta">
              <span className={`research-status ${p.status}`}>{p.status}</span>
              <span className="research-year">{p.year}</span>
            </div>
            <h3 className="research-title">{p.title}</h3>
            <p className="research-subtitle">{p.subtitle}</p>
            <p className="research-desc">{p.description}</p>
            <div className="research-tags">
              {p.tags.map((t) => (
                <span key={t} className="tag purple">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
