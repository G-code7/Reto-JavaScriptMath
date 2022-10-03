// promedio

const inputNumber = document.getElementById('inputvalue');
const allnumbers = [];
let sum = 0;
let numbersOfElements = allnumbers.length;

document.getElementById("store").addEventListener("click", function() {
    sum = 0;
    for( i = 0; i < allnumbers.length; i++){
        sum += parseInt(allnumbers[i]);
    }
    allnumbers.push(inputNumber.value);
    console.log("stored " + allnumbers);

});
document.getElementById("show").addEventListener("click", function() {
    sum = 0;
    for( i = 0; i < allnumbers.length; i++){
        sum += parseInt(allnumbers[i]);
    }
    console.log("La suma le los numeros ingresados es: " + sum);
});
document.getElementById("average").addEventListener("click", function(){
    sum = 0;
    for( i = 0; i < allnumbers.length; i++){
        sum += parseInt(allnumbers[i]);
    }
    totalAverage = sum / allnumbers.length;

    console.log("average " + totalAverage);
});


// mediana


