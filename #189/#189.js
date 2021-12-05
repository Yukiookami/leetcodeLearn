/*
 * @Author: zxy
 * @Date: 2021-12-04 18:54:21
 * @LastEditTime: 2021-12-04 19:40:15
 * @FilePath: /leetcodeLearn/#189/#189.js
 */
let nums = [1,2,3,4,5,6,7]
let k = 3

const rotate = (nums, k) => {
  n = k > nums.length ? k - nums.length : k

  let newArr = nums.splice(nums.length - n, n)

  for (let i = newArr.length - 1; i >= 0; i--) {
    nums.unshift(newArr[i])
  }
}

rotate(nums, k)

console.log(nums)

