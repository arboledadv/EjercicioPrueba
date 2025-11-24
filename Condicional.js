const prompt = require("prompt-sync")();
let Age
let texto = ['Primera infancia','Niñez','Preadolescencia','Adolescente','Adulto Joven','Adulto','Adulto Mayor'];
Age = parseInt(prompt("Write your age "));
if (Age<6){
    console.log(texto[0]); 
}else if(Age<11){
    
    console.log(texto[1]); 
}else if(Age<12){
    
    console.log(texto[2]); 
}else if(Age<18){
    
    console.log(texto[3]); 
}else if(Age<28){
    
    console.log(texto[4]); 
}else if(Age<=65){
    
    console.log(texto[5]); 
}else if(Age>65){
    
    console.log(texto[6]); 
}