import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-sm bg-gray-200 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
