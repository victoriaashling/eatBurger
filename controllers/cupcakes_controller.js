const cupcake = require("../models/cupcake.js");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    cupcake.selectAll(result => {
        let hbsObj = {
            cupcake: result
        };
        res.render("index", hbsObj);
    });
});

app.post("/", (req, res) => {
    let value = req.body.value;
    cupcake.insertOne(value, result => {
        res.json({ id: result.insertId });
    });
});

app.put("/:id", (req, res) => {
    let id = req.params.id;
    cupcake.updateOne(id, result => {
        res.status(200).end();
    });
});

module.exports = app;