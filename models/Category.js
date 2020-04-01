var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Category = new Schema({

    Category_ID:{
        type:String,
        required:true
    },
    CategoryName:{
        type:String,
        required:true
    },
    MainCategory:{
        type:String,
        required:true
    },
    Admin:{
        type:String,
        required:true
    }

});



module.exports = SMDetails;