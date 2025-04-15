import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS.',
    tags: ['React'],
    image: 'path_to_image',
    link: 'https://yourportfolio.com',
    github: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 2,
    title: 'Spring Boot API',
    description: 'A RESTful API built with Spring Boot.',
    tags: ['Java', 'Spring'],
    image: 'path_to_image',
    link: 'https://yourapi.com',
    github: 'https://github.com/yourusername/spring-boot-api',
  },
  // Add more projects as needed
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
