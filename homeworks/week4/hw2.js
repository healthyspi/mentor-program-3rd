// process.argv
const request = require('request');
const process = require('process');

let path = '';
if (process.argv[2] === 'list') {
  path = '/books?_limit=20';
} else {
  path = '/books/1';
}

request(`https://lidemy-book-store.herokuapp.com${path}`, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});
