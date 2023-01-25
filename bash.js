// const ls = require('./ls');

process.stdout.write('prompt > ');

const pwd = require('./pwd'); // connects the pwd.js module

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // removes the new line
    pwd();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    if (cmd === 'ls') {
        require('./ls');
    }
});

