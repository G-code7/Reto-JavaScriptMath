const coursePrice = document.querySelector('#Form-store');
const discount1 = document.querySelector('#Descuento1').value;
const discount2 = document.querySelector('#Descuento2').value;
const discount3 = document.querySelector('#Descuento3').value;
const resultWithCouponApplied = document.querySelector('#display-price1');

const btn = document.querySelector('#Buy-button--store');
var p =document.getElementById("displayPrice2");
var text = p.textContent;
var number = Number(text);

btn.addEventListener('click', calculatePriceWithSelectedCoupon, calculationFormula);

function calculatePriceWithSelectedCoupon () {
    console.log("Hello")
    // const displayOValue = .value = Number(displayPrice2);

    // document.write(number);

    if(discount1.checked) { 
        const dDiscount1 = 15;
        calculationFormula(number, dDiscount1, "Descuento1");
    } else if(discount2.checked) {
        const dDiscount2 = 20;
        calculationFormula(number, dDiscount2, "Descuento2");
    } else if(discount3.checked) {
        const dDiscount3 = 35;
        calculationFormula(number, dDiscount3, "Descuento3");
    }
}
    

function calculationFormula (number, percentage, couponName) {
    const newPrice = (number * ((100 - percentage)/100));
    resultWithCouponApplied.innerText = "$" + newPrice;
    console.log(newPrice + "is ???" + couponName);
}