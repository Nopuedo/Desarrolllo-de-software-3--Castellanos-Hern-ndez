var SchemaMetodoPagodb = require('../model/metodos_pago');

'//Metodos de pago//'

exports.createMetodo_Pago = (req, res) => {
    //verificar apartados
    if (!req.body) {
        res.status(400).send({ message: "Los apartados no pueden estar vacios" });
        return;
    }

    const Metodo_Pago = new SchemaMetodoPagodb({
        nombre: req.body.nombre,
        codigo: req.body.codigo
    })

    Metodo_Pago
        .save(Metodo_Pago)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "No se pudo crear este metodo de pago"
            })
        })
}

//Listado de metodos de pagos

exports.findMetodo_Pago = (req, res) => {
    SchemaMetodoPagodb.find({}, { nombre: 1, codigo: 1, _id: 0 })
        .then(Metodo_Pago => {
            res.send(Metodo_Pago)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error al llamar los metodos de pagos" })
        })
}

//Actualizar metodo de pago

exports.updateMetodo_Pago = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Los apartados no pueden estar vacios" })
    }
    const id = req.params.id;
    SchemaMetodoPagodb.findByIdAndUpdate(id, req.body, { UserFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede actualizar el metodo de pago con la id: ${id}. No se encontro el metodo de pago!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al llamar el metodo de pago" })
        })
}

//Eliminar metodo de pago

exports.deleteMetodo_Pago = (req, res) => {
    const id = req.params.id;

    SchemaMetodoPagodb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ send: `No se puede eliminar el metodo de pago con la id: ${id}` })
            } else {
                res.send({
                    message: "El metodo de pago se elimino correctamente!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eleminar el metodo de pago con la id: " + id
            })
        })
}