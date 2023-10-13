const http = require('http');
const fs = require('fs').promises;

async function countStudents(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const studentData = lines.slice(1).map((line) => line.split(','));
    // console.log(studentData);

    const studentCount = studentData.length;

    const cs = [];
    const swe = [];
    for (let i = 0; i < studentData.length; i += 1) {
      if (studentData[i][3] === 'CS') {
        cs.push(studentData[i][0]);
      } else if (studentData[i][3] === 'SWE') {
        swe.push(studentData[i][0]);
      }
    }
    return (`Number of students: ${studentCount}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const path = process.argv[2];
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const title = 'This is the list of our students\n';
    try {
      const result = await countStudents(path);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(title + result);
    } catch (error) {
      res.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
}).listen(1245);

module.exports = app;
