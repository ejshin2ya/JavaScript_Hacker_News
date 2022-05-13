## 참고사이트

- https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
- https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest

## 02. 두개의 화면을 가진 웹앱

- location 객체는 브라우저가 기본으로 제공해주는 객체로 주소와 관련된 다양한 정보들을 제공해 줍니다.
- 해시는 주소에 붙어 있기 때문에 location 객체에 hash라는 속성으로 데이터를 넘겨준다.

## 03. 문자열을 활용한 HTML 다루기

- 현재 코드의 문제점 : HTML 태그들의 위계 구조가 코드상으로 알수 없는 상황
- DOM API를 제거하고 문자열을 활용해서 HTML을 다뤄보자!

* 중복되는 코드를 함수를 이용해서 제거해주었다.
* getData() 함수를 만들어서 데이터를 받는 함수를 만들어보았다.

## 04. 라우터? 화면처리기 만들기

- 현재 코드의 문제점 : 같은 화면에 목록이 계속 추가만 되는 상황, HTML 위계구조 파악이 안되는 부분들도 존재
- 배열을 사용하여 DOM API 제거
- 해시이벤트를 이용한 라우터 구현으로 글 목록화면과 글 세부내용 화면을 구분지어줌

## 05. 페이징 구현하기

- 여러함수에 걸쳐서 접근하는 정보는 함수 밖으로 꺼내서 사용하는 것이 좋다(ex. 페이지)

* 함수 밖에 store라는 객체를 이용해서 페이지 정보가 담기는 currentPage 변수를 만들어주었다.
* hash 이벤트가 세부정보를 보여주는 경우와 페이지정보를 담은 목차로 이동하는 경우 두가지로 구분하기 위해 /page/, /show/를 사용했다.

## 06. 복잡한 UI 구현을 위한 준비 작업- 템플릿

- UI 구현하기 전에 복잡도를 줄이기 위해 템플릿 형태로 만들어 준다.

* 템플릿을 통해 UI의 구조를 명확하게 알 수 있게 되었다.
* tailwindcss를 이용해서 편리하게 UI를 만들어보자. (https://tailwindcss.com/docs/installation)
* mx(margin, x는 폭) p-4(padding, 4px)

## 07. 댓글 목록이 표시되는 아름다운 UI 만들기

- 마킹된 값의 개수만큼 replace가 등장하는 등 템플릿 방식의 단점이 존재한다.
- handlebars 라이브러리를 이용해서 바꿔보기(https://handlebarsjs.com/)

* cdnjs(https://cdnjs.com/)를 이용해서 fontawesome 적용하기(https://fontawesome.com/icons)
* cndjs 사이트에서 fontawesome 검색 후 cdn을 카피해서 html에 붙여넣어준다.

* 재귀 함수를 통해 comments의 하위 댓글들을 끝까지 출력

## 08. 상태를 가져보자, 읽은 글 표시하기

- 페이지 읽을때마다 전체 데이터를 가져오는 것을 막기 위해 공용된 store 객체에 새로운 feed 변수를 만들어서 데이터를 모두 담아준다.
- 읽은 페이지의 id값을 feed 배열에서 찾아서 true로 바꿔준다.
- true일떄만 css 효과를 다르게 적용해주는 삼항조건 연산자를 사용했다.
