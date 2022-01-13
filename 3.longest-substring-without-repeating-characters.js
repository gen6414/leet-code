/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;

  for (let from = 0, to = 1; to <= s.length; to++) {
    const str = s.slice(from, to);
    if (new Set(Array.from(str)).size !== str.length) {
      from++;
    } else {
      max = to - from;
    }
  }

  return max;
};

// @lc code=end
