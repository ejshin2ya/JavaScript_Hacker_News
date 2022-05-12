const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"; //주소가 바뀔 가능성이 있기 때문에 변수형태로 만들어 준다.
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
const store = {
  currentPage: 1,
};

function getData(url) {
  ajax.open("GET", url, false); //false는 동기적으로 처리하는 옵션, true는 비동기적으로 처리
  ajax.send();
  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];
  let template = `
  <div class="container mx-auto p-4"> 
    <h1>Hacker News</h1>
    <ul>
      {{__news_feed__}}
    </ul>
    <div>
      <a href="#/page/{{__prev_page__}}">이전 페이지</a>
      <a href="#/page/{{__next_page__}}">다음 페이지</a>
    </div>
  </div>`;

  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    newsList.push(`
    <li>
      <a href="#/show/${newsFeed[i].id}">
        ${newsFeed[i].title} (${newsFeed[i].comments_count})
      </a>
    </li>`);
  }
  template = template.replace("{{__news_feed__}}", newsList.join(""));
  template = template.replace(
    "{{__prev_page__}}",
    store.currentPage > 1 ? store.currentPage - 1 : 1
  );
  template = template.replace(
    "{{__next_page__}}",
    newsFeed[store.currentPage * 10] ? store.currentPage + 1 : store.currentPage
  );
  container.innerHTML = template;
}

function newsDetail() {
  const id = location.hash.substr(7); //첫번쨰부터 끝까지의 문자열만 반환(#을 제거한 숫자값만 얻을 수 있다.)

  const newsContent = getData(CONTENT_URL.replace("@id", id));
  container.innerHTML = `
    <h1>${newsContent.title} </h1>
    <div>
      <a href="#/page/${store.currentPage}">목록으로</a>
    </div>
   `;
}
function router() {
  const routePath = location.hash;
  if (routePath === "") {
    newsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = Number(routePath.substr(7));
    newsFeed();
  } else {
    newsDetail();
  }
}
window.addEventListener("hashchange", router);
router();
