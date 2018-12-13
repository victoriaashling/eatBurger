const cupcake = require("../models/cupcake.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    cupcake.selectAll(result => {
        let hbsObj = {
            cupcake: result
        };

        res.render("index", hbsObj);
    });
});

router.post("/", (req, res) => {
    let cupcakeName = req.body.cupcakeName;

    cupcake.insertOne(cupcakeName, result => {
        res.json({ id: result.insertId });
    });
});

router.put("/:id", (req, res) => {
    let id = req.params.id;

    cupcake.updateOne(id, result => {
        res.status(200).end();
    });
});

module.exports = router;