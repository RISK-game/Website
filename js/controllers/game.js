/**
 * Game page
 */
risk.controller('game', function($scope) {
  console.log("Game!");

  var canvas = document.getElementById("js-game");
  var ctx    = canvas.getContext('2d');

  var img     = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };

  img.src = 'img/map_grey-fixed-size.jpg';
});