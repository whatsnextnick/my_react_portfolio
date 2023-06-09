import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import projects from './data/projects.json';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {projects.map((project, index) => (
          <Route key={index}>
            <Project project={project} />
          </Route>
        ))}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
