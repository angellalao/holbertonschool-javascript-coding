#!/usr/bin/node

const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];
const request = require('request');
const requestSettings = {
  method: 'GET',
  url
};

request(requestSettings, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
