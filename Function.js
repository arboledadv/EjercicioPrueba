const prompt = require("prompt-sync")();
function registrar(){
    let Nombre = prompt("Escribe tu nombre ");
    let Apellido = prompt("Escribe tu apellido ");
    let Edad = prompt("Escribe tu edad ");
    let Nacionalidad = prompt("Escribe tu país de nacimiento ");
    const enter=("\n\r")
    let texto = `El usuario: ${Nombre} tiene ${Edad} años de edad, nació en ${Nacionalidad}.`;

return texto;
}
 

console.log(registrar("Didinzon","Valderrama","30","Colombia"))


