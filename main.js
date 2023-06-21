class Tornillo {
    constructor (id, titulo, subRubro, grosor, precio, marca){
        this.id = id
        this.name = titulo,
        this.subR = subRubro,
        this.medida = grosor
        this.costo = precio
        this.marc = marca
    } 
    mostrarTorni(){
        console.log(`${this.id} ${this.name} ${this.subR} su medida es ${this.medida}, su precio es $${this.costo} y su marca es ${this.marc}`)
    }
}

class Discos {
    constructor(id, titulo, subR, diametro, precio, marca){
        this.id = id
        this.name = titulo,
        this.subR = subR,
        this.medida = diametro,
        this.costo = precio,
        this.marc = marca
    }
    mostrarDisco(){
        console.log(`${this.id} ${this.name} para ${this.subR}, tamaño ${this.medida}, su precio es $${this.costo}. Marca ${this.marc}`)
    }
}

class Lijas {
    constructor(id, titulo, material, grano, precio, marca){
        this.id = id
        this.name = titulo,
        this.subR = material,
        this.medida = grano
        this.costo = precio,
        this.marc = marca
    }
    mostrarLija(){
        console.log(`${this.id} ${this.name} para ${this.subR}, grano ${this.medida}, su precio es $${this.costo}. Marca ${this.marc}`)
    }
}


const lija1 = new Lijas(50, `Hoja de lija`, `madera`, "40", 180, `norton`)
const lija2 = new Lijas(51, `Hoja de lija`, `madera`, "60", 180, `norton`)
const lija3 = new Lijas(52, `Hoja de lija`, `madera`, "80", 180, `norton`)
const lija4 = new Lijas(53, `Hoja de lija`, `madera`, "100", 180, `norton`)
const lija5 = new Lijas(54, `Hoja de lija`, `madera`, "120", 180, `norton`)
const lija6 = new Lijas(55, `Hoja de lija`, `madera`, "150", 180, `norton`)
const lija7 = new Lijas(56, `Hoja de lija`, `madera`, "180", 180, `norton`)

const lija8 = new Lijas(57, `Hoja de lija`, `metal`, "40", 290, `norton`)
const lija9 = new Lijas(58, `Hoja de lija`, `metal`, "60", 290, `norton`)
const lija10 = new Lijas(59, `Hoja de lija`, `metal`, "80", 290, `norton`)
const lija11 = new Lijas(60, `Hoja de lija`, `metal`, "100", 290, `norton`)
const lija12 = new Lijas(61, `Hoja de lija`, `metal`, "120", 290, `norton`)
const lija13 = new Lijas(62, `Hoja de lija`, `metal`, "150", 290, `norton`)
const lija14 = new Lijas(63, `Hoja de lija`, `metal`, "180", 290, `norton`)

const tornillo1 = new Tornillo(1, "tornillo", "tirafondo", `3/16 x 1"`, 5.3, `telfix`)
const tornillo2 = new Tornillo(2, "tornillo", "tirafondo", `3/16 x 1 1/4"`, 6, `telfix`)
const tornillo3 = new Tornillo(3,"tornillo", "tirafondo", `3/16 x 1 1/2"`, 6.5, `telfix`)
const tornillo4 = new Tornillo(4,"tornillo", "tirafondo", `3/16 x 1 3/4"`, 7, `telfix`)
const tornillo5 = new Tornillo(5,"tornillo", "tirafondo", `3/16 x 2"`, 7.5, `telfix`)
const tornillo6 = new Tornillo(6,"tornillo", "tirafondo", `3/16 x 2 1/4"`, 8, `telfix`)
const tornillo7 = new Tornillo(7,"tornillo", "tirafondo", `3/16 x 2 1/2"`, 8.5, `telfix`)
const tornillo8 = new Tornillo(8,"tornillo", "tirafondo", `3/16 x 3"`, 9, `telfix`)
const tornillo9 = new Tornillo(9,"tornillo", "tirafondo", `1/4 x 1"`, 10, `telfix`)
const tornillo10 = new Tornillo(10,"tornillo", "tirafondo", `1/4 x 1 1/4"`, 10.5, `telfix`)
const tornillo11 = new Tornillo(11,"tornillo", "tirafondo", `1/4 x 1 1/2"`, 11, `telfix`)
const tornillo12 = new Tornillo(12,"tornillo", "tirafondo", `1/4 x 1 3/4"`, 11.5, `telfix`)
const tornillo13 = new Tornillo(13,"tornillo", "tirafondo", `1/4 x 2"`, 12, `telfix`)
const tornillo14 = new Tornillo(14,"tornillo", "tirafondo", `1/4 x 2 1/2"`, 12.5, `telfix`)
const tornillo15 = new Tornillo(15,"tornillo", "tirafondo", `1/4 x 3"`, 13, `telfix`)

