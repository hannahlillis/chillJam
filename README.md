# chillJam
A javascript bot for entering twitter competitions, built in week 9 of the Makers Academy bootcamp.

### Technologies used
- Express.js
- Node.js
- node-twitter
- HTML/EJS


Testing
- Mocha
- Chai
- Zombie

### To run tests
```
$ git clone git@github.com:Jestfer/chillJam.git
$ cd chillJam
$ npm install
// unit tests //
$ npm test
// feature tests //
$ mocha test/features/index.js
// Twitter api integration test //
$ mocha test/integration/APICall.jss
```

### Approach

- Used Agile methodologies to manage the team.
  - We started with an MVP - a website which would return all competition tweets featuring a certain search term defined by the user.
  - Next we iterated on that model. V2 automatically likes, follows and retweets any tweets returned by the search.
  - Once that was complete we refactored the model to clean the code.
  - We held morning standups in which we assigned pairing partners and divided up the work which needed to be done.
  - We also held a standup at the end of each day, to recap what had happened, plan the path forward, and provide feedback.
  - Lastly, we made use of frequent informal knowledge sharing meetings during the day to ensure that each team member had strong knowledge of the entire codebase.


- As is often the case when learning new technologies, true Test Driven Development can be tricky, however, once the core functionality was in place we worked hard to test it as thoroughly as possible.
- We spent a lot of time learning how to properly test and mock JS promises
- We ended up with a high test coverage so can be confident our code works as intended

__What I would do differently__

If I were to do this project again, I would ensure we fully TDD the product. Our end test coverage is high but unfortunately we didn't always test first and use this to drive the development. This was due to time constraints not only to finish the project, but also to learn how to properly test in a new language. 

### Learnings

- As part of the iteration process, we explored our knowledge of Promises and their functions.
- Working with the Twitter API has been extremely interesting and we have successfully implemented a variety of features using the RESTful routes it provides.
- We set up the express app from scratch with limited experience. The bulk of the infrastructure for the app was in place by the afternoon of the first day.
- We spent some time researching OAuth and the Twitter authentication process. Our initial plan had been to create this functionality ourselves, but following research we found that this was likely beyond the scope of the project.
