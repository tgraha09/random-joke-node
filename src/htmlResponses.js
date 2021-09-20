const errorPage = `<html>
<head>
  <title>404 - File Not Found!</title>
</head>
<body>
  <h1>404 - File Not Found!</h1>
  <p> Check your URL, or your typing!!
  </p>
  <p>:-O
  </p>
</body>
</html>
`;

const indexPage = `
<html>
  <head>
    <title>Random Joke Web Service</title>
  </head>
  <body>
    <h1>Random Joke Web Service</h1>
    <p>
      Random Joke Web Service - the endpoint is here --> 
      <a href="/random-joke">random-joke</a> or <a href="/random-jokes?limit=10">random-jokes?limit=10</a>
    </p>
  </body>
</html>`;

const getIndexResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(indexPage);
  response.end();
};

const get404Response = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

module.exports = {
  getIndexResponse,
  get404Response,
};
