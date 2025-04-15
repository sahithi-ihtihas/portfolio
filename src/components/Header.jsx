import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header({ onHomeClick, onResumeClick, onContactClick }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-10">
      <div className="text-xl font-bold">SY</div>
      <nav className="flex gap-6">
        <button onClick={onHomeClick} className="hover:underline">Work</button>
        <button onClick={onResumeClick} className="hover:underline">Resume</button>
        <button onClick={onContactClick} className="hover:underline">Contact</button>
      </nav>
      <div className="flex gap-4">
        <a href="https://github.com/sahithi-ihtihas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/yarlagadda-sahithi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
      </div>
    </header>
  );
}
