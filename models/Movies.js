const mongoose = require("mongoose");

const MoviesSchema = new  mongoose.Schema({
    image:{
        type:String,
        required:true,
    
    },
    title:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        required:true,
    },
    bimage:{
        type:String,
        required:true,
    }  
},{timeStamps:true}
);

module.exports = mongoose.model("movies", MoviesSchema);

