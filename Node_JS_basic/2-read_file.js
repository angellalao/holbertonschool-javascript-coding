const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, { encoding: 'utf8' });

    // console.log(`Read data from file:\n "${data}"`);
    // const lines = data.split('\n');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();
    const studentCount = lines.length;
    console.log(`Number of students: ${studentCount}`);

    const fields = {};
    for (const line of lines) {
      const splitLine = line.split(',');
      const field = splitLine[3];
      fields[field] = (fields[field] || 0) + 1;
    }
    // console.log(fields);

    for (const eachField in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, eachField)) {
        const names = [];
        for (const line of lines) {
          const splitLine = line.split(',');
          const field = splitLine[3];
          if (field === eachField) {
            const name = splitLine[0];
            names.push(` ${name}`);
          }
        }
        console.log(`Number of students in ${eachField}: ${fields[eachField]}. List:${names}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
