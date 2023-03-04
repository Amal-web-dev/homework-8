let informationAmal = {
    name: 'amal',
    age: 14,
    boy: true,
    city: 'samarkand',
    street: 'sam koch',
    house: 2,
    grade: 8,
    school: 29,
    job: false
}             

let informationRefat = {
    name2: 'refat',
    age2: 19,
    boy2: true,
    city2: 'samarkand',
    street2: '8 march',
    house2: 7,
    grade2: 11,
    school2: 51,
    job2: false
}

let newCopy = Object.assign({}, informationAmal, informationRefat)

let newKeys = Object.keys(newCopy)

let newValue = Object.values(newCopy)

let fullName = Object.assign(newValue, { newKeys })

let types = {
    string: fullName.filter(str => typeof (str) === 'string'),
    number: fullName.filter(num => typeof (num) === 'number'),
    object: fullName.filter(obj => typeof (obj) === 'obejct'),
    boolean: fullName.filter(bool => typeof (bool) === 'boolean'),
}

console.log(types.string);
console.log(types.number);
console.log(types.object);
console.log(types.boolean);