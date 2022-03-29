//copy index.html file from module1 to a new folder inside module2 having name html.

let fs = require("fs");
let path = require("path");

let srcpath = path.join(__dirname,"..","..","..","module-1","selector.html");
console.log(srcpath);
let despath = path.join(__dirname,"..","..","selector.html");
console.log(despath);

fs.copyFileSync(srcpath,despath);