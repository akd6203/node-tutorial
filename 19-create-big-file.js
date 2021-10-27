const {writeFileSync} = require('fs');

for(let i=1; i<=10000; i++){
    writeFileSync('./content/bigFile.txt',`This is line: ${i}\n`,{flag:'a'})
}