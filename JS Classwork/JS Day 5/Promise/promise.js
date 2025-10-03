/*new Promise((resolve) => {
    resolve(10);
})
.then((num) => {
    console.log("step 1:", num);
    return num * 2;
})
.then((num) => {
     console.log("step 2:", num);
    return num + 5;
})
.then((num) => {
     console.log("step 3:", num);
})

const a = Promise.resolve("Apple");
const b= Promise.resolve("Bannana");
const c = Promise.resolve("Grapes");

Promise.all([a,b,c]). then((fruits) => {
    console.log("Fruits:",fruits);
});*/

/*const fast = new Promise(
  (resolve) => setTimeout(() => resolve("Fast!"), 1000)
);

const slow = new Promise(
  (resolve) => setTimeout(() => resolve("Slow!"), 3000)
);

Promise.race([fast, slow])
  .then((winner) => {
    console.log("Winner is:", winner);
  })
  .catch((error) => {
    console.error("Error:", error);
  });*/