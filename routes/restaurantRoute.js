const mongoose = require('mongoose')

const express =require('express')

const app = express.Router();
const restaurant = require("../model/hotel.schema.js");
const item = require('../model/item.schema.js')

app.get('/:id',async(req,res)=>{
    try{
        const restaurant = await restaurant.findById(req.params.id);
        if(!restaurant) return res.status(404).send("res not found")
        res.json(restaurant)

    }catch(err){
        console.log("error");
        res.status(404).send(err);

    }
    
})

app.post('/',async(req,res) =>{
    try{
        const restaurant = new restaurant(req.body);
        await restaurant.save()
        console.log('res created')
        res.status(201).send(restaurant)


    }catch(err){
        console.log(err);
    }
})
app.delete('/:id',async(req,res) =>{
    try{
        const restaurant = await restaurant.findByIdAndDelete(req.params.id,req.body ,{new:true})
        if(!restaurant) return res.send('error finding restaurant')
            res.send('res deleted')
        
        
    }catch(err){
        console.log(err);
    }
})

app.patch('/:id',async(req,res) =>{
    try{
       const restaurant = await restaurant.findByIdAndUpdate(req.params.id,req.body ,{new:true})
       if(!restaurant) return res.send('error finding restaurant')
        res.json(restaurant)


    }catch(err){
        console.log(err);
    }
})
module.exports = app;