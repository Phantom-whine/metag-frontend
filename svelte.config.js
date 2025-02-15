import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        vite: {
            build: {
                rollupOptions: {
                    external: ['js-cookie'],
                },
            },
        },
    },
};

export default config;
