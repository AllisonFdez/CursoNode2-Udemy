const fs = require('fs')

let listadoPendientes = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPendientes);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar.', err)
    });
}

const cargarDB = () => {
    try {
        listadoPendientes = require('../database/data.json')
            //console.log(listadoPendientes);
    } catch (error) {
        listadoPendientes = []
    }

}

const crear = (descripcion) => {
    cargarDB();
    let Pendiente = {
        descripcion,
        terminada: false
    };
    listadoPendientes.push(Pendiente);
    guardarDB();
    return Pendiente
}

const getListado = () => {
    cargarDB();
    return listadoPendientes;
}

const actualizar = (descripcion, terminada = true) => {
    cargarDB();
    let index = listadoPendientes.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoPendientes[index].terminada = terminada;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPendientes.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listadoPendientes.length === nuevoListado.length) {
        return false;
    } else {
        listadoPendientes = nuevoListado
        guardarDB();
        return true
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}