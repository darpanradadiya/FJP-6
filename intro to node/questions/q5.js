//move a file

let fs = require('fs');
let path = require('path');

let srcpath =  path.join(__dirname,"newFolder","newFile.txt");
let despath =  path.join(__dirname,"..","doriyo","newFile.txt")

fs.copyFileSync(srcpath,despath);

fs.unlinkSync(srcpath);