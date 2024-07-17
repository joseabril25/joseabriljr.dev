import type { Metadata } from 'next';
import Link from 'next/link';
import { work } from '../../constants/work';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work experience</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience">love</Link>, and along the
          way, teach the next generation of developers. Here&rsquo;s a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {work.map((job: any) => (
          <div key={job.company}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">{job.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">{job.role}</p>
            <p className='mt-5'>{job.description}</p>
            <ul className='mt-5 list-disc'>
              {job.desc.map((highlight: any) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          </div>
        ))}
      </div>
    </section>
  );
}
