const { exec, spawn } = require('child_process');

/** exec('ls -la', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
}); */

let process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
    console.log('Esta muerto?')
    console.log(process.killed)
    console.log(dato.toString());
});

process.on('exit', function () {
    console.log('termino');
})