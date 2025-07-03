
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
    var isInArray = false;
    //Verifico que el array tenga por lo menos dos numeros.
    if (array.length < 2) {
        return false;
    }
    var first = 0; //Puntero que indica la posicion del numero que va a ser sumado por los demas numeros del array
    while (first < array.length && !isInArray) {
        var second = first + 1; //Puntero que recorre las posiciones del arreglo que faltan sumar y comparar.
        while (second < array.length && !isInArray) {
            //Verifico que la suma de los elementos sea igual al numero pasado.
            if (array[first] + array[second] === number) {
                isInArray = true;
            }
            second++;
        }
        first++;
    }
    return isInArray;
}