var SchemaRolesdb = require('../model/roles');

'//Roles//'
//crear roles

exports.createRol = (req, res) => {
    //verificar apartados
    if (!req.body) {
        res.status(400).send({ message: "Los apartados no pueden estar vacios" });
        return;
    }
    //nuevo usuario
    const Rol = new SchemaRolesdb({
        nombre: req.body.nombre,
        codigo: req.body.codigo
    })

    //guardar usuario en la base de datos

    Rol
        .save(Rol)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "No se puedo guardar el rol en la base de datos"
            })
        })
}

//Listado de roles
exports.findRoles = (req, res) => {
    SchemaRolesdb.find({}, { nombre: 1, codigo: 1, _id: 0 })
        .then(Rol => {
            res.send(Rol)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error al llamar los roles" })
        })
}