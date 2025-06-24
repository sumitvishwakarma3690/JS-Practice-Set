console.log("Solving Q-4");

async function returnpromise() {

  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 1 is resolved");
      resolve(10);
    }, 1000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2 is resolved");
      resolve(20);
    }, 2000);
  });

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 3 is resolved");
      resolve(30);
    }, 3000);
  });

  let p4 = Promise.all([p1,p2,p3]);
  p4.then((a) => {
    console.log(a);
  }).catch((err) => {
    console.log(err);
  });

}

async function main() {
  let data = await returnpromise();
  
}

main();
