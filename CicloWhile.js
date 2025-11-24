const { text } = require("express");
const options1 = { style: "currency", currency: "USD" };
const numberFormat1 = new Intl.NumberFormat("en-US", options1);
const prompt = require("prompt-sync")();
let Moneycounter = 0;
let i=1;
let texto;
let income=parseFloat(prompt("Write your monthly income "));
const dedAdi = income*0.9188*0.01;
const BonPed = parseFloat(prompt("Write your pedagogic bonification"));;
while(i<=12){
Moneycounter += income*0.9188 + BonPed - dedAdi;
i++;
}
Moneycounter = numberFormat1.format(Moneycounter);
texto =  `Your month feed money is $${Moneycounter}`;
console.log(texto)