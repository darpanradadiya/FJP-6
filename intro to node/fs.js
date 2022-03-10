let fs = require("fs");
//console.log(fs);
let path = require('path');
let filepath = path.join(__dirname,"file.txt");
//console.log(filepath);
fs.writeFileSync(filepath,"Hello i am text file");

let content = fs.readFileSync(filepath,'utf-8');
console.log(content);

let updated = fs.appendFileSync(filepath,"\n newly added content ");
console.log(fs.readFileSync(filepath,'utf-8'));
fs.unlinkSync(filepath);