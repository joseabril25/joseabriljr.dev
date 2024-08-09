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
        I am a software engineer, former startup founder, and lifelong learner. I have been a software engineer for over 7 years. 
        I am currently finishing my Master&rsquo;s Degree in Software Engineering here in Auckland, New Zealand. I am studying part-time
        at Yoobee College of Creative Innovation. And I am currently exploring deeply into the world of Machine Learning, Artificial Intelligence and Data Science.
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          I have a strong passion for building efficient software solutions and helping other developers grow. I was recently invited to join the 
          <span className="not-prose">
            <Badge href="https://backdropbuild.com/builds/gig-bridge-labs">
               Backdrop Build 
            </Badge>
          </span>
          program. It is a program that helps developers build their own startups. I am currently working on a project called
          <span className="not-prose">
            <Badge href="https://gigbridgelabs.com/">
              Gig Bridge Labs
            </Badge>
          </span>
          . It is a personalized learning platform to help professionals transition into in-demand tech careers. Get the skills and support you need to succeed in the tech industry.
        </p>
      </div>
      <h3 className="mt-5">Here are some notable projects that I&rsquo;ve worked on and currently working on:</h3>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ExternalLink
          img='/images/projects/gbl.png'
          name="Gig Bridge Labs"
          link="https://gigbridgelabs.com/"
        />
        <ExternalLink
          img='/images/projects/calena.png'
          name="Calena"
          link="https://www.calena.com.au/"
        />
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
          Beyond my professional <Link href='/work'>work</Link>, I love sharing knowledge and helping other developers grow. 
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
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          Feel free to explore my projects, read my blog, or get in touch if you&rsquo;d like to collaborate on something exciting!
        </p>
      </div>
    </section>
  );
}
