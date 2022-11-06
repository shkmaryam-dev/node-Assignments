//7. Write a program to promisify fs.unlink function and call it.

const fs = require('fs');

getFilesInDirectory();

fs.unlink("../files/file1.txt", (err => {
if (err) console.log(err);
else {
	console.log("\nDeleted file: example_file.txt");
	getFilesInDirectory();
}
}));

function getFilesInDirectory() {
console.log("\nFiles present in directory:");
let files = fs.readdirSync(__dirname);
files.forEach(file => {
	console.log(file);
});
}
