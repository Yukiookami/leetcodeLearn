/*
 * @Author: zxy
 * @Date: 2021-12-02 23:10:21
 * @LastEditTime: 2021-12-02 23:26:09
 * @FilePath: /leetcodeLearn/#977/pointer.js
 */
// const sortedSquares = (nums) => {
//   let newArr = nums.map(ele => Math.pow(ele, 2))

//   return newArr.sort((n, m) => n - m)
// }

const sortedSquares = (nums) => {
  let newArr = []

  // i为左指针向右，j为又指针向左
  for (let i = 0, j = nums.length - 1; i <= j;) {
    let left = Math.pow(nums[i], 2)
    let right = Math.pow(nums[j], 2)

    if (left > right) {
      newArr.unshift(left)
      i++
    } else {
      newArr.unshift(right)
      j--
    }
  }

  return newArr
}

console.log(sortedSquares([-4,-1,0,3,10]))