const request = require('request');
const process = require('process');

let path = '';
let method = '';
let data = {};

function one() {
  request({
    method,
    uri: `https://lidemy-book-store.herokuapp.com${path}`,
  }, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });
}

function two() {
  request.post(`https://lidemy-book-store.herokuapp.com${path}`, data,
    (error, response, body) => {
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
    });
}

if (process.argv[2] === 'list') {
  path = '/books';
  method = 'get';
  one();
}

if (process.argv[2] === 'read') {
  path = '/books/1';
  method = 'get';
  one();
}

if (process.argv[2] === 'delete') {
  path = '/books/1';
  method = 'DELETE';
  one();
}

if (process.argv[2] === 'create') {
  path = '/books';
  method = 'POST';
  data = { form: { name: 'new name' } };
  two();
}
