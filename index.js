const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port =process.env.PORT || 5000;

// Middle Ware
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cdxsv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('database connect successfully');
        // Establish and verify connection



    } finally {
        // await client.close();
    }


}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World Your Server is Running')
})

app.listen(port, () => {
    console.log(`Running server at http://localhost:${port}`);
})