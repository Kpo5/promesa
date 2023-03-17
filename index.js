const readline = require('readline');

let añoEnCurso = new Date().getFullYear();
console.log(añoEnCurso);
console.log('Bienvenido al programa para validar ingreso a la discoteca')
let capturaDatos = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

    capturaDatos.question('Por favor ingrese su año de nacimiento: ', function (añoNacimiento) {
    let añoIngresado = parseInt(añoNacimiento);
    let edadActual = añoEnCurso - añoIngresado;
    let ingreso;
        
    console.log(edadActual);
    if (isNaN(añoIngresado)) {
        ingreso=false
    }
        
    if (edadActual >= 18 && edadActual <= 70) {
        ingreso = true
        flag=false
    } else {
            ingreso = false
        }
    permitirIngreso(ingreso);
        
    capturaDatos.close();
        
    });




function permitirIngreso(ingreso) {
    
    const ingresoDiscoteca = new Promise((resolve, reject) => {
        if (ingreso) {
            resolve('Puede ingresar a la discoteca');
        }
        else {
            reject('Pa la calle');
        }
    });

    ingresoDiscoteca.then((valor) => {
        console.log(valor);
    }).catch((error) => {
        console.error(error);
    });
}