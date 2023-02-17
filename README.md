# ZoomProject

## Requirements
-Back-End-
What is Express.js?
Node.js를 개선한 프레임 워크 (웹서버)

What is app.get(경로, 콜백함수);?
*라우팅
URI(경로) 및 특정한 HTTP(Hyper Text Transfet Protocol) 요청 메소드(GET,POST)의 클라이언트 요청에 응답하는 방법을 결정
각 라우트는 하나 이상의 핸들러 함수를 가질 수 있고, 라우트가 일치할 때 실행된다.

라우트 구조, GET 방식의 method
app = express 객체

What is Pug?
HTML 을 PUG 문법으로 작성하면 HTML 로 바꿔주는 기능을 한다.
express의 패키지 view engine이다.



What is (req, res)?
![image](https://user-images.githubusercontent.com/83889135/219585698-e0c6fc34-ef85-4501-b775-f0d95b9a4903.png)

request = 요청을 받는다.

req.body: body-parser 미들웨어가 만드는 요청의 본문을 해석한 객체이다.
req.params : 파라미터의 데이터를 가져온다.
req.query : 쿼리스트링의 정보를 가져온다.
req.headers : header 값을 가져온다.
req.cookies : 쿠키 값을 가져온다.
req.ip : 프론트 아이피를 가져온다
req.protoco : 프로토콜 http? https? 인지 가져온다
req.url : 전체 URI 정보를 가져온다.

response = 응답 한다.

function의 기능이 수행된 이후, 수행을 알림

res.send() : 클라이언트에 응답을 보낸다.
res.json() : 클라이언트에 json을 만든다.
res.redirect() : 페이지를 이동시킨다.
