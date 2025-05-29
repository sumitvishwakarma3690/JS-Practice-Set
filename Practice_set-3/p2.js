// Write a program to print "try again" until the user enters the correct number.


let p1 = prompt("Enter any number between 1 to 10. If you are correct then you will be rewarded");
let U_no = parseInt(p1);
console.log(U_no)

if(U_no == 7) {
    alert("You entered correct number. You win a Laborgini Urus X500")
}
else{
    alert("Try again")
}