const jokes = [

  {
    q: '@What did the dog say when he rubbed his tail on the sandpaper?', a: 'Ruff, Ruff!',
  },
  {
    q: "@Why don't sharks like to eat clowns?", a: 'Because they taste funny!',
  },
  {
    q: '@What did the boy cat say to the girl cat?', a: "You're Purr-fect!",
  },
  {
    q: "@What is a frog's favorite outdoor sport?", a: 'Fly Fishing!',
  },
  {
    q: '@I hate jokes about German sausages.', a: 'Theyre the wurst.',
  },
  {
    q: '@Did you hear about the cheese factory that exploded in France?', a: 'There was nothing left but de Brie.',
  },
  {
    q: '@Our wedding was so beautiful ', a: 'Even the cake was in tiers.',
  },
  {
    q: '@Is this pool safe for diving?', a: 'It deep ends.',
  },
  {
    q: '@Dad, can you put my shoes on?', a: 'I dont think theyll fit me.',
  },
  {
    q: '@What lies at the bottom of the ocean and twitches?', a: 'A nervous wreck.',
  },

];

const respond = (request, response, content, type) => {
  response.writeHead(200, { 'Content-Type': type });
  response.write(content);
  response.end();
};

const getRandomJoke = (lim) => {
  let limit = lim;
  limit = Number(limit); // cast as number
  limit = !limit ? 1 : limit;
  limit = limit < 1 ? 1 : limit;
  limit = limit > jokes.length ? jokes.length : limit;
  const arr = [];
  for (let i = 0; i < limit; i += 1) {
    const number = Math.floor(Math.random() * jokes.length);
    const joke = jokes[number];
    arr.push(joke);
  }

  return JSON.stringify(arr);
};
const getXML = (joke) => {
  const { q } = joke;
  const { a } = joke;
  return `<joke>
  <q>${q}</q>
  <a>${a}</a>
  </joke>`;
};

const getRandomJokesJSON = (request, response, params) => {
  const { limit } = params.query;
  const acceptedTypes = request.headers.accept.split(',');
  const randomJokes = getRandomJoke(limit);
  if (acceptedTypes.includes('text/xml')) {
    let jokeXML = '<joke>';
    const jokeParse = JSON.parse(randomJokes);
    jokeParse.forEach((joke) => {
      const xml = getXML(joke);
      jokeXML += xml;
    });
    jokeXML += '</joke>';
    // console.log(jokeXML);

    respond(request, response, jokeXML, 'text/xml');
  } else {
    respond(request, response, randomJokes, 'application/json');
  }
  // console.log(acceptedTypes.length);

  // getTypes(acceptedTypes)

  /* response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(getRandomJoke(limit));
  response.end(); */
  // . console.log(acceptedTypes['text/xml']);
};

module.exports = {
  getRandomJokesJSON,
  getRandomJoke,

};
