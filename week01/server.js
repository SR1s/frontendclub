const http = require('http')

http.createServer((req, resp) => {
    let body = [];
    req.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        console.log(chunk.toString());
        body.push(chunk);
    }).on('end', () => {
        let string = Buffer.concat(body).toString();
        console.log("body: ", string);
        resp.writeHead(200, { 'Content-Type': "text/html" });
        resp.end(" Hello World\n");
    })
}).listen(8088)

console.log("server started")