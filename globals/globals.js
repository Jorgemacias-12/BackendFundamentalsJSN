/*
  Globals :D - No window object exitst here in node.
*/

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (common js)
// module     - info about current module (file)
// process    - info about env where the program is begin executed

console.log(`Current dir: ${__dirname}`);

setInterval(
  () => {
    let i = 0;
    ++i;
    console.log(`Soy el hola mundo #${i}`);
  },
  1000
);