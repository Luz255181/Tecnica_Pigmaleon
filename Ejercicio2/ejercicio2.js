//Pequeño programa que muestra el funcionamiento de mi programa.
//Asumo que los elementos del array son todos numeros.
const inputArray = prompt("Ingresá los números separados por coma (ej: 1,2,3,4):");
const array = inputArray.split(",").map(num => parseInt(num.trim()));
const inputNumber = prompt("Ingresá el número que querés verificar:");
const number = parseInt(inputNumber);
const result = sumInArray(array, number);
if (result) {
    alert("El numero " + number + " es resultado de la suma de dos elementos del array");
} else {
    alert("El numero " + number + " no es resultado de la suma de dos elementos del array");
}

function sumInArray(array, number) {

    //asumo que todos los numeros son enteros positivos

    //Se ordena el array de menor a mayor
    array.sort((a, b) => a - b);

    //Posiciono un puntero en el extremo derecho (el elemento mas grande)
    //y otro en el extremo izquierdo (el elemento mas pequeño)
    var left = 0;
    var right = array.length - 1;

    while (left < right) {
        //Si encontre el par de numeros, termino el bucle y retorno verdadero
        if (array[left] + array[right] === number) {
            return true;
        }
        //En caso de que la suma sea mayo al numero dado, muevo a la izquierda el puntero de la derecha
        //(tomo el anterior mas grande)
        if (array[left] + array[right] > number) {
            right--;
        } else {
            //si es mas chico, entonces muevo el puntero izquierdo una posicion a la derecha
            //(tomo el siguiente mas grande)
            left++;
        }
    }
    return false;
}