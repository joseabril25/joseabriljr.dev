export interface Work {
  title: string;
  role: string;
  description: string;
  link: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  dates: string;
  desc: [];
  projects:[];
}


export const work = [
  {
    title: "Caléna",
    role: "CTO",
    description: "I was hired as a CTO to help the company with their digital transformation. I was tasked to build and design the architecture of the whole system including web, mobile, APIs and backend. I was responsible for the overall technology strategy to support business objectives.",
    link: "https://calena.com.au/",
    logo: "/vercel-logo.svg",
    logoWidth: 13,
    logoHeight: 11,
    dates: 'Dec 2023 - May 2024',
    desc: [
      'Designed the whole system architecture.',
      'Developed the web app dashboard using Next.js and Material UI.',
      'Developed the API using NestJS.',
      'Designed and developed the database using MongoDB.',
      "Developed the mobile app using React Native and Tailwind CSS.",
      'Deployed the app to AWS.'
    ],
    projects: [
      {
        project: 'Gaming Hub Internal Tools',
        link: ''
      },
    ],
    skills: [
      'Next.js',
      'Material UI',
      'NestJS',
      'MongoDB',
      'React Native',
      'Tailwind CSS',
      'AWS',
      'S3',
      'EC2',
      'RDS',
    ]
  },
  {
    title: "GamingHub",
    role: "Senior Full Stack Developer",
    description: "After Royal Labs, left the company when the other co-founder decided to pivot the company to a different direction. I decided to join a gaming company called GamingHub, a platform that connects online  casinos to players. My father referred me to the company, and I was hired as a full stack developer.",
    link: "https://gaminghub.biz/",
    logo: "/vercel-logo.svg",
    logoWidth: 13,
    logoHeight: 11,
    dates: 'Dec 2023 - Apr 2024',
    desc: [
      'Worked with the CTO to design the architecture.',
      'Worked with the CTO to choose the technology stack.',
      'Developed their internal application to handle their casino games, providers and operators.',
      'Integrate with third-party APIs and third-party casino game providers using node.js and AWS tools.',
      "Developed an internal API to handle the data that manages their casino games, providers and operators using NestJS framework.",
    ],
    projects: [
      {
        project: 'Gaming Hub Internal Tools',
        link: ''
      },
    ],
    skills: [
      'Next.js',
      'Material UI',
      'Materialize',
      'NestJS',
      'Node.js',
      'MariaDB',
      'AWS',
      'S3',
    ]
  },
  {
    title: "Royal Labs, LLC",
    role: "Co-Founder & CTO",
    description: "Started a company to help businesses with their digital transformation. We built web3 applications on the Ethereum blockchain. Started with NFT projects called Approving Corgis and Tastybones, and used the funds to build an NFT launchpad called Webmint.",
    link: "https://royallabs.io",
    logo: "/next-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'Oct 2021 - Dec 2023',
    desc: [
      'Work with the other executive team to set clear priorities and goals for development management and production, balancing the long-term and immediate needs.',
      'Develop and manage annual and quarterly budgets.',
      'Oversee data security, management, and governance.',
      'Manage strategic vendor and technology partner relationships.',
      "Define the company’s overall technology strategy to support business objectives.",
      'Develop MVPs.',
      'Make infrastructure decisions, ensuring technical excellence, versatility, safety and soundness, resiliency and scalability in the architecting and engineering of product solutions, as well as managing all technical delivery.',
    ],
    projects: [
      {
        project: 'Webmint',
        link: 'https://webmint.io/'
      },
      {
        project: 'Approving Corgis NFT',
        link: 'https://approvingcorgis.com/'
      },
      {
        project: 'Tastybones NFT',
        link: 'https://tastybones.xyz/'
      },
    ],
    skills: [
      'Next.js',
      'Tailwind CSS',
      'NestJS',
      'Postgres',
      'AWS',
      'IPFS',
      'Ethereum',
      'Solidity',
      'Hardhat',
      'Smart Contracts',
      'React',
      'Vue.js',
      'React Native',
      'Draw.io'
    ]
  },
  {
    title: "Changing Digital, Ltd.",
    role: "Full Stack Developer",
    description: "I help teach the React community, an open-source web framework built with React.",
    link: "https://changingdigital.com",
    logo: "/react-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'Sep 2020 - Sep 2021',
    desc: [
      'Creating components in React.',
      'Building responsive web pages and mobile app screens.',
      'Writing robust, accessible, maintainable code',
      'Receiving and conducting code reviews from/with your colleagues and team leads.',
      'Creating backend and API functionality with NestJS',
      "Managing yours’ and your teams’ production code in AWS (training provided).",
      'Adhering to data privacy legislation, including GDPR (training provided).',
    ],
    projects: [
      {
        project: 'Reactnews Deal Tracker Mobile App',
        link: 'https://greenstreetnews.com/deal-tracker/'
      }
    ],
    skills: [
      'Next.js',
      'NestJS',
      'Postgres',
      'AWS',
      'React',
      'React Native',
      'Fastlane',
    ]
  },
  {
    title: "Dragonfly Fintech, Proximax",
    role: "Lead Software Development Engineer",
    description: "Started as a junior developer and learned how to build web and web3 applications using ProximaX blockchain. I was promoted to lead software development engineer after 6 months. We developed a mobile money wallet app in Cambodia called Dragonfly Fintech. Also assigned to present the product to clients and third-party partners. Also presented the whitelabel version of the product at a hackathon conference in the Philippines and got to the top 3.",
    link: "https://www.proximax.ltd/en",
    logo: "/react-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'Sep 2018 - Sep 2020',
    desc: [
      'Develop software solutions by studying information needs; conferring with users; studying systems flow, data usage and work processes; investigating problem areas; following the software development lifecycle.',
      'Determine operational feasibility by evaluating analysis, problem definition, requirements, solution development and proposed solutions.',
      'Document and demonstrate solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.',
      'Prepare and install solutions by determining and designing system specifications, standards and programming.',
      'Improve operations by conducting systems analysis; recommending changes in policies and procedures.',
      "Support and develop software engineers by providing advice, coaching and educational opportunities.",
      'Mentor junior and mid-level engineers.',
      'Collaborate with team to brainstorm and create new products.',
      'Make informed decisions quickly and taking ownership of services and applications at scale',
    ],
    projects: [
      {
        project: 'Payluy',
        link: 'https://payluy.com.kh/'
      },
      {
        project: 'mWallet',
        link: 'https://www.proximax.ltd/en/solutions/mwallet'
      },
    ],
    skills: [
      'Angular',
      'Ionic',
      'IPFS',
      'AWS',
      'Blockchain',
      'NestJS',
      'MongoDB',
    ]
  },
  {
    title: "NEM Blockchain",
    role: "Lead Web Developer",
    description: "Build websites for NEM's apps and clients. This was my first lead role.",
    link: "https://nem.io",
    logo: "/react-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'Oct 2017 - Sep 2018',
    desc: [
      'Manage a team of web developers.',
      'Sees overall progress of web projects.',
      'Keep track of all projects, progress and outcomes.',
      'Developed websites for NEM clients, partners, etc.',
      'Ensure good quality of the outcome of the projects.',
    ],
    projects: [],
    skills: [
      'Angular',
      'Ionic',
      'IPFS',
      'AWS',
      'Blockchain',
      'NestJS',
      'MongoDB',
    ]
  },
  {
    title: "Donor.com Software Solutions",
    role: "PHP Web Developer",
    description: "My first job as an official developer. I got hired as a web developer. I was assigned to develop websites for clients using PHP and MySQL. Also, assigned to developer internal apps for the company.",
    link: "https://www.donor.com/",
    logo: "/react-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'May 2017 - May 2018',
    desc: [
      'Developed website projects for the company.',
      'Ensure good quality of the outcome of the projects.',
      'Keep track of all projects, progress and outcomes.',
    ],
    projects: [],
    skills: [
      'PHP',
      'CodeIgniter',
    ]
  },
  {
    title: "California Clothing, Inc. (Guess? Philippines)",
    role: "Systems Administrator",
    description: "First job after graduating college. I was hired as a systems administrator by a clothing company. Started with answering calls from employees within HQ and outside HQ that have issues with the application that they are using within the company. And after a few months, I was asked to develop the internal helpdesk and audit systems. I wasn't happy with my role and I really wanted to be a developer so I looked for a developer job after finishing my projects in the company.",
    link: "https://cciphils.com/",
    logo: "/react-logo.svg",
    logoWidth: 14,
    logoHeight: 14,
    dates: 'Aug 2016 - Apr 2017',
    desc: [
      'Develop, test, evaluate, implement and recommend point of automation to address manual procedures as assigned by the immediate superior using PHP.',
      'Administer and maintain the application servers on a daily basis to have a stable system infrastructure within the organization.',
      'Support employees within HQ and outside of HQ with their queries regarding the internal applications.',
    ],
    projects: [],
    skills: [
      'PHP',
      'CodeIgniter',
    ]
  },
]