const express = require("express");
const router = express.Router();
const axios = require("axios");
const url = process.env.API_URL;

router.get("/api/users", (req, res) => {
  console.log("Alright");
  axios
    .get(url)
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res
        .status(error.response.status)
        .send({ error: "Api call limit reached" });
    });
});

router.delete("/api/users/:id", (req, res) => {
  console.log("Alright delete");
  axios
    .delete(`${url}/${req.params.id}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res
        .status(error.response.status)
        .send({ error: "Api call limit reached" });
    });
});

router.post("/api/users", (req, res) => {
  axios
    .post(url, req.body)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error);
      res
        .status(error.response.status)
        .send({ error: "Api call limit reached" });
    });
});

module.exports = router;
