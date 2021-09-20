
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



const getRandomJoke = (lim) => {
  let limit = lim 
  limit = Number(limit) //cast as number
  limit = !limit ? 1 : limit
  limit = limit < 1 ? 1 : limit
  limit = limit > jokes.length ? jokes.length : limit
  let arr = []
  for (let i = 0; i < limit; i++) {
    const number = Math.floor(Math.random() * jokes.length);
    const joke = jokes[number];
    arr.push(joke)
  }
  
  return JSON.stringify(arr);
};
const getRandomJokesJSON = (request, response, params) => {
  
  let limit = params.query.limit
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(getRandomJoke(limit));
  response.end();
};


module.exports = {
  getRandomJokesJSON
};
