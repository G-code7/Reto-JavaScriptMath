console.group('Cuadrado')

const ladoCuadrado= 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado ** 2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,

});

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado **2,
    };
}
console.groupEnd('Cuadrado')

console.group('triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo ) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});

console.groupEnd('triangulo');

console.group('Circle');

const radioCirculo= 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.14159;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio *2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}
console.groupEnd('Circle');


console.group('TrianguloIsosceles');

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('este no es un triangulo isosceles')
    }
    else {
        return altura = Math.sqrt((lado1 ** 2) - ( (base ** 2) )/4);
    }
}

console.groupEnd('TrianguloIsoseles');

console.group('TrianguloEscaleno');

function calcularTrianguloEscaleno(a, b, c) {
    const Semiperimetro = (a + b + c ) /2 ;

    if (a == b && a == c ) {
        console.warn('Este no es un triangulo escaleno.')
    }
    else {
        H = ((2/a) * (Math.sqrt(Semiperimetro * (Semiperimetro - a) *(Semiperimetro - b) * (Semiperimetro - c))));
        console.log('La altura "H" = ' + H) ;
    }
}
console.groupEnd('TrianguloEscaleno');


const precioInicial = document.getElementById('Precio');
const porcentajeDeDescuento = document.getElementById('Descuento');
const btnCalcular = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');
const pDescuento = document.getElementById('resultDescuento');

btnCalcular.addEventListener("click", calcularTotalDelPrecio);

function calcularTotalDelPrecio() {
    const porcenjateDelValor = ((100 - porcentajeDeDescuento.value) / 100);
    const precioConDescuento = precioInicial.value * porcenjateDelValor;
    const descuentoDelPrecio = precioInicial.value - precioConDescuento;
    
    if (!precioInicial || !porcentajeDeDescuento) {
        pDescuento.innerText = "";
        pResult.innerText = "Porfavor ingresa El valor de tu producto y un descuento";
    }
     
    if (porcentajeDeDescuento.value > 100) {
        pDescuento.innerText = "";
        pResult.innerText = "Porfavor ingresa un monto del descuento menor que 100%";
    }

    else {
    pDescuento.innerText = "El descuento total es de: " + descuentoDelPrecio.toFixed(2);
    pResult.innerText = "El precio final de tu producto es: " + precioConDescuento;
    }

    
}