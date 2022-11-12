const PORT = 8000;
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.get("/flights", (req, res) => {
  const options = {
    url: "https://239f6c7a-0f60-4344-be36-cf75e5a21e84-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures",
    headers: {
      accept: "application/json",
      "X-Cassandra-Token":
        "AstraCS:lxTJFfwcGeYdYCuWsQeNAgwi:75d8bd872bb62fc95e247c72c788f34dfef20e238e6792b8e67fff4c62d73150",
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log("running on port " + PORT));
