const mongoose = require('mongoose');

var schemaSucursal = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true

    },
    calle: String,
    colonia: String,
    CP: String,
    numero: String,
    ubicacion: String,
    status: String
}, {
    timestamps: true
})

const SchemaSucursaldb = mongoose.model('schemaSucursaldb', schemaSucursal)

module.exports = SchemaSucursaldb;