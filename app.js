// Types of require

// const fs = require('fs'); // Main Node library that you don't need to preinstall anything
// const fs = require('express'); // Third party library that needs to be preinstall before calling it
// const fs = require('./fs'); // Personal files that we write and can be call from another file


// Requires

const fs = require('fs');



let base = 6;
let data = '';

for (let i = 1; i<=10; i++ ) {

    data += `${base} * ${i} = ${base * i}\n`;

}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  
    if (err) throw err;

    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
