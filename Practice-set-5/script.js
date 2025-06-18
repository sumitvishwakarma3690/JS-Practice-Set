let arr = [];

while (true) {
    //1
  let input = prompt("Enter the number (0 to stop)");
  let number = parseInt(input);

  //2
  if (!isNaN(number)) {
    arr.push(number);
  }
  if (number == 0) {
    break;
  }
  //3
  function divisibleBy10(number) {
    if (number % 10 == 0) {
      return arr;
    }
  }
  
//   function factorial() {
//     let fact = 1;
//     for (let i=1; i<=number; i++) {
//         fact * i
//     }
//     return 
//   }
 
}
 
//4
let squareNumber = arr.map(function(n){
    return n * n
})
let dv10 = arr.filter(divisibleBy10);

console.log("The numbers of array is : ", arr);
console.log("The number that is divisible by 10 is :", dv10);
console.log("The number square of number is :", squareNumber);

