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
    //Se ordena el array de menor a mayor
    array.sort((a, b) => a - b);
    var isInTheArray = false;
    //Verifico que el array dado tenga por lo menos dos numeros para comparar
    if (array.length < 2) {
        return false;
    }
    var higher1 = array.length - 1;
    var higher2 = array.length - 2;
    //Si la suma de los dos numeros mas grandes es menor que el numero a verificar,
    //entonces el numero no va a ser resultado d la suma de ningun par de numeros.
    if (array[higher1] + array[higher2] < number) {
        return false;
    }
    while (!isInTheArray && higher1 > 0) {
        higher2 = higher1 - 1;
        while (!isInTheArray && higher2 >= 0) {
            if (array[higher1] + array[higher2] === number) {
                isInTheArray = true;
            }
            //Si la suma de los elementos en ambas posiciones es menor que el numero a comparar,
            //no tiene sentido seguir revisando con higher1 fijo.
            if (array[higher1] + array[higher2] < number) {
                break;
            }
            higher2--;
        }
        higher1--;
    }
    return isInTheArray;
}