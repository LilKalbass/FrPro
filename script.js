const num1 = 10;
const num2 = 30;

if (num1 > num2) {
    console.info("First number is greater", num1);
}
if (num1 < num2) {
    console.log("Second number is greater", num2);
}
if (num1 === num2) {
    console.log("Numbers are equal", num1, num2);
}

const number = 37;

if (number % 2 == 0) {
    console.log("Number is even", number % 10)
}
if (number % 2 !== 0) {
    console.log("Number isn`t even", number % 10)
}


const userName = prompt("What`s ur name?");
const userAge = +prompt("What`s ur age?");
const isDrinkin = confirm("U drink?");
if (isDrinkin === true && userAge > 40) {
    console.log(userName, "Maybe it`s time to quit drinkin?");
}
if (isDrinkin === true && userAge < 18) {
    console.log(userName, "Ohhhh, boy... I`m gonna call ur mum...");
}
if (isDrinkin === true && userAge >= 18 && userAge <= 40) {
    console.log(userName, "Don`t even mind trying anything called 'Ерш'");
}
if (isDrinkin === false) {
    console.log(userName, "Keep it goin, boy!");
}
