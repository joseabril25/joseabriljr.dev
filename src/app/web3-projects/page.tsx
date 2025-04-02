import type { Metadata } from 'next';
import { ProjectLink } from '../../components/ProjectLink';
import { Badge } from '../../components/Badge';
import { web3Projects } from '../../constants/web3-projects';

export const metadata: Metadata = {
  title: 'Jose Abril, Jr. - Web3 Projects',
  description: 'A collection of my web3 projects.',
};

export default function Web3ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">web3 journey</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p className='mb-5'>
          My passion for web3 technology began at the intersection of innovation and possibility. As blockchain technology evolved beyond its financial roots, I saw an opportunity to build solutions that fundamentally transform how we verify authenticity, establish ownership, and create value in the digital realm.
        </p>
        <p className='mb-5'>
          From developing NFT platforms that empower artists to retain control of their work, to building decentralized applications that serve real-world needs, my experience spans the full spectrum of web3 development. I&apos;ve had the privilege of working with blockchain technology across multiple domains—from digital art marketplaces to financial services and conservation efforts.
        </p>
        <p className='mb-5'>
          What drives my enthusiasm for web3 is its potential to democratize access, establish verifiable trust, and create new paradigms for digital interaction. Each project represents not just technical implementation, but a step toward a more transparent, equitable, and accessible digital future.
        </p>
        <p className='mb-5'>
          Below are some key projects that highlight my journey in the web3 space, showcasing my commitment to building practical, meaningful applications on blockchain technology.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {web3Projects.map((project: any) => (
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
