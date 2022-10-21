var SchemaVentadb = require('../model/ventas');

'//Ventas//'

//Listado de ventas
exports.findVenta = (req, res) => {
        SchemaVentadb.find({}, { producto: 1, total: 1, metodo_pago: 1, _id: 0 })
            .then(Venta => {
                res.send(Venta)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error al llamar los metodos de pagos" })
            })
    }
    //Crear ventas
exports.createVenta = (req, res) => {
        //verificar apartados
        if (!req.body) {
            res.status(400).send({ message: "Los apartados no pueden estar vacios" });
            return;
        }

        const Venta = new SchemaVentadb({
            producto: req.body.producto,
            total: req.body.total,
            usuario: req.body.usuario,
            metodo_pago: req.body.metodo_pago
        })

        Venta
            .save(Venta)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "No se pudo crear este metodo de pago"
                })
            })
    }
    //Detalles de venta

exports.findVentadetalle = (req, res) => {

    const id = req.params.id;
    SchemaVentadb.findById(id)
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