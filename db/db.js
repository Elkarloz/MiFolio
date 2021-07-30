const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mifolio",
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Db conected");
  }
});

module.exports = mysqlConnection;
