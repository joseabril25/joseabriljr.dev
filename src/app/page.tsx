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
        I&apos;m a software engineer who turns complex problems into elegant solutions. With over 8 years of experience building scalable SaaS platforms, 
        I recently completed my Master&apos;s in Software Engineering at Yoobee College of Creative Innovation here in Auckland, New Zealand. 
        Now I&apos;m diving deep into the exciting realms of Machine Learning, AI, and Data Science – because why stop learning when there&apos;s so much cool stuff to explore?
      </p>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          Currently, I&apos;m the CTO at{" "}
          <span className="not-prose">
            <Badge href="https://tryfavour.com/">
              Favour - DIY Meal Kit
            </Badge>
          </span>,
          where I&apos;m leading the tech charge to revolutionize how busy families and professionals approach meal planning. I architect Python/Django backends in an AWS environment, craft React/React Native & Vue.js frontends, and integrate AI to make our platform smarter every day.
          It&apos;s like building a digital sous chef that actually understands what you want for dinner!
        </p>
      </div>
      <h3 className="mt-5">My journey has taken me through some fascinating projects:</h3>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ExternalLink
          img='/images/projects/favour.png'
          name="Favour"
          link="https://tryfavour.com/"
        />
        <ExternalLink
          img=''
          name="Artconex"
          link="https://www.artconex.com/"
        />
        <ExternalLink
          img='/images/projects/calena.png'
          name="Calena"
          link="https://www.calena.com.au/"
        />
      </div>
      <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ExternalLink
          img='/images/projects/gbl.png'
          name="Gig Bridge Labs"
          link="https://gigbridgelabs.com/"
        />
        <ExternalLink
          img='/images/projects/webmint.png'
          name="webmint"
          link="https://x.com/webmint_io"
        />
        <ExternalLink
          img='/images/projects/payluy.png'
          name="payluy"
          link="https://payluy.com.kh"
        />
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          I&apos;m passionate about Web3 and AI, AWS cloud architecture, serverless computing, and building APIs that just work.
          My tech stack spans from Python/Django and Node.js to React, Next.js, Vue.js and beyond. I believe great code should be clean, scalable, and – dare I say it – beautiful.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          Beyond writing code, I love empowering other developers and sharing knowledge with the community. Whether it&apos;s blockchain integration,
          cloud architecture, or just figuring out why that one test keeps failing, I&apos;m always up for a good tech challenge and collaboration.
        </p>
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-5">
        <p>
          Want to build something amazing together? Let&apos;s talk! 🚀
        </p>
      </div>
    </section>
  );
}
