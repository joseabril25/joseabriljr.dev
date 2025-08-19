import Image from 'next/image';
import { Suspense } from 'react';
import { ArrowIcon } from './ArrowIcon';

export const ExternalLink = ({ img, link, name, width, height }: {img: string, link: string, name: string, width?: number, height?: number}) => {
  return (
    <div className="group flex w-full h-16">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-700 bg-neutral-800 px-3 py-4"
      >
        <div className="flex items-center justify-start">
          <div className="relative flex flex-col">
            {img ? (
              <Image
                alt={name}
                src={img}
                height={height ?? 64}
                width={width ?? 264}
                sizes="33vw"
                className="w-32"
                priority
              />
            ) : (
              <div className="flex items-center justify-start w-32" >
                {name}
              </div>
            )}
          </div>
        </div>
        <div className="transform text-neutral-300 transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}