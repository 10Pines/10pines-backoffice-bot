// Requiring our modules
var slackAPI = require('slackbotapi');
var request = require('request');
var schedule = require('node-schedule');

// Starting
var slack = new slackAPI({
  'token': process.env.SLACK_TOKEN,
  'logging': true
});

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 5)];
rule.hour = 17;
rule.minute = 0;

var job = schedule.scheduleJob(rule, function(){
  var allUsers = slackAPI.slackData.users();
  slack.sendPM("lucas", "Cargá las horas!!!" + allUsers);
});
