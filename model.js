
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Blog schema
const blogSchema = new Schema({
    author:String,
    title:String,
    content:String,
    year:Number
});


// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

// Export the Blog model
module.exports = Blog;
















module.exports = Blog;

