const e = document.getElementById('E');

import key from './api.json' assert { type: 'json' };
const url = `
https://newsapi.org/v2/everything?q=bbc-news&language=en&from=2022-05-30&sortBy=publishedAt&apiKey=${key.key}`;
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    let ln = json.articles;
    for (var i in ln) {
      var title = ln[i].title;
      var div = document.getElementById('resoults');
      div.innerHTML += `<h3>${title}</h3>`;
    }
  });
