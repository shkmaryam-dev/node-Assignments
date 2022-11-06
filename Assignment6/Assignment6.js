//6. Write a program to extract a zip file.

var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('../files/file2.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('../files/file3.txt','utf-8'));
  
console.log("File Decompressed.");