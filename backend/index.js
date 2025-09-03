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

const orderRoutes = require("./src/orders/order.route")
app.use("/api/orders", orderRoutes)

const userRoutes = require("./src/users/user.route")
app.use("/api/auth", userRoutes)

const adminRoutes = require("./src/stats/admin.stats")
app.use("/api/admin", adminRoutes)


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