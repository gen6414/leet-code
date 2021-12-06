--
-- @lc app=leetcode id=180 lang=mysql
--
-- [180] Consecutive Numbers
--

-- @lc code=start
# Write your MySQL query statement below
SELECT
  DISTINCT num1 AS ConsecutiveNums
FROM (

    SELECT
      logs.id,
      @num1 := logs.num AS num1,
      # 前のレコードの num
      @num2 := (SELECT logs2.num FROM Logs logs2 WHERE logs2.id < logs.id ORDER BY logs2.id DESC LIMIT 1) AS num2,
      # 前のレコードと比較し、連続回数を算出
      (CASE
        WHEN @num1 = @num2 THEN @i := @i + 1
        ELSE @i := 1
      END) AS count
    FROM
      (SELECT @i := 1) counter,
      Logs logs

) logs
WHERE logs.count >= 3
-- @lc code=end
