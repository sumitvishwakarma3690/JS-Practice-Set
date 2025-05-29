// Write a program to print the marks of a student in an object using for loop  and for in loop


let student = {
    harry : 98,
    rohan : 79,
    sumit : 93,
    kabir : 67
}

// using for loop
// for(let i=1; i<=1; i++) {
//     console.log(student_marks)
// }


// using for in loop
for (const key in student) {
    if (Object.prototype.hasOwnProperty.call(student, key)) {
        const value = student[key];
        console.log(key,value)
        
    }
}