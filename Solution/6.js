// problem-6
// using filter method 
const numbers = [33, 50, 79, 78, 90, 101, 30];
const selected = numbers.filter(p => p % 5 === 0);
console.log(selected);

// using find method
// the first element of array will satisfy the condition, only exicute the single element 
const numbers = [33, 50, 79, 78, 90, 101, 30];
const selected = numbers.find(p => p % 5 === 0);
console.log(selected);