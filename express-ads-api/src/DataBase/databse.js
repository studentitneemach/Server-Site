const {validate, User} = require('./Module');
const express = require('express');
const router = express.Router();
const bcrypt= require('bcrypt')

router.post('/dataPost',async(req,res)=>{
const {error} = validate(req.body)
if(error){
    return res.status(400).send(error.details[0].message)
}
let user= await User.findOne({email :req.body.email})
if(user){
    return res.status(400).send("that User already Exist ")
}else{

    user= new User(req.body,["name","email","password","confirmpassword"])
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt)
    user.confirmpassword = await bcrypt.hash(user.confirmpassword,salt)
    await user.save();
    res.send(user)
}
})

module.exports = router