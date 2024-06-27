//database connection
const { MongoClient } = require("mongodb");

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));

}

async function main() {
  const uri =
    "mongodb+srv://MongoDBAdmin:MongoDBP%40ssw0rd@cluster0.xqtb9pu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = { main };
