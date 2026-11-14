import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  MapPin, Code2, Braces, Database, Wrench, Terminal, GraduationCap,
} from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import { learning, profile, projects, skills } from './data'

const skillIcons = [Code2, Braces, Database, Wrench]

function App() {
  const contactHref = profile.email ? `mailto:${profile.email}` : '#contact'

  return (
    <div id="home" className="app-shell">
      <Navbar />
      <main>
        <section className="hero shell">
          <div className="hero-grid">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="availability"><span className="pulse-dot" /> OPEN TO JUNIOR OPPORTUNITIES</div>
              <p className="hero-kicker">HELLO, I'M {profile.name.toUpperCase()}</p>
              <h1>Building software<br />with <span>purpose</span><em>.</em></h1>
              <p className="hero-lead">{profile.headline}</p>
              <p className="hero-subtext">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Let's connect <ArrowRight size={17} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={14} /> Based in {profile.location}</span>
                <span className="meta-separator">/</span>
                <span>{profile.role}</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-core">
                <div className="code-window">
                  <div className="code-top"><span /><span /><span /><small>developer.ts</small></div>
                  <div className="code-lines">
                    <p><i>01</i><b>const</b> developer = {'{'}</p>
                    <p><i>02</i>&nbsp; name: <strong>'Yared'</strong>,</p>
                    <p><i>03</i>&nbsp; role: <strong>'Full-stack'</strong>,</p>
                    <p><i>04</i>&nbsp; mindset: <strong>'Keep building'</strong>,</p>
                    <p><i>05</i>{'}'}</p>
                    <p className="code-cursor"><i>06</i><span>_</span></p>
                  </div>
                </div>
                <div className="floating-chip chip-react"><span>⚛</span> React</div>
                <div className="floating-chip chip-ts">TS&nbsp; TypeScript</div>
                <div className="floating-chip chip-node"><span>⬡</span> Node.js</div>
              </div>
              <span className="visual-caption">THINK · BUILD · IMPROVE</span>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section id="about" className="section shell">
          <SectionHeading eyebrow="01 / ABOUT" title="Curious by nature. Builder by practice." />
          <div className="about-grid">
            <div className="about-main">
              <p className="about-statement">I care about more than making interfaces look good. I want to understand <span>how the whole system works</span> — from the user experience to the API, database, and decisions behind the code.</p>
              <p className="body-copy">I’m studying software engineering and building practical full-stack applications. My current focus is becoming more independent at problem solving, writing maintainable code, and learning the fundamentals that make software reliable.</p>
            </div>
            <div className="about-aside">
              <div className="aside-line"><span>01</span><p>Build with users and real problems in mind.</p></div>
              <div className="aside-line"><span>02</span><p>Prefer clear logic over clever shortcuts.</p></div>
              <div className="aside-line"><span>03</span><p>Learn continuously and improve through practice.</p></div>
              <div className="education-card">
                <GraduationCap size={19} />
                <div><small>EDUCATION</small><strong>Software Engineering</strong><span>Debre Birhan University</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="shell">
            <SectionHeading eyebrow="02 / TOOLKIT" title="Tools I work with." description="A practical toolkit built through projects and continuous learning. I’m honest about what I’m still developing." />
            <div className="skills-grid">
              {skills.map((group, index) => {
                const Icon = skillIcons[index]
                return (
                  <article className="skill-card" key={group.category}>
                    <div className="skill-icon"><Icon size={20} /></div>
                    <h3>{group.category}</h3>
                    <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section shell">
          <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects built to solve problems." description="A selection of practical work. Open the repositories to inspect the implementation and code." />
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
          <a className="text-link github-more" href={profile.github} target="_blank" rel="noreferrer">Explore more on GitHub <ArrowUpRight size={16} /></a>
        </section>

        <section id="learning" className="section section-muted">
          <div className="shell learning-grid">
            <div>
              <SectionHeading eyebrow="04 / CURRENT FOCUS" title="Always sharpening the fundamentals." description="I’m deliberately investing in the skills that help me solve problems without relying on step-by-step tutorials." />
              <div className="learning-note"><Terminal size={18} /><span>Consistency over shortcuts. Understand it, implement it, explain it.</span></div>
            </div>
            <div className="learning-list">
              {learning.map((item, index) => (
                <div className="learning-item" key={item}>
                  <span>0{index + 1}</span><p>{item}</p><ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section shell contact-section">
          <div className="contact-panel">
            <div className="contact-orb" />
            <p className="eyebrow">05 / CONTACT</p>
            <h2>Have a problem worth<br /><span>building for?</span></h2>
            <p className="contact-copy">I’m interested in junior software engineering opportunities, collaboration, and meaningful projects. Let’s talk.</p>
            <div className="contact-actions">
              {profile.email ? (
                <a className="button button-primary" href={contactHref}><Mail size={17} /> Email me</a>
              ) : (
                <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Connect on GitHub</a>
              )}
              {profile.linkedin && <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>}
              <a className="button button-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a className="brand" href="#home"><span className="brand-mark">Y</span><span>yared<span className="brand-dot">.</span></span></a>
        <p>Designed and built with care by {profile.name}.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </div>
  )
}

export default App
