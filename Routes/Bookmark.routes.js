const { Router } = require('express');
const { BookmarkModel } = require('../Models/Bookmark.model');
const { ProductModel } = require('../Models/Product.model');
const Bookmarks = Router();


Bookmarks.post('/add', async (req, res) => {
    const { title } = req.body
    const check = await ProductModel.findOne({ title: title })
    if(check){
        const {title, quantity, description, datetime, priority } = check;
        const bookmark = new BookmarkModel({
            title,
            quantity,
            description,
            datetime,
            priority
        });
        await bookmark.save();
        res.send('Item Bookmarked Successfully');
    }
    
})

Bookmarks.get('/', async (req, res) => {
    const bookmark = await BookmarkModel.find()
    res.send({ data: bookmark });
})

module.exports = {
    Bookmarks
}
