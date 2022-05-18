function anotherError () {
    return error();
}


function error() {
    return 3 + z;
}

function errorAsync (callback) {
    setTimeout(function () {
        try {
            return error();
        } catch(e) {
            console.error(e.message);
            callback(e);
        }
    }, 1000);
}

/**try  {
    errorAsync();
} catch (e) {
    console.error(e.message, ' \n Error en la funcion error');
} */
errorAsync( (e) => {
    console.log(e);
});
console.log('Fin del programa');    