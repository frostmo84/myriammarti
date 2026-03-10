import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://frostmo84.github.io',
    base: '/myriammarti',
    vite: {
        plugins: [tailwindcss()],
    },
});