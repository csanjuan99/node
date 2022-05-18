const fs = require('fs');

async function read(path, callback) {
    await fs.readFile(path, (err, data) => {
        console.log(data.toString());
        callback();
    });
}

function write(path, content, callback) {
    fs.writeFile(path, content, (err) => {
        if(err) {
            console.error(err, 'No he podido escribir el archivo!');
        } else {
            callback();
        }
    });
}

function remove (path, callback) {
    fs.unlink(path, (err) => {
        if(err) {
            console.error(err, 'No he podido borrar el archivo!');
        } else {
            callback();
        }
    });
}

/** read(__dirname + '/archivo.txt', () => {
    console.log('Leido');
}); */

/**write(__dirname + '/archivo.txt','Hello', () => {
    console.log('Escrito');
}); */

remove(__dirname + '/archivo.txt', () => {
    console.log('Borrado');
});

