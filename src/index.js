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
      h1('Keurig Site'),
      input({ id: 'input1', type: 'url' }),
      h1('Amazon Site'),
      input({ id: 'input2', type: 'url' }),
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
    let webAddress1 = document.getElementById('input1');
    //console.log(webAddress.value);
    if (webAddress1.value.length > 0) {
      coffeeObject.scrape1(webAddress1.value).then(responseObj1 => {
        const $widget = div({ class: 'coffee widget' }, [
          img({ src: responseObj1.image }),
          h1(responseObj1.brand),
          h2(responseObj1.name),
          h3(responseObj1.description),
          h3(responseObj1.boxcount, ' - ', responseObj1.price),
          h4('Customer Review: ', responseObj1.review)
        ]);
        //console.log($widget);
        const $app1 = $widget;
        $root.appendChild($app1);
      });
    } else {
      alert('Please enter a valid web address!');
      return;
    }

    let webAddress2 = document.getElementById('input2');
    if (webAddress2.value.length > 0) {
      coffeeObject.scrape2(webAddress2.value).then(responseObj2 => {
        const $pricewidget = div(
          { class: 'price widget' },
          h1('Amazon Price:  ', responseObj2.priceAmazon)
        );
        //console.log($widget);
        const $app2 = $pricewidget;
        $root.appendChild($app2);
      });
    } else {
      alert('Please enter a valid web address!');
      return;
    }
  });
}
