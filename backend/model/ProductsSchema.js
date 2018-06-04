var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ProductsSchema = Schema({
    Name: { type: String, require: true },
    Description: { type: String, require: true },
    Price: { type: Number, require: true }
});

const Products = mongoose.model('Products', ProductsSchema);
module.exports = Products;