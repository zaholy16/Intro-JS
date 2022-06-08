
let clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
console.log(clasificaciones);

clasificaciones[2] = 'Celia';
clasificaciones[3] = 'Raúl';
console.log(clasificaciones);

clasificaciones.pop();
console.log(clasificaciones);

clasificaciones.splice(1,0, 'Roberto', 'Amaya');
console.log(clasificaciones);

clasificaciones.unshift('Marta');
console.log(clasificaciones);

