let mysql = require("mysql");

function db(sql, options, callback) {
  let myserver = mysql.createConnection({
    host: "sh-cynosdbmysql-grp-6i42fo0o.sql.tencentcdb.com",
    // host: "10.38.104.19",
    user: "root",
    password: "rootYX123",
    database: "duDB",
    port: 20563,
    // port: 3306,
  });

  myserver.connect();

  myserver.query(sql, options, callback);

  myserver.end();
}

module.exports = db;
