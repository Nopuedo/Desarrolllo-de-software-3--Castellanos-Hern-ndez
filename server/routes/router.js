const express = require('express');
const route = express.Router();

const controllerUser = require('../controller/usuario');
const controllerRol = require('../controller/roles');
const controllerPay = require('../controller/metodos_pago');
const controllerSub = require('../controller/sucursales');
const controllerPro = require('../controller/producto');
const controllerSell = require('../controller/ventas');


//
// Funciones de Usuario
//

route.post('/api/usuario', controllerUser.createUsuario);

route.get('/api/usuario/:id', controllerUser.findUsuariodetalle)

route.put('/api/usuario/:id', controllerUser.updateUsuario)

route.get('/api/usuario', controllerUser.findUsuario)

//
// Funciones de Roles
//

route.post('/api/roles', controllerRol.createRol);

route.get('/api/roles', controllerRol.findRoles);

//
// Funciones de Metodos de pago
//

route.post('/api/metodo_pago', controllerPay.createMetodo_Pago);

route.get('/api/metodo_pago', controllerPay.findMetodo_Pago);

route.put('/api/metodo_pago/:id', controllerPay.updateMetodo_Pago);

route.delete('/api/metodo_pago/:id', controllerPay.deleteMetodo_Pago);

//
// Funciones de Sucursales
//

route.post('/api/sucursal', controllerSub.createSucursal);

route.get('/api/sucursal', controllerSub.findSucursal);

route.put('/api/sucursal/:id', controllerSub.updateSucursal);

route.get('/api/sucursal/:id', controllerSub.findSucursal);

//
// Funciones de Productos
//

route.post('/api/producto', controllerPro.createProducto);

route.get('/api/producto', controllerPro.findProducto);

route.put('/api/producto/:id', controllerPro.updateProducto);

route.delete('/api/producto/:id', controllerPro.deleteProducto);

route.get('/api/producto/:id', controllerPro.findProductodetalle);

//
// Funciones de Venta
//

route.post('/api/venta', controllerSell.createVenta);

route.get('/api/venta', controllerSell.findVenta);

route.get('/api/venta/:id', controllerSell.findVentadetalle);

module.exports = route