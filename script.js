function isSymbolPresentInString(str, symbol)
{
    if (str.includes(symbol)) {
        console.log("is " + "'" + symbol + "'" + " present in " + "'"+ str + "'" + " - " + str.includes(symbol));
        return true
    }
    else {
        console.log("is " + "'" + symbol + "'" + " present in " + "'"+ str + "'" + " - " + str.includes(symbol));
        return false;
    };
};

function getSymbolIndex(str, symbol)
{
    const search = str.indexOf(symbol);
    if (search === - 1) {
      console.log(symbol + " - " + "not found" + ", " + "index of symbol is " + "'" + search + "'");   
    }
    else if(search > -1) {
      console.log(symbol + " - " + "found" + ", " + "index of symbol is " + "'" + search + "'");  
    };
};

function getNumberOfEven(n)
{
    const start_n = n;
    let even_digits = 0
    while (n) {
        even_digits += n % 2 === 0;
        n = Math.floor(n / 10);
    }
    console.log("amount of even digits in " + start_n + " is " + "'" + even_digits + "'");
    return even_digits;
};

isSymbolPresentInString("abc", "a") // true
isSymbolPresentInString("abc","e") // false

getSymbolIndex("hello lol","h") // 0
getSymbolIndex("hello lol","l") // 2
getSymbolIndex("hello lol", "v") // -1

getNumberOfEven(223344) // 4
getNumberOfEven(111) // 0

//Написать собственную реализацию функций forEach, map, filter, some, every.
//Каждая функция должна принимать два аргумента - массив и callback.
//Все функции, кроме forEach, должны вернуть результат.

let arr = [ 10, 11, 12, 13, 14 ];

Array.prototype.forEach1 = function (callback)
{
    for (let i = 0; i < this.length; i++) {
        callback(this[ i ], i, arr)
    }
};

Array.prototype.map1 = function (callback)
{
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[ i ], i, arr));
    }
    return newArr;
};

Array.prototype.filter1 = function (callback)
{
    let newArr = [];
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[ i ], i, arr)) {
            newArr.push(arr[ i ]);
        }
    }
    return newArr;
};

Array.prototype.some1 = function (callback)
{
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[ i ], i, arr)) {
            return true
        }
    }
    return false;
};

Array.prototype.every = function (callback)
{
    const arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[ i ], i, arr)) {
            return false
        }
    }
    return true;
};

// arr.forEach1((item, index) => {
//     console.log(item, index,);
// });
console.log(arr);
console.log(arr.map1((item) => item * 2));

//let q = arr.filter1(isEven);