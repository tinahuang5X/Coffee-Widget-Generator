/*addEventListener('DOMContentLoaded', main);

function main() {
  const $root = document.querySelector('#root');
  const $app = null; // <== Your dynamically generated DOM element goes here
  $root.appendChild($app);
}
*/
addEventListener('DOMContentLoaded', main);
const CoffeePageScraper = require('./scrapers/CoffeePageScraper.js');
const {
  div,
  h1,
  h2,
  h3,
  h4,
  button,
  img,
  form,
  input,
  label
} = require('elementx');

function main() {
  const $root = document.querySelector('#root');
  const $searchForm = div(
    { class: 'coffee search' },
    label(
      { id: 'label' },
      `Please enter the web address of the coffee you are looking for.`
    ),
    form(
      { id: 'form' },
      input({ id: 'input', type: 'url' }),
      button({ type: 'submit', id: 'button' }, 'Submit')
    )
  );
  // const $app = $searchForm; // <== Your dynamically generated DOM element goes here
  // $root.appendChild($app);
  $root.appendChild($searchForm);

  const coffeeObject = new CoffeePageScraper();
  let $button = document.getElementById('button');
  $button.addEventListener('click', function() {
    event.preventDefault();
    let webAddress = document.getElementById('input');
    //console.log(webAddress.value);
    if (webAddress.value.length > 0) {
      coffeeObject.scrape(webAddress.value).then(responseObj => {
        const $widget = div({ class: 'coffee widget' }, [
          img({ src: responseObj.image }),
          h1(responseObj.brand),
          h2(responseObj.name),
          h3(responseObj.description),
          h3(responseObj.boxcount, ' - ', responseObj.price),
          h4('Customer Review: ', responseObj.review)
        ]);
        //console.log($widget);
        const $app = $widget;
        $root.appendChild($app);
      });
    } else {
      alert('Please enter a valid web address!');
      return;
    }
  });
}
