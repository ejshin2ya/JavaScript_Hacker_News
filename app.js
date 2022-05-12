const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"; //주소가 바뀔 가능성이 있기 때문에 변수형태로 만들어 준다.
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  ajax.open("GET", url, false); //false는 동기적으로 처리하는 옵션, true는 비동기적으로 처리
  ajax.send();
  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  const id = location.hash.substr(1); //첫번쨰부터 끝까지의 문자열만 반환(#을 제거한 숫자값만 얻을 수 있다.)

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;

  content.appendChild(title);
  // console.log("해시가 변경됨");
});

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
  <li>
    <a href="#${newsFeed[i].id}">
    ${newsFeed[i].title} (${newsFeed[i].comments_count})
    </a>
  </li>`;

  ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);
