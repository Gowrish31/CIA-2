const mongoose = require('mongoose');

const express = require('express')

const restaurant = require('../model/hotel.schema.js')
const item = require('../model/item.schema.js')

const app = express.Router();

app.get('/:id',async (req,res) =>{
    try{
        const item = await item.findById(req.params.id);
        if(!item) return res.send('item not found')
        res.json(item);

    }catch(err){
        console.log(err);

    }
})

app.patch('/:id',async(req,res) =>{
    try{
       const item = await item.findByIdAndUpdate(req.params.id,req.body ,{new:true})
       if(!item) return res.send('error finding item')
        res.json(item)


    }catch(err){
        console.log(err);
    }
})

app.post('/',async(req,res) =>{
    try{
        const item = new restaurant(req.body);
        await item.save()
        console.log('item created')
        res.status(201).send(item)


    }catch(err){
        console.log(err);
    }
})
app.delete('/:id',async(req,res) =>{
    try{
        const item = await item.findByIdAndDelete(req.params.id,req.body ,{new:true})
        if(!item) return res.send('error finding restaurant')
            res.send('res deleted')
        
        
    }catch(err){
        console.log(err);
    }
})



module.exports = app;
















