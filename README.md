Screen Shot 2017-08-10 at 4.58.22 PM

- A list of the tools/frameworks you're using and a description of what they're being used for
- An explanation of the type of web page you're scraping to generate your widget
- A list of future enhancements that you'd like to make if/when you have more time


- Use the `fetch` API to make HTTP requests / AJAX calls
- Use the `DOMParser` class to parse HTML and extract data from that HTML using DOM query methods
- Use the `elementx` library, and functional composition, to create *all* HTML/DOM elements
- Use CSS to style your widget and form


I used the 'fetch' API to make HTTP requests and received the HTML page.  I then used the DOMParser class to parse the HTML and extract data from that HTML using DOM query methods.  All of the above were done inside the scrape function of the CoffeePageScraper class.  The data extracted from the HTML got stored in the values of an object and got exported.  The search form was created using the elementx library in the index.js file.  When the new object was instantiated and the function was called.  I used the objects returned from the function and elementx libray to construct my widgets.

I didn't use Materialize to style my form and widgets.  Instead, I used simple CSS.

The webpages I scraped were Keurig and Amazon Home pages.
Kerig sells coffee, tea, cocoa in different types of pods, such as K-Carafe, K-Cup, K-Mug, Rivo.
The data I extracted including image of the coffee, the brand, the name, the description, the package size, price and one of the customer reviews.

I scraped Amazon in order to compare prices because I usually can find the best deal on that website.

Future enhancements:

- input product names instead of urls
- extract more data from the website or add video, audio, etc. to my widgets
- compare the prices from multiple websites
- include the prices for different package sizes
- add more features (make the website interactive)
- contruct my website and widgets in different languages
