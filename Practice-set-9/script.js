console.log("Hello this is PS - 9")

//1
// let promise = new Promise(function (resolve, reject) {
//     let data = "Hii I am a promise and I am going to resolve"
//     console.log(data)
//     resolve("Promise is resolved")
// });

// promise.then(alert).catch(err=>{
//     console.log(err)
// })


//2 
async function myPromise() {
    return new Promise(function (resolve, reject) {
    console.log("Promise is loading...")
    setTimeout(() => {
      console.log("Promise is resolved") 
       resolve(455)
    }, 1000);
    
});
}

async function main() {
    console.log("Solving using the aync await method")
    let data = await myPromise() 
    console.log(data)
}
main()

