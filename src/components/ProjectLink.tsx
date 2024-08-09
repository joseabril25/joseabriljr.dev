import Image from 'next/image';
import { Suspense } from 'react';
import { ArrowIcon } from './ArrowIcon';

export const ProjectLink = ({ link, name }: { link: string, name: string}) => {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center">
          <div className="relative flex flex-col">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{name}</p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}