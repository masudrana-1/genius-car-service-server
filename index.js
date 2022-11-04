const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middle wars 
app.use(cors());
app.use(express.json());



// **************************************************** */

// dot env 
require('dotenv').config();

const username = process.env.DB_USER;
const password = process.env.DB_KEY;


// mongodb



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb://${username}:${password}@ac-klhzyeh-shard-00-00.cjxkvs1.mongodb.net:27017,ac-klhzyeh-shard-00-01.cjxkvs1.mongodb.net:27017,ac-klhzyeh-shard-00-02.cjxkvs1.mongodb.net:27017/?ssl=true&replicaSet=atlas-xtobtp-shard-0&authSource=admin&retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});




//***************************************************** */




app.get('/', (req, res) => {
    res.send('Genius car server is running');
})

app.listen(port, () => {
    console.log(`Genius car server is running on ${port}`);
})