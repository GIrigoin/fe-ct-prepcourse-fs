/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var salida = [];
   for (let clave in objeto) {
      salida.push([clave , objeto[clave]]);
   }

   return(salida);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objetoSalida = {};

   var palabra = string.split('').sort();

   // for (var i = 0; i < palabra.length; i++){

   //    if (objetoSalida.hasOwnProperty(palabra[i])){
   //       objetoSalida[palabra[i]] = objetoSalida[palabra[i]] +1;
   //    } else {objetoSalida[palabra[i]] =1};
     
   // }

   for (celda of palabra){
      if (objetoSalida.hasOwnProperty(celda)) {
         objetoSalida[celda] = objetoSalida[celda] +1;
      } else { objetoSalida[celda] = 1}
   }


   return (objetoSalida);

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayIntermedio = string.split('');
   var may = [];
   var min = [];

   for (var i = 0; i < arrayIntermedio.length; i++){
      if (arrayIntermedio[i] == arrayIntermedio[i].toUpperCase()){
         may.push(arrayIntermedio[i])
      } else if (arrayIntermedio[i] == arrayIntermedio[i].toLowerCase()) {
         min.push(arrayIntermedio[i]);
      }
   }
   
   return(may.join('') +''+ min.join(''));


}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayPalabras = frase.split(' ');
   var arrayInvertida = [];
   var fraseInvertida = '';
   for ( palabra of arrayPalabras) {
      var letras = palabra.split('').reverse();
      arrayInvertida.push(letras.join(''));
   }

   return(arrayInvertida.join(' '));



}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero2 = numero.toString();
   var otro = numero2.split('').reverse().join('');

   if (numero2 === otro ){
      return('Es capicua');
   } else return ('No es capicua');
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('');
   var newArray = array.filter(function (x) { if ((x != 'a') && (x != 'b') && (x != 'c')){return(true)}else return(false)});

   return(newArray.join(''));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   var arraySorted = arrayOfStrings.sort(function(a, b) {return a.length - b.length;});

   return (arraySorted);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArray =[];

   for (celda of array1){

      if (array2.includes(celda)){
         nuevoArray.push(celda)
      }

   }

   return(nuevoArray);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
