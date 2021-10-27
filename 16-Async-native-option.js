const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8');
        console.log(first, second);
        
        writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME ${first} ${second}`
        )
        console.log('File created!')
    }
    catch(err){
        console.log(err);
    }
}

start()


////////////////////////// OR ////////////////////////////

// const { readFile, writeFile } = require('fs').promises;
// // const util = require('util');
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try{
//         const first = await readFile('./content/first.txt','utf8');
//         const second = await readFile('./content/second.txt','utf8');
//         console.log(first, second);
        
//         writeFile(
//             './content/result-mind-grenade.txt',
//             `THIS IS AWESOME ${first} ${second}`,
//             {flag:'a'}
//         )
//         console.log('File created!')
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// start()