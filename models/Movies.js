const mongoose = require("mongoose");

const MoviesSchema= mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    date:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    bimage:{
        type:String,
    } 
});

const MoviesModel= mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;