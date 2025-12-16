import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                triaje: resolve(__dirname, 'triaje.html'),
                sala: resolve(__dirname, 'sala-espera.html'),
            },
        },
    },
});
