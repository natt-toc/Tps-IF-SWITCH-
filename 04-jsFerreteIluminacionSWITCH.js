/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el 
descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” 
                                                   se hace un descuento del 10 % y si es de otra marca un 5%.*/
function CalcularPrecio() 
{
    let precio = 35;
    let cantLamparas;
    let descuento;
    let marca;
    let precioConDescuento;
    let totalConIibb;
    let iibb;

    cantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch (cantLamparas) {
        case 1:
        case 2:
            descuento = 1;
            break;

        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 0.95;
            } else if (marca == "FelipeLamparas") {
                descuento = 0.90;

            } else {
                descuento = 0.95;
            }  
            break;

        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento = 0.75;

            } else {
                descuento = 0.80;
            }
            break;

        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 0.60;

            } else {
                descuento = 0.70;
            
            }
            break;
        default:
            descuento = 0.50;
    
 }   
    precioConDescuento = parseFloat((((cantLamparas * precio) * descuento)).toFixed(2));
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    if (precioConDescuento > 120) {
        totalConIibb = precioConDescuento * 1.10;
        iibb = totalConIibb - precioConDescuento;
        alert("Ud. pago " + totalConIibb + " siendo " + iibb + " el impuesto que se pagó");


    }





}