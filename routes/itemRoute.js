const mongoose = require('mongoose');

const express = require('express')

const restaurant = require('../model/hotel.schema,js')
const item = require('../model/item.schema.js')

const app = express.Router();

app.get('/:id',async (req,res) =>{
    try{
        const item = await item.findById(req.params.id);
        if(!item) return res.send('item not found')
        res.json(item);

    }catch(err){

    }
})




module.exports = app;
















