const argv = require('./config/yargs').argv;
const colors = require('colors')
const Pendiente = require('./por-hacer/por-hacer')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = Pendiente.crear(argv.descripcion);
        console.log('Crear tarea por hacer.');
        console.log(tarea);
        break;
    case 'listar':
        let pendientes = Pendiente.getListado();
        for (let tarea of pendientes) {
            console.log('----Pendiente----'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.terminada);
            console.log('-----------------'.green);
        }
        console.log('Listar tarea por hacer.');
        break;
    case 'actualizar':
        let actualizado = Pendiente.actualizar(argv.descripcion, argv.terminada)
        console.log('Actualizar una tarea por hacer.');
        break;
    case 'borrar':
        let borrado = Pendiente.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido.');
}