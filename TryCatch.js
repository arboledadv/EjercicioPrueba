//Requerimeintos
const prompt = require("prompt-sync")();
//definicón de variables
let name
let surname
let password
let username 
let id
//funciones
function Def_user_name(){
id = parseInt(prompt("Write you ID with comma "));
while(isNaN(id)|| (id===null)|| (id==="undefined")||(typeof id !== 'number')){
    try{
        id = parseInt(prompt("Write you ID again "));
    }catch(e){
        logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
    } 
}

    name = prompt("Writ your name ");
    surname = prompt("Write your firt surname ");
    surname2 = prompt("Write your second surname ");
    username= name[0]+surname+surname2[0]+"@js.edu.co";
    password = id;
    return username,password
}
username,password = Def_user_name();
console.log(username,password);