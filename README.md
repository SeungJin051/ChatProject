# ZoomProject

## Requirements
-Back-End-
What is Express.js?
Node.js를 개선한 프레임 워크 (웹서버)

### What is app.get(경로, 콜백함수);?
*라우팅
URI(경로) 및 특정한 HTTP(Hyper Text Transfet Protocol) 요청 메소드(GET,POST)의 클라이언트 요청에 응답하는 방법을 결정
각 라우트는 하나 이상의 핸들러 함수를 가질 수 있고, 라우트가 일치할 때 실행된다.

라우트 구조, GET 방식의 method
app = express 객체

### What is Pug?
HTML 을 PUG 문법으로 작성하면 HTML 로 바꿔주는 기능을 한다.
express의 패키지 view engine이다.



### What is (req, res)?
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

<hr>

response = 응답 한다.

function의 기능이 수행된 이후, 수행을 알림

res.send() : 클라이언트에 응답을 보낸다.
res.json() : 클라이언트에 json을 만든다.
res.redirect() : 페이지를 이동시킨다.

### What is =>?
화살표 함수 표현(arrow function expression)

              ex)
              const materials = [
                'Hydrogen',
                'Helium',
                'Lithium',
                'Beryllium'
              ];

              console.log(materials.map(material => material.length));
              // Expected output: Array [8, 6, 7, 9]
              
### What is package.json?
기본적으로 package.json은 프로젝트에 대한 설정파일
node.js에서 표준이라고 보는 npm을 잘 알고 쓸 수 있도록 필요함

NPM(Node Package Manager)
npm(Node Package Manager)은 node.js를 위한 패키지 매니저이자, node.js를 위한 오픈소스 생태계이다.
npm은 node.js에서 사용하는 모듈들을 패키지로 만들어 관리하고 배포하고 있다.

그래서 개발자가 배포한 패키지에 대해 다른 사람들이 관리하고 설치하기 쉽게 하기 위한 문서이다.
npm에 패키지를 배포하고 npm registry에 올리기 위해서 반드시 필요한 문서파일이다.

### What is nodemon? 
node 서버를 이용하면서 코드를 변경하게 될 경우, 변경한 코드를 웹 상에서 확인하려면 서버를 껐다가 다시 켜야 변화를 감지할 수 있다. 
nodemond 서버를 내리고 올리지 않아도 소스를 변경할 때 바로 감지해서 자동으로 서버를 재시작 해주는 도구이다.

