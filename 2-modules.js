// Modules 

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

console.log(names)
sayHi('James');
sayHi(names.john);
sayHi(names.peter);
console.log(data);
console.log(data.items[0]);