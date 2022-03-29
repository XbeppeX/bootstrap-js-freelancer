
function myFunction() {
    let ore = document.getElementById("ore").value;
    let list = document.getElementById("input").value;
    let coupon = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let newCoupon = document.getElementById("discount").value;
    const sconto25 = 25 / 100;
    let costoBack = ore * 20.5;
    let costoFront = ore * 15.3;
    let costoAnalist = ore * 33.6;


    if ((list === '1') && (coupon.includes(newCoupon)))  {
        const totale = costoBack - (costoBack * sconto25);
        document.getElementById("bottone").innerHTML = `${totale.toFixed(2)} €`;
    } else if ((list === '2') && (coupon.includes(newCoupon))) {
        const totale2 = costoFront - (costoFront * sconto25);
        document.getElementById("bottone").innerHTML = `${totale2.toFixed(2)} €`;
    } else if ((list === '3') && (coupon.includes(newCoupon))) {
        const totale3 = costoAnalist - (costoAnalist * sconto25);
        document.getElementById("bottone").innerHTML = `${totale3.toFixed(2)} €`;
    } else if (list === '1') {
        document.getElementById("bottone").innerHTML = `${costoBack.toFixed(2)} €`;
    } else if (list === '2') {
        document.getElementById("bottone").innerHTML = `${costoFront.toFixed(2)} €`;
    } else if (list === '3') {
        document.getElementById("bottone").innerHTML = `${costoAnalist.toFixed(2)} €`;
    }
    
}

//let ore1 = parseInt(ore);
//const backEnd = document.getElementById("backEnd").value;
//const frontEnd = document.getElementById("frontEnd").value;
//const analist = document.getElementById("analist").value;
//let option = list.options[list.selectedIndex].text;

/*
function myFunction(){
    document.getElementById("bottone").innerHTML = "hello";
}
*/

