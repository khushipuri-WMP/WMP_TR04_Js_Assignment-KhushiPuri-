const currentdate = new Date();
let day = currentdate.getDate();
let month = currentdate.getMonth() + 1;
const year = currentdate.getFullYear();

day = day < 10 ? '0' + day : day;
month = month < 10 ? '0' + month : month;

console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

