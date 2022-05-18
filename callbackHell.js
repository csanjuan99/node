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

function hablar(callback) {
    setTimeout(function() {
        console.log("Hablando...");
        callback();
    }, 2000);
}

function conversacion(name, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(name, veces - 1, callback);
        });
    } else {
        despedida(name, callback);
    }
}


console.log("Iniciando...");
saludo("Juan", function(name) {
    conversacion(name, 3, function() {
        console.log("Fin");
    });
});


// saludo("Juan", function(name) {
//  hablar(function() {
//      hablar(function() {
//          despedida(name, function() {
//              console.log("Terminado");
//          });
//      });
//  });
// }); 

