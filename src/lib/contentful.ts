import {createClient, type EntrySkeletonType} from 'contentful';
import type {Locale} from '../i18n/translations';

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
    extends EntrySkeletonType<ProjectFields, 'project'> {
}

const demoProjects: Record<Locale, Project[]> = {
    'nl-BE': [
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
    ],
    'en-BE': [
        {
            title: 'Renovation with a new living space',
            slug: 'living-space-renovation',
            type: 'Renovation',
            location: 'Antwerp region',
            year: 'Example',
            description: 'A carefully considered renovation, with attention to light, space and a neatly finished result.',
            services: ['Structural work', 'Renovation'],
            featured: true,
        },
        {
            title: 'An extension that fits naturally',
            slug: 'house-extension',
            type: 'Extension',
            location: 'Antwerp region',
            year: 'Example',
            description: 'An extension that respects the existing home and brings more everyday comfort.',
            services: ['Extension', 'Finishing'],
            featured: true,
        },
        {
            title: 'Complete home renovation',
            slug: 'complete-home-renovation',
            type: 'Full renovation',
            location: 'Antwerp region',
            year: 'Example',
            description: 'From first demolition to final finishing: one clear point of contact for the complete project.',
            services: ['Full renovation'],
            featured: true,
        },
    ],
};

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
export async function getProjects(locale: Locale = 'nl-BE'): Promise<Project[]> {
    if (!contentfulClient) return demoProjects[locale];

    try {
        const entries = await contentfulClient.getEntries<ContentfulProject>({
            content_type: 'project',
            include: 2,
            locale,
        });

        return entries.items.map((entry) => toProject(entry.fields));
    } catch {
        return demoProjects[locale];
    }
}

export async function getProject(slug: string, locale: Locale = 'nl-BE') {
    return (await getProjects(locale)).find((project) => project.slug === slug);
}
