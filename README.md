# bdd-test-webdriverio
Boiler plate project that demonstrates tests using webdriver IO

This project shows how can we create tests using webdriver IO version 5 (which is vastly different from using version 4)
It covers 2 crucial concepts,
1) Initializing webdriver io version 5 (wdio.conf.js) with capabilities and then running the tests from the spec
2) Page Object Model of testing, which essentially means to create individual page objects (e.g. login Page) that derive from a
   base Page object. Individual page objects wrap all the selectors and their relevant functionality (click, submit, visibility, etc).
   These Page Objects are then imported in the tests to achiever the test instructions.
   
