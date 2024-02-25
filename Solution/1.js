// task-1
// const multiply = (a, b, c) => a + b + c;
// const result = multiply(1, 2, 3);
// console.log(result);

// task-2
const multipleLine = 'I am a Web Developer.\n' + 'I love to code.\n' + 'I love to eat Biriyani.';
console.log(multipleLine);

// task-3
// while default parameter works
const sum = (num1, num2 = 3) => num1 + num2;
const result = sum(6);  // if I don't set second argument, the second parameter will take 3 as default value. so this is the way to set default parameter 
console.log(result);

// while default parameter doesn't work
const sum = (num1, num2 = 3) => num1 + num2;
const result = sum(6, 4);  // but if I set second argument, the second parameter won't take 3 as default value, rather it will take the value as second argument has defined
console.log(result);