const userName = prompt("What`s ur name?");
let userAge = prompt("What`s ur year of birth?");
userAge = 2021 - userAge;
alert(userName + userAge);


let a = + prompt("First variable", 2);
let b = + prompt("Second variable", 3);
let c = + prompt("Third variable", 4);

console.info("Ur numbers:")
console.log(a);
console.log(b);
console.log(c);

console.log("Sum = "+ (a + b + c));
console.log("Average number:"+((a+b+c)/3));

console.info("*isEven check*")
console.log("a:"+(a%2===0));
console.log("b:"+(b%2===0));
console.log("c:"+(c%2===0));


let num = 31278;
console.log("Number:"+(num));
console.log(Math.floor(num/10000));
console.log(Math.floor((num/1000)%10));
console.log(Math.floor((num/100)%10));
console.log(Math.floor((num/10)%10));
console.log(Math.floor((num/1)%10));

console.log("Ur number one by one: " + Math.floor(num/10000) + " " + Math.floor((num/1000)%10) + " " + 
Math.floor((num/100)%10) + " " + Math.floor((num/10)%10) + " " + Math.floor((num/1)%10));