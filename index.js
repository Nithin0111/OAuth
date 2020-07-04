//jshint esversion :10

require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');


const app = express();






const port = 3000
app.listen(port,()=>{
    console.log('Server started on http://localhost:' , port);
})
