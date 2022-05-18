function saludo(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + name);
            resolve(name);
        }, 1500);
    });
}

function despedida(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + name);
            resolve();
        }, 1000);
    })
}

function hablar(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Hablando...");
            resolve(name);
        }, 2000);
    });
}

function conversacion(name, veces) {
    return new Promise((resolve, reject) => {
        if (veces > 0) {
            hablar(name)
                .then(() => conversacion(name, veces - 1))
                .then(() => resolve())
        } else {
            despedida(name)
                .then(() => resolve())
                .then(() => console.log("Fin"))
        }
    });
}


// --
console.log("Iniciando...");
saludo('Juan')
    .then(conversacion('Juan', 3))