import React from 'react';
import '../styles/project.css';

function Project({ project }) {
  return (
    <div className="project">
      <h2>{project.title}</h2>
      <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Version</a> |
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <img src={project.imageUrl} alt={project.title} />
    </div>
  );
}

export default Project;