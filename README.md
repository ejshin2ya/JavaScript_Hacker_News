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
