var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CustomersSchema = Schema({
    FirstName: { type: String, require: true },
    MiddleName: { type: String, require: true },
    LastName: { type: String, require: true },
    Age: { type: Number, require: true },
    Gender: { type: Number, require: true },
    MobileNumber: { type: Number, require: true },
});

const Customers = mongoose.model('Customers', CustomersSchema);
module.exports = Customers;