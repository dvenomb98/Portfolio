export interface ProjectsData {
  name: string;
  id: number;
  description: string;
  url: string;
  img: string;
  github?: string;
}

('https://i.ibb.co/09Hh7S7/regiojet.webp');

export const ProjectsData: ProjectsData[] = [
  {
    id: 52524355353,
    name: 'Regiojet',
    description:
      'I was developing front end of regiojet website, that is used by tens of thousands users.',
    url: 'www.regiojet.cz',
    img: 'https://i.ibb.co/7Jt1w1L/Scene-1-1.webp',
  },
  {
    id: 4914914104,
    name: 'MMO RPG',
    description: 'My personal, free to use web application.',
    url: 'https://testtodo-ten.vercel.app',
    img: 'https://i.ibb.co/9Hgqj1c/finaltodo.webp',
    github: 'https://github.com/dvenomb98/testtodo',
  },
];
