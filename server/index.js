require("dotenv").config({
  path: __dirname + "/../.env"
});

const express = require("express");
  const ctrl = require('./controller')
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

app.get('/api/listings', ctrl.getListings)
app.post('/api/addListing', ctrl.addListing)
app.delete('/api/deleteListing/:id', ctrl.deleteListing)


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Got your Freaking data!");
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} licks to the center of a tootsie pop!`);
  });
});
