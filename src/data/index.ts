export enum ProjectCategory {
  Tools = 'tools',
  Webdesign = 'webdesign',
}

interface Team {
  name: string;
  link: string;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  date: string;
  description: string;
  team?: Team[];
  cover: string;
  url: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 6,
    name: 'MetaTags for Frameworks',
    slug: 'metatags-for-frameworks',
    date: 'Avril 2024',
    description:
      "L'outil pour ajouter des métadonnées à votre framework. Gérez sans effort le référencement, le partage social et les intégrations de vos applications Web.",

    cover: '/images/metatags.webp',
    url: 'https://metatagframework.august1.dev/',
    category: ProjectCategory.Tools,
  },
  {
    id: 5,
    name: 'baudelAIre',
    slug: 'baudelaire',
    date: 'Janvier 2024',
    description: 'Générateur de poème avec IA (Mistral).',
    team: [
      {
        name: 'Nicolas Bordeaux',
        link: 'https://www.nicolasbordeaux.xyz/',
      },
      {
        name: 'Thomas Aubert',
        link: 'https://github.com/N0rooo',
      },
    ],
    cover: '/images/baudelaire.webp',
    url: 'https://baudel-ai-re.vercel.app/',
    category: ProjectCategory.Tools,
  },
  {
    id: 4,
    name: 'Find Your Meal',
    slug: 'findyourmeal',
    date: 'Janvier 2024',
    description:
      "Des aliments mais pas d'idée de repas ? Ce site est la solution !",
    cover: '/images/findyourmeal.webp',
    url: 'https://findyourmeal.august1.dev/',
    category: ProjectCategory.Tools,
  },
  {
    id: 3,
    name: 'BEL',
    slug: 'bel',
    date: 'Décembre 2023',
    description: "Site vitrine pour l'entreprise Bureau d'Études Legavre.",
    team: [
      {
        name: 'Matteo Courquin',
        link: 'https://matteo.courqu.in/',
      },
    ],
    cover: '/images/bel.webp',
    url: 'https://www.be-legavre.com/',
    category: ProjectCategory.Webdesign,
  },
  {
    id: 2,
    name: 'ToolsBox 4 Dev',
    slug: 'toolsbox4dev',
    date: 'Février 2023',
    description:
      "Site regroupant plusieurs outils utiles pour les développeurs.",
    team: [
      {
        name: 'Matteo Courquin',
        link: 'https://matteo.courqu.in/',
      },
      {
        name: 'Adel Khiter',
        link: 'https://github.com/Adelktr',
      },
    ],
    cover: '/images/toolsfordev.webp',
    url: 'https://tool4dev.vercel.app/',
    category: ProjectCategory.Tools,
  },
  {
    id: 1,
    name: 'zLawyer',
    slug: 'zlawyer',
    date: 'Décembre 2022',
    description:
      "Site vitrine pour l'entreprise zLawyer, logiciel de facturation de cabinets d'avocats.",
    team: [
      {
        name: 'Matteo Courquin',
        link: 'https://matteo.courqu.in/',
      },
    ],
    cover: '/images/zlawyer.webp',
    url: 'https://www.zlawyer.fr/logiciel-avocats/',
    category: ProjectCategory.Webdesign,
  },
];
