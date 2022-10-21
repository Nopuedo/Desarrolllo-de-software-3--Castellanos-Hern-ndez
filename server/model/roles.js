const mongoose = require('mongoose');

var schemaRoles = new mongoose.Schema({
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

const SchemaRolesdb = mongoose.model('schemaRolesdb', schemaRoles)

module.exports = SchemaRolesdb;