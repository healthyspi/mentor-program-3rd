const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
