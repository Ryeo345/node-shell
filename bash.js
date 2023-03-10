// const ls = require('./ls');
// process.stdout.write('prompt > ');
//
// const done = (str) => {
//     process.stdout.write(str);
//     process.stdout.write('\nprompt > ');
// }
// const pwd = require('./pwd'); // connects the pwd.js module
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); // removes the new line
//     if (cmd === "pwd") {
//         //pwd();
//         done(__dirname) // same as pwd();
//
//     }
//     else if (cmd === 'date') {
//         process.stdout.write(new Date().toString());
//         process.stdout.write('\nprompt > ');
//     }
//     else if (cmd === 'ls') {
//         ls(done);
//         // fs.readdir(__dirname, (err, files) => {
//         //     process.stdout.write(files.join('\n'));
//         //     process.stdout.write('\nprompt > '); // we put this prompt in the asynchronous portion so we can get this prompt to output after the asynchronous part
//         // }); // asynchronous function so we need a callback function
//         // require('./ls');
//     }
//     else {
//         process.stdout.write(`${cmd} is Not a valid command`)
//     };
// });

// const fs = require('fs');
const ls = require('./ls');
const pwd = require('./pwd');
const cat = require('./cat');
const date = require('./date');
const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline

    if (cmd === 'pwd') {
        pwd(done);
        // done(`Current working directory: ${process.cwd()}`);
        // process.stdout.write('\nprompt > ');
    }

    else if (cmd === 'ls') {
        // fs.readdir('./', 'utf8', (err, files) => {
        //     if (err) {
        //         throw err;
        //     } else {
        //         done(files.join('\n'));
        //         // process.stdout.write('\n\nprompt > ');
        //     }
        // });
        ls(done);
    }
    else if (cmd.startsWith('cat')) {
        const file = cmd.split(' ')[1]
        console.log(cmd);
        console.log(file);
        cat(done, file); // don't forget to add the correct amount ogf arguments
    }

    else if (cmd === 'date') {
        date(done);
    }

    else {
        done(`${cmd} is not a cmd in bash`);

    }

});
