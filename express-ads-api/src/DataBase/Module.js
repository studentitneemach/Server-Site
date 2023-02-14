const Joi = require("joi");
const mongoose = require("mongoose");

 const User = mongoose.model('userInfo', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50

     },
    email: { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
},
password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
},
 confirmpassword: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
}
}));

function validateUser(user){
    const Schema={
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        confirmpassword: Joi.string().min(5).max(255).required(),
    }
    return Joi.validate(user,Schema)
}
exports.User = User;
exports.validate = validateUser;