const Storage_Bucket_Url = require("../config/url.cjs");

const menu = [
  {
    id: "1",
    type: "🥬炒素菜",
    foods: [
      {
        id: "1-1",
        name: "西红柿炒鸡蛋",
        img: Storage_Bucket_Url + "/menu/西红柿炒鸡蛋.png",
        food_ingredients: "番茄、鸡蛋、葱花",
      },
      {
        id: "1-2",
        name: "酸辣土豆丝",
        img: Storage_Bucket_Url + "/menu/酸辣土豆丝.png",
        food_ingredients: "土豆、葱段、干辣椒或小米椒",
      },
      {
        id: "1-3",
        name: "蒜蓉生菜",
        img: Storage_Bucket_Url + "/menu/蒜蓉生菜.png",
        food_ingredients: "生菜、蒜末、剁椒",
      },
      {
        id: "1-4",
        name: "黄瓜炒蛋",
        img: Storage_Bucket_Url + "/menu/黄瓜炒蛋.png",
        food_ingredients: "黄瓜、鸡蛋液",
      },
      {
        id: "1-5",
        name: "地三鲜",
        img: Storage_Bucket_Url + "/menu/地三鲜.png",
        food_ingredients: "土豆、青椒、茄子",
      },
    ],
  },
  {
    id: "2",
    type: "🥩炒荤菜",
    foods: [
      {
        id: "2-1",
        name: "青椒肉丝",
        img: Storage_Bucket_Url + "/menu/青椒肉丝.png",
        food_ingredients: "青椒、瘦肉丝",
      },
      {
        id: "2-2",
        name: "小炒肉",
        img: Storage_Bucket_Url + "/menu/小炒肉.png",
        food_ingredients: "尖椒、瘦肉片、蒜末",
      },
      {
        id: "2-3",
        name: "花菜炒肉",
        img: Storage_Bucket_Url + "/menu/花菜炒肉.png",
        food_ingredients: "花菜、瘦肉片、青红尖椒、葱段",
      },
      {
        id: "2-4",
        name: "手撕包菜炒肉丝",
        img: Storage_Bucket_Url + "/menu/手撕包菜炒肉丝.png",
        food_ingredients: "包菜、瘦肉丝、葱段、小米辣或者干辣椒，些许蒜末",
      },
      {
        id: "2-5",
        name: "肉片娃娃菜",
        img: Storage_Bucket_Url + "/menu/肉片娃娃菜.png",
        food_ingredients: "娃娃菜、瘦肉片、些许蒜末、葱花",
      },
      {
        id: "2-6",
        name: "四季豆炒肉丝",
        img: Storage_Bucket_Url + "/menu/四季豆炒肉丝.png",
        food_ingredients: "四季豆、瘦肉丝、些许蒜末",
      },
    ],
  },
  {
    id: "3",
    type: "🍗鸡肉类",
    food: [
      {
        id: "3-1",
        name: "可乐鸡翅",
        img: Storage_Bucket_Url + "/menu/可乐鸡翅.png",
        food_ingredients: "鸡翅、中瓶可乐、白芝麻、葱花、葱段、姜片、柠檬汁",
      },
      {
        id: "3-2",
        name: "青椒炒鸡肉",
        img: Storage_Bucket_Url + "/menu/青椒炒鸡肉.png",
        food_ingredients: "青椒、鸡肉",
      },
    ],
  },
  {
    id: "4",
    type: "🥣汤品类",
    foods: [
      {
        id: "4-1",
        name: "紫菜蛋花汤",
        img: Storage_Bucket_Url + "/menu/紫菜蛋花汤.png",
        food_ingredients: "干紫菜、鸡蛋液、葱花",
      },
      {
        id: "4-2",
        name: "番茄蛋花汤",
        img: Storage_Bucket_Url + "/menu/番茄蛋花汤.png",
        food_ingredients: "番茄、鸡蛋液、葱花",
      },
      {
        id: "4-3",
        name: "丝瓜煎蛋汤",
        img: Storage_Bucket_Url + "/menu/丝瓜煎蛋汤.png",
        food_ingredients: "丝瓜、鸡蛋液",
      },
      {
        id: "4-4",
        name: "裙带菜鸡蛋虾仁豆腐汤",
        img: Storage_Bucket_Url + "/menu/裙带菜鸡蛋虾仁豆腐汤.png",
        food_ingredients: "鸡蛋、虾仁、裙带菜、豆腐",
      },
    ],
  },
  {
    id: "5",
    type: "🍜面食类",
    foods: [
      {
        id: "5-1",
        name: "番茄煎蛋火腿片焖面",
        img: Storage_Bucket_Url + "/menu/番茄煎蛋火腿片焖面.png",
        food_ingredients: "番茄、鸡蛋、火腿、活面",
      },
      {
        id: "5-2",
        name: "豆角五花肉焖面",
        img: Storage_Bucket_Url + "/menu/豆角焖面.png",
        food_ingredients: "四季豆、五花肉或瘦肉、活面",
      },
    ],
  },
  {
    id: "6",
    type: "🍚炒饭类",
    foods: [
      {
        id: "6-1",
        name: "蛋炒饭",
        img: Storage_Bucket_Url + "/menu/蛋炒饭.png",
        food_ingredients: "米饭、鸡蛋、葱花",
      },
      {
        id: "6-2",
        name: "扬州炒饭",
        img: Storage_Bucket_Url + "/menu/扬州炒饭.png",
        food_ingredients: "米饭、鸡蛋、玉米粒、豌豆、火腿丁",
      },
      {
        id: "6-3",
        name: "虾仁炒饭",
        img: Storage_Bucket_Url + "/menu/虾仁炒饭.png",
        food_ingredients: "虾、豌豆、胡萝卜丁、玉米粒",
      },
    ],
  },
  {
    id: "7",
    type: "🥦减脂餐",
    foods: [
      {
        id: "7-1",
        name: "西兰花虾仁",
        img: Storage_Bucket_Url + "/menu/西兰花虾仁.png",
        food_ingredients: "西兰花、虾仁",
      },
    ],
  },
];

module.exports = menu;
