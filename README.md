<<<<<<< HEAD
# Proyecto Unidad 2 - DIW
- Adriana Salazar Daza
- Nombre del Hospital: Clinyr
- URL despliegue:
- Estructura del proyecto:
<<<<<<< HEAD
=======
# Clinyr Hospital - Aplicación Web (Proyecto UD2)

## Autor
Nombre del alumno: Adriana Salazar Daza

## Título del proyecto
Simulación de aplicación web para administrar el funcionamiento de un hospital.

## URL de despliegue en GitHub Pages
- Proyecto principal (CSS puro + home):  
  `https://adrianasd22.github.io/ProyectoUD2/`
- Módulo Enfermería (Vite + Sass):  
  `https://adrianasd22.github.io/ProyectoUD2/enfermeria-sass-vite/dist/`
- Módulo Urgencias (Vite + Tailwind):  
  `https://adrianasd22.github.io/ProyectoUD2/urgencias-tailwind-vite/dist/`

## Estructura del proyecto
```
ProyectoUD2/
├─ index.html ← Login (CSS puro) Con enlace a home.html
├─ home.html ← Dashboard principal
├─ guia-estilos.html ← Guía de estilos global
├─ css/ ← CSS puro
│ ├─ main.css
│ ├─ core/
│ │ ├─ layout.css
│ │ ├─ reset.css
│ │ └─ variables.css
│ ├─ components/
│ │ ├─ buttons.css
│ │ ├─ cards.css
│ │ ├─ forms.css
│ │ └─ tables.css
│ └─ pages/
│   ├─ home.css
│   ├─ login.css
│   ├─ prescripcion-buscador.css
│   ├─ prescripcion-citas.css
│   ├─ prescripcion-detalle.css
│   └─ prescripcion-historia.css
├─ funcionalidades/
│ └─ prescripcion/ ← Funcionalidad prescripciones (CSS puro)
│   ├─ buscador-pacientes.html
│   ├─ citas-sesion.html
│   ├─ detalle-cita.html
│   └─ historia-clinica.html
├─ enfermeria-sass-vite/ ← Módulo Enfermería (Vite + Sass)
│ ├─ index.html
│ ├─ mapa-camas.html
│ ├─ medicacion.html
│ ├─ vite.config.js
│ ├─ main.js
│ ├─ styles/
│ │ ├─ _components.scss
│ │ ├─ _layout.scss
│ │ ├─ _mixins.scss
│ │ ├─ _pages.scss
│ │ ├─ _variables.scss
│ │ └─ main.scss
│ └─ dist/
├─ urgencias-tailwind-vite/ ← Módulo Urgencias (Vite + Tailwind)
│ ├─ index.html
│ ├─ triaje.html
│ ├─ sala-espera.html
│ ├─ main.js
│ ├─ vite.config.js
│ ├─ styles/
│ │ └─ main.css
│ └─ dist/
└─ README.md
```

## Descripción de funcionalidades

### 1. Prescripciones médicas (CSS puro)
- Lista de citas
- Detalle de cita + registro prescripción
- Historia clínica
- Búsqueda de pacientes

### 2. Unidad de Enfermería (Sass + Vite)
- Mapa de camas
- Hoja de medicación
- Variables, mixins y anidado para mantener estilos organizados
- Build mediante Vite (`npm run build` genera `/dist`)

### 3. Urgencias (Tailwind + Vite)
- Registro en urgencias
- Triaje
- Clases utilitarias Tailwind para diseño rápido y responsive
- Build mediante Vite (`npm run build` genera `/dist`)
>>>>>>> e86efef9d6331f20f1af59f2a87251a17411146d
=======




proyectoud2/
├─ index.html
├─ home.html
├─ guia-estilos.html
├─ css/
│  ├─ main.css
│  ├─ core/
│  │   ├─ reset.css
│  │   ├─ variables.css
│  │   └─ layout.css
│  ├─ components/
│  │   ├─ buttons.css
│  │   ├─ forms.css
│  │   ├─ cards.css
│  │   └─ tables.css
│  └─ pages/
│      ├─ login.css
│      ├─ home.css
│      ├─ guia-estilos.css
│      ├─ prescripcion-citas.css
│      ├─ prescripcion-detalle.css
│      ├─ prescripcion-historia.css
│      └─ prescripcion-buscador.css
├─ funcionalidades/
│  └─ prescripcion/
│      ├─ citas-sesion.html
│      ├─ detalle-cita.html
│      ├─ historia-clinica.html
│      └─ buscador-pacientes.html
├─ enfermeria-sass-vite/
│  ├─ index.html
│  ├─ main.js
│  ├─ vite.config.js
│  ├─ package.json
│  └─ styles/
│      ├─ main.scss
│      ├─ _variables.scss
│      ├─ _mixins.scss
│      ├─ _layout.scss
│      ├─ _components.scss
│      └─ _pages.scss
└─ urgencias-tailwind-vite/
   ├─ index.html
   ├─ triaje.html
   ├─ main.js
   ├─ tailwind.config.cjs
   ├─ postcss.config.cjs
   └─ src/main.css



Instrucciones finales de desarrollo y producción
# Enfermería
cd enfermeria-sass-vite
npm install
npm run dev       # Desarrollo
npm run build     # Producción

# Urgencias
cd ../urgencias-tailwind-vite
npm install
npm run dev
npm run build


Subir todo hospital-frontend/ a GitHub.

Acceder a módulos desde GitHub Pages:

https://USUARIO.github.io/hospital-frontend/enfermeria-sass-vite/dist/
https://USUARIO.github.io/hospital-frontend/urgencias-tailwind-vite/dist/


Linkar desde home.html:

<a href="enfermeria-sass-vite/dist/">Unidad Enfermería</a>
<a href="urgencias-tailwind-vite/dist/">Urgencias</a>
>>>>>>> 909371aaed8ccdace1beca1c5fa38915fb365375
