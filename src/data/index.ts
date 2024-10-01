export enum ProjectCategory {
  Tools = "tools",
  Webdesign = "webdesign",
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  date: string;
  description: string;
  cover: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    id: 5,
    name: "MetaTags for Frameworks",
    slug: "metatags-for-frameworks",
    date: "Avril 2024",
    description:
      "L'outil pour ajouter des métadonnées à votre framework. Gérez sans effort le référencement, le partage social et les intégrations de vos applications Web.",
    cover: "/images/metatags.webp",
    category: ProjectCategory.Tools,
  },
  {
    id: 10,
    name: "baudelAIre",
    slug: "baudelaire",
    date: "Janvier 2024",
    description:
      "Générateur de poème avec IA (Mistral).",
    cover: "/images/baudelaire.webp",
    category: ProjectCategory.Tools,
  },
  {
    id: 13,
    name: "BEL",
    slug: "bel",
    date: "Décembre 2023",
    description:
      "Site vitrine pour l'entreprise Bureau d'Études Legavre.",
    cover: "/images/bel.png",
    category: ProjectCategory.Webdesign,
  },
  {
    id: 14,
    name: "zLawyer",
    slug: "zlawyer",
    date: "Décembre 2022",
    description:
      "Site vitrine pour l'entreprise zLawyer, logiciel de facturation de cabinets d'avocats.",
    cover: "/images/zlawyer.webp",
    category: ProjectCategory.Webdesign,
  },

];