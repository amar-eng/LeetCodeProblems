// Longest Prefix Name

// write a function to find the longest common prefix string amongst an array of strings.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ""; // edge case
  let prefix = strs[0]; // set prefix to first string
  for (let i = 1; i < strs.length; i++) { // loop through all strings
    while (strs[i].indexOf(prefix) !== 0) { // while the prefix is not at the start of the string
      prefix = prefix.slice(0, prefix.length - 1); // remove last character from prefix
      if (prefix === "") return ""; // if prefix is empty, return empty string
    } // end while
  } 
  return prefix;    // return prefix if all strings have prefix at start
}; // O(n^2)

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"



const longestCommonPrefix1 = (strs) => {
    
}