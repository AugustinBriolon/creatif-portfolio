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
    date: "7 avril 2024",
    description:
      "L'outil pour ajouter des métadonnées à votre framework. Gérez sans effort le référencement, le partage social et les intégrations de vos applications Web.",
    cover: "/images/metatags.webp",
    category: ProjectCategory.Tools,
  },
  
];