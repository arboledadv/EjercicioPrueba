let Nombre
let Apellido
let Edad
let Nacionalidad

function registrar(name, surname, age, Nationality){
    const Nombre = name + " " + surname;
    const Apellido = surname;
    const Edad = age;
    const Nacionalidad = Nationality;
    const enter=("\n\r")
    let texto = `El usuario: ${Nombre} tiene ${Edad} años de edad, nació en ${Nacionalidad}.`;

return texto;
}
 

console.log(registrar("Didinzon","Valderrama","30","Colombia"))