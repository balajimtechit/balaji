const fs = require('fs');

fs.appendFile('bala.txt', 'Writing To The Filesystem! ', (error) => {
    console.log(error);
});

console.log('Data has been written to file.txt');