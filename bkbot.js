// Requiring our modules
var slackAPI = require('slackbotapi');
var request = require('request');
var schedule = require('node-schedule');

// Starting
var slack = new slackAPI({
  'token': process.env.SLACK_TOKEN,
  'logging': true
});

var job = schedule.scheduleJob({hour: 17, minute: 0, dayOfWeek: [new schedule.Range(1, 5)]}, function(){
  var allUsers = slack.slackData.users;
  var names = [];
  for (aUser in slack.slackData.users) {
    var userName = slack.slackData.users[aUser]['name'];
    if (~userName.indexOf('bot') > -1) {
      names.push(userName);
    };
  };
  for(nameIndex in names) {
    slack.sendPM(names[nameIndex], "No te olvides de cargar las horas de hoy!");
  };
});

var j = schedule.scheduleJob({hour: 16, minute: 0, dayOfWeek: [new schedule.Range(1, 5)]}, function(){
  slack.sendPM("lucas", "vivo!");
});
