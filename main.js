const rexona = 1000
const perfMen = 2500
const perfWoman = 2850
const perfNinio = 2200
const unia = 850
const labial = 870
const crema = 1240
let subto = 0

const oferta15 = 6000

function mostrarSubto(){
    alert(`El total de tu carro hasta el momento es ${subto}`)
}

function mostrarSubDesc(){
    alert(`Ya superaste los $${oferta15} en tu compra y lograste un 15% de descuento. El total del carrito hasta el momento es $${subto * .85} `)
}

function checkString (valor){
    while (!isNaN(valor)){
        valor = prompt(`Error, por favor. Vuelva a ingresarlo`)
    }
    return valor
}

let nameID = prompt("Ingrese su nombre.")

while (!isNaN(nameID)){
    nameID = prompt(`Error, por favor. Vuelva a ingresarlo`)
}
alert(`Hola ${nameID}! A continuacion iremos listando nuestro productos en orfeta!`)
alert(`Este mes comprando $${oferta15} o más tenes un 15%!!`)

let comprar = (prompt(`Desea ver nuestro catalogo de productos? Responder por si o no.`))

while (!isNaN(comprar)){
    comprar = prompt(`Error, responda por si o por no.`)
}

let salirMenu = false

if (comprar.toLowerCase() == "si") {
    do{
        let opcionIngresada = parseInt(prompt(`Agregue al carrito los productos que desea comprar.
            1 - Desodorante Rexona
            2 - Perfume hombre
            3 - Perfume mujer
            4 - Perfume niño
            5 - Pintura de uñas
            6 - Labial
            7 - Crema para manos
            0 - Salir y abonar`))
        switch(opcionIngresada){
            case 1:
                subto = subto + rexona
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 2:
                subto += perfMen
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 3:
                subto = subto + perfWoman
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 4:
                subto = subto + perfNinio
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 5:
                subto = subto + unia
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 6:
                subto = subto + labial
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 7:
                subto = subto + crema
                if (subto >= 6000) {
                    mostrarSubDesc()
                } else mostrarSubto()
            break
            case 0:
                if (subto >= 6000) {
                    alert(`El total de tu compra es ${subto * .85}`)
                } else mostrarSubto()
                salirMenu = true
            break   
            default:
                alert("Opción no válida, ingrese alguna presente en el menu.")
            break
        }
    }while(!salirMenu)
}else {alert(`${nameID.toUpperCase()} vuelve cuando gustes por nuestros productos!`)}

if (subto != 0){
    let formaPago = 0;

    while (formaPago !== 1 && formaPago !== 2 && formaPago !== 3 && formaPago !== 4) {
        formaPago = parseInt(prompt(`Opciones de pago:
            1 - Contado efectivo, débito o transferencia.
            2 - Crédito en 3 cuotas. Recargo 10%.
            3 - Crédito en 6 cuotas. Recargo 15%.
            4 - Crédito en 12 cuotas. Recargo 25%.`));
    
        switch (formaPago) {
            case 1:
            alert(`Gracias por tu compra! El total es $${subto.toFixed(2)}`);
            break;
            case 2:
            subto = subto * 1.1;
            alert(`Gracias por tu compra! El total es $${subto.toFixed(2)}`);
            break;
            case 3:
            subto = subto * 1.15;
            alert(`Gracias por tu compra! El total es $${subto.toFixed(2)}`);
            break;
            case 4:
            subto = subto * 1.25;
            alert(`Gracias por tu compra! El total es $${subto.toFixed(2)}`);
            break;
            default:
            alert(`Ingrese una opción presente en el menú`);
            break;
        }
    }
}