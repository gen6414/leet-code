/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  let result = '0';

  for (let i = 1; i <= num1.length; i++) {
    for (let j = 1; j <= num2.length; j++) {
      const val = Number(num1.substr(-i, 1)) * Number(num2.substr(-j, 1));
      if (val !== 0) {
        result = stringNumberAddition(result, stringNumberCarryUp(val + '', i + j - 2));
      }
    }
  }

  return result;
};

/**
 * @param {string} numStr1
 * @param {string} numStr2
 * @returns {string}
 */
const stringNumberAddition = (numStr1, numStr2) => {
  if (numStr1 === '0') return numStr2;
  if (numStr2 === '0') return numStr1;

  let result = '';
  let carryOver = false;

  for (let i = 1; numStr1.length >= i || numStr2.length >= i; i++) {
    const num1 = numStr1.length < i ? 0 : Number(numStr1.substr(-i, 1));
    const num2 = numStr2.length < i ? 0 : Number(numStr2.substr(-i, 1));
    const val = num1 + num2 + (carryOver ? 1 : 0);

    result = (val + '').slice(-1) + result;
    carryOver = val > 9;
  }

  if (carryOver) {
    result = '1' + result;
  }

  return result;
};

/**
 * @param {string} num
 * @param {number} count
 * @returns {string}
 */
const stringNumberCarryUp = (num, count) => {
  for (let i = 0; i < count; i++) {
    num += '0';
  }
  return num;
};
// @lc code=end
