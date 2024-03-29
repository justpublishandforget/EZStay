const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const url = 'mongodb://127.0.0.1:27017/ezstay'

const app = express();

mongoose.connect(url);

const con = mongoose.connection;

con.on('open', function(){
    console.log('mongodb connected');
})

app.use(express.json());



global.staticpath = path.join(__dirname, "views");




app.use(express.static(staticpath));




// const userroutes = require('./routes/user');
// app.use('/user', userroutes);

app.listen(3000, function(){
    console.log('server started');
})