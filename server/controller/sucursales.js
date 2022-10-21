var SchemaSucursaldb = require('../model/sucursales');

'//Sucursales//'

//Listado de sucursales

exports.findSucursal = (req, res) => {
    SchemaSucursaldb.find({}, { nombre: 1, codigo: 1, numero: 1, status: 1, _id: 0 })
        .then(Sucursal => {
            res.send(Sucursal)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error al llamar los productos" })
        })
}

//Crear nueva sucursal

exports.createSucursal = (req, res) => {
    //verificar apartados
    if (!req.body) {
        res.status(400).send({ message: "Los apartados no pueden estar vacios" });
        return;
    }
    //nueva Sucursal
    const Sucursal = new SchemaSucursaldb({
        nombre: req.body.nombre,
        codigo: req.body.codigo,
        calle: req.body.calle,
        colonia: req.body.colonia,
        CP: req.body.CP,
        numero: req.body.numero,
        ubicacion: req.body.ubicacion,
        status: req.body.status
    })

    //guardar usuario en la base de datos

    Sucursal
        .save(Sucursal)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "No se encontro el usuario"
            })
        })
}


//Actualizar sucursal

exports.updateSucursal = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Los apartados no pueden estar vacios" })
    }
    const id = req.params.id;
    SchemaSucursaldb.findByIdAndUpdate(id, req.body, { UserFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede actualizar la Sucursal con la ${id}. El no encontro al usuario!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al actualizar la informacion" })
        })
}

//Detalles de sucursal

exports.findSucursal = (req, res) => {

    const id = req.params.id;
    SchemaSucursaldb.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontro a una Sucursal con la id: " + id })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al llamar la Sucursal con esta id: " + id })
        })
}