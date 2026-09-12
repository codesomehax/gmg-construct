import { createClient, type EntrySkeletonType } from 'contentful';

export interface Project {
  title: string;
  slug: string;
  type: string;
  location: string;
  year: string;
  description: string;
  services: string[];
  featured: boolean;
  image?: string;
}

interface ProjectFields {
  title: string;
  slug: string;
  projectType: string;
  location: string;
  year: string;
  description: string;
  services?: string[];
  featured?: boolean;
}

interface ContentfulProject
  extends EntrySkeletonType<ProjectFields, 'project'> {}

const demoProjects: Project[] = [
  {
    title: 'Renovatie met nieuwe leefruimte',
    slug: 'renovatie-leefruimte',
    type: 'Verbouwing',
    location: 'Regio Antwerpen',
    year: 'Voorbeeld',
    description:
      'Een zorgvuldig uitgewerkt renovatieproject, met aandacht voor licht, ruimte en een propere uitvoering.',
    services: ['Ruwbouw', 'Renovatie'],
    featured: true,
  },
  {
    title: 'Aanbouw die natuurlijk aansluit',
    slug: 'aanbouw-woonhuis',
    type: 'Aanbouw',
    location: 'Regio Antwerpen',
    year: 'Voorbeeld',
    description:
      'Een uitbreiding die het bestaande huis respecteert en dagelijks meer wooncomfort brengt.',
    services: ['Aanbouw', 'Afwerking'],
    featured: true,
  },
  {
    title: 'Totaalrenovatie woning',
    slug: 'totaalrenovatie-woning',
    type: 'Totaalrenovatie',
    location: 'Regio Antwerpen',
    year: 'Voorbeeld',
    description:
      'Van de eerste afbraak tot de laatste afwerking: één helder aanspreekpunt voor het volledige traject.',
    services: ['Totaalrenovatie'],
    featured: true,
  },
];

const space = import.meta.env.CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.DEV
  ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

const contentfulClient =
  space && accessToken
    ? createClient({
        space,
        accessToken,
        host: import.meta.env.DEV
          ? 'preview.contentful.com'
          : 'cdn.contentful.com',
      })
    : undefined;

function toProject(fields: ProjectFields): Project {
  return {
    title: fields.title,
    slug: fields.slug,
    type: fields.projectType,
    location: fields.location,
    year: fields.year,
    description: fields.description,
    services: fields.services ?? [],
    featured: fields.featured ?? false,
  };
}

/** Retrieves published Contentful entries at build time. */
export async function getProjects(): Promise<Project[]> {
  if (!contentfulClient) return demoProjects;

  try {
    const entries = await contentfulClient.getEntries<ContentfulProject>({
      content_type: 'project',
      include: 2,
    });

    return entries.items.map((entry) => toProject(entry.fields));
  } catch {
    return demoProjects;
  }
}

export async function getProject(slug: string) {
  return (await getProjects()).find((project) => project.slug === slug);
}
