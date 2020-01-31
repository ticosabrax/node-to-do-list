//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.descripcion));
        break;

    case 'listar':
        let listadoPorHacer = porHacer.getListado();
        for (let tarea of listadoPorHacer) {
            console.log('===========Por Hacer============'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('================================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}