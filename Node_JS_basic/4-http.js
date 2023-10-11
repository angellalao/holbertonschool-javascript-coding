const app = require('http');

const server = app.createServer((request, response) => {
  response.write('Hello Holberton School!');
  response.end();
}).listen(1245);

module.exports = server;
