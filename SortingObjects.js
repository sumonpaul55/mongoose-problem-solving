// 4.Task: Sorting Objects
// Array of car objects
const cars = [
    {
        make: 'Toyota',
        model: 'Camry',
        year: 2020
    },
    {
        make: 'Honda',
        model: 'Accord',
        year: 2019
    },
    {
        make: 'Ford',
        model: 'Mustang',
        year: 2021
    },
    {
        make: 'Chevrolet',
        model: 'Malibu',
        year: 2018
    },
    {
        make: 'Tesla',
        model: 'Model 3',
        year: 2022
    }
];


const sortAssending = (cars) => {
    return cars.sort((b, a) => b.year - a.year)

}

console.log(sortAssending(cars))