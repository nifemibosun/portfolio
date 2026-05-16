export default function Resume() {
  return (
    <section id="resume" aria-label="Resume">
      <div className="section-header fade-in">
        <div className="section-cmd">
          <span className="prompt">$</span>
          <span className="cmd">cat resume.md</span>
        </div>
        <div className="section-divider" />
      </div>

      <div className="resume-body fade-in">
        {/* Education */}
        <div>
          <div className="resume-block-title">education</div>
          <div className="resume-entry">
            <div className="resume-entry-top">
              <div>
                <div className="resume-entry-org">Lagos State University</div>
                <div className="resume-entry-role">B.Sc Mathematics (Pure)</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="resume-entry-date">2023 — present</div>
                <div className="resume-entry-loc">Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="resume-entry-bullets">
              <li>Research interests in number theory, abstract algebra, and analytic methods</li>
              <li>Independently rediscovered and proved a classical zeta-function identity</li>
              <li>Active work on set-theoretic reformulation of the Goldbach conjecture</li>
            </ul>
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="resume-block-title">experience</div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <div>
                <div className="resume-entry-org">Administrative Staff College of Nigeria (ASCON)</div>
                <div className="resume-entry-role">ICT Intern</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="resume-entry-date">2026 — present</div>
                <div className="resume-entry-loc">Lagos, Nigeria</div>
              </div>
            </div>
            <ul className="resume-entry-bullets">
              <li>Hardware troubleshooting and maintenance across staff workstations</li>
              <li>Software technical support and system configuration</li>
              <li>Network diagnostics and IT infrastructure assistance</li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-top">
              <div>
                <div className="resume-entry-org">Independent Software Developer</div>
                <div className="resume-entry-role">Open Source Projects</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="resume-entry-date">2023 — present</div>
              </div>
            </div>
            <ul className="resume-entry-bullets">
              <li>
                Built <strong>Gyro</strong> — a VM-based language with custom bytecode IR and
                multi-backend architecture (VM / native / Wasm)
              </li>
              <li>
                Built <strong>edt</strong> — an HTML-to-LaTeX compiler with zero runtime
                dependencies; used for mathematical paper typesetting
              </li>
              <li>
                Developed <strong>Byte Chain</strong> blockchain library + ecosystem (bc-web3.js,
                BC Scan, CipherCast)
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="resume-block-title">skills</div>
          <div className="resume-skills-grid">
            {[
              { label: 'languages', val: 'TypeScript, Python, Rust, Go, C' },
              { label: 'domains', val: 'Compiler Design, Blockchain/Cryptography, Number Theory, Abstract Algebra' },
              { label: 'tools', val: 'Vite, Node.js, scikit-learn, LaTeX, Git' },
              { label: 'mathematics', val: 'Real & Complex Analysis, Functional Analysis, Number Theory, Abstract Algebra, Graph Theory' },
              { label: 'certifications', val: 'Hedera Hashgraph Developers Course' },
            ].map(({ label, val }) => (
              <div className="resume-skill-row" key={label}>
                <span className="resume-skill-label">{label}</span>
                <span className="resume-skill-val">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download */}
        <div>
          <a
            href="/resume.pdf"
            className="resume-download"
            download
            aria-label="Download resume PDF"
          >
            <span>↓</span>
            <span>download resume.pdf</span>
          </a>
        </div>
      </div>
    </section>
  )
}
