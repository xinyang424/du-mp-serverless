import express, { Router, Request, Response } from "express";
import axios from "axios";
import { footprint, trends, menu, openid, function_docs } from "../data";
import { appid, secret } from "../config";

const router: Router = express.Router();

router.get("/getdata", (req: Request, res: Response) => {
  return res.send({
    code: 200,
    errMsg: "request:ok",
    data: {
      footprint: [...footprint],
      trends: [...trends],
      menu: [...menu],
      openid: openid,
      function_docs: function_docs,
    },
  });
});

router.post("/getuseropenid", (req: Request, res: Response) => {
  axios
    .get("https://api.weixin.qq.com/sns/jscode2session", {
      params: {
        appid: appid,
        secret: secret,
        js_code: req.body.js_code,
        grant_type: "authorization_code",
      },
    })
    .then(response => {
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
    .catch(error => {
      res.send({
        code: 500,
        errMsg: error,
        data: {},
      });
    });
});

export default router;
