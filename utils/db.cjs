let mysql = require("mysql");

function db(sql, options, callback) {
  let myserver = mysql.createConnection({
    host: process.env.NODE_ENV === "local" ? "sh-cynosdbmysql-grp-6i42fo0o.sql.tencentcdb.com" : "10.38.104.19",
    user: "root",
    password: "rootYX123",
    database: "duDB",
    port: process.env.NODE_ENV === "local" ? 20563 : 3306,
  });

  myserver.connect();

  myserver.query(sql, options, callback);

  myserver.end();
}

module.exports = db;
