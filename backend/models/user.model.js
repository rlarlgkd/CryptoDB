const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    dateOfBirth:Date,
    userType:{
        type: String,
        enum: ['Miner','Trader'],
        required: true,
        default: 'Trader'
    },
    proofOfWork: Number,
    asset: Number,

},{
    timestamps: true,
});
const User = mongoose.model('User',userSchema);
module.exports = User;