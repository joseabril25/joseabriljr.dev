import { ArrowIcon } from "./ArrowIcon"

export const Footer = () => {
  return (
    <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/seabriljr"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">follow me</p>
        </a>
      </li>
      <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/jose-abril-jr/"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">connect</p>
        </a>
      </li>
      {/* <li>
        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://leerob.substack.com"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">get email updates</p>
        </a>
      </li> */}
    </ul>
  )
}