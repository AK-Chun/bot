const fs = require('fs');
const child_process = require('child_process');
 

(async () => {
    for(var i=0; i<10; i++) {
        console.log('bot', i);
        var workerProcess = child_process.exec('node CommonDamus.js discord', function (error, stdout, stderr) {
            if (error) {
                console.log(error.stack);
                console.log('Error code: '+error.code);
                console.log('Signal received: '+error.signal);
            }
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        });
    
        workerProcess.on('exit', function (code) {
            var workerProcess = child_process.exec('node CommonDamus.js discord', function (error, stdout, stderr) {
                if (error) {
                    console.log(error.stack);
                    console.log('Error code: '+error.code);
                    console.log('Signal received: '+error.signal);
                }
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
            });
        });
        await wait(30000);
        
    }
})();

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};