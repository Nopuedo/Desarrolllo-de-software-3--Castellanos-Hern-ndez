const mongoose = require('mongoose');
//const Schema = new mongoose.Schema({ driver: mongoose.ObjectId });
// modelo de usuario

var schemaUsuario = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    genero: String,

    correo: {
        type: String,
        required: true,
        unique: true

    },
    edad: String,

    rol: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

    Sucursal: String
}, {
    timestamps: true
})

const SchemaUsuariodb = mongoose.model('schemaUsuariodb', schemaUsuario)

module.exports = SchemaUsuariodb;