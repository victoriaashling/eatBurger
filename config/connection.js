const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "cupcakesDB"
});

connection.connect(err => {
    if (err) {
        return console.log("Error Connecting: " + err.stack);
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;