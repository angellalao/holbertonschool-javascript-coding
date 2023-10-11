const app = require('http');

app.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
}).listen(1245);
