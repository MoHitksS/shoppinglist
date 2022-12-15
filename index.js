const express = require("express");
const cors = require('cors')
const { connection } = require("./Config/db");
const { Products } = require("./Routes/Products.routes");
const { Bookmarks } = require("./Routes/Bookmark.routes");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome To Product API')
})

app.use('/products', Products)
app.use('/bookmark', Bookmarks)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Connected To DB");
    } catch (err) {
        console.log(err);
    }
    console.log("Listening To Port", process.env.PORT);
})