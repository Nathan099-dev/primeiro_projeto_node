const http = require('http');
http.createServer((request, respose) => {
    respose.writeHead(200, {'content-type': 'aplication/json'});

    if (request.url == 'produto') {
        respose.end(JSON.stringify({
            message: 'Rota de produtos'
        }));
    }

    if (request.url == 'usuários') {
        respose.end(JSON.stringify({
            message: 'Rota usuários'
        }));
    }

}).listen(3000, () => console.log('Servidor rodando na porta 3000'));