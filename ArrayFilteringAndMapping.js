const people = [
    { name: 'John', age: 30, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Mike', age: 40, gender: 'male' },
    { name: 'Emma', age: 35, gender: 'female' },
    { name: 'Tom', age: 20, gender: 'male' }
];


const arrayOfname = (arr) => {
    return arr.filter(item => item.gender !== "female").map(item => item.name)
}

console.log(arrayOfname(people))