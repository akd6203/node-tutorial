const { readFile } = require('fs');
const { reject, result } = require('lodash');

const getText = (path) => {
    return new Promise((reject, resolve) => {
        readFile(path, 'utf8', (err, data) => {
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

getText('./content/second.txt').then((result) => console.log(result)).catch((err) => console.log(err));