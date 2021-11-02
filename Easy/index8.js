// ===============================================PALINDROME NUMBER=======================================================

// Given an integer x, return true if x is palindromic, and false if it is not.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

//Example 1:
//Input: x = 121
//Output: true
//Example 2:
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// const isPalindrome = (x) => {
//   if (x < 0) return false;
//   if (x < 10) return true;
//   let num = x;
//   let rev = 0; // reverse number
//   while (num > 0) {
//     rev = rev * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return rev === x;
// };

const isPalindrome = (x) => {
  if (x < 0) return false; // gets rid of negatives
  if (x < 10) return true; // gets rid of single digit numbers
  let num = x;
  let rev = 0;

  while (num > 0) {
    rev = rev * 10 + (num % 10); // reverse number
    num = Math.floor(num / 10); // gets rid of decimal
  }
  return rev === x;
};

console.log(isPalindrome(1321));
