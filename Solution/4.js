// problem-4
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9];

const findMaxValue = (num1, num2) => {
    const newArray = [...num1, ...num2];
    const maxValue = Math.max(...newArray);
    console.log(maxValue);
}
findMaxValue(numbers1, numbers2);