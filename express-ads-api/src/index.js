const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./DataBase/Module')
const   users = require('./DataBase/databse')

const app = express()
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
// using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send("ads");
  });
  

//   const string = "mongodb+srv://userInformetion:student@147@cluster0.szsgjwe.mongodb.net/?retryWrites=true&w=majority"
const string ="mongodb+srv://userinfo:admin@123@cluster0.gmpga4f.mongodb.net/?retryWrites=true&w=majority";

   mongoose.connect(string, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log('connect')).catch((error)=>console.log(error)) ;


// app.post('/datapost', (req, res) => {
//    let user = new User({        name: req.body.name,        age: req.body.age     });
//    console.log(user)
//     user.save();
//     res.send(user);
//   });
app.use('/dataPost',users)

  // app.get('/dataget',(req, res)=>{
  //   User.find({}, function (err, allDetails) {
  //       if (err) {
         
  //           console.log(err);
  //       } else {
       
  //           res.send(allDetails)
  //       }
  //   })
    
  // })
app.listen(4000,()=>{
    console.log('server is runnig on port 4000')
})
////myuserinfo;
//username:userinfo;
//passwprd : admin@123
///https://vegibit.com/node-js-mongodb-user-registration/