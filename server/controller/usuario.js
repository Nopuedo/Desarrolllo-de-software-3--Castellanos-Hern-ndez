var SchemaUsuariodb = require('../model/usuario');

//listado de usuarios

exports.findUsuario = (req, res) => {
    SchemaUsuariodb.find({}, { name: 1, correo: 1, rol: 1, sucursal: 1, _id: 0 })
        .then(Usuario => {
            res.send(Usuario)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error occurred while retriving user information" })
        })
}

//Crear nuevo usuario
exports.createUsuario = (req, res) => {
    //verificar apartados
    if (!req.body) {
        res.status(400).send({ message: "Los apartados no pueden estar vacios" });
        return;
    }
    //nuevo usuario
    const Usuario = new SchemaUsuariodb({
        nombre: req.body.nombre,
        genero: req.body.genero,
        correo: req.body.correo,
        edad: req.body.edad,
        rol: req.body.rol,
        sucursal: req.body.sucursal
    })

    //guardar usuario en la base de datos

    Usuario
        .save(Usuario)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "No se encontro el usuario"
            })
        })
}

//actualizacion de usuario

exports.updateUsuario = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Los apartados no pueden estar vacios" })
    }
    const id = req.params.id;
    SchemaUsuariodb.findByIdAndUpdate(id, req.body, { UserFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede actualizar el usuario con la ${id}. El no encontro al usuario!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al actualizar la informaci[on" })
        })
}

//detalles de usuario

exports.findUsuariodetalle = (req, res) => {

    const id = req.params.id;
    SchemaUsuariodb.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontro a un usuario con la id: " + id })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al llamar al usuario con esta id: " + id })
        })
}