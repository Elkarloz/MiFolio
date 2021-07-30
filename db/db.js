const mysql = require("mysql");

/* const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mifolio",
}); */

const mysqlConnection = mysql.createConnection({
  host: "baxeex3gnzlbex2mmthf-mysql.services.clever-cloud.com",
  user: "uf5ngc0cd8f817go",
  password: "vAuDLy141vzXSTCvojZz",
  database: "baxeex3gnzlbex2mmthf",
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Db conected");
  }
});

module.exports = mysqlConnection;
