'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const uri = "mongodb://my_user:password123@mongodb:27017/my_database";

const client = new MongoClient(uri);

async function insert(client){
  var result;
  try {
    
    await client.connect();
    var database = client.db("my_database");
    var collection = database.collection("customers");
    
    var doc = { name: "Jules", town: "Kanto"};
    result = collection.insertOne(doc);

  } catch (e) {
    console.error(e);
    result = e;
  } finally {
     await client.close();
  }

  return result;
}

async function getAll(client){
  var result;
  try {
    
    // await client.connect();
    var database = client.db("my_database");
    var collection = database.collection("customers");
    
    result = await collection.find({});

  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }

  return result;
}

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/data', (req, res) => {
  res.send(getAll(client));
});

app.get('/insert', (req, res) => {
  res.send(insert(client));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

