console.log(setInterval);

let i = 0;
let intervalo = setInterval(() => {
    console.log("Hola");
    if( i === 3 ) {
        clearInterval(intervalo);
        console.log("Fin");
    }
    i++;
}, 1500);

console.log(__dirname);