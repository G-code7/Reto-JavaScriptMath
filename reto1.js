// Reto logrado!!! 


const setOfElements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberN = setOfElements.length;
console.log(numberN);

const productOfElements = setOfElements.reduce(function (acumulador,valoractual) {
    acumulador = acumulador * valoractual;
    return acumulador;
});
console.log(productOfElements);

const geometricMain = Math.pow(productOfElements, (1/(numberN)));
console.log(geometricMain);


