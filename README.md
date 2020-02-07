# Project Name 
Feed Reader Testing

## Project Description

In this project, we write a test suite cases to test the functionality of this web-based application that reads RSS feeds. 


## Testing Framwork

In this web-based application , we use [Jasmine](http://jasmine.github.io/) version 3.3.0 to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How to setup and run the tesing

- The testing suites is built  with [Jasmine](http://jasmine.github.io/) in the browser.
- There is no need to install any extra plugin or framework.
- The Jasmine spec file is called `feedreader.js` which contains all the tests that will be run against the application. 
- The result of the test will show when open the `index.html` page in the browser.


## Test suites

- **RSS Feeds**: a test suite just contains a related set of tests. This suite is all about the RSS feeds definitions, the allFeeds variable in our application. 
- **The menu**: a test that ensures the menu element is hidden by default and ensures the menu changes visibility when the menu icon is clicked.  

- **Initial Entries**: a test that ensures when the`loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

- **New Feed Selection**: a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
  


## Resources
* [Udacity](https://www.udacity.com/)
* [Jasmine](http://jasmine.github.io/) 
