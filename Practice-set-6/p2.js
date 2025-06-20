//4

console.log('This is problem 4'); 

// Write a program to change the url to google.com (Redirection) if user enters a number greater than 4

let number = prompt("Enter the number")
let n = parseInt(number)

if(!isNaN(n) && n > 4) {

    // window.location.href = "https://www.google.com/" // it voilates the rule of the google to in our website redirectly showing multiple errors in the console. NOt to use in our sides window is temporarily not practical
}
else {
    document.body.innerHTML = `<h2>You entered ${n}. Not redirecting</h2>`
}
