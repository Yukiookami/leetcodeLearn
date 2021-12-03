/*
 * @Author: zxy
 * @Date: 2021-12-03 12:25:45
 * @LastEditTime: 2021-12-03 12:50:30
 * @FilePath: /leetcodeLearn/#207/slidingWindow.js
 */
// const minSubArrayLen = (target, nums) => {
//   let length = nums.length
//   let res = null // 最终结果
//   let sum = 0 // 子元素序列之和
//   let subLength = 0 // 子元素长度

//   for (let i = 0; i < length; i++) {
//     sum = 0

//     for (let j = i; j < length; j++) {
//       sum += nums[j]

//       // 判断当子序列和大于等于目标，则证明当前序列满足要求
//       if (sum >= target) {
//         subLength = j - i + 1
//         res = res ? res : subLength
//         res = res < subLength ? res : subLength
//         break
//       }
//     }
//   }

//   return res ? res : 0
// }

const minSubArrayLen = (target, nums) => {
  let length = nums.length
  let res = length + 1 // 子数组最大不会超过自身，所以如果res > length，那么就代表整个数组中没有找到合适的数据
  let r = 0 // 右指针
  let l = 0 // 左指针
  let sum = 0

  while(r < length) {
    sum += nums[r++]

    while(sum >= target) {
      res = res < r - l ? res : r - l
      sum -= nums[l++]
    }
  }

  return res > length ? 0 : res
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))