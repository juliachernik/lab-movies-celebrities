const router = require("express").Router();

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String,
        cast: [{
            type: Schema.Types.ObjectId,
            ref: 'Celebrity'
        }] // an array
    }
);
module.exports = mongoose.model("Movie", movieSchema)

//{type: mongoose.Schema.Types.ObjectId,
//ref:'Celebrities'} ,