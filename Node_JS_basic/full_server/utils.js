const fs = require('fs').promises;

async function readDatabase(file) {
  const fileData = await fs.readFile(file, 'utf-8');
  const lines = fileData.split('\n');
  lines.shift();
  const data = {};

  for (const line of lines) {
    const [field, , , firstName] = line.split(',');

    if (!data[field]) {
      data[field] = [];
    }
    data[field].push(firstName);
  }
  return data;
}

module.exports = readDatabase;
