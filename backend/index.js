const express = require('express');
const app = express()
const cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PRT || 5000;


// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))



// routes
const bookRoutes = require('./src/books/book.route')
app.use("/api/books", bookRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.use('/', (req, res) => {
        res.send("Book Server")
    })
}

main().then(() => console.log("MongoDb connected successfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})