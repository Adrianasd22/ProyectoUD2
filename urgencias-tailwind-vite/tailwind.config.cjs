<<<<<<< HEAD
module.exports = {
    content: [
        "./index.html",
        "./triaje.html",
        "./sala-espera.html",
        "./main.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './triaje.html'
    ],
    theme: {
        extend: {
            colors: {
                clinyrBlue: '#0d6efd',
                clinyrBlueLight: '#cfe2ff'
            }
        }
    },
    plugins: [],
}
>>>>>>> 909371aaed8ccdace1beca1c5fa38915fb365375
