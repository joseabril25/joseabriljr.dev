import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '../../constants/projects';
import { ProjectLink } from '../../components/ProjectLink';
import { Badge } from '../../components/Badge';

export const metadata: Metadata = {
  title: 'Jose Abril, Jr. - Projects',
  description: 'A collection of my notable projects.',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">notabe projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Here&apos;s a collection of some of the projects that I&apos;ve worked on and currently working on. Some of the projects are personal projects, while others are projects that I&apos;ve worked on with other developers for a company.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {projects.map((project: any) => (
          <div key={project.title}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">{project.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{project.date}</p>
            <p className='mt-5'>{project.description}</p>
            <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              {project.links.map((link: any) => (
                <ProjectLink key={link} link={link.link} name={link.title} />
              ))}
            </div>
            <p className='mt-5'>Tech used: </p>
            <div className='mt-5 justify-between'>
              {
                project.skills.map((skill: any) => (
                  <span key={skill.title} className='mr-1 mb-2'>
                    <Badge href={skill.link}>
                      {skill.title}
                    </Badge>
                  </span>
                ))
              }
            </div>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          </div>
        ))}
      </div>
    </section>
  );
}
