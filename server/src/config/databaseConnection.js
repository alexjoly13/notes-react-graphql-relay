const MongoClient = require("mongodb").MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri =
    "mongodb+srv://dbUser:darksouls3@clustertest-xuanw.mongodb.net/test?retryWrites=true&w=majority";

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db("full-stack-server");

      if (err) {
        return callback(err);
      } else {
        return callback("DB is working");
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };
