/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Allfeeds has a URL defined and not empty',function() {
         
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
           
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Allfeeds has a name defined and not empty',function() {
          
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
           
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. 
         */
        const menu = document.body;
        it('The menu is hidden by default', function () { 
            const isHideMenu = menu.classList.contains('menu-hidden');
            expect(isHideMenu).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations.
          */
        it('The menu changes visibility when clicked', function() {
            const menuICon =document.querySelector('.menu-icon-link');
            //TODO: check if the menu display when clicked
            menuICon.click();
            expect(menu).not.toHaveClass('menu-hidden');
            //TODO: check if the menu hide when clicked again.
            menuICon.click();
            expect(menu).toHaveClass('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0 ,done);
        });
        it(' has at least a single .entry element', function(done) {
            const feed = document.querySelector('.feed .entry').children.length;
            expect(feed).toBeGreaterThan(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let oldFeed , newFeed ;
       
        beforeEach(function(done) {
            loadFeed(3, function() {
              oldFeed = document.querySelector('.feed').innerHTML;
              loadFeed(2, function() {
                newFeed=document.querySelector('.feed').innerHTML;
                done();
              });
            });
        });
      
        it('a new feed is loaded then content actually changes', function() { 
            expect(newFeed).not.toBe(oldFeed);
        });
    });
}());
