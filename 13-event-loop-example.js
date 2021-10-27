const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request received...');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000 \nPress Ctrl+C to exit...')
})


// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('HOME PAGE')
//     }
//     if(req.url === '/about'){
//         res.end('About PAGE')
//     }
// });

// server.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000 \nPress Ctrl+C to exit...')
// })