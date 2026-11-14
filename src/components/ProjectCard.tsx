import { ArrowUpRight, Github } from 'lucide-react'

type Project = {
  number: string
  name: string
  type: string
  description: string
  stack: string[]
  github: string
  status: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-number">{project.number} / PROJECT</span>
        <span className="project-status">{project.status}</span>
      </div>
      <div className="project-art" aria-hidden="true">
        <div className="art-window">
          <div className="art-window-bar"><i /><i /><i /></div>
          <div className="art-layout">
            <div className="art-sidebar"><b /><b /><b /><b /></div>
            <div className="art-content">
              <span /><span /><span />
              <div className="art-blocks"><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className="art-glow" />
      </div>
      <p className="project-type">{project.type}</p>
      <h3>{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="tag-list">
        {project.stack.map((item) => <span key={item}>{item}</span>)}
      </div>
      {project.github ? (
        <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
          <Github size={16} /> View repository <ArrowUpRight size={16} />
        </a>
      ) : (
        <span className="project-link muted-link">Repository link coming soon</span>
      )}
    </article>
  )
}
