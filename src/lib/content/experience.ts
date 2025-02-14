import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'SteelKiwi',
      companyUrl: 'https://steelkiwi.com/',
      role: 'Lead Full-Stack Engineer',
      started: 'november 2022',
      upto: 'september 2024',
      tasks: [
        'Implemented UI components with React & Next.js, TypeScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'Webtec',
      companyUrl: 'https://shmth.capital/',
      role: 'frontend developer intern',
      started: 'april 2023',
      upto: 'july 2023',
      tasks: [
        'Built trading platform using TradingView library.',
        'Designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'webnetics',
      companyUrl: 'https://webtec.com/',
      role: 'full-stack developer',
      started: 'auguest 2018',
      upto: 'auguest 2020',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
  ],
};
