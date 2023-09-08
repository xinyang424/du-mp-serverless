const Storage_Bucket_Url = require("../config/url.cjs");

const menu = [
  {
    id: "1",
    type: "🥗炒菜",
    foods: [
      {
        id: "1-1",
        name: "西红柿炒鸡蛋",
        img: Storage_Bucket_Url + "/menu/西红柿炒鸡蛋.png",
        food_ingredients: "番茄、鸡蛋、葱花",
      },
      {
        id: "1-2",
        name: "青椒肉丝",
        img: Storage_Bucket_Url + "/menu/青椒肉丝.png",
        food_ingredients: "青椒、瘦肉丝",
      },
      {
        id: "1-3",
        name: "小炒肉",
        img: Storage_Bucket_Url + "/menu/小炒肉.png",
        food_ingredients: "尖椒、瘦肉片、蒜末",
      },
      {
        id: "1-4",
        name: "酸辣土豆丝",
        img: Storage_Bucket_Url + "/menu/酸辣土豆丝.png",
        food_ingredients: "土豆、葱段、干辣椒或小米椒",
      },
      {
        id: "1-5",
        name: "蒜蓉生菜",
        img: Storage_Bucket_Url + "/menu/蒜蓉生菜.png",
        food_ingredients: "生菜、蒜末、剁椒",
      },
      {
        id: "1-6",
        name: "花菜炒肉",
        img: Storage_Bucket_Url + "/menu/花菜炒肉.png",
        food_ingredients: "花菜、瘦肉片、青红尖椒、葱段",
      },
      {
        id: "1-7",
        name: "黄瓜炒蛋",
        img: Storage_Bucket_Url + "/menu/黄瓜炒蛋.png",
        food_ingredients: "黄瓜、鸡蛋液",
      },
      {
        id: "1-8",
        name: "青椒炒鸡肉",
        img: Storage_Bucket_Url + "/menu/青椒炒鸡肉.png",
        food_ingredients: "青椒、红椒、鸡肉",
      },
      {
        id: "1-9",
        name: "可乐鸡翅",
        img: Storage_Bucket_Url + "/menu/可乐鸡翅.png",
        food_ingredients: "鸡翅、中瓶可乐、白芝麻、葱花、葱段、姜片、柠檬汁",
      },
    ],
  },
  {
    id: "2",
    type: "🥣汤类",
    foods: [
      {
        id: "2-1",
        name: "紫菜蛋花汤",
        img: Storage_Bucket_Url + "/menu/紫菜蛋花汤.png",
        food_ingredients: "干紫菜、鸡蛋液、葱花",
      },
      {
        id: "2-2",
        name: "番茄蛋花汤",
        img: Storage_Bucket_Url + "/menu/番茄蛋花汤.png",
        food_ingredients: "番茄、鸡蛋液、葱花",
      },
      {
        id: "2-3",
        name: "丝瓜煎蛋汤",
        img: Storage_Bucket_Url + "/menu/丝瓜煎蛋汤.png",
        food_ingredients: "丝瓜、鸡蛋液",
      },
    ],
  },
  {
    id: "3",
    type: "🍜面食",
    foods: [
      {
        id: "3-1",
        name: "番茄煎蛋火腿片焖面",
        img: Storage_Bucket_Url + "/menu/番茄煎蛋火腿片焖面.png",
        food_ingredients: "番茄、鸡蛋、火腿、活面",
      },
      {
        id: "3-2",
        name: "豆角五花肉焖面",
        img: Storage_Bucket_Url + "/menu/豆角焖面.png",
        food_ingredients: "四季豆、五花肉或瘦肉、活面",
      },
    ],
  },
  {
    id: "4",
    type: "🍚炒饭",
    foods: [
      {
        id: "4-1",
        name: "蛋炒饭",
        img: Storage_Bucket_Url + "/menu/蛋炒饭.png",
        food_ingredients: "米饭、鸡蛋、葱花",
      },
      {
        id: "4-2",
        name: "扬州炒饭",
        img: Storage_Bucket_Url + "/menu/扬州炒饭.png",
        food_ingredients: "米饭、鸡蛋、玉米粒、豌豆、火腿丁",
      },
      {
        id: "4-3",
        name: "虾仁炒饭",
        img: Storage_Bucket_Url + "/menu/虾仁炒饭.png",
        food_ingredients: "虾、豌豆、胡萝卜丁、玉米粒",
      },
    ],
  },
];

module.exports = menu;
