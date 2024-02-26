// problem-8
// using for loop
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]
let sum = 0;
for(const iterator of people){
    sum = sum + iterator.age;
}
console.log(sum);

// using array.reduce() method
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
]
const ageArr = [];
for(const iteration of people){
    ageArr.push(iteration.age);
}
const total = ageArr.reduce( (previous, current) => previous + current, 0);
console.log(total);