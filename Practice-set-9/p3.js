console.log("Solution of question 3")

//3 
async function getData() {
    return new Promise((__,reject)=>{
        console.log("Promise is resolving...")
        setTimeout(() => {
            reject("Promise is rejected!")
        }, 3000);
    })
}

async function main() {
    console.log("Promise is going to load please wait...")
       try {
        let data = await getData()  
        console.log("Result:", data) // This line will not run
    } catch (error) {
        console.error("Error aa gaya bhai:", error)
    }
}

main() 

