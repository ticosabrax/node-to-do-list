const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar')
    .command('crear', 'Crear una actividad', { descripcion })
    .command('actualizar', 'Actualiza una tarea', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}