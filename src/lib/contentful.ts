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

// No SDK dependency: production content uses these env variables; samples keep local builds useful.
const demoProjects: Project[] = [
    {
        title: 'Renovatie met nieuwe leefruimte',
        slug: 'renovatie-leefruimte',
        type: 'Verbouwing',
        location: 'Regio Antwerpen',
        year: 'Voorbeeld',
        description: 'Een zorgvuldig uitgewerkt renovatieproject, met aandacht voor licht, ruimte en een propere uitvoering.',
        services: ['Ruwbouw', 'Renovatie'],
        featured: true
    },
    {
        title: 'Aanbouw die natuurlijk aansluit',
        slug: 'aanbouw-woonhuis',
        type: 'Aanbouw',
        location: 'Regio Antwerpen',
        year: 'Voorbeeld',
        description: 'Een uitbreiding die het bestaande huis respecteert en dagelijks meer wooncomfort brengt.',
        services: ['Aanbouw', 'Afwerking'],
        featured: true
    },
    {
        title: 'Totaalrenovatie woning',
        slug: 'totaalrenovatie-woning',
        type: 'Totaalrenovatie',
        location: 'Regio Antwerpen',
        year: 'Voorbeeld',
        description: 'Van de eerste afbraak tot de laatste afwerking: één helder aanspreekpunt voor het volledige traject.',
        services: ['Totaalrenovatie'],
        featured: true
    },
];

export async function getProjects(): Promise<Project[]> {
    const space = import.meta.env.CONTENTFUL_SPACE_ID;
    const token = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;
    if (!space || !token) return demoProjects;
    try {
        const res = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/entries?content_type=project&include=2`, {headers: {Authorization: `Bearer ${token}`}});
        if (!res.ok) throw new Error('Contentful niet beschikbaar');
        const data = await res.json();
        return data.items.map((item: any) => ({
            title: item.fields.title,
            slug: item.fields.slug,
            type: item.fields.projectType,
            location: item.fields.location,
            year: item.fields.year,
            description: item.fields.description,
            services: item.fields.services ?? [],
            featured: item.fields.featured ?? false
        }));
    } catch {
        return demoProjects;
    }
}

export async function getProject(slug: string) {
    return (await getProjects()).find((project) => project.slug === slug);
}
