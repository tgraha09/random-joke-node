// npm i --save-dev eslint eslint-config-airbnb eslint-plugin-import
//https://github.com/tonethar/IGME-430-Fall-2021/blob/main/hw-notes/HW-random-jokes-plus.md#phase2
const http = require('http');
const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./jsonResponses');
const url = require('url');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// 4 - here's our index page

// 5 - here's our 404 page

/* const randomPage = (val) =>{
    return `<html>
    <head>
      <title>Random Number JSON</title>
    </head>
    <body>
      <h1>Random Number JSON</h1>
      <p> ${getRandomNumberJSON(val)}
      </p>

    </body>
    </html>
    `
} */

// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here

const urlStruct = {
  '/': htmlHandler.getIndexResponse,
  '/random-joke': jsonHandler.getRandomJokesJSON,
  '/random-jokes':jsonHandler.getRandomJokesJSON,
  notFound: htmlHandler.get404Response,
};

// 7 - this is the function that will be called every time a client request comes in
// this time we will look at the `pathname`, and send back the appropriate page
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
  // console.log(request.headers);
  let path = request.url//request.url
  let params = url.parse(path, true)
  let pathname = params.pathname
  console.log(params);
 
  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response);
    //urlStruct['/random-joke'](request, response, params);
  }
};

// 8 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1: ${port}`);
