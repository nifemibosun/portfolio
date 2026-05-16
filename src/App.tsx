import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Research from './components/Research'
import Resume from './components/Resume'
import './index.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 },
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <div className="scanlines" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Resume />

        <footer className="footer">
          <div className="footer-left">
            <span>nifemi@bosun</span>
            {' '}·{' '}
            {new Date().getFullYear()}
          </div>
          <div className="footer-right">
            <a href="https://github.com/nifemibosun" target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href="https://chess.com/member/nifemibosun" target="_blank" rel="noopener noreferrer">
              chess.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
