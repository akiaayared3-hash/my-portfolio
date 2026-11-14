import { useState } from 'react'
import { Menu, X, Github } from 'lucide-react'
import { profile } from '../data'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Learning', '#learning'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Yared Ababu home">
          <span className="brand-mark">Y</span>
          <span>yared<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-github" href={profile.github} target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub <span aria-hidden="true">↗</span>
        </a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-panel">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      )}
    </header>
  )
}
