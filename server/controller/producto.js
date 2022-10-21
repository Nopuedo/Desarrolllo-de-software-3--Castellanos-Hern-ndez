var SchemaProductodb = require('../model/producto');

'//productos//'


exports.createProducto = (req, res) => {
    //verificar apartados
    if (!req.body) {
        res.status(400).send({ message: "Los apartados no pueden estar vacios" });
        return;
    }

    const Producto = new SchemaProductodb({
        nombre: req.body.nombre,
        sku: req.body.sku,
        sucursal: req.body.sucursal,
        precio: req.body.precio,
        status: req.body.status
    })

    Producto
        .save(Producto)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "No se pudo crear este metodo de pago"
            })
        })
}

//Listado de productos

exports.findProducto = (req, res) => {
    SchemaProductodb.find({}, { nombre: 1, precio: 1, status: 1, _id: 0 })
        .then(Producto => {
            res.send(Producto)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error al llamar los productos" })
        })
}

//Actualizar producto

exports.updateProducto = (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Los apartados no pueden estar vacios" })
    }
    const id = req.params.id;
    SchemaProductodb.findByIdAndUpdate(id, req.body, { UserFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No se puede actualizar el producto con la id: ${id}. No se encontro el metodo de pago!` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al llamar el productos" })
        })
}

//Eliminar producto

exports.deleteProducto = (req, res) => {
    const id = req.params.id;

    SchemaProductodb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ send: `No se puede eliminar el productos con la id: ${id}` })
            } else {
                res.send({
                    message: "El productos se elimino correctamente!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eleminar elproductos con la id: " + id
            })
        })
}

//Detalles de producto

exports.findProductodetalle = (req, res) => {

    const id = req.params.id;
    SchemaProductodb.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontro a un productos con la id: " + id })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error al llamar al productos con esta id: " + id })
        })
}