/**
 * 得到一个两数之间的随机整数，包括两个数在内
 * @param {*} min 最大值
 * @param {*} max 最小值
 */
const getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal; //含最大值，含最小值 
}

export {
  getRandomIntInclusive
}
