const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coinSchema = new Schema({
    address:String,
    amount: Number,
    price: Number,
    coinType:{
        type: String,
        enum: ["Bitcoin", "Altcoin"],
        default: "Altcoin",
        required: true
    },
    marketCap: Number,
    name: String,
    genreType:{
        type: String,
        enum: ["Defi", "NFT", "Stable","N/A"],
        default: "N/A"
    }

},{
    timestamps: true,
});
const Coin = mongoose.model('Coin',coinSchema);
module.exports = Coin;