const express = require("express");
const footprint = require("../data/footprint.cjs");
const trends = require("../data/trends.cjs");
const menu = require("../data/menu.cjs");
const openid = require("../data/openid.cjs");
const function_docs = require("../data/function-docs.cjs");

const router = express.Router();

router.get("/getdata", function (req, res) {
  return res.send({
    code: 200,
    errMsg: "request:ok",
    data: {
      footprint: [...footprint],
      trends: [...trends],
      menu: [...menu],
      openid: openid,
      function_docs: function_docs,
      user_openid: req.headers["x-wx-source"] ? req.headers["x-wx-openid"] : "",
    },
  });
});

module.exports = router;
