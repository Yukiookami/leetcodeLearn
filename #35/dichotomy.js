/*
 * @Author: zxy
 * @Date: 2021-12-02 18:57:26
 * @LastEditTime: 2021-12-02 22:34:54
 * @FilePath: /leetcodeLearn/#35/dichotomy.js
 */
// 常规解法

// const searchInsert = (nums, target) => {
//   let right = nums.length - 1
//   let left = 0

//   while (left <= right) {
//     let min = Math.floor((right + left) / 2)
//     if (nums[min] < target) {
//       left = min + 1
//     } else if (nums[min] > target) {
//       right = min - 1
//     } else {
//       return min
//     }
//   }

//   return left
// }

// 速度最快解法(使用indexOf)
const searchInsert = (nums, target) => {
  let i = nums.indexOf(target)

  if (i > 0) {
    return i
  } else {
    nums.push(target)
    nums.sort((n, m) => {
      return n - m
    })

    let i2 = nums.indexOf(target)
    return i2
  }
}

let nums = [1, 3, 5, 6]
let target = 5

console.log(searchInsert(nums, target))