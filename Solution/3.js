// problem - 3
const numbers = [2, 4, 6, 8];
const makeAverage = () => {
    const squaredNumbers = [];
    const sumNumbers = [];
    let sum = 0;
    for(const number of numbers){
        const squared = Math.pow(number, 2);
        squaredNumbers.push(squared);
    }
    for(const squaredNumber of squaredNumbers){
        sum = sum + squaredNumber;
        sumNumbers.push(sum);
    }
    const finalAverage = sum / sumNumbers.length;
    console.log(finalAverage);
}
makeAverage();