"F:\FJP-6\module-2\intro to node\path.js"
let path = require("path");
//console.log(path);

let extensionName = path.extname("F:\FJP-6\module-1\a1.html");

//console.log(extensionName);
//let baseName = path.basename("F:\FJP-6\module-2\intro to node\childprocess.js");
//console.log(baseName);
//console.log(__dirname);
//console.log(__filename);
let dirpath = __dirname;
let newfilePath = path.join(dirpath,"test.js");
console.log(newfilePath);