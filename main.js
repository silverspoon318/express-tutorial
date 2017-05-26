var express = require('express');
var app = express();
var user = require('./routes/user');
var morgan = require('morgan');
var bodyParser = require('body-parser')
;// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.use('/user', user);

app.listen(3000, function(){
    console.log('Example App is listening on port 3000');
});

/**
    기본 라우팅
    app.METHOD(PATH, HANDLER)

    METHOD: HTTP 요청 메소드 - get, po::ㅈㅂst, delete, put ...
    PATH: 라우트 경로
    HANDLER: 실행 될 콜백 함수
**/

/**
    미들웨어 정의
    미들웨어 함수는
    요청 오블젝트(req),
    응답 오브젝트(res),
    그리고 애플리케이션의 요청-응답주기 중 그 다음의 미들웨어 함수 대한 액세스 권한을 갖는 함수입니다.
    HTTP 요청 =>> 미들웨어 =>> EXPRESS =>> 라우트 작업 =>> HTTP 응답

    NPM으로 github 열기
    npm rep {미들웨어 이름}

    NPM으로 미들웨어 설치
    npm install --save morgan body-parser
    morgan: 로깅 미들웨어, body-parser: JSON 형태 데이터 파싱


    npm install -g nodemon
    nodomon main.js

    express에서 제공하는 정적(static)파일 제공
    app.use('/', express.static('public'));
**/
