// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// for example, the number 3 is written as III in Roman numeral, while the number 4 is written as IV.
// The number 9 is written as IX.
// The number 58 is written as LVIII, because C is before V and X.
// The number 1994 is written as MCMXCIV, because M is before C, X and I.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

const romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = roman[s[i]];
    console.log(curr);
    if (curr < prev) {
      result -= curr;
    } else {
      result += curr;
    }
    prev = curr;
  }
};

romanToInt("MCMXCIV");

// console.log(romanToInt("MCMXCIV"));
