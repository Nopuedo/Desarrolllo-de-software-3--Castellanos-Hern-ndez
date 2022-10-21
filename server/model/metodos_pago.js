const mongoose = require('mongoose');

var schemaMetodoPago = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true

    },
    codigo: {
        type: String,
        required: true,
        unique: true

    }

}, {
    timestamps: true
})

const SchemaMetodoPagodb = mongoose.model('schemaMetodoPagodb', schemaMetodoPago)

module.exports = SchemaMetodoPagodb;