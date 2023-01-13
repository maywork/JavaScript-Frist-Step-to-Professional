// Synchronous vs. asynchronous JS

/* 
Synchronous: One thing after another, one thing at a time.
Asynchronous: NOT one thing after another, At a different(often later) time.
-> sometimes we do things that takes a long time, if JS stopped to wait for a long running operation because it's running in the web browser, I wouldn't be able to do anything like clicking on buttons or seeing changes on the page.
-> JavaScript is a single threaded language.
-> When we give JavaScript a task that's gonna take a long time, JavaScript takes the timeout function(any long function) and it sort of adds it to to the (sort of) to-do list of tasks, that it(JS) has somewhere in its internals that it's remembering stuff it still needs to do.
-> JS is gonna get to that task later, at some point.
*/

console.log("This will print first");
setTimeout(() => console.log("This will print third"), 1000);
console.log("This will print second");

/*
Some things that take time:
  - Waiting for user events
  - Asking a user to pick a file
  - Getting permission to access the camera/mic
  - Loading data from the interwebs

TODO:
  - MDN: Introducing Asynchronous JS
  - Philip Roberts: What the heck is the event loop anyway?
*/