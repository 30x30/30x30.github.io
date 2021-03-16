var srcElem = document.getElementById('src')
var reader = new commonmark.Parser(srcElem.innerHTML);
var parsed = reader.parse(srcElem.innerHTML)
var writer = new commonmark.HtmlRenderer();
var result = writer.render(parsed)
document.getElementById('dst').innerHTML = result
srcElem.style.display = 'none';
