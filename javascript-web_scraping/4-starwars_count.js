#!/usr/bin/node

const request = require('request');
const charId = '18';
const requestSettings = {
  method: 'GET',
  url: `${process.argv[2]}`
};

request(requestSettings, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const movieData = JSON.parse(body).results;
    let count = 0;
    for (const movie of movieData) {
      // console.log(movie.characters);
      for (const charUrl of movie.characters) {
        if (charUrl.includes(`${charId}`)) {
          count = count + 1;
        }
      }
    }
    console.log(count);
    // console.log(movieData);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
