// Requires
// Yargs helps you build interactive command line tools
// const argv = require('yargs')
//             .command('listar','Imprime en consola la tabla de multiplicar', {
//                 base: {
//                     demand: true,
//                     alias: 'b'
//                 },
//                 limite: {
//                     alias: 'l',
//                     default: 10
//                 }
//             })
//             .command('crear','Genera un archivo con la tabla de multiplicar', {
//                 base: {
//                     demand: true,
//                     alias: 'b'
//                 },
//                 limite: {
//                     alias: 'l',
//                     default: 10
//                 }
//             })
//             .help()
//             .argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar2');

let comando = argv._[0];


switch(comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));    
    
    break;

    default:
        console.log('Comando no reconocido');

}




// This way you can enter params directly into the terminal
// let argv2 = process.argv;



// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);
// console.log('Limite', argv.limite);
