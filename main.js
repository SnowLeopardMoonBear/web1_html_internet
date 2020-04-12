var http = require('http');
var fs = require('fs');
var url = require('url'); //node.js에서 url 모듈을 사용, 앞으로 url이란 변수로 접근해 사용.
const PORT = 3001;

var app = http.createServer(function(request,response){ //익명(위에서 따로 정의 안 함)의 콜백함수를 변수 안에 넣어주기
    var _url = request.url; //이름 다른 건 url 모듈과 변수명 구별 위해
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url)); //response.end 안에 있는 건 특정 디렉토리의 url을 불러오게 하는 명령어
 
});
app.listen(PORT,()=>console.log(`server running at port:${PORT}`));
// 아직 에러 처리가 없어서 이상한 루트로 접근하면 바로 서버가 닫힙니다.