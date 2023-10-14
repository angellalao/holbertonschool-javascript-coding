const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const studentData = await countStudents(process.argv[2]);
  res.send(`This is the list of our students\n${studentData}`);
});

app.listen(1245);

module.exports = app;
