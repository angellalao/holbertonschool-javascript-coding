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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Hello Holberton School');
    response.end();
  }
  if (request.url === '/students') {
    const studentData = await countStudents(process.argv[2]);
    const responseText = `This is the list of our students\n${studentData}`;
    try {
      // console.log('studentData:', studentData);
      response.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      response.end(responseText);
    } catch (error) {
      response.writeHead(500, {
        'Content-Type': 'text/plain',
      });
      response.end(responseText);
    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
}).listen(1245);

module.exports = app;
