const fs = require('fs');

fs.writeFileSync('coba.txt', 'wadidaw and digigaw');

fs.readFile('coba.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})
