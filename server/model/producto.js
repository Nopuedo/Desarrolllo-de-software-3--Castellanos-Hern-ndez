const mongoose = require('mongoose');
var schemaProducto = new mongoose.Schema({
    nombre: String,
    sku: {
        type: String,
        required: true,
        unique: true

    },
    sucursal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true

    },
    precio: {
        type: Number,
        required: true
    },
    status: String

}, {
    timestamps: true
})

const SchemaProductodb = mongoose.model('schemaProductodb', schemaProducto)

module.exports = SchemaProductodb;