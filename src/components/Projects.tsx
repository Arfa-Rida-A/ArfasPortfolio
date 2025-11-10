import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMDc3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/arfarida/ecommerce-platform',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTA2NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/arfarida/task-manager',
    },
    {
      id: 3,
      title: 'Portfolio Website Builder',
      description:
        'A no-code website builder that allows users to create beautiful portfolio websites with customizable templates and themes.',
      image: 'https://images.unsplash.com/photo-1583121182724-6f84970c0e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NjIwNjA4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Vercel'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/arfarida/portfolio-builder',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. Each project showcases different skills
          and technologies I've worked with.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}