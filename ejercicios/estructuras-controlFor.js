/* Crea un programa que imprima en consola los números impares del 1 al 50. */

// for(let index = 1; index <= 50; index++){
//     if(!(index % 2 == 0 )){
//         console.log(index);
//     }
// }

/* Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

// var pokemons = 
// [ 'bulbasaur',
//   'ivysaur',
//   'venusaur',
//   'charmander',
//   'charmeleon',
//   'charizard',
//   'squirtle',
//   'wartortle',
//   'blastoise',
//   'caterpie',
//   'metapod',
//   'butterfree',
//   'weedle',
//   'kakuna',
//   'beedrill',
//   'pidgey',
//   'pidgeotto',
//   'pidgeot',
//   'rattata',
//   'raticate',
//   'spearow',
//   'fearow',
//   'ekans',
//   'arbok',
//   'pikachu',
//   'raichu',
//   'sandshrew',
//   'sandslash',
//   'nidoran-f',
//   'nidorina',
//   'nidoqueen',
//   'nidoran-m',
//   'nidorino',
//   'nidoking',
//   'clefairy',
//   'clefable',
//   'vulpix',
//   'ninetales',
//   'jigglypuff',
//   'wigglytuff',
//   'zubat',
//   'golbat',
//   'oddish',
//   'gloom',
//   'vileplume',
//   'paras',
//   'parasect',
//   'venonat',
//   'venomoth',
//   'diglett',
//   'dugtrio',
//   'meowth',
//   'persian',
//   'psyduck',
//   'golduck',
//   'mankey',
//   'primeape',
//   'growlithe',
//   'arcanine',
//   'poliwag',
//   'poliwhirl',
//   'poliwrath',
//   'abra',
//   'kadabra',
//   'alakazam',
//   'machop',
//   'machoke',
//   'machamp',
//   'bellsprout',
//   'weepinbell',
//   'victreebel',
//   'tentacool',
//   'tentacruel',
//   'geodude',
//   'graveler',
//   'golem',
//   'ponyta',
//   'rapidash',
//   'slowpoke',
//   'slowbro',
//   'magnemite',
//   'magneton',
//   'farfetchd',
//   'doduo',
//   'dodrio',
//   'seel',
//   'dewgong',
//   'grimer',
//   'muk',
//   'shellder',
//   'cloyster',
//   'gastly',
//   'haunter',
//   'gengar',
//   'onix',
//   'drowzee',
//   'hypno',
//   'krabby',
//   'kingler',
//   'voltorb' ];

// let number = prompt("Ingresa un numero, por favor");

// for(let index = 1; index <= number; index++){
//     if(index % 5 == 0){
//         console.log(index + ": " + pokemons[index]);
//     }
// }

// let newPokemons = pokemons.slice(1, number);
// console.log(newPokemons);

// for(let index = 1; index <= newPokemons.length; index++){
//     if(index % 5 == 0){
//         console.log(index + ": " + newPokemons[index]);
//     }
// }


/* Crea un programa que recorra el arreglo [4,“dos”,8,“tres”,5,9,1,“cero”] y muestre en consola solo los elementos que son tipo número. */

// let array = [4,"dos",8,"tres",5,9,1,"cero"];

// for(let index = 0; index < array.length-1; index++){
//     if(typeof array[index] == 'number'){
//         console.log(array[index]);
//     }
// }
