#!/usr/bin/node

const request = require('request');
const episodeNumber = process.argv[2];
const requestSettings = {
  method: 'GET',
  url: `https://swapi-api.hbtn.io/api/films/${episodeNumber}`
};

request(requestSettings, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const movieData = JSON.parse(body);
    // console.log(movieData);
    console.log(movieData.title);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
