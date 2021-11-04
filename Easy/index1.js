// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  if (nums.length < 2) {
    return false;
  }
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        return output;
      }
    }
  }
}; // Time Complexity: O(n^2) - nested loops
// Space Complexity: O(n) - hash table

const twoSumImproved = function (nums, target) {
  if (nums.length < 2) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash[diff] !== undefined) {
      return [hash[diff], i];
    }
    hash[nums[i]] = i;
  }
}; // Time Complexity: O(n) - linear time
// Space Complexity: O(n) - hash table
