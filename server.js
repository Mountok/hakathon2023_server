const express = require('express');
const cors = require('cors');
const regAndAuth = require('./routers/regAndAuth.route'); 
const jsonDate = require('./routers//jsonDate.route'); 

const app = express();
require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/rest-api',regAndAuth)
app.use('/rest-api',jsonDate)


const server = app.listen(process.env.PORT,(err)=>{
    !err 
    ? console.log(`Server stardet on ${process.env.PORT}`) 
    : console.log(err) 
})