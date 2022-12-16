const mongoose = require('mongoose');

//Schema
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: false,
        },
        dateCreated: {
            type: String,
            required: true,
            default: Date.now
        },
        subscription: {
            type: Boolean,
            required: false,
        } 
       }
    
);

//Model
const UserModel = mongoose.model('users', UserSchema);

// Export the model
module.exports = UserModel;