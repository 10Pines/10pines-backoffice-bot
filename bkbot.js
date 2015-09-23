// Requiring our modules
var slackAPI = require('slackbotapi');
var request = require('request');
var schedule = require('node-schedule');
var sleep = require('sleep');

// Starting
var slack = new slackAPI({
  'token': process.env.SLACK_TOKEN,
  'logging': true
}, function(err) {
  console.log("Problem executing connection with slack: " + err['msg']);
});

var notificationSchedule = {
  hour: 17,
  minute: 0,
  dayOfWeek: [new schedule.Range(1, 5)]
};
//TODO long method. Refactor!
var job = schedule.scheduleJob(notificationSchedule, function(){
  var allUsers = slack.slackData.users;
  var names = [];
  for (aUser in slack.slackData.users) {
    var userName = slack.slackData.users[aUser]['name'];
    if (~userName.indexOf('bot') > -1) { //TODO isBot abstraction missing. Refator!
      names.push(userName);
    };
  };
  for(nameIndex in names) {
    slack.sendPM(names[nameIndex], "No te olvides de cargar las horas de hoy!");
    sleep.usleep(500000);
  };
});
