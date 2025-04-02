import type { Metadata } from 'next';
import { ProjectLink } from '../../components/ProjectLink';
import { Badge } from '../../components/Badge';
import { aiProjects } from '../../constants/ai';

export const metadata: Metadata = {
  title: 'Jose Abril, Jr. - AI Projects',
  description: 'A collection of my AI projects.',
};

export default function AiPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">powered by ai</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className='mb-5'>
          AI isn&apos;t just about complex algorithms or theoretical concepts for me—it&apos;s about creating tangible improvements in people&apos;s daily lives. I&apos;m passionate about bridging the gap between cutting-edge technology and practical applications that solve real problems people face every day.
        </p>
        <p className='mb-5'>
          What excites me most about AI is its transformative potential to make the complex simple, the tedious automatic, and the inaccessible available to everyone. Whether it&apos;s helping someone discover new recipes and streamline their shopping, providing personalized learning experiences, or creating entertaining interactions through conversational AI, I&apos;m driven by the desire to make technology work for people, not the other way around.
        </p>
        <p className='mb-5'>
          My approach to AI development focuses on human-centered design—understanding the user&apos;s needs first, then applying the right AI solutions to meet those needs effectively and intuitively. I believe the best AI applications are those that feel natural and seamless in their assistance, enhancing human capabilities rather than replacing them.
        </p>
        <p className='mb-5'>
          Through my projects, I&apos;ve explored different facets of artificial intelligence: natural language processing, recommendation systems, conversational agents, and personalized learning algorithms. Each project represents a step toward my vision of AI as an empowering force that improves quality of life and opens new possibilities for everyone.
        </p>
        <p className='mb-5'>
          Below are some key AI-focused projects that showcase how I&apos;m working to bring this vision to life, demonstrating my commitment to creating AI solutions that are practical, accessible, and transformative for everyday experiences.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {aiProjects.map((project: any) => (
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
