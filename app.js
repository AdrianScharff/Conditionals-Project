/* // Ejercicio 1

let answer = prompt('Eres bellisimo/a?');

while (answer !== 'si' && answer !== 'no') {
    if (answer == null) {
        answer = prompt('Eres bellisimo/a?');
    } else {
        answer = prompt('por favor responde si o no sin acento');
}
}

while (true) {
    if (answer === 'si') {
        alert('Ciertamente');
        break;
    } else if (answer === 'no') {
        alert('no te creo');
        break;
    }
}

// Ejercicio 2

number = prompt('escribe un numero aqui');

while (isNaN(Number(number)) || Number(number) <= 0) {
    if (number == null) {
        number = prompt('escribe un numero aqui');
    } else {
        number = prompt('Por favor ingresa un numero mayor a 0');
    }
}

while(true) {
    if (Number(number) % 2 === 0) {
        alert(number + ' ES divisible entre 2');
        break;
    } else if (Number(number) % 2 != 0) {
        alert(number + ' NO es divisible entre 2');
        break;
    }
}

// Ejercicio 3

let isItPair = Number(prompt('escribe otro numero para ver si es par'));

while (true) {
    if (isItPair % 2 === 0 && isItPair > 0) {
        alert(isItPair + ' es un numero par');
        break;
    }
    else if (isItPair % 2 !== 0 && isItPair > 0) {
        alert(isItPair + ' NO es un numero par')
        break;
    }
    else {
        isItPair = Number(prompt('por favor ingresa un numero mayor a 0'));
    }
}

// Ejercicio 4

let clientNumber = Number(prompt('ingresa un numero para participar por el premio'))

while (true) {
    if  (clientNumber === 1000 && clientNumber > 0) {
        alert('Ganaste un premio!');
        break;
    }
    else if (clientNumber !== 1000 && !isNaN(clientNumber) && clientNumber > 0) {
        alert('Tu numero es '+clientNumber+'. Lo sentimos, sigue participando');
        break;
    }
    else {
        clientNumber = Number(prompt('porfavor ingresa un numero'));
    }
}

// Ejercicio 5

let firstNumber = Number(prompt('Ingresa tu primer numero'));
let secondNumber = Number(prompt('Ingresa tu segundo numero'));

while (true) {
    if ((!isNaN(firstNumber)) && (!isNaN(secondNumber)) && (firstNumber !== 0) && (secondNumber !== 0)) {
        if (firstNumber > secondNumber) {
            alert('tu segundo numero ' + '(' + secondNumber + ')' + ' es menor a tu primer numero ' + '(' + firstNumber + ')');
            break;
        }
        else if (firstNumber < secondNumber) {
            alert('tu primer numero ' + '(' + firstNumber + ')' + ' es menor a tu segundo numero ' + '(' + secondNumber + ')');
            break;
        }
        else {
            alert('tus dos numeros (' + firstNumber + ' y ' + secondNumber + '), son iguales.');
            break;
        }
    }
    else {
        alert('porfavor ingresa dos numero validos')
        firstNumber = Number(prompt('Ingresa tu primer numero'));
        secondNumber = Number(prompt('Ingresa tu segundo numero'));
    }
}

// Ejercicio 6

let firstNum = Number(prompt('Ingresa tu primer numero de tres'));
let secondNum = Number(prompt('Ingresa tu segundo numero de tres'));
let thirdNum = Number(prompt('Ingresa tu tercer numero de tres'));

while(true) {
    if ((!isNaN(firstNum)) && (!isNaN(secondNum)) && (!isNaN(thirdNum)) && (firstNum !== 0) && (secondNum !== 0) && (thirdNum !== 0)) {
        if (firstNum > secondNum && firstNum > thirdNum) {
            alert('tu numero mayor es el primero, ' + firstNum);
            break;
        }
        else if (firstNum === secondNum && firstNum > thirdNum) {
            alert('tu primer y segundo numero ' + '(' + firstNum + ' y ' + secondNum + ')' + ' son iguales y son los mayores');
            break;
        }
        else if (firstNum === thirdNum && firstNum > secondNum) {
            alert('tu primer y tercer numero ' + '(' + firstNum + ' y ' + thirdNum + ')' + ' son iguales y son los mayores');
            break;
        }
        else if (firstNum === secondNum && firstNum === thirdNum) {
            alert(`tus tres numeros (${firstNum}, ${secondNum} y ${thirdNum}) son iguales`);
            break;
        }
        else if (secondNum > firstNum && secondNum > thirdNum) {
            alert('tu numero mayor es el segundo, ' + secondNum);
            break;
        } 
        else if (secondNum === thirdNum && secondNum > firstNum) {
            alert('tu segundo y tercer numero ' + '(' + secondNum + ' y ' + thirdNum + ')' + ' son iguales y son los mayores');
            break;
        }
        else if (thirdNum > firstNum && thirdNum > secondNum) {
            alert('tu numero mayor es el tercero, ' + thirdNum);
            break;
        }
    }
    else {
        alert('Por favor ingresa tres numeros validos y mayores a 0');
        firstNum = Number(prompt('Ingresa tu primer numero de tres'));
        secondNum = Number(prompt('Ingresa tu segundo numero de tres'));
        thirdNum = Number(prompt('Ingresa tu tercer numero de tres'));
    }
}

// Ejercicio 7
const weekdays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

let weekday = prompt('ingresa un dia de la semana');

while (true) {
    if (weekday === weekdays[0]) {
        alert('Hoy es lunes, feliz inicio de semana');
        break;
    }
    else if (weekday === weekdays[1]) {
        alert('Hoy es martes, martes de modo guerra');
        break;
    }
    else if (weekday === weekdays[2]) {
        alert('Hoy es miercoles, ya es ombligo de semana');
        break;
    }
    else if (weekday === weekdays[3]) {
        alert('Hoy es jueves, ya se acerca el fin');
        break;
    }
    else if (weekday === weekdays[4]) {
        alert('Hoy es viernes, cerremos con todas las ganas');
        break;
    }
    else if (weekday === weekdays[5]) {
        alert('Hoy es sabado, que viva la fiesta');
        break;
    }
    else if (weekday === weekdays[6]) {
        alert('Hoy es domingo, hoy no hago nada');
        break;
    }
    else {
        alert('por favor ingresa un dia valido sin acento');
        weekday = prompt('ingresa un dia de la semana');
    }
}


// Ejercicio 8
let grade = null;

do {
    grade = parseInt(prompt('Ingresa una calificacion del 1 al 10'));
    if(isNaN(grade) || grade < 1 || grade > 10) {
        alert('Error. Tu respuesta no fue una calificacion valida');
    }
    else if (grade < 6) {
        alert('reprobado')
    }
    else if (grade >= 6 && grade <= 8) {
        alert('regular');
    }
    else if (grade === 9) {
        alert('bien');
    }
    else {
        alert('excelente');
    }
} while (
    isNaN(grade) || grade < 1 || grade > 10
);

// Ejercicio 9
let topping = prompt('Hola, escoge un topping para tu helado. Contamos las siguientes opciones: sin topping, oreo, kitkat y brownie');

if (topping === 'sin topping') {
    alert('El precio es 50 mxn');
}
else if (topping === 'oreo') {
    alert('El precio es 10 mxn');
}
else if (topping === 'kitkat') {
    alert('El precio es 15 mxn');
}
else if (topping === 'brownie') {
    alert('El precio es 20 mxn');
}
else {
    alert('No tenemos este topping, lo sentimos');
    alert('El precio del helado sin topping es de 50 mxn');
}

// Ejercicio 10 

let course = 4999;
let carrera = 3999;
let master = 2999;
let level = null;
let beca = null;

do {
    level = prompt('Elige el nivel del curso al que deseas ingresar, contamos con 3 opciones: Course, Carrera y Master');

    if (level === "Course") {
        alert('El precio de tu curso es de $' + course + ' MXN al mes');
        do {
            beca = prompt('Cuentas con alguna beca? Las 3 becas que tenemos son: Facebook, Google y Jesua')

            if (beca === "Facebook") {
                course = course - (course * 0.20);
                alert('Tu beca te genera un 20% de descuento y tu pago quedaría en $' + course + " MXN al mes");
            }
            else if (beca === "Google") {
                course = course - (course * 0.15);
                alert('Tu beca te genera un 15% de descuento y tu pago quedaría en $' + course + " MXN al mes");
            }
            else if (beca === "Jesua") {
                course = course - (course * 0.50);
                alert('Tu beca te genera un 50% de descuento y tu pago quedaría en $' + course + " MXN al mes");
            }
            else {
                alert("Por favor ingresa una beca de las que tenemos: Facebook, Google o Jesua");
            }
        } while (beca !== "Facebook" && beca !== "Google" && beca !== "Jesua");
        alert("El monto por el total de tu curso 'Course' (2 meses de duración) es de: $" + course * 2 + " MXN");

    }
    else if (level === "Carrera") {
        alert('El precio de tu curso es de $' + carrera + ' MXN al mes');
        do {
            beca = prompt('Cuentas con alguna beca? Las 3 becas que tenemos son: Facebook, Google y Jesua')

            if (beca === "Facebook") {
                carrera = carrera - (carrera * 0.20);
                alert('Tu beca te genera un 20% de descuento y tu pago quedaría en $' + carrera + " MXN al mes");
            }
            else if (beca === "Google") {
                carrera = carrera - (carrera * 0.15);
                alert('Tu beca te genera un 15% de descuento y tu pago quedaría en $' + carrera + " MXN al mes");
            }
            else if (beca === "Jesua") {
                carrera = carrera - (carrera * 0.50);
                alert('Tu beca te genera un 50% de descuento y tu pago quedaría en $' + carrera + " MXN al mes");
            }
            else {
                alert("Por favor ingresa una beca de las que tenemos: Facebook, Google o Jesua");
            }
        } while (beca !== "Facebook" && beca !== "Google" && beca !== "Jesua");
        alert("El monto por el total de tu curso 'Carrera' (6 meses de duración) es de: $" + carrera * 6 + " MXN");
    }
    else if (level === 'Master') {
        alert('El precio de tu curso es de $' + master + ' MXN al mes');
        do {
            beca = prompt('Cuentas con alguna beca? Las 3 becas que tenemos son: Facebook, Google y Jesua')

            if (beca === "Facebook") {
                master = master - (master * 0.20);
                alert('Tu beca te genera un 20% de descuento y tu pago quedaría en $' + master + " MXN al mes");
            }
            else if (beca === "Google") {
                master = master - (master * 0.15);
                alert('Tu beca te genera un 15% de descuento y tu pago quedaría en $' + master + " MXN al mes");
            }
            else if (beca === "Jesua") {
                master = master - (master * 0.50);
                alert('Tu beca te genera un 50% de descuento y tu pago quedaría en $' + master + " MXN al mes");
            }
            else {
                alert("Por favor ingresa una beca de las que tenemos: Facebook, Google o Jesua");
            }
        } while (beca !== "Facebook" && beca !== "Google" && beca !== "Jesua");
        alert("El monto por el total de tu curso 'Master' (12 meses de duración) es de: $" + master * 12 + " MXN");
    }
    else {
        alert("Por favor ingresa uno de nuestros 3 cursos: Course, Carrera o Master");
    }
} while (level !== "Course" && level !== "Carrera" && level !== "Master"); */

