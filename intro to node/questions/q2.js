// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let fs = require("fs");
let path = require("path");

let arr = ['Audio','Video','Software','Documents','Application','Others'];
let nameArr = ['abc','efg','xyz','def'];
let extarr = ['.mp3','.mp4','.exe','.pdf','.apk','.rar'];

let Organisepath = path.join(__dirname,"organise");
if(!fs.existsSync(Organisepath))
  fs.mkdirSync(Organisepath);

  for(let i=0;i<arr.length;i++)
  {
      let folderkapath = path.join(Organisepath,arr[i])
      if(!fs.existsSync(folderkapath))
      fs.mkdirSync(folderkapath)
      for(let j =0;j<nameArr.length;j++)
      {
          let fileName = nameArr[j]+extarr[i];
          let fileKaPath = path.join(folderkapath,fileName);
          fs.writeFileSync(fileKaPath,"");
      }
  }
