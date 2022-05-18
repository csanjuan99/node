function saludo(name, callback) {
    setTimeout(function() {
        console.log("Hola " + name);
        callback(name);
    }, 2000);
}

function despedida(name,callback) {
    setTimeout(function() {
        console.log("Adios " + name);
        callback();
    }, 2000);
}

saludo("Juan", function(name) {
    despedida(name,function() {
        console.log("Termino el proceso");
    });
});