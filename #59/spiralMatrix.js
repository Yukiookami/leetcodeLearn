/*
 * @Author: zxy
 * @Date: 2021-12-03 14:23:03
 * @LastEditTime: 2021-12-03 14:42:02
 * @FilePath: /leetcodeLearn/#59/spiralMatrix.js
 */
const generateMatrix = n => {
  let x = 0 // x方向坐标
  let y = 0 // y方向坐标
  let loop = Math.floor(n / 2) // 这里是除了中心点以外，周围的圈数，比如n为3，除开中心点，就只有一圈
  let mid = Math.floor(n / 2) // 中间位置
  let offset = 1 // 控制每层填充的个数
  let count = 1 // 更新填充数字
  let res = new Array(n).fill(0).map(ele => new Array(n).fill(0)) // 创造存储数字的二维数组

  while (loop--) {
    let row = x // 行
    let col = y // 列

    // 最上方一列，从左到右
    for (;col < y + n - offset; col++) {
      res[row][col] = count++
    }

    // 最右边一列，从上到下
    for (;row < x + n - offset; row++) {
      res[row][col] = count++
    }

    // 最下，从右到左
    for (;col > x; col--) {
      res[row][col] = count++
    }

    // 最左，从上到下
    for (;row > y; row--) {
      res[row][col] = count++
    }

    x++ // 更新起始位置
    y++ // 更新起始位置
    offset += 2 // 因为之前已经填充完一行，所以offset的数字要增加左右两边xxx
  }
  // 如果n是奇数，那么就需要给中间的元素单独赋值
  if (n % 2 === 1) {
    res[mid][mid] = count
  }

  return res
}

console.log(generateMatrix(3))