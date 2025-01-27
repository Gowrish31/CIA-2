const express = require("express");
const mongoose  = require('mongoose');

const restaurantRoute = require('./routes/restaurantRoute.js');
const itemRoute = require('./routes/itemRoute.js')

app.use(express.json())

app.use('/restaurant',restaurantRoute);
app.use('/item' , itemRoute);
const port = 8080;
mongoose.connect('mongodb+srv://gowrish3:gowrish3107@cluster0.0ipca.mongodb.net/CIA2').then(()=>{
    console.log("mogoDB connected");
    app.listen(port,()=>{console.log(`sucess connected to https://localhost:${port}`)})
}).catch((err)=>{
    console.log("not connected")
})

