// read content of unorganised folder and make  an array which has extension name of each file

let fs = require("fs");
let path = require("path");
let arr = [];
let folderkapath = path.join(__dirname,"..","..","unorganise");
let content = fs.readdirSync(folderkapath);

for(let i=0;i<content.length;i++)
{
 let name = content[i];
 let extname = path.extname(name);
 arr.push(extname);
}
console.log(arr);

