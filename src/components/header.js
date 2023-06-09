import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <h1>Nicholas Monplaisir</h1>
      <nav>
        <a href="https://github.com/whatsnextnick" target="_blank" rel="noopener noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/nmonplaisir" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="mailto:n.jmonplaisir@gmail.com">Email</a> |
        <a href="tel:9546651456">Phone</a>
      </nav>
    </header>
  );
}

export default Header;
