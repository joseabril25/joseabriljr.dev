import { Suspense } from "react";
import { ArrowIcon } from "./ArrowIcon";

export const BlogLink = ({ slug, name }: {slug: string, name: string}) => {
  return (
    <div className="group">
      <a
        href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-700 bg-neutral-800 px-3 py-4"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-100">
            {name}
          </p>
          <Suspense fallback={<p className="h-6" />}>
            {/* <Views slug={slug} /> */}
          </Suspense>
        </div>
        <div className="transform text-neutral-300 transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}