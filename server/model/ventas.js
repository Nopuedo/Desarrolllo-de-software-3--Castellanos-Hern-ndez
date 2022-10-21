const mongoose = require('mongoose');

var schemaVenta = new mongoose.Schema({
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    metodo_pago: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const SchemaVentadb = mongoose.model('schemaVentadb', schemaVenta)

module.exports = SchemaVentadb;