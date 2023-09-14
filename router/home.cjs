const express = require("express");
const axios = require("axios");
const footprint = require("../data/footprint.cjs");
const trends = require("../data/trends.cjs");
const menu = require("../data/menu.cjs");
const openid = require("../data/openid.cjs");
const function_docs = require("../data/function-docs.cjs");
const mp_config = require("../config/mp-config.cjs");

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

router.post("/getuseropenid", function (req, res) {
  axios
    .get("https://api.weixin.qq.com/sns/jscode2session", {
      params: {
        appid: mp_config.appid,
        secret: mp_config.secret,
        js_code: req.body.js_code,
        grant_type: "authorization_code",
      },
    })
    .then(function (response) {
      if (response.data.errcode) {
        res.send({
          code: 500,
          errMsg: response.data.errmsg,
          data: {},
        });
      } else {
        res.send({
          code: 200,
          errMsg: "request:ok",
          data: response.data,
        });
      }
    })
    .catch(function (error) {
      res.send({
        code: 500,
        errMsg: error,
        data: {},
      });
    });
});

module.exports = router;
