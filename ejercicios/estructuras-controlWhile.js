/* Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

// let number = prompt("Ingresa un número: ");
// let index = 1;

// if(number % 5 == 0){
//     console.log("Es multiplo de 5");
//     while(index <= number){
//         console.log(index);
//         index++;
//     }
// }else {
//     console.log("No es multiplo de 5");
// }

/* Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario. */

// let number1 = prompt("Ingresa el primer número entre el '1 y el '50': ");
// let number2 = prompt("Ingresa el segundo numero entre el '1 y el '50': ");
// let index = 1;
// let userInput;

// while(index < 51){
//     console.log(index);
//     if(number1 == index){
//         console.log(index + " Loteria!!!");
//     }else if(number2 == index){
//         console.log(index + " Loteria!!!");
//     }
//     index++;
// }

/* Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola. */

// let arrayNumeros = [];
// let inputUser;

/* isNaN determina si el valor dado es numero o un numero ilegal (Not a number) */

// while(!(inputUser == 0)){
//     inputUser = prompt("Escribe un numero. Para terminar el programa escribe 0");
//     // console.log(isNaN(inputUser));
//     if(!isNaN(inputUser)){
//         arrayNumeros.push(inputUser);
//     }else{
//         alert("NO es un numero. Escribe un numero.");
//     }
// }

// console.log(arrayNumeros);


/* Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */

// let inputUser;
// let arrayLetras = [];

// while(!(inputUser == "")){
//     inputUser = prompt("Escribe una palabra o letra");
//     // console.log(isNaN(inputUser));
//     if(isNaN(inputUser)){
//         arrayLetras.push(inputUser);
//     }
// }

// console.log(arrayLetras);
// console.log(arrayLetras.join(" "));

/* Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información. */

let dia;

do{
    dia = prompt("Ingresa un dia de la semana: ");

    if(dia == "Lunes" || dia == "lunes" || dia == "LUNES"){
        alert("Odio los lunes TnT");
    }
    else if(dia == "Martes" || dia == "martes" || dia == "MARTES"){
        alert("Tan lejos del viernes... TnT");
    }
    else if(dia == "Miercoles" || dia == "miercoles" || dia == "MIERCOLES"){
        alert("MITAD DE SEMANA AAA");
    }
    else if(dia == "Jueves" || dia == "jueves" || dia == "JUEVES"){
        alert("Animo ya casi es vierness!!");
    }
    else if(dia == "Viernes" || dia == "viernes" || dia == "VIERNES"){
        alert("Amanos de partyyyyy uwuuw");
    }
    else if(dia == "Sabado" || dia == "sabado" || dia == "SABADO"){
        alert("SABADRINKKKKKKK");
    }
    else if(dia == "Domingo" || dia == "domingo" || dia == "DOMINGO"){
        alert("Ve a descansar u.u");
    }
} while(!(dia == "Domingo" || dia == "domingo" || dia == "DOMINGO"));