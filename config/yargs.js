const descripcion = {
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.',
    demand: true
};
const terminada = {
    alias: 't',
    default: true
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea.', {
        descripcion,
        terminada
    })
    .command('borrar', 'Borrar una tarea de la lista', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}