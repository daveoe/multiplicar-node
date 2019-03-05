// Requires
const {crearArchivo} = require('./multiplicar/multiplicar');


// This way you can enter params directly into the terminal
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));