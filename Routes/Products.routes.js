const { Router } = require('express');
const { BookmarkModel } = require('../Models/Bookmark.model');
const { ProductModel } = require('../Models/Product.model');
const Products = Router();

Products.post('/add', async (req, res) => {
    const { title } = req.body
    const check = await ProductModel.findOne({ title: title })
    if (check) {
        res.send('Product Already Exist');
    } else {
        const product = new ProductModel(req.body);
        await product.save();
        res.send('Product Added Sucessfully');
    }

})

Products.get('/', async (req, res) => {
    const product = await ProductModel.find()
    res.send({ data: product });
})


Products.post('/bookmark', async (req, res) => {
    const { title } = req.body
    const check = await ProductModel.findOne({ title: title })
    if (check) {
        const { title, quantity, description, datetime, priority } = check;
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

Products.delete('/:title', async (req, res) => {
    const { title } = req.params;
    const product = await ProductModel.deleteOne({ title: title })
    res.send('Product Deleted Successfully');
})

module.exports = {
    Products
}
