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

function hablar() {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Hablando...");
            resolve();
        }, 2000);
    });
}

async function main () {
    const name = await saludo('Juan');
    await hablar();
    await hablar();
    await hablar();
    await despedida(name);
    console.log("Fin");
}

console.log("Iniciando...");
main();
console.log("En realidad esta es la segunda instruccion por asincronismo");