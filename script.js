import key from './api.json' assert { type: 'json' };
const url = `
https://newsapi.org/v2/everything?q=bbc-news&language=en&sortBy=publishedAt&apiKey=${key.key}`;
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    let ln = json.articles;
    var a = 0;
    // Load more
    var b = 20;
    function load() {
      for (var i in ln) {
        a++;
        if (a > b) return;
        // crate new div (news) inside a div (resoults)
        var title = ln[i].title;
        var desc = ln[i].description;
        var source = ln[i].source.name;
        var author = ln[i].author;
        var div = document.getElementById('resoults');
        var newdiv = document.createElement(`div`);
        var atitle = `${title}`;
        if (atitle.length > 50) atitle = title.substring(0, 50) + '...';
        var adesc = `${desc}`;
        if (adesc.length > 170) adesc = desc.substring(0, 170) + '...';
        div.appendChild(newdiv);
        newdiv.id = `new${i}`;
        newdiv.innerHTML += `<h2>${atitle}</h2>`;
        newdiv.innerHTML += `<p>${adesc}</p>`;
        newdiv.innerHTML += `<a id="link" target="_blank" href='${ln[i].url}'>Read More</a>`;
        if (author !== null) newdiv.innerHTML += `<p>Author: ${author}</p>`;
        newdiv.innerHTML += `<p>Source: ${source}</p>`;
        // style
        newdiv.style.maxWidth = '20em';
        newdiv.style.maxHeight = '17em';
        newdiv.style.width = '20em';
        newdiv.style.height = '17em';
        newdiv.style.backgroundColor = '#8396C7';
        newdiv.style.border = '0.2em solid';
        newdiv.style.borderColor = '#000  ';
        newdiv.style.textDecoration = 'none';
      }
    }
    load();
  });
