import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/ArrowIcon";
import { ExternalLink } from "../components/ExternalLink";
import { BlogLink } from "../components/BlogLink";
import { Badge } from "../components/Badge";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I&rsquo;m Jose 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am a software engineer, former startup founder, and lifelong learner. I currently
        <Link href="/work">work</Link>
        {` as the Senior Software Engineer at `}
        <span className="not-prose">
          <Badge href="https://www.calena.com.au/">
            Caléna 
          </Badge>
        </span>
        {`, where I develop and maintain the company's web application, mobile application, APIs and services.`}
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          I am currently finishing my Master&rsquo;s Degree in Software Engineering here in Auckland, New Zealand. I am studying part-time
          at Yoobee College of Creative Innovation. And I am currently exploring deeply into the world of Machine Learning, Artificial Intelligence
          and Data Science.
        </p>
      </div>
      <h3 className="mt-5">Here are some notable projects that I&rsquo;ve worked on and currently working on:</h3>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ExternalLink
          img='/images/projects/calena.png'
          name="@leerob"
          link="https://www.calena.com.au/"
        />
        <ExternalLink
          img='/images/projects/webmint.png'
          name="webmint"
          link="https://www.linkedin.com/company/webmint-io/"
        />
        <ExternalLink
          img='/images/projects/payluy.png'
          name="payluy"
          link="https://payluy.com.kh"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          Beyond my professional work, I love sharing knowledge and helping other developers grow. 
          Over the years, I&rsquo;ve had the opportunity to work with and advise companies on web development, blockchain integration, and building efficient software solutions.
        </p>
      </div>
      {/* <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div> */}
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          I believe in the power of continuous learning and community collaboration.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Feel free to explore my projects, read my blog, or get in touch if you&rsquo;d like to collaborate on something exciting!
        </p>
      </div>
    </section>
  );
}
