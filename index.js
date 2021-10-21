const http = require('http');
const request = require('request');

const origin = process.env.npm_config_url ? process.env.npm_config_url  : 'https://www.google.com';

http.createServer(function (req, res) {
    req.pipe(request(origin + req.url)).pipe(res);
}).listen(8080);