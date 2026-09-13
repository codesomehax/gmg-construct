export const locales = ['nl-BE', 'en-BE'] as const;
export type Locale = (typeof locales)[number];

export const localePaths: Record<Locale, string> = {
    'nl-BE': '',
    'en-BE': '/en',
};

const shared = {
    companyName: 'G.M.G. Construct GCV',
    languageLabel: 'Taal',
};

export const translations = {
    'nl-BE': {
        ...shared,
        locale: 'nl-BE',
        languageName: 'Nederlands',
        switchToLanguage: 'English',
        skipToContent: 'Spring naar inhoud',
        navigation: {
            services: 'Diensten',
            projects: 'Projecten',
            about: 'Over ons',
            process: 'Werkwijze',
            contact: 'Contact',
            contactCta: 'Vraag een gesprek aan',
        },
        home: {
            metaTitle: 'G.M.G. Construct GCV | Bouwen met zorg',
            metaDescription:
                'G.M.G. Construct is uw betrokken partner voor verbouwingen, renovaties en degelijk maatwerk in de regio Antwerpen.',
            heroEyebrow: 'G.M.G. Construct GCV',
            heroTitle: ['Degelijk gebouwd.', 'Persoonlijk begeleid.'],
            heroText:
                'Voor verbouwingen en renovaties waar helder overleg, vakkennis en een verzorgde afwerking centraal staan.',
            heroCta: 'Bespreek uw plannen',
            heroLink: 'Bekijk realisaties',
            heroCaption:
                'Klein genoeg voor persoonlijk contact. Ervaren genoeg voor een doordachte uitvoering.',
            servicesEyebrow: 'Wat we doen',
            servicesTitle: 'Van eerste idee tot een stevig eindresultaat.',
            servicesText:
                'We denken mee over de juiste aanpak en houden de lijnen kort tijdens de uitvoering.',
            services: [
                ['Verbouwingen', 'Uw woning aanpassen aan hoe u vandaag wilt wonen, met respect voor wat er al staat.'],
                ['Renovaties', 'Een grondige opfrissing of totaalrenovatie, zorgvuldig gepland en degelijk uitgevoerd.'],
                ['Aanbouwen', 'Meer plaats, meer licht en een uitbreiding die vanzelfsprekend bij uw huis hoort.'],
            ],
            discoverMore: 'Ontdek meer',
            projectsEyebrow: 'Recente realisaties',
            projectsTitle: 'Werk waar we graag achter staan.',
            projectsText:
                'Hier ziet u een selectie van projecten. Voeg uw eigen realisaties eenvoudig toe via het CMS.',
            allProjects: 'Alle projecten',
            projectImagePlaceholder: 'Projectfoto toe te voegen',
            aboutEyebrow: 'Over G.M.G.',
            aboutTitle: 'U spreekt met de mensen die het werk maken.',
            aboutText:
                'G.M.G. Construct is een kleinschalig bouwbedrijf. Dat betekent: rechtstreeks contact, korte beslissingen en een ploeg die zich verantwoordelijk voelt voor het eindresultaat.',
            aboutArt: 'Een kleine ploeg. Eén duidelijke standaard.',
            meetUs: 'Maak kennis',
            processEyebrow: 'Onze werkwijze',
            processTitle: 'Duidelijkheid, van bij de start.',
            process: [
                ['Luisteren', 'We bespreken uw plannen, verwachtingen en de mogelijkheden op locatie.'],
                ['Afstemmen', 'U krijgt een heldere aanpak als basis voor het verdere traject.'],
                ['Uitvoeren', 'We bouwen zorgvuldig en houden u betrokken bij de belangrijke momenten.'],
                ['Opleveren', 'We ronden pas af wanneer het resultaat klopt tot in het detail.'],
            ],
            contactEyebrow: 'Uw plannen bespreken?',
            contactTitle: ['Een goed project begint met een', 'goed gesprek.'],
            contactText:
                'Vertel ons kort wat u voor ogen hebt. We nemen zo snel mogelijk persoonlijk contact met u op.',
            nameLabel: 'Naam',
            emailLabel: 'E-mailadres',
            messageLabel: 'Waarmee kunnen we helpen?',
            submit: 'Verstuur uw vraag',
            formNote:
                'Dit formulier is een ontwerpvoorbeeld. Koppel het aan uw e-maildienst of formulierverwerker vóór publicatie.',
        },
        footer: {
            summary: 'In één oogopslag',
            message: 'Een kleine ploeg met een grote zorg voor degelijk werk.',
            contactPlaceholder: 'Contactgegevens worden binnenkort toegevoegd.',
            contactLink: 'Neem contact op',
            rights: 'Alle rechten voorbehouden',
        },
    },
    'en-BE': {
        ...shared,
        locale: 'en-BE',
        languageName: 'English',
        switchToLanguage: 'Nederlands',
        skipToContent: 'Skip to content',
        navigation: {
            services: 'Services',
            projects: 'Projects',
            about: 'About us',
            process: 'Our approach',
            contact: 'Contact',
            contactCta: 'Discuss your plans',
        },
        home: {
            metaTitle: 'G.M.G. Construct GCV | Built with care',
            metaDescription:
                'G.M.G. Construct is your personal partner for renovations, extensions and quality workmanship in the Antwerp region.',
            heroEyebrow: 'G.M.G. Construct GCV',
            heroTitle: ['Built to last.', 'Personally guided.'],
            heroText:
                'For renovations and extensions where clear communication, craftsmanship and a carefully finished result come first.',
            heroCta: 'Discuss your plans',
            heroLink: 'View our work',
            heroCaption:
                'Small enough for personal contact. Experienced enough for a considered delivery.',
            servicesEyebrow: 'What we do',
            servicesTitle: 'From first idea to a solid end result.',
            servicesText:
                'We help shape the right approach and keep communication straightforward throughout the works.',
            services: [
                ['Renovations', 'Adapting your home to the way you want to live today, while respecting what is already there.'],
                ['Full refurbishments', 'A thorough refresh or a complete renovation, planned carefully and built properly.'],
                ['Extensions', 'More space, more light, and an extension that feels naturally part of your home.'],
            ],
            discoverMore: 'Find out more',
            projectsEyebrow: 'Recent work',
            projectsTitle: 'Work we are proud to stand behind.',
            projectsText:
                'A selection of projects. Add your own completed work easily through the CMS.',
            allProjects: 'All projects',
            projectImagePlaceholder: 'Project photo to be added',
            aboutEyebrow: 'About G.M.G.',
            aboutTitle: 'You speak directly with the people doing the work.',
            aboutText:
                'G.M.G. Construct is a small construction company. That means direct contact, quick decisions and a team that takes responsibility for the finished result.',
            aboutArt: 'A small team. One clear standard.',
            meetUs: 'Meet the team',
            processEyebrow: 'Our approach',
            processTitle: 'Clarity from the very beginning.',
            process: [
                ['Listening', 'We discuss your plans, expectations and the possibilities on site.'],
                ['Aligning', 'You receive a clear approach as the basis for the next steps.'],
                ['Building', 'We work carefully and keep you involved at important moments.'],
                ['Handing over', 'We only finish when the result is right down to the detail.'],
            ],
            contactEyebrow: 'Discuss your plans?',
            contactTitle: ['A good project starts with a', 'good conversation.'],
            contactText:
                'Tell us briefly what you have in mind. We will get in touch with you personally as soon as possible.',
            nameLabel: 'Name',
            emailLabel: 'Email address',
            messageLabel: 'How can we help?',
            submit: 'Send your enquiry',
            formNote:
                'This form is an example. Connect it to your email service or form provider before publication.',
        },
        footer: {
            summary: 'At a glance',
            message: 'A small team with a great deal of care for solid work.',
            contactPlaceholder: 'Contact details will be added soon.',
            contactLink: 'Get in touch',
            rights: 'All rights reserved',
        },
    },
} as const;

export function getTranslation(locale: Locale) {
    return translations[locale];
}
