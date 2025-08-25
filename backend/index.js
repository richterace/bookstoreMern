const express = require('express');
const app = express()

const mongoose = require('mongoose');
require('dotenv').config()

const port = process.env.PRT || 5000;




// routes
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