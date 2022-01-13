/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {boolean} carryUp
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2, carryUp = false) => {
  if (!l1 && !l2 && !carryUp) return null;

  const val1 = l1 === null ? 0 : l1.val;
  const val2 = l2 === null ? 0 : l2.val;
  const next1 = l1 === null ? null : l1.next;
  const next2 = l2 === null ? null : l2.next;

  let carryOver = false;
  let val = val1 + val2;

  if (carryUp) val++;

  if (val >= 10) {
    val -= 10;
    carryOver = true;
  }

  const next = addTwoNumbers(next1, next2, carryOver);

  return new ListNode(val, next);
};
// @lc code=end
