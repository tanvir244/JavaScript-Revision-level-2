// problem-5 
// using for loop
const oddNumber = [1, 3, 5, 7, 9];
const evenNumber = [];
for(let i = 0; i < oddNumber.length; i++){
    const makeEven = oddNumber[i] + 1;
    evenNumber.push(makeEven);
}
console.log(evenNumber);

// using for of loop
const oddNumber = [1, 3, 5, 7, 9];
const evenNumber = [];
for(const num of oddNumber){
    const makeEven = num + 1;
    evenNumber.push(makeEven);
}
console.log(evenNumber);

// using array.map() method 
const oddNumber = [1, 3, 5, 7, 9];
const evenNumber = [];

const mapArr = oddNumber.map(n => {
    const makeEven = n + 1;
    evenNumber.push(makeEven);
})
console.log(evenNumber);
