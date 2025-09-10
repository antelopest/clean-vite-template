import { defineConfig } from 'vite';

export default defineConfig({
    base: '/base/',
    server: {
        port: 3000,
        host: true
    },
    css: {
        postcss: './postcss.config.js'
    }
});
