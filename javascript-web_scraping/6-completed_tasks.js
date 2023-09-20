#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const requestSettings = {
  method: 'GET',
  url
};

request(requestSettings, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const users = JSON.parse(body);
  // console.log(users);
  let tasksCompleted = {};
  for (const user of users) {
    if (user.completed === true) {
      tasksCompleted[user.userId] = (tasksCompleted[user.userId] || 0) + 1;
    }
  }
  console.log(tasksCompleted);
});
