// problem-7
const instructor = [
    {name: 'Nodi', age: 28, position: 'senior'},
    {name: 'Akil', age: 26, position: 'junior'},
    {name: 'Shobuj', age: 30, position: 'senior'}
]
const expectedPosition = instructor.filter(p => p.position == 'senior');
const expectedName = expectedPosition.filter(n => console.log(n.name));
