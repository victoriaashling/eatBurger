connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM ??", tableName, (err, result) => {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    insertOne: function(tableName, colName, valueToInsert, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [tableName, colName, valueToInsert], (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows);
            cb(result);
        });
    },

    updateOne: function(tableName, colName, valueToInsert, id, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tableName, colName, valueToInsert, id], (err, result) => {
            if (err) throw err;
            console.log(result.affectedRows);
            cb(result);
        });
    }
};

module.exports = orm;