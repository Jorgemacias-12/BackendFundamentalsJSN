const fs = require('fs');
const path = require('path');

let content = fs.readFileSync(path.join(__dirname + "/notes.txt")).toString();
let content2 = fs.readFileSync(path.join(__dirname + "/test/notes-2.txt")).toString();

// console.log(`Readed text: ${content}  |  ${content2}`)

fs.writeFileSync(path.join(__dirname + '/test/result.txt'), `Today was a good day`, { flag: 'a' });

// Async option

fs.readFile(path.join(__dirname + "/test/notes-2.txt"), (err, result) => {
  if (err) throw new Error("Something went wrong :C" + err);

  console.log(result.toString());

});

fs.readFile(path.join(__dirname + "/notes.txt"), (err, result) => {
  if (err) throw new Error("Something went wrong :C" + err);

  console.log(result.toString());

});

fs.writeFile(path.join(__dirname + "/test/result.txt"), 'Today was a good day again', (err, result) => {
  if (err) throw new Error("Something went wrong :C" + err);

  console.log(result);

})