class CoffeePageScraper {
  // TODO: DELETE THIS CONSTRUCTOR, NOT NEEDED
  // constructor() {
  //   this.image = doc.getElementById('base_image').src;
  //   this.brand = doc.getElementsByClassName('kold medium-4 columns')[0].children[0].innerText;
  //   this.coffeename = doc.getElementsByClassName('productHeading')[0].innerText;
  //   this.listArray;
  // }

  scrape(url) {
    return fetch(url).then(response => response.text()).then(html => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(html, 'text/html');
      this.image = doc.getElementById('base_image');
      //this.imageLink = doc.getElementById('base_image').src;
      this.brand = doc.getElementsByClassName('kold medium-4 columns');
      this.coffeename = doc.getElementsByClassName('productHeading');
      this.list = doc.getElementsByClassName('brewerPdpWrapperComponentRight');
      this.listArray = [];
      for (let i = 0; i < this.list[0].children[0].children.length; i++) {
        this.listArray.push(this.list[0].children[0].children[i].innerText);
      }
      this.option = doc.getElementsByTagName('option');
      this.review = doc.getElementsByClassName('bvseo-review');
      //console.log(brand[0].children[0].innerText);
      //console.log(coffeename[0].innerText);
      //console.log(listArray.join());
      //console.log(option[1].getAttribute("data-info"));
      //console.log(option[1].getAttribute("data-price"));
      //console.log(review[0].children[4].innerText);
      let obj = {
        image: this.image.src,
        brand: this.brand[0].children[0].innerText,
        name: this.coffeename[0].innerText,
        description: this.listArray.join('. '),
        boxcount: this.option[1].getAttribute('data-info'),
        price: this.option[1].getAttribute('data-price'),
        review: this.review[0].children[4].innerText
      };
      return obj;
    });
  }
}

module.exports = CoffeePageScraper;
