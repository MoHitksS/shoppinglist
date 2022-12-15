const mongoose = require('mongoose');
const bookmarkSchema = mongoose.Schema({
    title: { type: String },
    quantity: { type: Number },
    priority: { type: String },
    datetime: { type: String },
    description: { type: String },
}, { timestamps: true })

const BookmarkModel = mongoose.model('bookmarks', bookmarkSchema);

module.exports = {
    BookmarkModel
}