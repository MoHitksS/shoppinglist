const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: { type: String },
    quantity: { type: Number },
    priority: { type: String },
    datetime: { type: String },
    description: { type: String },
}, { timestamps: true })

const ProductModel = mongoose.model('products', productSchema);

module.exports = {
    ProductModel
}