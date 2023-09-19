#!/usr/bin/node

const request = require('request');
const requestSettings = {
  method: 'GET',
  url: process.argv[2]
};

request(requestSettings, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(`code: ${response.statusCode}`);
});
