/*
 * @Author: zxy
 * @Date: 2021-12-02 22:34:46
 * @LastEditTime: 2021-12-02 22:46:30
 * @FilePath: /leetcodeLearn/#27/pointer.js
 */
// 暴力破解，双循环
// const removeElement = (nums, val) => {
//   let size = nums.length

//   for (i = 0; i < size; i++) {
//     if (nums[i] === val) {
//       // 发现有相同元素，全部向前移动一位
//       for (j = i + 1; j < size; j++) {
//         nums[j - 1] = nums[j]
//       }

//       // 移动后，size和i都受到影响减少
//       i--
//       size--
//     }
//   }

//   return size
// }

// 双指针法
const removeElement = (nums, val) => {
  let k = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
    }
  }

  return k
}

console.log(removeElement([3, 2, 2, 3], 3))