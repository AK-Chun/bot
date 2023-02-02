var shell = require('shelljs')
const schedule  =  require ('node-schedule'); 
let job = schedule.scheduleJob('*/5 * * * * *', () => {
    if (shell.exec('npx playwright test Damus6.spec.ts').code !== 0){
        shell.echo('failed');
    }
    console.log(new Date());
});