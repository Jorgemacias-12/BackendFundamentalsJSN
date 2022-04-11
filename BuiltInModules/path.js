const path = require('path');

console.log(path.sep);

const filePath = path.join("/database","migrations", "migration.sql");

console.log(filePath);
console.log(path.basename(filePath));

const absolutePath = path.resolve(__dirname, 'database', 'migrations', 'migration.js');

console.log(absolutePath)
