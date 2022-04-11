const http = require('http');

const server = http.createServer((req, res) => {

  console.log(req);

  if (req.url === '/') {
    res.write(`<h1> Welcome to the page</h1>`);
    res.end();
  }
  
  if (req.url === '/home'){
    res.end(`<h1>This is out home page :)</h1>`)
    res.end();
  }

});

server.listen(80);