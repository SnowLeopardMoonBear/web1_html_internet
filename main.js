var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url); // 디렉토리와 파일 url을 띄워줌
    response.end(fs.readFileSync(__dirname + url)); //response.end 안에 있는 건 특정 디렉토리의 url을 불러오게 하는 명령어
 
});
app.listen(3000);