// 8. Task: Unique Values
const numbers = [3, 7, 3, 10, 5, 7, 1, 10, 2, 5];

// Print the array of numbers


const uniqueValueFromArray = (array) => {
    const uniq = new Set(array);
    return [...uniq]
}
console.log(uniqueValueFromArray(numbers))