const tornillo16 = new Tornillo(16,`tornillo`, `autoperforante para madera`, `6 x 5/8"`, 3, `mitofix`)
const tornillo17 = new Tornillo(17,`tornillo`, `autoperforante para madera`, `6 x 3/4"`, 3, `mitofix`)
const tornillo18 = new Tornillo(18,`tornillo`, `autoperforante para madera`, `6 x 1"`, 3, `mitofix`)
const tornillo19 = new Tornillo(19,`tornillo`, `autoperforante para madera`, `6 x 1 1/4"`, 3, `mitofix`)
const tornillo20 = new Tornillo(20,`tornillo`, `autoperforante para madera`, `6 x 1 1/2"`, 3, `mitofix`)
const tornillo21 = new Tornillo(21,`tornillo`, `autoperforante para madera`, `6 x 1 3/4"`, 3, `mitofix`)
const tornillo22 = new Tornillo(22,`tornillo`, `autoperforante para madera`, `6 x 2"`, 3, `mitofix`)
const tornillo23 = new Tornillo(23,`tornillo`, `autoperforante para madera`, `8 x 3/4"`, 3, `mitofix`)
const tornillo24 = new Tornillo(24,`tornillo`, `autoperforante para madera`, `8 x 1"`, 3, `mitofix`)
const tornillo25 = new Tornillo(25,`tornillo`, `autoperforante para madera`, `8 x 1 1/4"`, 3, `mitofix`)
const tornillo26 = new Tornillo(26,`tornillo`, `autoperforante para madera`, `8 x 1 1/2"`, 3, `mitofix`)
const tornillo27 = new Tornillo(27,`tornillo`, `autoperforante para madera`, `8 x 1 3/4"`, 3, `mitofix`)
const tornillo28 = new Tornillo(28,`tornillo`, `autoperforante para madera`, `8 x 2"`, 3, `mitofix`)

const disco1 = new Discos (29, `disco de corte`, `madera`, "115", 350, `norton`)
const disco2 = new Discos (30, `disco de corte`, `madera`, "180", 600, `norton`)
const disco3 = new Discos (31, `disco de corte`, `madera`, "230", 900, `norton`)
const disco4 = new Discos (32, `disco de corte`, `hierro`, "115", 400, `norton`)
const disco5 = new Discos (33, `disco de corte`, `hierro`, "180", 550, `norton`)
const disco6 = new Discos (34, `disco de corte`, `hierro`, "230", 850, `norton`)
const disco7 = new Discos (35, `disco de corte`, `chapa`, "115", 450, `norton`)
const disco8 = new Discos (36, `disco de corte`, `chapa`, "180", 650, `norton`)
const disco9 = new Discos (37, `disco de corte`, `chapa`, "230", 1050, `norton`)
const disco10 = new Discos (38, `disco de corte`, `hormigon`, "115", 1555, `norton`)
const disco11 = new Discos (39, `disco de corte`, `hormigon`, "180", 2000, `norton`)
const disco12 = new Discos (40, `disco de corte`, `hormigon`, "230", 2450, `norton`)
const disco13 = new Discos (41, `disco de corte`, `ceramica`, "115", 1700, `norton`)
const disco14 = new Discos (42, `disco de corte`, `ceramica`, "180", 2200, `norton`)
const disco15 = new Discos (43, `disco de corte`, `ceramica`, "230", 2950, `norton`)
const disco16 = new Discos (44, `disco de corte`, `hierro`, "115", 500, `tyrolit`)
const disco17 = new Discos (45, `disco de corte`, `hierro`, "180", 650, `tyrolit`)
const disco18 = new Discos (46, `disco de corte`, `hierro`, "230", 950, `tyrolit`)
const disco19 = new Discos (47, `disco de corte`, `chapa`, "115", 550, `tyrolit`)
const disco20 = new Discos (48, `disco de corte`, `chapa`, "180", 750, `tyrolit`)
const disco21 = new Discos (49, `disco de corte`, `chapa`, "230", 1150, `tyrolit`)

const tirafondos = []
tirafondos.push(tornillo1, tornillo2, tornillo3, tornillo4, tornillo5, tornillo6, tornillo7, tornillo8, tornillo9, tornillo10, tornillo11, tornillo12, tornillo13, tornillo14, tornillo15)

const autopMad = [tornillo16, tornillo17, tornillo18, tornillo19, tornillo20, tornillo21, tornillo22, tornillo23, tornillo24, tornillo25, tornillo26, tornillo27, tornillo28]

