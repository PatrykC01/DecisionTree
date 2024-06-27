const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 3000;

const uri = "mongodb+srv://MongoDBAdmin:MongoDBP%40ssw0rd@cluster0.xqtb9pu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

app.use(cors());

app.get('/databases', async (req, res) => {
  try {
    await client.connect();
    const databasesList = await client.db().admin().listDatabases();
    res.json(databasesList.databases);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
