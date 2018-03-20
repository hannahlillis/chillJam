const express = require('express')
const util = require('util')
const app = express()

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs')

var Twitter = require('twitter');
var config = require('../config.js');

app.get('/', function (req,res) {
  twitterReq().then(tweets => {
    res.render('index', { tweets: tweets() })
  })
  .catch( reject => { console.log(reject()) })
});

app.listen(3000, () => console.log('Listening on port 3000'))

twitterReq = function() {

  var T = new Twitter(config);

  var params = {
    q: '#giveaway -RT',
    count: 100,
    // result_type: 'recent',
    lang: 'en'
  }

  const prom = new Promise(function(resolve,reject) {
    T.get('search/tweets', params, function(err, data, response) {
        resolve( () => {
          var getTweetText = data.statuses.map(tweet => tweet.text)
          return getTweetText
        });

        reject( () => { return err });
    });
  });

  return prom
};