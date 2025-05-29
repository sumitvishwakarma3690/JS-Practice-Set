// Write a Js program to create a word-meaning dictionary of 5 words. 

console.log("Word meaning dictionary of 5 words");

const dictionary = {
    where : "kaha ja rhe ho",
    who : "tum kaun ho ",
    when : "Ye kab hua",
    stole : "churana",
    ringing : " bell bajna"
}

console.log(dictionary)

for( let word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`)
}
