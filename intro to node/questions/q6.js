
let fs = require('fs');
let path = require('path');
let folderkapath = path.join(__dirname,"..","..","unorganise");
let content = fs.readdirSync(folderkapath);
for(let i=0;i<content.length;i++)
{
 let name = content[i];
 let extname = path.extname(name);
 if(extname == '.mp3')
 {
     console.log(content[i]+"--> audio file");
 }
 else if(extname == '.mp4')
 {
     console.log(content[i]+"--> video file");
 }
 else if(extname == '.jpg')
 {
     console.log(content[i]+"--> image file");
 }
 else if(extname == '.doc')
 {
     console.log(content[i]+"--> document file");
 }
 else if(extname == '.zip')
 {
     console.log(content[i]+"--> zip file");
 }
 else if(extname == '.pdf')
 {
     console.log(content[i]+"--> pdf file");
 }
 else if(extname == '.xlsx')
 {
     console.log(content[i]+"--> excel file");
 }
}