const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogSchema=new Schema({
    title: {
        type: String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});
//create a model which will be based on this blog Schema
//Schema: defines structure of document
//model: surrounds and provides us with an interface to communicate with a database collection

//store model 
//name of the first arg should be singular of the blog name
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;


