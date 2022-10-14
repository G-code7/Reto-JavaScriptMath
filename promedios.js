// promedio

const inputNumber = document.getElementById('inputvalue');
const allnumbers = [];
let sum = 0;
let media = [];
let numbersOfElements = allnumbers.length;


document.getElementById("store").addEventListener("click", function() {
    sum = 0;
    for( i = 0; i < allnumbers.length; i++){
        sum += parseInt(allnumbers[i]);
    }
    allnumbers.push(inputNumber.value);
    console.log("La cantidad de elementos es de: " + allnumbers.length + " La lista de los elementos es:  " + allnumbers  );

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

    console.log("El promedio de todos los elementos es de:  " + totalAverage);
});

// media

document.getElementById("middle").addEventListener("click", function() {

    let media = allnumbers.map(function (x){return parseInt(x, 10)});
    const mediaOrdenada = media.sort((a,b) => a-b);
    
        if (allnumbers.length % 2 === 0) {
            const medianapar1 = Math.floor(media.length / 2);
            const medianapar2 = Math.floor(media.length / 2) - 1;
            const medianaListapar = (mediaOrdenada[medianapar1] + mediaOrdenada[medianapar2]) / 2;
            console.log("La mediana es: " + medianaListapar);
            console.log("Y sus valores son: " + mediaOrdenada[medianapar1] +", "+ mediaOrdenada[medianapar2]);
            return medianaListapar;
        } else {
          const medianaImpar = Math.floor(media.length / 2) + 1;
          const medianaListaImpar = media[medianaImpar - 1];
          console.log("La mediana es: " + medianaImpar);
          console.log("Y su valor es: " + medianaListaImpar);
          return medianaListaImpar;
        }
    });

// moda

document.getElementById("moda").addEventListener("click", function() {

        const listaCount= {};
        

        for ( let i = 0; i < allnumbers.length; i++) {
            const elemento = allnumbers[i];
            
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1;
            }
        }
        console.log(listaCount);

        const listaArray= Object.entries(listaCount);
        const ordenarListaBidimensional = listaArray.sort((a,b) => b[1]-a[1]);
        console.log(ordenarListaBidimensional);
        console.log("La moda es: " + ordenarListaBidimensional[0]);
});

