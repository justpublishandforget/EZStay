const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const crypto = require('crypto');



const secretKey = crypto.randomBytes(64).toString('hex');


const app = express();


// MongoDB connection setup
 global.url = 'mongodb://127.0.0.1:27017/ezstay'

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url);

 
  console.log('mongoose connected');
}



// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: secretKey, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 }
  }));


  app.set('view engine', 'ejs');
  
// Serve static files

global.staticpath = path.join(__dirname, "views");
app.use(express.static(staticpath));


// Routes setup
const hotelroutes = require('./routes/hotel');
app.use('/', hotelroutes);

const userroutes = require('./routes/user');
app.use('/', userroutes);


// Start the server

app.listen(3000, function(){
    console.log('server started');
})