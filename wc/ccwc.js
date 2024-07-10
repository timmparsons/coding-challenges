const fs = require('node:fs');
const arg = process.argv[2];
const link = process.argv[3];
console.log('xxx ', link);
fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const byteCount = () => {
    const stats = fs.statSync();
    console.log(stats.size);
  };

  const numberOfLines = () => {
    const lines = data.toString().split('\n');
    console.log(lines.length);
  };

  const wordCount = () => {};

  const allData = () => {};

  switch (arg) {
    case '-l':
      return numberOfLines();
    case '-w':
      return wordCount();
    case '-c':
      return byteCount();
    default:
      return allData();
  }
});
