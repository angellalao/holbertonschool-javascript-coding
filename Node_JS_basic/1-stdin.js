process.stdin.setEncoding('utf-8');

const welcomeMessage = 'Welcome to Holberton School, what is your name?';
console.log(`${welcomeMessage}`);

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
