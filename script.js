// Написать функцию “глубокого” копирования. Функция принимает один параметр и
// возвращает его копию “по значению”. В функцию можно передать параметр любого типа.
// Если передали объект, то предусмотреть ситуацию,
// когда свойствами этого объекта будут объекты или массивы.
// Если передали массив, то предусмотреть ситуацию,
// когда элементами этого массива будут объекты или массивы
// Если передали примитив - вернуть его.

function isObject(object)
{
    return typeof object === "object" && object !== null && !Array.isArray(object);
};

function deepCopy(input) 
{
    if (isObject(input) === true/*||Array.isArray(input) === true*/) {
        let value = {};
        for (let key in input) {
            if (isObject(input[ key ])) {
                value[ key ] = deepCopy(input[ key ])
            }
            else {
                value[ key ] = input[ key ]
            };
        };
        return value
    }
    else if (Array.isArray(input) === true) {
        let value = [];
        for (let key in input) {
            if (Array.isArray(input[ key ])) {
                value[ key ] = deepCopy(input[ key ])
            } else {
                value[ key ] = input[ key ]
            }
        } return value;
    }
    else {
        return input;
    };
}

const a = {
    name: "qwertyyyyyyyy",
    surname: "ytrewqqqqqqqq",
};
let b = deepCopy(a)
console.log(b);

arr = [ "hey budddy", 1, 2, 3, 4, 5 ];
let q = deepCopy(arr);
console.log(q);