// Ejercicio 11

const kmCoche = 0.20;
const kmMoto = 0.10;
const kmBus = 0.50;
const extraMenor = 5;
const extraMayor = 10;
let vehiculo = null;
let kmRecorridos = null;
let precioParcial = null;
let litros = null;

do {
    vehiculo = prompt("Hola, ingresa tu tipo de vehiculo: coche, moto o autobus");
    if (vehiculo === "coche") {
        do {
        kmRecorridos = parseInt(prompt('Ingresa la cantidad de kilometros que recorriste'));
        if (!isNaN(kmRecorridos)) {
            precioParcial = kmRecorridos * kmCoche;
            alert('tu precio hasta ahora es de: $' + precioParcial)
            do {
                litros = parseInt(prompt('Cuantos litros consumiste por el total recorrido?'));
                if(isNaN(litros) || litros <= 0) {
                    alert('por favor ingresa el numero de litros que consumiste por tu total de kilometros recorridos')
                }
                else {
                    if (litros <= 100 ) {
                        alert('tu total a pagar es de: $' + (precioParcial + extraMenor));
                    }
                    else {
                        alert('tu total a pagar es de: $' + (precioParcial + extraMayor));
                    }
                }
            }
            while (isNaN(litros));
        }
        else {
            alert('por favor ingresa el numero de kilometros que recorriste')
        }
        } while (isNaN(kmRecorridos));
    }
    else if (vehiculo === "moto") {
        do {
            kmRecorridos = parseInt(prompt('Ingresa la cantidad de kilometros que recorriste'));
            if (!isNaN(kmRecorridos)) {
                precioParcial = kmRecorridos * kmMoto;
                alert('tu precio hasta ahora es de: $' + precioParcial)
                do {
                    litros = parseInt(prompt('Cuantos litros consumiste por el total recorrido?'));
                    console.log(litros);
                    if(isNaN(litros) || litros <= 0) {
                        alert('por favor ingresa el numero de litros que consumiste por tu total de kilometros recorridos')
                    }
                    else {
                        if (litros <= 100 ) {
                            alert('tu total a pagar es de: $' + (precioParcial + extraMenor));
                        }
                        else {
                            alert('tu total a pagar es de: $' + (precioParcial + extraMayor));
                        }
                    }
                }
                while (isNaN(litros));
            }
            else {
                alert('por favor ingresa el numero de kilometros que recorriste')
            }
            } while (isNaN(kmRecorridos));
    }
    else if (vehiculo === "autobus") {
        do {
            kmRecorridos = parseInt(prompt('Ingresa la cantidad de kilometros que recorriste'));
            if (!isNaN(kmRecorridos)) {
                precioParcial = kmRecorridos * kmBus;
                alert('tu precio hasta ahora es de: $' + precioParcial)
                do {
                    litros = parseInt(prompt('Cuantos litros consumiste por el total recorrido?'));
                    if(isNaN(litros) || litros <= 0) {
                        alert('por favor ingresa el numero de litros que consumiste por tu total de kilometros recorridos')
                    }
                    else {
                        if (litros <= 100 ) {
                            alert('tu total a pagar es de: $' + (precioParcial + extraMenor));
                        }
                        else {
                            alert('tu total a pagar es de: $' + (precioParcial + extraMayor));
                        }
                    }
                }
                while (isNaN(litros));
            }
            else {
                alert('por favor ingresa el numero de kilometros que recorriste')
            }
            } while (isNaN(kmRecorridos));
    }
    else {
        alert('por favor ingresa un vehiculo valido: coche, moto o autobus');
    }
} while (vehiculo !== "coche" && vehiculo !== "moto" && vehiculo !== "autobus");


