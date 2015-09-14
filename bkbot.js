// Requiring our modules
var slackAPI = require('slackbotapi');
var request = require('request');
var schedule = require('node-schedule');

// Starting
var slack = new slackAPI({
    'token': process.env.SLACK_TOKEN,
    'logging': true
});




//var rule = new schedule.RecurrenceRule();
//rule.minute = 42;

// lunes a viernes a las 17hs: '0 0 17 ? * MON,TUE,WED,THU,FRI *'
// cada hora: '0 0 0/1 1/1 * ? *'
// cada 5 mins: '0 0/5 * 1/1 * ? *'
var job = schedule.scheduleJob('0 0/5 * 1/1 * ? *', function(){

    slack.sendPM("lucas", "Saracatunga!!")
    //var allUsers = slackAPI.slackData.users();

});
