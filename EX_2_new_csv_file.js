const fs = require('fs');


const data = [
    {"C1": 'Data 1', "C2": 'Data 2'},
    {"C1": 'Data 1', "C2": 'Data 2'}
  ]
const writeStream = fs.createWriteStream('../data/test.csv');

  writeStream.write('C1,C2\n');
  

  data.forEach((row) => {
    
    let writeStreamArgument = `${row.C1},${row.C2}\n`;
    writeStream.write(writeStreamArgument);

  });

  console.log(typeof data);

writeStream.end