const express = require("express");
const dayjs = require("dayjs");

const openid = require("../config/openid.cjs");
const Storage_Bucket_Url = require("../config/url.cjs");
const db = require("../utils/db.cjs");

const router = express.Router();

router.get("/getdata", function (req, res) {
  const footprint_sql = "SELECT id, name, address, longitude, latitude FROM footprint;";
  const trends_sql =
    "SELECT trends.id, users.avatar, users.`name` AS 'title', trends.time, trends.tags, trends.content, trends.img_list as 'images' FROM trends LEFT JOIN users ON trends.user_id = users.id;";
  const menu_sql =
    "SELECT dish.name, dish.food_ingredients, url as 'img',menu_type AS 'type',menu_id FROM dish LEFT JOIN image on dish.img_id = image.id LEFT JOIN menu ON dish.menu_id = menu.id ORDER BY menu_id;";
  const function_docs_sql = "SELECT * FROM function_docs;";
  const query_img_sql = "SELECT url FROM image WHERE id IN(?);";

  db(footprint_sql, null, function (_, footprintData) {
    for (let i = 0; i < footprintData.length; i++) {
      footprintData[i].iconPath = "/static/icon_img/location.png";
      footprintData[i].width = 50;
      footprintData[i].height = 50;
    }
    db(trends_sql, null, function (_, trendsData) {
      for (let i = 0; i < trendsData.length; i++) {
        trendsData[i].time = dayjs(trendsData[i].time).format("YYYY-MM-DD");
        trendsData[i].avatar = Storage_Bucket_Url + trendsData[i].avatar;
        db(query_img_sql, [trendsData[i].images.split(",")], function (_, imgData) {
          trendsData[i].images = [];
          for (let j = 0; j < imgData.length; j++) {
            trendsData[i].images.push(Storage_Bucket_Url + imgData[j].url);
          }
          if (i + 1 == trendsData.length) {
            db(function_docs_sql, null, function (_, function_docsData) {
              db(menu_sql, null, function (_, menuData) {
                return res.send({
                  code: 200,
                  errMsg: "request:ok",
                  data: {
                    footprint: [...footprintData],
                    trends: [...trendsData],
                    menu: handleMenuData(menuData),
                    openid: openid,
                    function_docs: function_docsData,
                    user_openid: req.headers["x-wx-source"] ? req.headers["x-wx-openid"] : "",
                  },
                });
              });
            });
          }
        });
      }
    });
  });
});

function handleMenuData(data) {
  let menuData = [];
  for (let i = 0; i < data.length; i++) {
    if (menuData.length) {
      for (let j = 0; j < menuData.length; j++) {
        if (data[i].menu_id == menuData[j].menu_id) {
          menuData[j].foods.push({
            id: `${menuData.length}-${menuData[j].foods.length + 1}`,
            name: data[i].name,
            img: Storage_Bucket_Url + data[i].img,
            food_ingredients: data[i].food_ingredients,
          });
        } else if (j + 1 == menuData.length) {
          menuData.push({
            id: menuData.length + 1,
            type: data[i].type,
            menu_id: data[i].menu_id,
            foods: [],
          });
        }
      }
    } else {
      menuData.push({
        id: menuData.length + 1,
        type: data[i].type,
        menu_id: data[i].menu_id,
        foods: [
          {
            id: `${menuData.length + 1}-${menuData[i]?.foods.length || 0 + 1}`,
            name: data[i].name,
            img: Storage_Bucket_Url + data[i].img,
            food_ingredients: data[i].food_ingredients,
          },
        ],
      });
    }
  }
  return menuData;
}

module.exports = router;
