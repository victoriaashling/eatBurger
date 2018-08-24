const orm = require("../config/orm.js");

const cupcake = {
    selectAll: function(cb) {
        orm.selectAll(cupcakes, (result) => {
            cb(result);
        });
    },

    insertOne: function(value, cb) {
        orm.insertOne(cupcakes, name, value, (result) => {
            cb(result);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne(cupcakes, isEaten, true, id, (result) => {
            cb(result);
        });
    }
};

module.exports = cupcake;