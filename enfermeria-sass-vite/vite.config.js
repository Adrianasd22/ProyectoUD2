import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // página principal del módulo
                citas: resolve(__dirname, 'citas.html'), // ejemplo
                detalle: resolve(__dirname, 'detalle-cita.html'), // ejemplo
                historia: resolve(__dirname, 'historia-clinica.html'),
                buscador: resolve(__dirname, 'buscador-pacientes.html'),
            },
        },
    },
})