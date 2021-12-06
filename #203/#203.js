/*
 * @Author: zxy
 * @Date: 2021-12-06 18:36:21
 * @LastEditTime: 2021-12-06 19:27:30
 * @FilePath: /leetcodeLearn/#203/#203.js
 */

/**
 * @description: 链表定义函数
 * @param {*} val
 * @param {*} next
 * @return {*}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


const removeElements = (head, val) => {
  // 生成链表
  const ret = new ListNode(0, head)

  let cur = ret;

  while(cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return ret.next
};

console.log(removeElements([1,2,6,3,4,5,6], 6))