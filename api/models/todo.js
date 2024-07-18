const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    status:{
        type: String,
        enum = ["pending","completed"],
        default:"pending"
    }
    category:{
        type: String,
        required:true
    }
    dueDate:{
        type: String,
        required: true
    }
    createdAt:{
        type:DataTransfer,
        default:Date.now()
    }
});

const Todo = mongoose.model("Todo", todoSchem);
module.exports