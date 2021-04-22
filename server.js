const http = require('http');

const PORT = 8080;

const handler = (request, response) => {
    response.end('Its alive! Path hit: ${request.url}');

};

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});