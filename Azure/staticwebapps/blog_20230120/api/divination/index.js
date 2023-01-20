module.exports = async function (context, req) {

  const min = 0;
  const max = 5;
  let result = '';

  // 取得した乱数に応じて結果を返却する
  const num = Math.floor(Math.random() * (max - min) + min);
  switch (num) {
    case 0:
      result = "大吉！";
      break;
    case 1:
      result = "中吉！";
      break;
    case 2:
      result = "小吉！";
      break;
    case 3:
      result = "吉！";
      break;
    case 4:
      result = "凶…。";
      break;
    default:
      result = "大凶。。。";
      break;
  }

  context.res.json({
      text: result
  });
};
