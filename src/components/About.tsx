export default function About() {
  return (
    <section id="about" aria-label="About">
      <div className="section-header fade-in">
        <div className="section-cmd">
          <span className="prompt">$</span>
          <span className="cmd">cat about.md</span>
        </div>
        <div className="section-divider" />
      </div>

      <div className="about-body fade-in">
        <p className="about-para">
          I'm a third-year{' '}
          <span className="hl">Mathematics</span> student at Lagos State University with a parallel
          life as a software engineer. I build things at both ends of the abstraction stack
          from <span className="hl2">bytecode VMs and custom compilers</span> to{' '}
          <span className="hl3">blockchain(test)</span>, and when I'm not writing code, I'm
          likely working on number theory problems.
        </p>

        <p className="about-para">
          My research interests sit at the intersection of{' '}
          <span className="hl">number theory</span>, and {' '}
          <span className="hl">abstract algebra</span>. I am currently working on a set-theoretic reformulation
          of the Goldbach conjecture. Long-term goal: PhD in pure Mathematics.
        </p>

        <div className="about-kv">
          {[
            { k: 'location',   v: 'Lagos, Nigeria' },
            { k: 'education',  v: 'B.Sc Mathematics — LASU (2023–present)' },
            { k: 'internship', v: 'ICT Intern — ASCON (hardware & software support)' },
            { k: 'languages',  v: 'TypeScript, Python, Rust, Go, C' },
            { k: 'interests',  v: 'Number Theory, Compiler Design, Cryptography, Chess' },
            { k: 'chess',      v: 'NifemiBosun on Chess.com & Lichess (rapid/blitz)' },
          ].map(({ k, v }) => (
            <div className="about-kv-row" key={k}>
              <span className="about-kv-key">{k}</span>
              <span className="about-kv-val">{v}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="about-kv-row" style={{ marginBottom: '0.6rem' }}>
            <span className="about-kv-key">skills</span>
            <span className="about-kv-val" />
          </div>
          <div className="about-tags">
            {[
              ['TypeScript', 'green'],
              ['Python', 'green'],
              ['Rust', 'amber'],
              ['Go', 'blue'],
              ['C', 'amber'],
              ['Compiler Design', 'purple'],
              ['Blockchain', 'blue'],
              ['Number Theory', 'purple'],
              ['Abstract Algebra', 'purple'],
              ['Graph Theory', 'green'],
              ['LaTeX', 'blue'],
              ['Node.js', 'green'],
            ].map(([label, color]) => (
              <span key={label} className={`tag ${color}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
