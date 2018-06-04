var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OrdersSchema = Schema({
    TransactionsId: { type: Number, require: true },
    ProductsId: { type: Number, require: true },
    Quantity: { type: Number, require: true }
});

const Orders = mongoose.model('Orders', OrdersSchema);
module.exports = Orders;