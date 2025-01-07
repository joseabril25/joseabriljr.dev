import Image from 'next/image';
import { Suspense } from 'react';
import { ArrowIcon } from './ArrowIcon';

export const ExternalLink = ({ img, link, name, width, height }: {img: string, link: string, name: string, width?: number, height?: number}) => {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center">
          <div className="relative h-8 flex flex-col">
            <Image
              alt={name}
              src={img}
              height={height ?? 64}
              width={width ?? 264}
              sizes="33vw"
              className="w-32"
              priority
            />
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}