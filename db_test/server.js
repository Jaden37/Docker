'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


const { Pool, Client } = require('pg')
const client = new Pool({
  user: 'foo',
  host: 'pgsql',
  database: 'db',
  password: 'foobar',
  port: 5432,
})

// App
const app = express();
app.get('/', (req, res) => {
  const sql = "SELECT * FROM foodtruck";
  client.query(sql, [], (err, result) => {
    if (err) {
      return console.error(err.message);
    }
    res.send(result.rows);
  });
});

app.get('/data', (req, res) => {
  res.send(getAll(client));
});

app.get('/insert', (req, res) => {
  res.send(insert(client));
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

