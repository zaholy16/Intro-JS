//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

// let question = prompt("Eres bellisimo/a?");

// if(question == "Si" || question == "si" || question == "SI" || question == "sí") console.log("Ciertamente");
// else if (question == "No" || question == "no" || question == "NO") console.log("No te creo");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm

// let number = prompt("Ingresa un número");

// if(number % 2 == 0) console.log(number + " es divisible entre 2");
// else console.log("No es divisible");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// let number = prompt("Ingresa un número: ");

// if(number % 2 == 0) alert("Es PAR");
// else alert("NO es par");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

// let numberCliente = prompt("Ingresa tu número de cliente: ");

// if(numberCliente == 1000) console.log("Ganaste un premio");
// else console.log("Lo sentimos, sigue participando");

//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

// let number1 = prompt("Ingresa el primer numero: ");
// let number2 = prompt("Ingresa el segundo numero: ");

// if(number1 < number2){
//     console.log(number1 + " es menor que " + number2);
// } else {
//     console.log(number2 + " es menor que " + number1);
// } 

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let number1 = prompt("Ingresa el primer numero: ");
let number2 = prompt("Ingresa el segundo numero: ");
let number3 = prompt("Ingresa el tercer numero: ");

console.log(number1);
console.log(number2);
console.log(number3);

// if(number1 > number2 && number1 > number3){
//     console.log(number1 + " es mayor");
// }else {
//     if(number2 > number1 && number2 > number3){
//         console.log(number2 + " es mayor");
//     }else {
//         if(number3 > number1 && number3 > number2){
//             console.log(number3 + " es mayor");
//         }
//     }
// }

if(number1 >= number2 && number1 >= number3){
    console.log(number1 + " es mayor");
}
else if(number2 >= number1 && number2 >= number3){
    console.log(number2 + " es mayor");
}
else {
    console.log(number3 + " es mayor");
}
