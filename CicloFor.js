const prompt = require("prompt-sync")();
let Vegetable =[];
//create the array wth a traditional for
let NumberOfJuice = parseFloat(prompt("Hi, how many favorite juice do you have?"))
for (let i = 0; i < NumberOfJuice; i++) {
    Vegetable[i] = prompt('write one of your favorite juice ');
}
//Print the array with the forEach function
Vegetable.forEach(function(element,index) {
    console.log(`Element at index ${index}: ${element}`);
});