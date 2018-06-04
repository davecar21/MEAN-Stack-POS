var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TransactionsSchema = Schema({
    CustomersId: { type: String, require: true },
    Date: { type: Date, require: true }
});

const Transactions = mongoose.model('Transactions', TransactionsSchema);
module.exports = Transactions;