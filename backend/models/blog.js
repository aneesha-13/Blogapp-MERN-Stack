const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let blogSchema = new Schema({
    authorid: {
        type: String
    },
    author: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    collection: 'blogs'
})
module.exports = mongoose.model('blogs', blogSchema)