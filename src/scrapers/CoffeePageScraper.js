class CoffeePageScraper {
  constructor(url) {
    this.url = url;
      }

scrape(url) {
  fetch('http://cors-bypass-proxy.axiomlogic.com/http://www.keurig.com/Beverages/Coffee/Regular/Dark-Magic%C2%AE-Extra-Bold-Coffee/p/Dark-Magic-Extra-Bold-Coffee-K-Cup-Green-Mountain/')
  .then(response => response.text())
  .then(html =>  {
  let parser = new DOMParser();
  let doc = parser.parseFromString(html, "text/html");
  let image = doc.getElementById('base_image');
  let content = doc.getElementsByClassName('productHeading');
  var title = doc.getElementsByClassName('kold medium-4 columns');
  let list = doc.getElementsByClassName('brewerPdpWrapperComponentRight');
  //console.log(title[0].children[0].innerText);
  console.log(list[0].children[0].children[0].innerHTML);
  return doc;
})


const { div, h1, a } = require('elementx')

const node = div(
  h1({ class: 'title' }, title),
  div({ class: 'bg-red' },
    a({ href: 'http://github.com' }, 'Github')
  )
)


document.body.appendChild(node)
