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
<<<<<<< HEAD
                triaje: resolve(__dirname, 'triaje.html')
=======
                triaje: resolve(__dirname, 'triaje.html'),
<<<<<<< HEAD
                // etc.
<<<<<<< HEAD
=======
                sala: resolve(__dirname, 'sala-espera.html'),
>>>>>>> e86efef9d6331f20f1af59f2a87251a17411146d
=======
>>>>>>> b3b6e544436eda512040e6b84ebc0769c913df6b
>>>>>>> 909371aaed8ccdace1beca1c5fa38915fb365375
            },
        },
    },
});
