//
console.log("Hej!");

// Request to Gameserver, testing if it works
$.getJSON('http://127.0.0.1:3000/', function(r) {
  console.log(r);
});