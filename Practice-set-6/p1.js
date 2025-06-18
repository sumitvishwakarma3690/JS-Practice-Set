console.log("This is exercise 6");

//1
let p1 = prompt("Enter your age");
let age = parseInt(p1);
let userC = confirm("Are you want to see the prompt again??");

//2
if (userC) {
  prompt("Enter your age");
} else {
  alert("Ok Continue.");
}

function drive() {
  if (age > 18) {
    alert("You can drive");
  } else if (age < 18) {
    alert("You cannot drive");
  } else {
    alert("OPPs, I think you did'nt enter anything");
  }
}

//3
function validateAge() {
    if(age < 0) {
        console.error("Age is not valid")
        throw new Error("Invalid age: Age cannot be negative")
    } 
    else{
        drive()
    }
}

validateAge()
