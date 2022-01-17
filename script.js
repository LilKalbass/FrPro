let output1 = "";
for (let i = 10; i < 21; i++) {
    output1 += i + ",";
}
console.log("Numbers from 10 to 20:", output1);


let output2 = "";
for (let i = 10; i < 21; i++) {
    output2 += i * i + ",";
}
console.log("Squares from 10 to 20:", output2);


let output3 = "";
for (let i = 1; i < 11; i++) {
    output3 += i * 7 + ",";
}
console.log("Multiplication table for 7:", output3);


let output4 = 0;
for (let i = 1; i < 16; i++) {
    output4 += i;
}
console.log("Summary from 1 to 15: " + output4);


let output5 = 1;
for (let i = 15; i < 36; i++) {
    output5 *= i;
}
console.log("Multiply from 15 to 35: " + BigInt(output5));


let output6 = 0;
for (let i = 1; i < 501; i++) {
    output6 += i;
}
console.log("Average from 1 to 500:", output6 / 500);


let output7 = 0;
for (let i = 30; i < 80; i++) {
    if (i % 2 === 0) {
        output7 += i;
    }
}
console.log("Summary of even numbers from 30 to 80:", output7);


let output8 = "";
for (let i = 100; i < 301; i++) {
    if (i % 3 === 0) {
        output8 += i + ",";
    }
}
console.log("Numbers from 100 to 300 multiple of 3:", output8);


let numb = 20;
let evenDividers = 0;
let evenDividersSum = 0;
for (let i = 1; i <= numb; i++) {
    if (i % 2 === 0) {
        evenDividers++;
        evenDividersSum += i;
    }
}
console.log("Even dividers of number:", evenDividers, "Summary of even dividers of number:", evenDividersSum);


let output9 = "\n";
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        output9 += (i * j) + " ";
    }
    output9 += "\n";
}
console.log("Multiplication table:", output9);


let number = Math.floor(Math.random() * 11);
while (true) {
    let guess = +prompt("Guess the number: ");
    if (guess === number) {
        console.log("U guessed the number!!!!!");
        break;
    }
    if (guess === 0) {
        {
            break;
        }
    }
}


let output12 = "";
let height = +prompt("Height: ");
for (let i = 0; i < height; i++) {
    output12 = "";
    for (let j = 0; j < i + 1; j++) {
        output12 += "*";
    }
    console.log(output12);
}