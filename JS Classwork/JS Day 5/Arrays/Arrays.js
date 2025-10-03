var fruits = ["Apple", "Banana", "Grapes", "Mango"];

console.log(fruits[1]);

for(var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log(fruits.join(" * "));
fruits.pop();
console.log(fruits);
fruits.push("Orange");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Pineapple");
console.log(fruits);
fruits.splice(2,0, "lemon", "pear");
console.log(fruits);
console.log(fruits.slice(1,4));
fruits=fruits.concat(["Kiwi", "Peach"]);
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());