const discos = []
discos.push(disco1, disco2, disco3, disco4, disco5, disco6, disco7, disco8, disco9, disco10, disco11, disco12, disco13, disco14, disco15, disco16, disco17, disco18, disco19, disco20, disco21)

const lijas = [lija1, lija2, lija3, lija4, lija5, lija6, lija7, lija8, lija9, lija10, lija11, lija12, lija13, lija14]
const carro = []

function saludo(){
    let nameID = prompt("Ingrese su nombre.")
    while (!isNaN(nameID)){
        nameID = prompt(`Error, por favor. Vuelva a ingresarlo`)
    }
    alert(`Hola ${nameID}! A continuacion iremos listando nuestro productos en orfeta!`)
    return nameID
}

function verCatalogo(){
    let comprar = (prompt(`Desea ver nuestro catalogo de productos? Responder por si o no.`))
    while (comprar != "si" && comprar != "no"){
        comprar = prompt(`Error, responda por si o por no.`)
    }
    comprando(comprar)
}

function mostrarSubto(){
    if(totalCarro == undefined){
        alert(`Tu carro esta vacio! Vuelve pronto`)
    } else {
        alert(`El total de tu carro es ${totalCarro}. Gracias por tu compra!`)
    }
}

function encontrarId(array){
    option = parseInt(prompt(`Ingrese el ID del producto deseado, los mismos se muestran en consola.`))
    let busqueda = array.find(
        (ids) => ids.id === option
    )
    if(busqueda == undefined){
        alert(`Vuelve a ingresar una opción válida.`)
    } else{
        carro.push(busqueda)
        alert(`${busqueda.name} ${busqueda.subR} ${busqueda.medida} agregado al carrito!`)
    }
}

let totalCarro
function sumarCostos (array){
    let totalCarro = 0
    for (let precio of array){
        totalCarro += precio.costo
    }
    return totalCarro
}   

function filtrarDesc(array){
    array.forEach(console.log)
    let datoBusqueda = prompt("Ingrese el valor por el cual quiere filtrar, ya sea material, medida o marca del producto.")
    let busqueda = array.filter(
        (dato) => dato.name.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.subR.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.medida.toLowerCase().includes(datoBusqueda.toLowerCase()) || dato.marc.toLowerCase().includes(datoBusqueda.toLowerCase())
    )
    if(busqueda.length == 0){
        console.log(`El dato ${datoBusqueda} no está en nuestro catalogo.`)
    }else{
        console.log(`Artículos encontrados:`)
        busqueda.forEach(console.log)
    }
}

function comprando(comprar){
    let salirMenu = false
    if (comprar.toLowerCase() == "si") {
        do{
            let opcionIngresada = parseInt(prompt(`Agregue al carrito los productos que desea comprar.
                1 - Discos
                2 - Tornillos tirafondo
                3 - Tornillos autoperforantes para madera
                4 - Lijas
                5 - Filtrar discos
                6 - Filtrar tirafondos
                7 - Filtrar autoperforantes
                8 - FIltrar lijas
                9 - Ver mi carrito
                0 - Salir y abonar`))
            switch(opcionIngresada){
                case 1:
                    discos.forEach(element => element.mostrarDisco())
                    encontrarId(discos)
                    console.log(carro)
                break
                case 2:
                    tirafondos.forEach(element => element.mostrarTorni())
                    encontrarId(tirafondos)
                    console.log(carro)
                break
                case 3:
                    autopMad.forEach(element => element.mostrarTorni())
                    encontrarId(autopMad)
                    console.log(carro)
                break
                case 4:
                    lijas.forEach(element => element.mostrarLija())
                    encontrarId(lijas)
                    console.log(carro)
                break
                case 5:
                    filtrarDesc(discos)
                    encontrarId(discos)
                break
                case 6:
                    filtrarDesc(tirafondos)
                    encontrarId(tirafondos)
                break
                case 7:
                    filtrarDesc(autopMad)
                    encontrarId(autopMad)
                break
                case 8:
                    filtrarDesc(lijas)
                    encontrarId(lijas)
                break
                case 9:
                    console.log(`Los productos que tienes en el carro son los siguientes:`)
                    for(let prod of carro){
                        console.log(prod.id, prod.name, prod.subR, prod.medida, prod.marc, prod.costo)
                    }
                    totalCarro = sumarCostos(carro)
                    alert(`El total es ${totalCarro}. En consola puede ver el detalle.`)
                break
                case 0:
                    mostrarSubto()
                    salirMenu = true
                break   
                default:
                    alert("Opción no válida, ingrese alguna presente en el menu.")
                break
            }
        }while(!salirMenu)
    }else {alert(`${name2.toUpperCase()} vuelve cuando gustes por nuestros productos!`)}
    return totalCarro
}

let name2 = saludo()
verCatalogo()