//////////////////////////////////
////////////// Fruits Model
///////////////////////////////////
const mongoose = require('./connection')
const { Schema, model } = mongoose //Destructuring, grabbiing model and Schema off mongoose variable
//mongoose.Schema
//mongoose.model

const fruitsSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model ('Fruit', fruitsSchema) 

module.exports = Fruit