var http = require('http');
var fs = require('fs');
//node.js에서 url 모듈을 사용, 앞으로 url이란 변수로 접근해 사용.
var url = require('url'); 
const PORT = 3001;

// 1. 서버를 개설. 라우팅 정보를 콜백 함수로 삽입!
var app = http.createServer(function(request,response){
  // 2. 먼저 모듈을 활용해 주소창 url을 파싱
    var _url = request.url; //__url은 주소창 값 변수명, url은 모듈 변수명
    var queryData = url.parse(_url, true).query;// 파싱대상 첫 인자가 __url
    console.log(queryData);
  // 3. 그 다음 라우팅 정보로 어떤 파일을 보여줄지 결정 
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404); // response.writeHead로 파일을 보냄
    }
    response.writeHead(200);
    //response.end 안에 있는 건 특정 디렉토리의 url을 불러오게 하는 명령어
    response.end(fs.readFileSync(__dirname + _url)); 
 
});
app.listen(PORT,()=>console.log(`server running at port:${PORT}`));
// 아직 에러 처리가 없으니 이상한 루트로 접근하면 바로 서버가 닫힘.