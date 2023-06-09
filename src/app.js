import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Project from './components/projects.js';
import projects from './data/projects.json';
import './styles/app.css';

function App() {
    const projects = [
        { title: 'Project 1', deployedUrl: '#', repoUrl: '#', screenshotUrl: '#' },
        { title: 'Project 2', deployedUrl: '#', repoUrl: '#', screenshotUrl: '#' }
        // Add more projects as needed
      ];

    return (
        <Router>
        <div className="App">
          <Header />
          <Routes>
            {projects.map((project, index) => (
                    <Route key={index} path={`/project/${project.title}`} element={<Project project={project} />} />
                ))}
                <Route path="/" element={<h1>Welcome to Nicholas Monplaisir's portfolio</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
}

export default App;
