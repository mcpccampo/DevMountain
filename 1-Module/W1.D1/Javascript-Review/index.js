/* Spread Operator / Rest Operator */

// Using spread operator in function calls
let temperatures = [82, 78, 76, 78, 62];
let fav = ["walk-beach", "code", "learn", "freedom"];
let coldestTemp = Math.min(...temperatures);
console.log(coldestTemp);
console.log(...fav);

// Using spread operator on strings
let numberString = "98632";
let minInString = Math.min(...numberString);
console.log(minInString);

// Combining arrays
let parents = ["Ned Stark", "Kate Stark"];
let children = ["Rob Stark","Aria Stark","Sansa Stark"]
let starkClan = [...parents, ...children]


