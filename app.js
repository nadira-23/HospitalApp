const express= require('express');
const app= new express()
const morgan=require('morgan')
const fs = require('fs');
app.use(morgan('dev'));
app.use(express.json());





const basicroutes=require('./routes/basicroutes')
app.use('/basic',basicroutes);


app.listen(3000,()=>{
    console.log('server running on port 3000')
})



















app.listen(4000,()=>{
    console.log('Server runnning on PORT 4000');
})