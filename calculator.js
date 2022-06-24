var num1 = window.prompt("Enter the first number");
var num2 = window.prompt("Enter the second number");
const operator = prompt("Enter operator (+, -, /, *)");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if(operator == "-") {
    alert (num1 - num2);
}
else if (operator == "+"){
    alert (num1 + num2);}
    else if (operator == "*"){
alert (num1 * num2);}
else if (operator == "/"){
alert (num1 / num2);}