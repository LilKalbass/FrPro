function isNumber(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

function circuleSquare(rad)
{
    if (isNumber(rad)) {
        return rad * rad * 3.14;
    }
    //return Math.floor(rad * rad * 3.14);
    return console.error("Enter circule raduis");
}

function Circumference(rad)
{
    if (isNumber(rad)) {
        return rad * 2 * 3.14;
    }   
    return console.error("Enter circule raduis");
}

function averageNumber(a, b)
{
    if (isNumber(a) && isNumber(b)) {
        return (a + b) / 2;
    }
    return console.error("Enter valid arguments");
}

function calc(x, y, action)
{
    if (isNumber(x) && isNumber(y)&& typeof(action) === "string") {
        switch (action) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "*":
                return x * y;
            case "/":
                return x / y;
            case "%":
                return x % y;
            case "^":
                return x ** y;
            default:
                break;
        }
        return console.error("Enter a math operator"); 
    }
    return console.error("Enter valid arguments"); 
}

console.log("Circule square = " + circuleSquare(12) + " cm^2");
console.log("Circumference = " + Circumference(12) + " cm");
console.log("Average number of entered numbers is: " + averageNumber(4, 14));
console.log("Calc result of '+' is: " + calc(13, 6, "+"));
console.log("Calc result of '-' is: " + calc(14, 11, "-"));
console.log("Calc result of '*' is: " + calc(9, 8, "*"));
console.log("Calc result of '/' is: " + calc(27, 3, "/"));
console.log("Calc result of '%' is: " + calc(21, 13, "%"));
console.log("Calc result of '^' is: " + calc(2, 6, "^"));