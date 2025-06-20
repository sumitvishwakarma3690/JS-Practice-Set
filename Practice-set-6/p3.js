//5 

let userInput = prompt("Enter a number from 1 to 10 and see the magic")
let number  = parseInt(userInput)

let rand = Math.ceil(0 + Math.random() * 10)
console.log(rand);

function randomColor() {
    let var1 = Math.ceil(0 + Math.random() * 255)
    let var2 = Math.ceil(0 + Math.random() * 255)
    let var3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${var1}, ${var2}, ${var3})`
}

randomColor()

if(number >=1 && number <=10 && userInput.trim() !== "" && !isNaN(number) && Number.isInteger(number)){
    document.body.style.backgroundColor = randomColor()
    alert("Thanks! You entered: " + userInput);
}
else{
    alert("Oops! Please enter a valid whole number between 10");
}