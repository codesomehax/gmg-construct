// @ts-check
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.gmgconstruct.be',
    i18n: {
        locales: ['nl-BE', 'en-BE'],
        defaultLocale: 'nl-BE',
        routing: {prefixDefaultLocale: false},
    },
});
