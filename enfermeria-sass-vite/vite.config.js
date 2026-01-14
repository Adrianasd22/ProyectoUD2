<<<<<<< HEAD
import { defineConfig } from 'vite';
import { resolve } from 'path';
=======
import { defineConfig } from 'vite'
import { resolve } from 'path'
>>>>>>> b3b6e544436eda512040e6b84ebc0769c913df6b

export default defineConfig({
    base: './', // rutas relativas para GitHub Pages
    build: {
        rollupOptions: {
            input: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
                main: resolve(__dirname, 'index.html'),
                camas: resolve(__dirname, 'camas.html'),
                medicacion: resolve(__dirname, 'medicacion.html'),
            },
        },
    },
});
=======
>>>>>>> 909371aaed8ccdace1beca1c5fa38915fb365375
                main: resolve(__dirname, 'index.html'), // página principal del módulo
                citas: resolve(__dirname, 'citas.html'), // ejemplo
                detalle: resolve(__dirname, 'detalle-cita.html'), // ejemplo
                historia: resolve(__dirname, 'historia-clinica.html'),
                buscador: resolve(__dirname, 'buscador-pacientes.html'),
=======
                main: resolve(__dirname, 'index.html'),
                mapa: resolve(__dirname, 'mapa-camas.html'),
                medicacion: resolve(__dirname, 'medicacion.html'),
>>>>>>> e86efef9d6331f20f1af59f2a87251a17411146d
            },
        },
    },
})
>>>>>>> b3b6e544436eda512040e6b84ebc0769c913df6b
