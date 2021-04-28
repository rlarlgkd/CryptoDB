const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const walletSchema = new Schema({
    username:String,
    address: String,
    created: Date,
},{
    timestamps: true,
});
const Wallet = mongoose.model('Wallet',walletSchema);
module.exports = Wallet;