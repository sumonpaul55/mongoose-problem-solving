// 5.Task: Find and Modify

const people = [
    { name: 'John', age: 30, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Mike', age: 40, gender: 'male' },
    { name: 'Emma', age: 35, gender: 'female' },
    { name: 'Tom', age: 20, gender: 'male' }
];

const findAndModify = (array, name, newAge) => {
    array.find(item => item.name === name).age = newAge
    return array
}


console.log(findAndModify(people, "Emma", 80))

// console.log(people)