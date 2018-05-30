var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OrdersSchema = Schema({
    itemName: { type: String, require: true },
    itemDescription: { type: String, require: true },
    itemPrice: { type: Number, require: true },
    itemQuantity: { type: Number, require: true }
});

const Items = mongoose.model('Orders', OrdersSchema);
module.exports = Items;