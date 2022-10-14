let inputPrice = document.querySelector('#displayPrice1');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#btn');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);
console.log("boton activado/boton desactivado");

const arrayUObjecto = undefined; // ['cupones': descuento] {}?

const couponOBJ = {
    "Gustavo" : 45,
    "Hello2000": 25,
    "coupon3000": 15,
}

function calcularPrecioConDescuento() {
  let inputPrice = 280;
  const coupon = inputCoupon.value;

  if (!inputPrice || !coupon) {
    pResult.innerText = 'por favor llena el formulario';
    return;
  }
  
  let discount;

if (couponOBJ[coupon]) {
    discount = couponOBJ[coupon];

}else {
    pResult.innerText = 'Este cupon no es valido!';
    return;
}

//   switch (coupon) {
//     case 'Gustavo':
//       discount = 40;

//       break;
//     case 'Hello2000':
//       discount = 25;
//       break;
//     default:
//       pResult.innerText = 'Este cupon no es valido!';
//       return;
//   }  
  const newPrice = (inputPrice * ((100 - discount) / 100));
  pResult.innerText = 'Cupon valido! El precio de tu producto ahora es: $' + newPrice;
  document.getElementById("displayPrice1").style.display = "none";
  document.getElementById("displayPrice2").style.display = "none";
}