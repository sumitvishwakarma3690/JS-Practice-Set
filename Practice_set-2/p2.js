// write a program to find whether a number is divisible by 2 and 3.

let number = 20;

if(number % 2 === 0 && number % 3 == 0) {
    console.log("The number is divisible by 2 and 3")
}
else if (number % 2 == 0) {
    console.log("The number is divisible by 2 but not 3")
}
else if (number % 3 == 0) {
    console.log("The number is divisible by 3 but not 2")
}
else {
    console.log("The number is not divisible by 2 and 3")
}